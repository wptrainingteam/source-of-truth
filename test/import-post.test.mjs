import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { importPost, htmlToMarkdown } from '../scripts/migrate/import-post.mjs';
import { readRelease } from '../scripts/lib/release-io.mjs';

const post = JSON.parse( readFileSync( new URL( './fixtures/post-sample.json', import.meta.url ), 'utf8' ) );
const URL_GT = 'https://gutenbergtimes.com/wordpress-7-1-source-of-truth/';
const tmp = () => mkdtempSync( join( tmpdir(), 'sot-post-' ) );
const author = { authorName: 'Birgit Pauli-Haack', authorUrl: 'https://gutenbergtimes.com/author/bph/' };

test( 'htmlToMarkdown makes relative image src absolute', () => {
	const md = htmlToMarkdown( '<p><img src="/wp-content/a.png" alt="A"></p>', URL_GT );
	assert.match( md, /https:\/\/gutenbergtimes\.com\/wp-content\/a\.png/ );
} );

test( 'htmlToMarkdown keeps iframe and kbd as raw HTML, code as backticks', () => {
	const md = htmlToMarkdown( '<p>Press <kbd>Tab</kbd> and <code>x()</code></p><iframe src="https://youtube.com/embed/1"></iframe>', URL_GT );
	assert.ok( md.includes( '<kbd>Tab</kbd>' ) );
	assert.ok( md.includes( '`x()`' ) );
	assert.ok( md.includes( '<iframe src="https://youtube.com/embed/1"></iframe>' ) );
} );

test( 'htmlToMarkdown emits atx headings and unescaped bare tag lines', () => {
	const md = htmlToMarkdown( '<h2 class="wp-block-heading" id="x">Hi</h2><p>[end user] [site admin]</p>', URL_GT );
	assert.match( md, /^## Hi$/m );
	assert.match( md, /^\[end user\] \[site admin\]$/m );
} );

test( 'htmlToMarkdown unbolds tag lines as published posts write them', () => {
	const md = htmlToMarkdown( '<p><strong>[developer][site admin]</strong></p><p><strong>[<strong>all</strong>]</strong></p>', URL_GT );
	assert.match( md, /^\[developer\] \[site admin\]$/m );
	assert.match( md, /^\[all\]$/m );
} );

test( 'importPost writes releases/<version> from the fixture', () => {
	const repo = tmp();
	const r = importPost( post, { repo, url: URL_GT, ...author } );
	assert.equal( r.version, '7.1' );
	assert.equal( r.sections, 1 );
	assert.equal( r.items, 2 );
	const { meta, structure } = readRelease( join( repo, 'releases/7.1' ) );
	assert.equal( meta.title, 'WordPress 7.1 Source of Truth' );
	assert.equal( meta.published, '2026-10-20' );
	assert.match( meta.updated, /^\d{4}-\d{2}-\d{2}$/ );
	assert.deepEqual( meta.author, { name: 'Birgit Pauli-Haack', url: 'https://gutenbergtimes.com/author/bph/' } );
	assert.deepEqual( meta.source, { type: 'gutenbergtimes', id: '4242', url: URL_GT } );
	assert.deepEqual( structure.sections.map( ( s ) => s.title ), [ 'Command Palette everywhere' ] );
	assert.deepEqual( structure.sections[ 0 ].tags, [ 'end user', 'site admin' ] );
	assert.deepEqual( structure.sections[ 0 ].items.map( ( i ) => i.title ), [ 'Palette in the Site Editor', 'Palette commands API' ] );
	assert.deepEqual( structure.sections[ 0 ].items[ 0 ].tags, [ 'end user' ] );
	assert.ok( structure.sections[ 0 ].items[ 0 ].body.includes( 'https://gutenbergtimes.com/wp-content/uploads/2026/10/palette.png' ) );
	assert.ok( structure.sections[ 0 ].items[ 1 ].body.includes( '<iframe' ) );
	assert.ok( structure.intro.includes( '<kbd>Tab</kbd>' ) );
} );

test( 'importPost uses nomadblog for nomad.blog URLs', () => {
	const repo = tmp();
	const p = { ...post, title: { rendered: 'WordPress 6.2 Source of Truth' } };
	importPost( p, { repo, url: 'https://nomad.blog/wordpress-6-2-source-of-truth/', authorName: '', authorUrl: '' } );
	const { meta } = readRelease( join( repo, 'releases/6.2' ) );
	assert.equal( meta.source.type, 'nomadblog' );
	assert.deepEqual( meta.author, { name: '', url: '' } );
} );

test( 'importPost throws when the title has no version', () => {
	assert.throws( () => importPost( { ...post, title: { rendered: 'Hello' } }, { repo: tmp(), url: URL_GT, ...author } ), /version/i );
} );
