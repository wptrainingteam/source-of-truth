#!/usr/bin/env node
// Imports a Google Docs Markdown export of a Source of Truth draft into releases/<version>/.
//
//   node scripts/import-doc.mjs <doc-id-or-url | export.md> [--repo <dir>]
//
// Only the post tab and the Punted tab are written. The Notes tab is read for the schedule table only.
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { split } from './lib/split.mjs';
import { writeRelease } from './lib/release-io.mjs';
import { parseReleaseFacts } from './lib/release-facts.mjs';
import { unescapeGoogle, stripComments, stripMarkers } from './lib/clean.mjs';

const REPO = resolve( fileURLToPath( new URL( '..', import.meta.url ) ) );

export function importDoc( markdown, { repo = REPO, docId = '', docUrl = '' } = {} ) {
	if ( /^\s*<(!doctype html|html)/i.test( markdown ) ) {
		throw new Error( 'Got a Google sign-in page instead of Markdown. The doc is not public: open it, then use File > Download > Markdown and pass that file.' );
	}
	const src = unescapeGoogle( markdown ).replace( /\r\n/g, '\n' ).replace( /[ \t]+$/gm, '' );
	const lines = src.split( '\n' );
	const h1s = lines.map( ( l, i ) => ( /^# /.test( l ) ? i : -1 ) ).filter( ( i ) => i !== -1 );
	const block = ( start ) => lines.slice( start + 1, h1s.find( ( i ) => i > start ) ?? lines.length );

	const postStart = h1s.find( ( i ) => /Source of Truth/i.test( lines[ i ] ) && ! /draft/i.test( lines[ i ] ) && ! /\*\*/.test( lines[ i ] ) );
	if ( postStart === undefined ) {
		throw new Error( 'No "# WordPress X.Y Source of Truth" heading found. Export the whole doc with all tabs (File > Download > Markdown), not a single tab.' );
	}
	const postText = block( postStart ).join( '\n' );
	const version = lines[ postStart ].match( /(\d+\.\d+)/ )?.[ 1 ];
	if ( ! version ) throw new Error( `No version number in heading: ${ lines[ postStart ] }` );

	const facts = parseReleaseFacts( postText );
	const releaseDate = facts.releaseDate ?? '';

	// Milestones come from the Notes tab's schedule table, e.g. "| Beta 1 | October 20, 15:00 UTC |".
	const notesH1 = h1s.find( ( i ) => /^# \**Notes\b/i.test( lines[ i ] ) );
	const notes = notesH1 === undefined ? '' : block( notesH1 ).join( '\n' );
	const year = releaseDate.match( /\d{4}/ )?.[ 0 ];
	const milestone = ( label ) => {
		const m = notes.match( new RegExp( `^\\|\\s*${ label }\\b[^|]*\\|\\s*([A-Z][a-z]+ \\d{1,2})\\b`, 'm' ) );
		const d = m && year ? new Date( `${ m[ 1 ] }, ${ year } 12:00 UTC` ) : null;
		return d && ! isNaN( d ) ? d.toISOString().slice( 0, 10 ) : undefined;
	};
	const milestones = Object.fromEntries( Object.entries( { beta1: 'Beta 1', rc1: 'RC 1', final: 'Final' } )
		.map( ( [ k, label ] ) => [ k, milestone( label ) ] ).filter( ( [ , v ] ) => v ) );

	const structure = split( postText );
	const puntedH1 = h1s.find( ( i ) => i > postStart && /punt/i.test( lines[ i ] ) );
	structure.punted = puntedH1 === undefined ? '' : stripMarkers( stripComments( block( puntedH1 ).join( '\n' ) ) );

	const meta = {
		version, title: `WordPress ${ version } Source of Truth`, updated: new Date().toISOString().slice( 0, 10 ),
		// Only set what is known, so importing a downloaded file keeps a stored Doc ID.
		source: { type: 'gdoc', ...( docId && { id: docId } ), ...( docUrl && { url: docUrl } ) }, milestones,
	};
	Object.assign( meta, facts );
	writeRelease( join( repo, 'releases', version ), structure, meta );

	const items = structure.sections.flatMap( ( s ) => s.items );
	return {
		version,
		sections: structure.sections.length,
		items: items.length,
		hiddenPunted: items.filter( ( i ) => i.flags.includes( 'punted' ) ).length,
		punted: structure.punted !== '',
	};
}

async function main( argv ) {
	const args = argv.slice( 2 );
	const ri = args.indexOf( '--repo' );
	const repo = ri === -1 ? REPO : resolve( args.splice( ri, 2 )[ 1 ] );
	const [ input ] = args;
	if ( ! input ) {
		console.error( 'usage: import-doc.mjs <doc-id-or-url | export.md> [--repo <dir>]' );
		process.exit( 2 );
	}
	let markdown, docId = '', docUrl = '';
	if ( existsSync( input ) ) {
		markdown = readFileSync( input, 'utf8' );
	} else {
		docId = input.match( /\/d\/([\w-]+)/ )?.[ 1 ] ?? input;
		docUrl = `https://docs.google.com/document/d/${ docId }/edit`;
		const res = await fetch( `https://docs.google.com/document/d/${ docId }/export?format=md` );
		if ( ! res.ok ) throw new Error( `Download failed: HTTP ${ res.status }. Use File > Download > Markdown and pass the file.` );
		markdown = await res.text();
	}
	const r = importDoc( markdown, { repo, docId, docUrl } );
	console.log( `Imported WordPress ${ r.version } into releases/${ r.version }/` );
	console.log( `${ r.sections } sections, ${ r.items } items, ${ r.hiddenPunted } hidden as 🏈, punted present: ${ r.punted ? 'yes' : 'no' }` );
}

if ( process.argv[ 1 ] && resolve( process.argv[ 1 ] ) === fileURLToPath( import.meta.url ) ) {
	main( process.argv ).catch( ( e ) => { console.error( e.message ); process.exit( 1 ); } );
}
