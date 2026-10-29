#!/usr/bin/env node
// One-time importer: brings a published "WordPress X.Y Source of Truth" post into releases/<version>/ via the WordPress REST API.
//
//   node scripts/migrate/import-post.mjs <post-url> [--repo <dir>]
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import TurndownService from 'turndown';
import { split } from '../lib/split.mjs';
import { parseReleaseFacts } from '../lib/release-facts.mjs';
import { writeRelease } from '../lib/release-io.mjs';

const REPO = resolve( fileURLToPath( new URL( '../..', import.meta.url ) ) );

export function htmlToMarkdown( html, baseUrl ) {
	const abs = html.replace( /\b(src|href)=(["'])([^"']*)\2/gi, ( m, attr, q, val ) => {
		try {
			return `${ attr }=${ q }${ new URL( val, baseUrl ).href }${ q }`;
		} catch {
			return m;
		}
	} );
	const td = new TurndownService( { headingStyle: 'atx', codeBlockStyle: 'fenced' } );
	td.keep( [ 'kbd', 'iframe', 'video', 'figure' ] );
	// Keep "[end user] [site admin]" tag lines readable by split().
	const md = td.turndown( abs ).replace( /\\([[\]])/g, '$1' )
		// Published posts bold their tag lines: "**[developer][site admin]**" or "**[**all**]**".
		.replace( /^[* \t]*((?:\[[^\]]+\][* \t]*)+)$/gm, ( m, tags ) => tags.replace( /\*/g, '' ).replace( /\][ \t]*\[/g, '] [' ).trim() );
	return md.replace( /\n{3,}/g, '\n\n' ).trim();
}

export function importPost( restPost, { repo = REPO, url, authorName = '', authorUrl = '' } ) {
	const title = restPost.title.rendered.replace( /&#8217;|&nbsp;|&#038;/g, ' ' );
	const version = title.match( /WordPress (\d+\.\d+)/ )?.[ 1 ];
	if ( ! version ) throw new Error( `No version number in post title: ${ title }` );

	const markdown = htmlToMarkdown( restPost.content.rendered, url );
	const structure = split( markdown );
	structure.punted = '';

	const host = new URL( url ).hostname;
	const meta = {
		version,
		title: `WordPress ${ version } Source of Truth`,
		updated: new Date().toISOString().slice( 0, 10 ),
		published: restPost.date.slice( 0, 10 ),
		author: { name: authorName, url: authorUrl },
		...parseReleaseFacts( markdown ),
		source: { type: host.endsWith( 'nomad.blog' ) ? 'nomadblog' : 'gutenbergtimes', id: String( restPost.id ), url },
	};
	writeRelease( join( repo, 'releases', version ), structure, meta );

	const items = structure.sections.flatMap( ( s ) => s.items );
	return { version, sections: structure.sections.length, items: items.length };
}

async function getJson( url ) {
	const res = await fetch( url );
	if ( ! res.ok ) throw new Error( `Fetch failed: HTTP ${ res.status } for ${ url }` );
	return res.json();
}

async function main( argv ) {
	const args = argv.slice( 2 );
	const ri = args.indexOf( '--repo' );
	const repo = ri === -1 ? REPO : resolve( args.splice( ri, 2 )[ 1 ] );
	const [ input ] = args;
	if ( ! input ) {
		console.error( 'usage: import-post.mjs <post-url> [--repo <dir>]' );
		process.exit( 2 );
	}
	const u = new URL( input );
	const slug = u.pathname.split( '/' ).filter( Boolean ).at( -1 );
	let found;
	for ( const type of [ 'posts', 'pages' ] ) {
		const list = await getJson( `${ u.origin }/wp-json/wp/v2/${ type }?slug=${ encodeURIComponent( slug ) }&_embed=author` );
		if ( list.length ) {
			found = list[ 0 ];
			break;
		}
	}
	if ( ! found ) throw new Error( `No post or page with slug "${ slug }" at ${ u.origin }` );

	const author = found._embedded?.author?.[ 0 ];
	const authorName = author?.name ?? '';
	const authorUrl = author?.link ?? '';
	const r = importPost( found, { repo, url: found.link ?? input, authorName, authorUrl } );
	console.log( `Imported WordPress ${ r.version } into releases/${ r.version }/` );
	console.log( `${ r.sections } sections, ${ r.items } items, author: ${ authorName || '(none)' }` );
	if ( ! authorName ) console.log( 'WARNING: no usable author from the REST API; author left empty.' );
}

if ( process.argv[ 1 ] && resolve( process.argv[ 1 ] ) === fileURLToPath( import.meta.url ) ) {
	main( process.argv ).catch( ( e ) => { console.error( e.message ); process.exit( 1 ); } );
}
