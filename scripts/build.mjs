#!/usr/bin/env node
// Builds every release in releases/ into one static site: /<major>-<minor>/ per release, the newest also at /.
//
//   node scripts/build.mjs
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { listReleases } from './lib/versions.mjs';
import { readRelease } from './lib/release-io.mjs';
import { renderPage } from './lib/render.mjs';
import { renderHeader } from './lib/header.mjs';
import { findLeaks } from './lib/clean.mjs';

const REPO = resolve( fileURLToPath( new URL( '..', import.meta.url ) ) );

const layoutDir = ( repo, dir, meta ) => ( meta.layout === 'own' ? join( dir, 'layout' ) : join( repo, 'layouts', meta.layout || 'generic' ) );
const assets = ( dir ) => readdirSync( dir ).filter( ( f ) => /\.(js|css)$/.test( f ) );

export function build( repo = REPO, outDir = join( repo, 'dist' ) ) {
	const releases = listReleases( repo );
	const all = releases.map( ( { version, slug } ) => ( { version, slug } ) );

	// Render and check every page before writing anything.
	const rendered = releases.map( ( r ) => {
		const { meta, structure } = readRelease( r.dir );
		const lDir = layoutDir( repo, r.dir, meta );
		const file = join( lDir, 'layout.html' );
		if ( ! existsSync( file ) ) throw new Error( `Release ${ r.version }: no layout at ${ file }` );
		let html;
		try {
			html = renderPage( readFileSync( file, 'utf8' ), { ...meta, version: r.version }, structure, renderHeader( r.version, all ) );
		} catch ( e ) {
			throw new Error( `Release ${ r.version }: ${ e.message }` );
		}
		const leaks = findLeaks( html );
		if ( leaks.length ) {
			throw new Error( `Release ${ r.version }: ${ leaks.length } leak(s) in the rendered page:\n${ leaks.map( ( l ) => `  …${ l.replace( /\s+/g, ' ' ) }…` ).join( '\n' ) }` );
		}
		return { ...r, html, lDir };
	} );

	rmSync( outDir, { recursive: true, force: true } );
	const pages = [];
	const write = ( dir, page ) => {
		mkdirSync( dir, { recursive: true } );
		writeFileSync( join( dir, 'index.html' ), page.html );
		for ( const f of assets( page.lDir ) ) copyFileSync( join( page.lDir, f ), join( dir, f ) );
		pages.push( join( dir, 'index.html' ) );
	};
	rendered.forEach( ( page ) => write( join( outDir, page.slug ), page ) );
	if ( rendered[ 0 ] ) write( outDir, rendered[ 0 ] );
	return { pages };
}

if ( process.argv[ 1 ] && import.meta.url === pathToFileURL( process.argv[ 1 ] ).href ) {
	const { pages } = build();
	console.log( pages.length ? `Built ${ pages.length } pages into dist/` : 'No releases found in releases/. Nothing built.' );
}
