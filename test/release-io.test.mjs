import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { writeRelease, readRelease } from '../scripts/lib/release-io.mjs';

const tmp = () => join( mkdtempSync( join( tmpdir(), 'sot-' ) ), '7.2' );
const item = ( title, slug, extra = {} ) => ( { title, slug, tags: [ 'end user', 'site admin' ], flags: [], body: `Body of ${ title }.\n\nSecond para.`, ...extra } );
const structure = () => ( {
	intro: 'Welcome!\n\n## Changelog\n\nNotes.',
	changelog: 'Changed a thing.',
	punted: 'Punted stuff.',
	sections: [
		{ title: 'Priority Items', slug: 'priority-items', tags: [], body: '', items: [ item( 'Alpha: the first', 'alpha-the-first', { flags: [ 'check', 'edit' ] } ), item( 'Beta "quoted"', 'beta' ) ] },
		{ title: 'Admin / Workflow updates', slug: 'admin-workflow-updates', tags: [ 'site admin' ], body: 'Section intro.', items: [ item( 'Gamma', 'custom-slug', { tags: [], body: '' } ) ] },
	],
} );

test( 'round trip', () => {
	const d = tmp();
	writeRelease( d, structure(), { version: '7.2' } );
	assert.deepEqual( readRelease( d ).structure, structure() );
} );

test( 're-import removes dropped items', () => {
	const d = tmp();
	writeRelease( d, structure(), { version: '7.2' } );
	const s = structure();
	s.sections[ 0 ].items.pop();
	writeRelease( d, s, { version: '7.2' } );
	const files = readdirSync( join( d, 'content', '10-priority-items' ) );
	assert.equal( files.length, 2 );
	assert.deepEqual( readRelease( d ).structure, s );
} );

test( 'meta merges into existing release.json', () => {
	const d = tmp();
	mkdirSync( d, { recursive: true } );
	writeFileSync( join( d, 'release.json' ), JSON.stringify( { layout: 'own', author: { name: 'Ryan', url: '' }, updated: 'old' } ) );
	writeRelease( d, structure(), { version: '7.2', updated: 'new', author: { url: 'https://x.test' }, source: { type: 'gdoc' } } );
	const { meta } = readRelease( d );
	assert.equal( meta.layout, 'own' );
	assert.deepEqual( meta.author, { name: 'Ryan', url: 'https://x.test' } );
	assert.equal( meta.updated, 'new' );
	assert.equal( meta.source.type, 'gdoc' );
	assert.equal( meta.version, '7.2' );
} );

test( 'layout directory survives re-import', () => {
	const d = tmp();
	mkdirSync( join( d, 'layout' ), { recursive: true } );
	writeFileSync( join( d, 'layout', 'x.html' ), 'hi' );
	writeRelease( d, structure(), {} );
	writeRelease( d, structure(), {} );
	assert.equal( readFileSync( join( d, 'layout', 'x.html' ), 'utf8' ), 'hi' );
} );

test( 'empty changelog and punted write no file', () => {
	const d = tmp();
	const s = { ...structure(), changelog: '', punted: '' };
	writeRelease( d, s, {} );
	assert.equal( existsSync( join( d, 'content', 'changelog.md' ) ), false );
	assert.equal( existsSync( join( d, 'content', 'punted.md' ) ), false );
	const r = readRelease( d ).structure;
	assert.equal( r.changelog, '' );
	assert.equal( r.punted, '' );
} );

test( 'order round-trips past the 10th section and 100th item', () => {
	const d = tmp();
	const s = structure();
	s.sections = Array.from( { length: 12 }, ( _, i ) => ( {
		title: `Section ${ i }`, slug: `section-${ i }`, tags: [], body: '',
		items: Array.from( { length: i === 11 ? 101 : 12 }, ( _, j ) => item( `Item ${ j }`, `item-${ j }` ) ),
	} ) );
	writeRelease( d, s, {} );
	assert.deepEqual( readRelease( d ).structure, s );
} );

test( 'missing frontmatter throws an error naming the file; CRLF is accepted', () => {
	const d = tmp();
	writeRelease( d, structure(), {} );
	const f = join( d, 'content', '10-priority-items', '010-alpha-the-first.md' );
	const text = readFileSync( f, 'utf8' );
	writeFileSync( f, text.replace( /\n/g, '\r\n' ) );
	assert.deepEqual( readRelease( d ).structure, structure() );
	writeFileSync( f, 'no frontmatter here' );
	assert.throws( () => readRelease( d ), /010-alpha-the-first\.md/ );
} );
