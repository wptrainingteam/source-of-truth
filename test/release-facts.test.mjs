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
