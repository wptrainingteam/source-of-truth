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
import { renderHeader, versionEntry } from './lib/header.mjs';
import { findLeaks } from './lib/clean.mjs';

const REPO = resolve( fileURLToPath( new URL( '..', import.meta.url ) ) );

const layoutDir = ( repo, dir, meta ) => ( meta.layout === 'own' ? join( dir, 'layout' ) : join( repo, 'layouts', meta.layout || 'generic' ) );
// An own layout builds on the generic shell: its page gets the generic assets, then its own on top.
const assetDirs = ( repo, lDir ) => [ ...new Set( [ join( repo, 'layouts', 'generic' ), lDir ] ) ];
const assets = ( dir ) => readdirSync( dir ).filter( ( f ) => /\.(js|css)$/.test( f ) );

const readBaseUrl = ( repo ) => JSON.parse( readFileSync( join( repo, 'site.json' ), 'utf8' ) ).baseUrl.replace( /\/+$/, '' );

const robots = ( baseUrl ) => [ 'GPTBot', 'ClaudeBot', 'Google-Extended', 'CCBot' ].map( ( b ) => `User-agent: ${ b }\nDisallow: /\n` ).join( '\n' )
	+ `\nUser-agent: *\nAllow: /\n\nSitemap: ${ baseUrl }/sitemap.xml\n`;

const sitemap = ( baseUrl, entries ) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ entries.map( ( { slug, lastmod } ) => `  <url><loc>${ baseUrl }/${ slug }/</loc>${ lastmod ? `<lastmod>${ lastmod }</lastmod>` : '' }</url>` ).join( '\n' ) }
</urlset>
`;

// The generic layout's head, styles and footer around the shared header and a short message.
function notFound( layoutHtml, header, newest ) {
	const body = `<body>
${ header }
<div class="sot-wrap">
  <h1>Page not found</h1>
  <p><a href="/${ newest.slug }/">Go to WordPress ${ newest.version }</a></p>
</div>
</body>
</html>
`;
	return layoutHtml
		.replace( '<!-- sot:head -->', '<title>Page not found</title>' )
		.replace( /<body>[\s\S]*$/, body );
}

export function build( repo = REPO, outDir = join( repo, 'dist' ), baseUrl = readBaseUrl( repo ) ) {
	const releases = listReleases( repo );
	const read = releases.map( ( r ) => ( { ...r, ...readRelease( r.dir ) } ) );
	const all = read.map( ( { version, slug, meta } ) => ( { version, slug, entry: versionEntry( version, slug, meta ) } ) );

	// Render and check every page before writing anything.
	const rendered = read.map( ( r ) => {
		const { meta, structure } = r;
		const lDir = layoutDir( repo, r.dir, meta );
		const file = join( lDir, 'layout.html' );
		if ( ! existsSync( file ) ) throw new Error( `Release ${ r.version }: no layout at ${ file }` );
		let html;
		try {
			html = renderPage( readFileSync( file, 'utf8' ), { ...meta, version: r.version }, structure, renderHeader( r.version, all ), baseUrl );
		} catch ( e ) {
			throw new Error( `Release ${ r.version }: ${ e.message }` );
		}
		const leaks = findLeaks( html );
		if ( leaks.length ) {
			throw new Error( `Release ${ r.version }: ${ leaks.length } leak(s) in the rendered page:\n${ leaks.map( ( l ) => `  …${ l.replace( /\s+/g, ' ' ) }…` ).join( '\n' ) }` );
		}
		return { version: r.version, slug: r.slug, html, lDir, lastmod: meta.updated || meta.published || '' };
	} );

	rmSync( outDir, { recursive: true, force: true } );
	const pages = [];
	const write = ( dir, page ) => {
		mkdirSync( dir, { recursive: true } );
		writeFileSync( join( dir, 'index.html' ), page.html );
		for ( const d of assetDirs( repo, page.lDir ) ) for ( const f of assets( d ) ) copyFileSync( join( d, f ), join( dir, f ) );
		pages.push( join( dir, 'index.html' ) );
	};
	rendered.forEach( ( page ) => write( join( outDir, page.slug ), page ) );
	if ( rendered[ 0 ] ) {
		write( outDir, rendered[ 0 ] );
		const generic = readFileSync( join( repo, 'layouts', 'generic', 'layout.html' ), 'utf8' );
		const page404 = notFound( generic, renderHeader( rendered[ 0 ].version, all ), rendered[ 0 ] );
		const leaks = findLeaks( page404 );
		if ( leaks.length ) throw new Error( `404 page: ${ leaks.length } leak(s)` );
		writeFileSync( join( outDir, '404.html' ), page404 );
	}
	writeFileSync( join( outDir, 'robots.txt' ), robots( baseUrl ) );
	writeFileSync( join( outDir, 'sitemap.xml' ), sitemap( baseUrl, rendered ) );
	return { pages };
}

if ( process.argv[ 1 ] && import.meta.url === pathToFileURL( process.argv[ 1 ] ).href ) {
	const { pages } = build();
	console.log( pages.length ? `Built ${ pages.length } pages into dist/` : 'No releases found in releases/. Nothing built.' );
}
