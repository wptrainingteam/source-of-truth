import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, existsSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeRelease } from '../scripts/lib/release-io.mjs';
import { findLeaks } from '../scripts/lib/clean.mjs';
import { build } from '../scripts/build.mjs';

const ROOT = fileURLToPath( new URL( '..', import.meta.url ) );

const tiny = ( v, body = 'Some body text.' ) => ( {
	intro: `Intro for ${ v }.\n\nMore intro.`, changelog: '', punted: '',
	sections: [ { title: 'New Blocks', slug: 'new-blocks', tags: [], body: '', items: [
		{ title: `Thing in ${ v }`, slug: 'thing', tags: [ 'end user' ], flags: [], body },
	] } ],
} );
const addRelease = ( repo, v, body ) => writeRelease( join( repo, 'releases', v ), tiny( v, body ), { version: v, title: `WordPress ${ v } Source of Truth`, updated: '2026-10-01' } );

function setup() {
	const repo = mkdtempSync( join( tmpdir(), 'sot-build-' ) );
	cpSync( join( ROOT, 'layouts' ), join( repo, 'layouts' ), { recursive: true } );
	addRelease( repo, '7.1' );
	addRelease( repo, '7.2' );
	return { repo, out: join( repo, 'dist' ) };
}
const BASE = 'https://example.test';
const read = ( p ) => readFileSync( p, 'utf8' );
const versionsIn = ( html ) => [ ...html.match( /<select[\s\S]*?<\/select>/ )[ 0 ].matchAll( /<option value="\/([^"]+)\/"( selected)?>/g ) ].map( ( m ) => m[ 1 ] + ( m[ 2 ] ? '*' : '' ) );

test( 'writes one page per release plus the newest at /', () => {
	const { repo, out } = setup();
	const r = build( repo, out, BASE );
	assert.ok( existsSync( join( out, '7-1/index.html' ) ) );
	assert.ok( existsSync( join( out, '7-2/index.html' ) ) );
	assert.equal( r.pages.length, 3 );
	const index = read( join( out, 'index.html' ) );
	assert.match( index, /Thing in 7\.2/ );
	assert.match( index, /<link rel="canonical" href="https:\/\/example.test\/7-2\/">/ );
	assert.match( index, /<meta property="og:url" content="https:\/\/example.test\/7-2\/">/ );
	assert.match( read( join( out, '7-1/index.html' ) ), /<link rel="canonical" href="https:\/\/example.test\/7-1\/">/ );
} );

test( 'layout assets sit next to every page', () => {
	const { repo, out } = setup();
	build( repo, out, BASE );
	for ( const d of [ '', '7-1', '7-2' ] ) assert.ok( existsSync( join( out, d, 'site.js' ) ), `site.js in /${ d }` );
	assert.match( read( join( out, '7-1/index.html' ) ), /<script src="site.js"/ );
} );

test( 'headers list both versions newest first, current selected', () => {
	const { repo, out } = setup();
	build( repo, out, BASE );
	assert.deepEqual( versionsIn( read( join( out, '7-1/index.html' ) ) ), [ '7-2', '7-1*' ] );
	assert.deepEqual( versionsIn( read( join( out, '7-2/index.html' ) ) ), [ '7-2*', '7-1' ] );
} );

test( 'adding a release only changes the version list on other pages', () => {
	const { repo, out } = setup();
	build( repo, out, BASE );
	const before = read( join( out, '7-1/index.html' ) );
	addRelease( repo, '6.9' );
	build( repo, out, BASE );
	const after = read( join( out, '7-1/index.html' ) );
	assert.notEqual( before, after );
	assert.deepEqual( versionsIn( after ), [ '7-2', '7-1*', '6-9' ] );
	const strip = ( h ) => h.replace( /<select[\s\S]*?<\/select>/, '' ).replace( /<noscript>[\s\S]*?<\/noscript>/, '' );
	assert.equal( strip( after ), strip( before ) );
} );

test( 'a leak makes build throw naming the release and the leak', () => {
	const { repo, out } = setup();
	addRelease( repo, '7.1', 'Check this 🔍 please.' );
	assert.throws( () => build( repo, out, BASE ), ( e ) => /7\.1/.test( e.message ) && e.message.includes( '🔍' ) );
} );

test( 'robots.txt blocks AI training bots, allows the rest and points at the sitemap', () => {
	const { repo, out } = setup();
	build( repo, out, BASE );
	const bots = [ 'GPTBot', 'ClaudeBot', 'Google-Extended', 'CCBot' ];
	const expected = bots.map( ( b ) => `User-agent: ${ b }\nDisallow: /\n` ).join( '\n' ) + '\nUser-agent: *\nAllow: /\n\nSitemap: https://example.test/sitemap.xml\n';
	assert.equal( read( join( out, 'robots.txt' ) ), expected );
} );

test( 'sitemap.xml lists every release page but not /, with lastmod', () => {
	const { repo, out } = setup();
	build( repo, out, BASE );
	const xml = read( join( out, 'sitemap.xml' ) );
	const locs = [ ...xml.matchAll( /<loc>([^<]+)<\/loc>/g ) ].map( ( m ) => m[ 1 ] );
	assert.deepEqual( locs, [ 'https://example.test/7-2/', 'https://example.test/7-1/' ] );
	assert.equal( ( xml.match( /<lastmod>2026-10-01<\/lastmod>/g ) || [] ).length, 2 );
	assert.match( xml, /^<\?xml/ );
} );

test( '404.html has the header with the version select, a message and a link to the newest release, and no leaks', () => {
	const { repo, out } = setup();
	build( repo, out, BASE );
	const html = read( join( out, '404.html' ) );
	assert.deepEqual( versionsIn( html ), [ '7-2*', '7-1' ] );
	assert.match( html, /Page not found/ );
	assert.match( html, /<a href="\/7-2\/">/ );
	assert.match( html, /<title>Page not found/ );
	assert.deepEqual( findLeaks( html ), [] );
} );
