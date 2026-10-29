import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { unescapeGoogle, findLeaks } from '../scripts/lib/clean.mjs';
import { split } from '../scripts/lib/split.mjs';
import { renderPage } from '../scripts/lib/render.mjs';
import { renderHeader } from '../scripts/lib/header.mjs';

const layout = readFileSync( new URL( '../layouts/generic/layout.html', import.meta.url ), 'utf8' );
const raw = unescapeGoogle( readFileSync( new URL( './fixtures/doc-72.md', import.meta.url ), 'utf8' ) ).replace( /\r\n/g, '\n' );
const post = raw.slice( raw.indexOf( '# WordPress 7.2 Source of Truth' ), raw.indexOf( '# **Notes**' ) );

const META = {
	version: '7.2', title: 'WordPress 7.2 Source of Truth', releaseDate: 'December 8, 2026', gutenbergRange: '23.7 – 24.2',
	author: { name: 'Justin Tadlock', url: 'https://example.com/justin' }, published: '', updated: '2026-10-23',
	source: { type: 'gdoc', id: '', url: '' }, layout: 'generic',
	milestones: { beta1: '2026-10-20', rc1: '2026-11-17', final: '2026-12-08' },
};
const structure = () => split( post );
const header = renderHeader( '7.2', [ { version: '7.2', slug: '7-2' }, { version: '7.1', slug: '7-1' } ] );
const render = ( s = structure(), meta = META ) => renderPage( layout, meta, s, header );

test( 'one <section class="section"> per section, in order', () => {
	const s = structure();
	const out = render( s );
	const ids = [ ...out.matchAll( /<section class="section" id="([^"]+)"/g ) ].map( ( m ) => m[ 1 ] );
	assert.deepEqual( ids, s.sections.map( ( x ) => x.slug ) );
} );

test( 'every article has id, data-tags and data-title', () => {
	const out = render();
	const articles = [ ...out.matchAll( /<article\b[^>]*>/g ) ].map( ( m ) => m[ 0 ] );
	assert.ok( articles.length > 10 );
	for ( const a of articles ) {
		assert.match( a, /\bid="[^"]+"/ );
		assert.match( a, /\bdata-tags="[^"]*"/ );
		assert.match( a, /\bdata-title="[^"]+"/ );
	}
} );

test( 'untagged items use their section tags', () => {
	const out = render();
	assert.match( out, /<article [^>]*data-tags="developer,theme builder,plugin author,enterprise" data-title="Interactivity API"/ );
} );

test( 'items flagged punted are skipped', () => {
	const s = structure();
	s.sections[ 1 ].items.push( { title: 'Zebra Puntable Gizmo', slug: 'zebra-puntable-gizmo', tags: [ 'all' ], flags: [ 'punted' ], body: 'Zebra body text.' } );
	const out = render( s );
	assert.ok( ! out.includes( 'Zebra Puntable Gizmo' ) );
	assert.ok( ! out.includes( 'Zebra body text' ) );
} );

test( 'punted block only when structure.punted has text', () => {
	const s = structure();
	s.punted = '';
	assert.ok( ! /class="punted"/.test( render( s ) ) );
	s.punted = '**Real-time collaboration** moves to a feature plugin.';
	const out = render( s );
	assert.match( out, /class="punted"/ );
	assert.match( out, /<strong>Real-time collaboration<\/strong> moves to a feature plugin\./ );
} );

test( 'no milestones, no timeline', () => {
	assert.match( render(), /class="timeline"/ );
	const out = render( structure(), { ...META, milestones: { beta1: '', rc1: '', final: '' } } );
	assert.ok( ! /class="timeline"/.test( out ) );
} );

test( 'missing optional facts are skipped, not invented', () => {
	const meta = { ...META, releaseDate: '', gutenbergRange: '', author: { name: '', url: '' } };
	const out = render( structure(), meta );
	assert.ok( ! /Gutenberg/.test( out.match( /<section class="stats"[\s\S]*?<\/section>/ )[ 0 ] ) );
	assert.ok( ! out.includes( 'Written by' ) );
	assert.match( out, /<p class="eyebrow">WORDPRESS 7\.2<\/p>/ );
} );

test( 'hero, byline and resources', () => {
	const out = render();
	assert.match( out, /<p class="eyebrow">WORDPRESS 7\.2 · SHIPS DECEMBER 8, 2026<\/p>/ );
	assert.match( out, /<h1>WordPress 7\.2 Source of Truth<\/h1>/ );
	assert.match( out, /<p class="intro">Welcome to the Source of Truth for WordPress 7\.2!<\/p>/ );
	assert.match( out, /Written by <a href="https:\/\/example.com\/justin">Justin Tadlock<\/a> · Updated October 23, 2026 · \d+ minute read \([\d,]+ words\)/ );
	assert.match( out, /href="https:\/\/make.wordpress.org\/core\/7-2\/"/ );
	assert.match( out, /href="https:\/\/make.wordpress.org\/core\/tag\/dev-notes\+7-2\/"/ );
	assert.match( out, /<link rel="canonical" href="\/7-2\/">/ );
	assert.match( out, /<title>WordPress 7\.2 Source of Truth<\/title>/ );
	assert.ok( ! out.includes( 'Originally published' ) );
} );

test( 'released date and published-post credit', () => {
	const meta = { ...META, published: '2026-12-08', source: { type: 'gutenbergtimes', id: '1', url: 'https://gutenbergtimes.com/wordpress-7-2-source-of-truth/' } };
	const out = render( structure(), meta );
	assert.match( out, /WORDPRESS 7\.2 · RELEASED DECEMBER 8, 2026/ );
	assert.match( out, /<a href="https:\/\/gutenbergtimes.com\/wordpress-7-2-source-of-truth\/">Originally published on gutenbergtimes.com ↗<\/a>/ );
	assert.match( out, /class="resources"[\s\S]*href="https:\/\/gutenbergtimes.com\/wordpress-7-2-source-of-truth\/"/ );
} );

test( 'filter has one pill per tag in first-seen order', () => {
	const out = render();
	const pills = [ ...out.matchAll( /<button class="pill" type="button" aria-pressed="false" data-aud="([^"]+)">/g ) ].map( ( m ) => m[ 1 ] );
	assert.deepEqual( pills.slice( 0, 3 ), [ 'all', 'theme builder', 'end user' ] );
	assert.equal( new Set( pills ).size, pills.length );
	assert.ok( pills.includes( 'developer' ) );
} );

test( 'no slot comment remains and nothing leaks', () => {
	const s = structure();
	s.punted = 'Something punted.';
	const out = render( s );
	assert.ok( ! out.includes( '<!-- sot:' ) );
	assert.deepEqual( findLeaks( out ), [] );
} );

test( 'a layout without the sections slot throws naming it', () => {
	assert.throws( () => renderPage( layout.replace( '<!-- sot:sections -->', '' ), META, structure(), header ), ( e ) => e instanceof Error && /sot:sections/.test( e.message ) );
} );

test( 'header lists versions newest first with the current one selected', () => {
	const h = renderHeader( '7.1', [ { version: '7.2', slug: '7-2' }, { version: '7.1', slug: '7-1' } ] );
	assert.match( h, /<select[^>]*aria-label="WordPress version"/ );
	const opts = [ ...h.matchAll( /<option value="\/([^"]+)\/"( selected)?>/g ) ];
	assert.deepEqual( opts.map( ( m ) => [ m[ 1 ], !! m[ 2 ] ] ), [ [ '7-2', false ], [ '7-1', true ] ] );
	assert.match( h, /<noscript>[\s\S]*href="\/7-2\/"[\s\S]*href="\/7-1\/"[\s\S]*<\/noscript>/ );
	assert.match( h, /class="brand-mark"[^>]*>7\.1</ );
} );
