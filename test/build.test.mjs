import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, existsSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeRelease } from '../scripts/lib/release-io.mjs';
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
const read = ( p ) => readFileSync( p, 'utf8' );
const versionsIn = ( html ) => [ ...html.match( /<select[\s\S]*?<\/select>/ )[ 0 ].matchAll( /<option value="\/([^"]+)\/"( selected)?>/g ) ].map( ( m ) => m[ 1 ] + ( m[ 2 ] ? '*' : '' ) );

test( 'writes one page per release plus the newest at /', () => {
	const { repo, out } = setup();
	const r = build( repo, out );
	assert.ok( existsSync( join( out, '7-1/index.html' ) ) );
	assert.ok( existsSync( join( out, '7-2/index.html' ) ) );
	assert.equal( r.pages.length, 3 );
	const index = read( join( out, 'index.html' ) );
	assert.match( index, /Thing in 7\.2/ );
	assert.match( index, /<link rel="canonical" href="\/7-2\/">/ );
} );

test( 'layout assets sit next to every page', () => {
	const { repo, out } = setup();
	build( repo, out );
	for ( const d of [ '', '7-1', '7-2' ] ) assert.ok( existsSync( join( out, d, 'site.js' ) ), `site.js in /${ d }` );
	assert.match( read( join( out, '7-1/index.html' ) ), /<script src="site.js"/ );
} );

test( 'headers list both versions newest first, current selected', () => {
	const { repo, out } = setup();
	build( repo, out );
	assert.deepEqual( versionsIn( read( join( out, '7-1/index.html' ) ) ), [ '7-2', '7-1*' ] );
	assert.deepEqual( versionsIn( read( join( out, '7-2/index.html' ) ) ), [ '7-2*', '7-1' ] );
} );

test( 'adding a release only changes the version list on other pages', () => {
	const { repo, out } = setup();
	build( repo, out );
	const before = read( join( out, '7-1/index.html' ) );
	addRelease( repo, '6.9' );
	build( repo, out );
	const after = read( join( out, '7-1/index.html' ) );
	assert.notEqual( before, after );
	assert.deepEqual( versionsIn( after ), [ '7-2', '7-1*', '6-9' ] );
	const strip = ( h ) => h.replace( /<select[\s\S]*?<\/select>/, '' ).replace( /<noscript>[\s\S]*?<\/noscript>/, '' );
	assert.equal( strip( after ), strip( before ) );
} );

test( 'a leak makes build throw naming the release and the leak', () => {
	const { repo, out } = setup();
	addRelease( repo, '7.1', 'Check this 🔍 please.' );
	assert.throws( () => build( repo, out ), ( e ) => /7\.1/.test( e.message ) && e.message.includes( '🔍' ) );
} );
