import { test } from 'node:test';
import assert from 'node:assert/strict';
import { stripMarkers, stripComments, findLeaks, parseFlags, slugify, unescapeGoogle } from '../scripts/lib/clean.mjs';

test( 'stripMarkers removes flag emoji and surrounding space', () => {
	assert.equal( stripMarkers( 'Overview 🔍 🎨' ), 'Overview' );
	assert.equal( stripMarkers( '✏️ Month Day' ), 'Month Day' );
	assert.equal( stripMarkers( '**✏️ Month Day**' ), '**Month Day**' );
} );

test( 'stripComments removes plain and Google-escaped comments', () => {
	assert.equal( stripComments( 'a <!-- x\ny --> b' ), 'a  b' );
	assert.equal( stripComments( 'a \\<\\!-- x \\--\\> b' ), 'a  b' );
} );

test( 'stripComments treats Google-autocorrected closers as closers', () => {
	assert.equal( stripComments( 'a <!-- x \u2013> b' ), 'a  b' );
	assert.equal( stripComments( 'a \\<\\!-- x \u2013\\> b' ), 'a  b' );
	assert.equal( stripComments( 'a <!-- x \u2014> b' ), 'a  b' );
	assert.equal( stripComments( 'a <!-- x \u2192 b' ), 'a  b' );
	assert.equal( stripComments( '<!-- x \u2192\n### Next item' ), '\n### Next item' );
	assert.equal( stripComments( '<!-- x \u2013> keep <!-- y --> end' ), ' keep  end' );
} );

test( 'findLeaks reports markers and comments with context', () => {
	assert.deepEqual( findLeaks( '<p>ok</p>' ), [] );
	assert.equal( findLeaks( '<p>New 🙏</p>' ).length, 1 );
	assert.equal( findLeaks( '<!-- note -->' ).length, 1 );
	assert.match( findLeaks( '<p>New 🙏</p>' )[ 0 ], /New 🙏/ );
} );

test( 'parseFlags splits heading text from flag names', () => {
	assert.deepEqual( parseFlags( 'Notes 🏈 🔍' ), { text: 'Notes', flags: [ 'punted', 'check' ] } );
	assert.deepEqual( parseFlags( '**Plain**' ), { text: 'Plain', flags: [] } );
} );

test( 'slugify', () => {
	assert.equal( slugify( 'Admin / Workflow updates' ), 'admin-workflow-updates' );
} );

test( 'unescapeGoogle undoes Google punctuation escapes but keeps \\*', () => {
	assert.equal( unescapeGoogle( 'Hi\\! \\<\\!-- x \\--\\> \\*a\\*' ), 'Hi! <!-- x --> \\*a\\*' );
} );
