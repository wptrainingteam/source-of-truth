import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseReleaseFacts } from '../scripts/lib/release-facts.mjs';

test( 'parses release date and Gutenberg range', () => {
	const t = 'WordPress 7.1 is scheduled for release on December 8, 2026. It ships Gutenberg plugin versions 22.0 – 22.9 in all.';
	assert.deepEqual( parseReleaseFacts( t ), { releaseDate: 'December 8, 2026', gutenbergRange: '22.0 – 22.9' } );
} );

test( 'leaves absent fields unset', () => {
	assert.deepEqual( parseReleaseFacts( 'Nothing here.' ), {} );
} );

test( 'accepts singular "version" and a range that ends a sentence', () => {
	assert.deepEqual( parseReleaseFacts( 'From the Gutenberg plugin version 22.7 – 23.6 here.' ), { gutenbergRange: '22.7 – 23.6' } );
	assert.deepEqual( parseReleaseFacts( 'Gutenberg plugin versions 22.7 - 22.9.' ), { gutenbergRange: '22.7 - 22.9' } );
} );
