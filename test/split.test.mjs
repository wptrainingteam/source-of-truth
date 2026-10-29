import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { split } from '../scripts/lib/split.mjs';
import { findLeaks, unescapeGoogle } from '../scripts/lib/clean.mjs';

const raw = unescapeGoogle( readFileSync( new URL( './fixtures/doc-72.md', import.meta.url ), 'utf8' ) ).split( '\n' );
const start = raw.findIndex( ( l ) => l === '# WordPress 7.2 Source of Truth' );
const end = raw.findIndex( ( l ) => l.startsWith( '# **Notes**' ) );
const s = split( raw.slice( start, end ).join( '\n' ) );

test( 'sections are the tagged content H2s in order', () => {
	assert.deepEqual( s.sections.map( ( x ) => x.title ), [
		'Priority Items for WordPress 7.2', 'New Blocks', 'Improved Blocks and Block handling',
		'Editor enhancements', 'Admin / Workflow updates', 'Developer Goodies',
	] );
	assert.equal( s.sections[ 4 ].slug, 'admin-workflow-updates' );
	assert.equal( s.punted, '' );
} );

test( 'intro carries the welcome and overview, not guidelines or tags legend', () => {
	assert.match( s.intro, /Welcome to the Source of Truth for WordPress 7\.2!/ );
	assert.match( s.intro, /fresh starting point with Ipsum/ );
	assert.doesNotMatch( s.intro, /Try not to just copy and paste/ );
	assert.doesNotMatch( s.intro, /Tags/ );
	assert.doesNotMatch( s.intro, /Resources/ );
	assert.doesNotMatch( s.intro, /Google Drive folder/ );
} );

test( 'changelog is captured', () => {
	assert.match( s.changelog, /First edition/ );
	assert.doesNotMatch( s.changelog, /^##/m );
} );

test( 'items have bodies and tags, tag line not in body', () => {
	const items = s.sections.flatMap( ( x ) => x.items );
	assert.ok( items.length > 20 );
	for ( const i of items ) {
		assert.ok( i.body.length > 0, i.title );
		assert.doesNotMatch( i.body, /^==\[/m );
	}
	const ipsum = items.find( ( i ) => i.title.startsWith( 'Ipsum' ) );
	assert.deepEqual( ipsum.tags, [ 'all', 'theme builder' ] );
	assert.deepEqual( s.sections[ 5 ].tags, [ 'developer', 'theme builder', 'plugin author', 'enterprise' ] );
} );

test( 'H4s stay inside their H3 item', () => {
	const gs = s.sections[ 5 ].items.find( ( i ) => i.title === 'Global Styles and theme.json' );
	assert.match( gs.body, /^#### Text shadow block support and presets$/m );
} );

test( 'trailing hr and thank-you line are dropped', () => {
	const last = s.sections[ 5 ].items.at( -1 );
	assert.equal( last.title, 'NO_BACKSLASH_ESCAPES SQL mode turned off' );
	assert.doesNotMatch( last.body, /all the dev notes/ );
	assert.doesNotMatch( last.body, /---\s*$/ );
} );

test( 'no markers or comments leak', () => {
	assert.deepEqual( findLeaks( JSON.stringify( s ) ), [] );
} );

test( 'flags stay on item headings, minus markers', () => {
	const md = '# T\n\n## Sec\n\n### Real-time collaboration 🏈 🔍\n\n==[developer]==\n\nBody 🙏 text.\n';
	const { sections } = split( md );
	assert.deepEqual( sections[ 0 ].items[ 0 ].flags, [ 'punted', 'check' ] );
	assert.equal( sections[ 0 ].items[ 0 ].title, 'Real-time collaboration' );
	assert.equal( sections[ 0 ].items[ 0 ].body, 'Body text.' );
} );

test( 'bare tag line (published posts) is read as tags', () => {
	const { sections } = split( '## S\n\n### Item\n\n[developer] [plugin author]\n\nText\n' );
	assert.deepEqual( sections[ 0 ].items[ 0 ].tags, [ 'developer', 'plugin author' ] );
	assert.equal( sections[ 0 ].items[ 0 ].body, 'Text' );
} );

test( '6.9 style: no tag lines, items split on H3', () => {
	const md = '# WordPress 6.9\n\nIntro line.\n\n## Command Palette everywhere\n\nLead.\n\n### One\n\nA\n\n### Two\n\nB\n\n## Other\n\n### Three\n\nC\n';
	const r = split( md );
	assert.equal( r.intro, 'Intro line.' );
	assert.deepEqual( r.sections.map( ( x ) => x.title ), [ 'Command Palette everywhere', 'Other' ] );
	assert.equal( r.sections[ 0 ].body, 'Lead.' );
	assert.deepEqual( r.sections[ 0 ].items.map( ( i ) => i.title ), [ 'One', 'Two' ] );
	assert.deepEqual( r.sections[ 0 ].items[ 0 ].tags, [] );
} );

test( 'closing hr and thank-you are trimmed from the last section even when Changelog is the last H2', () => {
	const md = '## Sec\n\n### Item\n\nBody\n\n---\n\nThanks all.\n\n## Changelog\n\nFirst edition.\n';
	const r = split( md );
	assert.equal( r.sections[ 0 ].items[ 0 ].body, 'Body' );
	assert.equal( r.changelog, 'First edition.' );
} );

test( 'multi-line comments containing structure are not parsed', () => {
	const md = '## Sec\n\n### Item\n\nBody\n\n<!--\n## Fake\n### Fake item\n==[x]==\n---\n-->\n\nMore\n';
	const r = split( md );
	assert.deepEqual( r.sections.map( ( x ) => x.title ), [ 'Sec' ] );
	assert.deepEqual( r.sections[ 0 ].items.map( ( i ) => i.title ), [ 'Item' ] );
	assert.deepEqual( r.sections[ 0 ].items[ 0 ].tags, [] );
	assert.equal( r.sections[ 0 ].items[ 0 ].body, 'Body\n\nMore' );
} );

test( 'comments in headings do not leak into titles or slugs', () => {
	const r = split( '## Sec <!-- x -->\n\n### Foo <!-- todo -->\n\nB\n' );
	assert.equal( r.sections[ 0 ].title, 'Sec' );
	assert.equal( r.sections[ 0 ].items[ 0 ].title, 'Foo' );
	assert.equal( r.sections[ 0 ].items[ 0 ].slug, 'foo' );
} );

test( 'only "important note" and an exact "guidelines" title are dropped', () => {
	const r = split( '## Guidelines\n\nx\n\n## Important note/guidelines\n\ny\n\n## Block guidelines for themes\n\n### I\n\nz\n' );
	assert.deepEqual( r.sections.map( ( x ) => x.title ), [ 'Block guidelines for themes' ] );
} );

test( 'published posts: trailing [tags] in H2 and H3 headings become tags, not title text', () => {
	const md = '## Theme.json and Global Styles [developers][enterprise] \n\n### Sticky Positioning, like Headers [end user] [theme author]\n\nBody\n\n### Item with link [text](https://x.test) and tag [site admin]\n\nB\n\n### Own line wins too\n\n[all]\n\nC\n';
	const { sections } = split( md );
	assert.equal( sections[ 0 ].title, 'Theme.json and Global Styles' );
	assert.equal( sections[ 0 ].slug, 'theme-json-and-global-styles' );
	assert.deepEqual( sections[ 0 ].tags, [ 'developers', 'enterprise' ] );
	assert.equal( sections[ 0 ].items[ 0 ].title, 'Sticky Positioning, like Headers' );
	assert.deepEqual( sections[ 0 ].items[ 0 ].tags, [ 'end user', 'theme author' ] );
	assert.equal( sections[ 0 ].items[ 1 ].title, 'Item with link [text](https://x.test) and tag' );
	assert.deepEqual( sections[ 0 ].items[ 1 ].tags, [ 'site admin' ] );
	assert.deepEqual( sections[ 0 ].items[ 2 ].tags, [ 'all' ] );
} );
