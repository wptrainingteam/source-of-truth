import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { importDoc } from '../scripts/import-doc.mjs';

const fixture = readFileSync( new URL( './fixtures/doc-72.md', import.meta.url ), 'utf8' );
const signin = readFileSync( new URL( './fixtures/signin.html', import.meta.url ), 'utf8' );
const tmp = () => mkdtempSync( join( tmpdir(), 'sot-import-' ) );
const walk = ( d ) => readdirSync( d ).flatMap( ( f ) => ( statSync( join( d, f ) ).isDirectory() ? walk( join( d, f ) ) : [ join( d, f ) ] ) );

test( 'imports the fixture into releases/7.2 with parsed metadata', () => {
	const repo = tmp();
	const r = importDoc( fixture, { repo, docId: 'abc', docUrl: 'https://docs.google.com/document/d/abc/edit' } );
	assert.equal( r.version, '7.2' );
	assert.equal( r.sections, 6 );
	assert.ok( r.items > 0 );
	assert.equal( typeof r.hiddenPunted, 'number' );
	const meta = JSON.parse( readFileSync( join( repo, 'releases/7.2/release.json' ), 'utf8' ) );
	assert.equal( meta.version, '7.2' );
	assert.equal( meta.title, 'WordPress 7.2 Source of Truth' );
	assert.match( meta.updated, /^\d{4}-\d{2}-\d{2}$/ );
	assert.deepEqual( meta.source, { type: 'gdoc', id: 'abc', url: 'https://docs.google.com/document/d/abc/edit' } );
	assert.match( meta.gutenbergRange, /^[\d.]+\s*[–-]\s*[\d.]+$/ );
	assert.ok( meta.releaseDate );
	assert.deepEqual( meta.milestones, { beta1: '2026-10-20', rc1: '2026-11-17', final: '2026-12-08' } );
} );

test( 'source defaults to empty id and url', () => {
	const repo = tmp();
	importDoc( fixture, { repo } );
	const meta = JSON.parse( readFileSync( join( repo, 'releases/7.2/release.json' ), 'utf8' ) );
	assert.deepEqual( meta.source, { type: 'gdoc', id: '', url: '' } );
} );

test( 'Notes and Backlog content is not written anywhere', () => {
	const repo = tmp();
	importDoc( fixture, { repo } );
	const files = walk( repo );
	assert.ok( files.length > 0 );
	for ( const f of files ) assert.doesNotMatch( readFileSync( f, 'utf8' ), /Priority item candidates/ );
	assert.ok( ! existsSync( join( repo, 'notes' ) ) );
	assert.ok( ! existsSync( join( repo, '7.2' ) ) );
	assert.deepEqual( readdirSync( repo ), [ 'releases' ] );
} );

test( 'punted.md holds the text under the Punted H1', () => {
	const repo = tmp();
	const doc = fixture.replace( '# **Punted from 7.2**\n', '# **Punted from 7.2**\n\nMoved to 7.3: Shiny thing\n' );
	importDoc( doc, { repo } );
	assert.equal( readFileSync( join( repo, 'releases/7.2/content/punted.md' ), 'utf8' ).trim(), 'Moved to 7.3: Shiny thing' );
} );

test( 'hiddenPunted counts items flagged punted', () => {
	const repo = tmp();
	const doc = fixture.replace( '### Ipsum, the new default theme', '### Ipsum, the new default theme 🏈' );
	const base = importDoc( fixture, { repo: tmp() } );
	const r = importDoc( doc, { repo } );
	assert.equal( r.hiddenPunted, base.hiddenPunted + 1 );
} );

test( 'rejects a Google sign-in page', () => {
	assert.throws( () => importDoc( signin, { repo: tmp() } ), ( e ) => e instanceof Error && /sign-in page/.test( e.message ) && /File > Download > Markdown/.test( e.message ) );
	assert.throws( () => importDoc( '<html><body>x</body></html>', { repo: tmp() } ), /sign-in page/ );
} );

test( 'rejects a single-tab export with no Source of Truth H1', () => {
	assert.throws( () => importDoc( '# **Notes**\n\nstuff\n', { repo: tmp() } ), /tabs/ );
} );

test( 'punted text is stripped of markers and comments', () => {
	const repo = tmp();
	const doc = fixture.replace( '# **Punted from 7.2**\n', '# **Punted from 7.2**\n\nReal-time collaboration 🏈 <!-- check -->\n' );
	importDoc( doc, { repo } );
	const t = readFileSync( join( repo, 'releases/7.2/content/punted.md' ), 'utf8' );
	assert.match( t, /Real-time collaboration/ );
	assert.doesNotMatch( t, /🏈|<!--/ );
} );

test( 'an empty Punted tab writes no punted.md', () => {
	const repo = tmp();
	importDoc( fixture, { repo } );
	assert.ok( ! existsSync( join( repo, 'releases/7.2/content/punted.md' ) ) );
} );

test( 'milestones come only from the Notes tab', () => {
	const repo = tmp();
	const doc = fixture.replace( '# **Notes**', '| Final | January 5 |\n\n# **Notes**' );
	importDoc( doc, { repo } );
	const meta = JSON.parse( readFileSync( join( repo, 'releases/7.2/release.json' ), 'utf8' ) );
	assert.equal( meta.milestones.final, '2026-12-08' );
} );
