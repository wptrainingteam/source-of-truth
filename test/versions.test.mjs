import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { listReleases, versionSlug } from '../scripts/lib/versions.mjs';

test( 'versionSlug turns dots into dashes', () => {
	assert.equal( versionSlug( '7.2' ), '7-2' );
	assert.equal( versionSlug( '6.10' ), '6-10' );
} );

test( 'listReleases sorts newest first by numeric major then minor and skips dirs without release.json', () => {
	const repo = mkdtempSync( join( tmpdir(), 'sot-versions-' ) );
	for ( const v of [ '6.9', '6.10', '7.0', '7.2', '7.10' ] ) {
		mkdirSync( join( repo, 'releases', v ), { recursive: true } );
		writeFileSync( join( repo, 'releases', v, 'release.json' ), JSON.stringify( { version: v } ) );
	}
	mkdirSync( join( repo, 'releases', '8.0' ), { recursive: true } );
	const list = listReleases( repo );
	assert.deepEqual( list.map( ( r ) => r.version ), [ '7.10', '7.2', '7.0', '6.10', '6.9' ] );
	assert.deepEqual( list[ 0 ], { version: '7.10', slug: '7-10', dir: join( repo, 'releases', '7.10' ) } );
} );

test( 'listReleases returns [] when there is no releases dir', () => {
	assert.deepEqual( listReleases( mkdtempSync( join( tmpdir(), 'sot-versions-' ) ) ), [] );
} );
