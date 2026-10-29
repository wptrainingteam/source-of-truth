// Lists the releases in a repo, newest first.
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export const versionSlug = ( version ) => version.replace( /\./g, '-' );

const parts = ( v ) => v.split( '.' ).map( ( n ) => parseInt( n, 10 ) );

export function listReleases( repo ) {
	const root = join( repo, 'releases' );
	if ( ! existsSync( root ) ) return [];
	return readdirSync( root, { withFileTypes: true } )
		.filter( ( e ) => e.isDirectory() && /^\d+\.\d+$/.test( e.name ) && existsSync( join( root, e.name, 'release.json' ) ) )
		.map( ( e ) => ( { version: e.name, slug: versionSlug( e.name ), dir: join( root, e.name ) } ) )
		.sort( ( a, b ) => {
			const [ am, an ] = parts( a.version );
			const [ bm, bn ] = parts( b.version );
			return bm - am || bn - an;
		} );
}
