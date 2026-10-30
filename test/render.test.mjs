import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { unescapeGoogle, findLeaks } from '../scripts/lib/clean.mjs';
import { split } from '../scripts/lib/split.mjs';
import { renderPage } from '../scripts/lib/render.mjs';
import { renderHeader, versionEntry } from '../scripts/lib/header.mjs';

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
const BASE = 'https://example.test';
const render = ( s = structure(), meta = META ) => renderPage( layout, meta, s, header, BASE );

test( 'one <section class="sot-section"> per section, in order', () => {
	const s = structure();
	const out = render( s );
	const ids = [ ...out.matchAll( /<section class="sot-section[^"]*" id="([^"]+)"/g ) ].map( ( m ) => m[ 1 ] );
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
	assert.ok( ! /id="punted"/.test( render( s ) ) );
	s.punted = '**Real-time collaboration** moves to a feature plugin.';
	const out = render( s );
	assert.match( out, /<section class="sot-card sot-punted" id="punted"/ );
	assert.match( out, /<strong>Real-time collaboration<\/strong> moves to a feature plugin\./ );
} );

test( 'no milestones, no timeline', () => {
	assert.match( render(), /data-sot-timeline/ );
	assert.match( render(), /<li class="sot-milestone" data-date="2026-10-20"><small>Oct 20<\/small><b>Beta 1<\/b><\/li>/ );
	const out = render( structure(), { ...META, milestones: { beta1: '', rc1: '', final: '' } } );
	assert.ok( ! /data-sot-timeline/.test( out ) );
} );

test( 'missing optional facts are skipped, not invented', () => {
	const meta = { ...META, releaseDate: '', gutenbergRange: '', author: { name: '', url: '' } };
	const out = render( structure(), meta );
	assert.ok( ! /Gutenberg/.test( out.match( /<section class="sot-stats"[\s\S]*?<\/section>/ )[ 0 ] ) );
	assert.ok( ! out.includes( 'Written by' ) );
	assert.match( out, /<span class="sot-hero__label">WORDPRESS 7\.2<\/span>/ );
} );

test( 'hero, byline and resources', () => {
	const out = render();
	assert.match( out, /<span class="sot-hero__label">WORDPRESS 7\.2 · SHIPS DECEMBER 8, 2026<\/span>/ );
	assert.match( out, /<span class="sot-hero__headline">WordPress 7\.2 Source of Truth<\/span>/ );
	assert.match( out, /<div class="sot-hero__intro"><p>Welcome to the Source of Truth for WordPress 7\.2!<\/p>/ );
	assert.match( out, /<span>Written by <a href="https:\/\/example.com\/justin">Justin Tadlock<\/a><\/span>\s*<span>Updated October 23, 2026<\/span>\s*<span>\d+ minute read \([\d,]+ words\)<\/span>/ );
	assert.match( out, /href="https:\/\/make.wordpress.org\/core\/7-2\/"/ );
	assert.match( out, /href="https:\/\/make.wordpress.org\/core\/tag\/dev-notes\+7-2\/"/ );
	assert.match( out, /<link rel="canonical" href="https:\/\/example.test\/7-2\/">/ );
	assert.match( out, /<title>WordPress 7\.2 Source of Truth<\/title>/ );
	assert.ok( ! out.includes( 'Originally published' ) );
} );

test( 'released date and published-post credit', () => {
	const meta = { ...META, published: '2026-12-08', source: { type: 'gutenbergtimes', id: '1', url: 'https://gutenbergtimes.com/wordpress-7-2-source-of-truth/' } };
	const out = render( structure(), meta );
	assert.match( out, /WORDPRESS 7\.2 · RELEASED DECEMBER 8, 2026/ );
	assert.match( out, /<a href="https:\/\/gutenbergtimes.com\/wordpress-7-2-source-of-truth\/">Originally published on gutenbergtimes.com ↗<\/a>/ );
	assert.match( out, /class="sot-resources"[\s\S]*href="https:\/\/gutenbergtimes.com\/wordpress-7-2-source-of-truth\/"/ );
} );

test( 'filter has one pill per tag in first-seen order', () => {
	const out = render();
	const pills = [ ...out.matchAll( /<button class="sot-filter" type="button" aria-pressed="false" data-sot-aud="([^"]+)" data-sot-aud-label="[^"]+">/g ) ].map( ( m ) => m[ 1 ] );
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

test( 'picker entries carry the codename from release.json', () => {
	const h = renderHeader( '7.1', [ { version: '7.1', slug: '7-1', entry: versionEntry( '7.1', '7-1', { codename: 'Mary Lou', releaseDate: 'August 19, 2026', published: '2026-08-19' } ) } ] );
	assert.match( h, /"codename":"Mary Lou"/ );
	assert.match( h, /"released":"Aug 19, 2026"/ );
} );

test( 'header lists versions newest first with the current one selected', () => {
	const h = renderHeader( '7.1', [ { version: '7.2', slug: '7-2' }, { version: '7.1', slug: '7-1' } ] );
	assert.match( h, /<select[^>]*aria-label="WordPress version"/ );
	const opts = [ ...h.matchAll( /<option value="\/([^"]+)\/"( selected)?>/g ) ];
	assert.deepEqual( opts.map( ( m ) => [ m[ 1 ], !! m[ 2 ] ] ), [ [ '7-2', false ], [ '7-1', true ] ] );
	assert.match( h, /<noscript>[\s\S]*href="\/7-2\/"[\s\S]*href="\/7-1\/"[\s\S]*<\/noscript>/ );
	assert.match( h, /class="sot-brand__mark"[^>]*>7\.1</ );
	assert.match( h, /setAttribute\('data-sot-version', "7\.1"\)/ );
	assert.match( h, /window\.SOT_VERSIONS = \[\{"version":"7\.2","path":"\/7-2\/"/ );
} );

const mini = () => ( {
	intro: 'Intro text.',
	changelog: '',
	punted: '',
	sections: [
		{ title: 'Admin things', slug: 'admin-things', tags: [ 'site admin', 'end user' ], body: '', items: [
			{ title: 'Plugin hook', slug: 'plugin-hook', tags: [ 'plugin author' ], flags: [], body: 'See [the other one](https://gutenbergtimes.com/wordpress-7-2-source-of-truth/#inherits-tags) and [gone](http://gutenbergtimes.com/wordpress-7-2-source-of-truth#not-here).' },
			{ title: 'Inherits tags', slug: 'inherits-tags', tags: [], flags: [], body: 'Back to [hook](https://gutenbergtimes.com/wordpress-7-2-source-of-truth#plugin-hook) or [suffixed](https://gutenbergtimes.com/wordpress-7-2-source-of-truth/#plugin-hook-plugin-author) or [Mixed](https://gutenbergtimes.com/wordpress-7-2-source-of-truth/#Inherits-Tags) or [elsewhere](https://example.com/page/#plugin-hook).' },
		] },
		{ title: 'Untagged', slug: 'untagged', tags: [], body: '', items: [
			{ title: 'Dev item', slug: 'dev-item', tags: [ 'developer' ], flags: [], body: 'Body.' },
		] },
	],
} );
const POST_META = { ...META, published: '2026-08-12', updated: '2026-09-01', source: { type: 'gutenbergtimes', id: '1', url: 'https://gutenbergtimes.com/wordpress-7-2-source-of-truth/' } };

test( 'published posts show Published and the post modified date, never the import date', () => {
	const out = render( mini(), POST_META );
	assert.match( out, /<span>Written by <a [^>]*>Justin Tadlock<\/a><\/span>\s*<span>Published August 12, 2026<\/span>\s*<span>Updated September 1, 2026<\/span>\s*<span>\d+ minute read/ );
	const same = render( mini(), { ...POST_META, updated: '2026-08-12' } );
	assert.match( same, /<span>Published August 12, 2026<\/span>\s*<span>\d+ minute read/ );
	assert.ok( ! /Updated/.test( same.match( /<p class="sot-meta">[\s\S]*?<\/p>/ )[ 0 ] ) );
} );

test( 'Doc releases keep Updated in the byline', () => {
	const out = render( mini(), META );
	assert.match( out, /<span>Updated October 23, 2026<\/span>/ );
	assert.ok( ! out.includes( 'Published' ) );
} );

test( 'a tagged section matches its own tags and its items tags', () => {
	const out = render( mini(), POST_META );
	assert.match( out, /<section class="sot-section" id="admin-things" data-tags="site admin,end user,plugin author"/ );
	assert.match( out, /<section class="sot-section" id="untagged" data-tags="developer"/ );
} );

test( 'item chips show only the item own tags; inherited tags stay in data-tags', () => {
	const out = render( mini(), POST_META );
	const art = out.match( /<article class="sot-item" id="inherits-tags"[\s\S]*?<\/article>/ )[ 0 ];
	assert.match( art, /data-tags="site admin,end user"/ );
	assert.ok( ! art.includes( 'class="sot-tags"' ) );
	const hook = out.match( /<article class="sot-item" id="plugin-hook"[\s\S]*?<\/article>/ )[ 0 ];
	assert.match( hook, /<p class="sot-tags">\[plugin author\]<\/p>/ );
} );

test( 'section tag chips come after the section heading', () => {
	const out = render( mini(), POST_META );
	assert.match( out, /<section class="sot-section" id="admin-things"[^>]*>\s*<header class="sot-section__head">\s*<p class="sot-section__num">\d+<\/p>\s*<h2>Admin things<\/h2>\s*<p class="sot-tags">\[site admin\] \[end user\]<\/p>/ );
} );

test( 'links to the original post anchors point on-page when the id exists', () => {
	const out = render( mini(), POST_META );
	assert.match( out, /<a href="#inherits-tags">the other one<\/a>/ );
	assert.match( out, /<a href="#plugin-hook">hook<\/a>/ );
	assert.match( out, /<a href="#plugin-hook">suffixed<\/a>/ );
	assert.match( out, /<a href="#inherits-tags">Mixed<\/a>/ );
	assert.match( out, /<a href="http:\/\/gutenbergtimes.com\/wordpress-7-2-source-of-truth#not-here">gone<\/a>/ );
	assert.match( out, /<a href="https:\/\/example.com\/page\/#plugin-hook">elsewhere<\/a>/ );
} );

test( 'head carries absolute canonical and Open Graph tags', () => {
	const out = render();
	const head = out.slice( 0, out.indexOf( '</head>' ) );
	const desc = head.match( /<meta name="description" content="([^"]*)">/ )[ 1 ];
	assert.ok( desc );
	assert.match( head, /<meta property="og:url" content="https:\/\/example.test\/7-2\/">/ );
	assert.match( head, /<meta property="og:title" content="WordPress 7\.2 Source of Truth">/ );
	assert.ok( head.includes( `<meta property="og:description" content="${ desc }">` ) );
	assert.match( head, /<meta property="og:type" content="article">/ );
	assert.match( head, /<meta property="og:site_name" content="WordPress Source of Truth">/ );
	assert.ok( ! head.includes( 'og:image' ) );
	assert.equal( ( out.match( /<h1[ >]/g ) || [] ).length, 1 );
	assert.match( out, /<html lang="en">/ );
} );
