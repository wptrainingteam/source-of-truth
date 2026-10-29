// Splits a Source of Truth post (Markdown) into intro, changelog, sections and items.
import { stripComments, stripMarkers, parseFlags, slugify } from './clean.mjs';

const TAGS_LINE = /^==(\[[^\]]+\]\s*)+==$/;
const BARE_TAGS_LINE = /^(\[[^\]]+\]\s*)+$/;

// Indexes of lines starting with `prefix`, ignoring fenced code.
function headingIndexes( lines, prefix ) {
	let fenced = false;
	const out = [];
	lines.forEach( ( l, i ) => {
		if ( /^\s*(```|~~~)/.test( l ) ) fenced = ! fenced;
		else if ( ! fenced && l.startsWith( prefix ) ) out.push( i );
	} );
	return out;
}

function takeTags( lines ) {
	let i = lines.findIndex( ( l ) => TAGS_LINE.test( l.trim() ) );
	if ( i === -1 ) {
		const first = lines.findIndex( ( l ) => l.trim() !== '' );
		if ( first !== -1 && BARE_TAGS_LINE.test( lines[ first ].trim() ) ) i = first;
	}
	if ( i === -1 ) return { tags: [], lines };
	const tags = [ ...lines[ i ].matchAll( /\[([^\]]+)\]/g ) ].map( ( m ) => m[ 1 ] );
	return { tags, lines: lines.filter( ( _, j ) => j !== i ) };
}

const clean = ( lines ) => stripMarkers( stripComments( lines.join( '\n' ) ) ).replace( /[ \t]+$/gm, '' ).replace( /\n{3,}/g, '\n\n' ).trim();

// Splits `lines` at the given heading indexes: [ before, ...blocks ] where each block starts at its heading.
function blocks( lines, idx ) {
	return { before: lines.slice( 0, idx[ 0 ] ?? lines.length ), blocks: idx.map( ( s, n ) => lines.slice( s, idx[ n + 1 ] ?? lines.length ) ) };
}

export function split( markdown ) {
	let lines = markdown.split( '\n' );
	if ( /^# /.test( lines[ 0 ] ) ) lines = lines.slice( 1 );

	const { before, blocks: h2s } = blocks( lines, headingIndexes( lines, '## ' ) );
	const intro = [ ...before ];
	let changelog = '';
	const sections = [];

	h2s.forEach( ( block, n ) => {
		const { text: title } = parseFlags( block[ 0 ].slice( 3 ) );
		let body = block.slice( 1 );
		const kind = title.toLowerCase();

		if ( kind.startsWith( 'changelog' ) ) {
			changelog = clean( body );
			return;
		}
		if ( kind.startsWith( 'important note' ) || kind.includes( 'guidelines' ) || kind === 'tags' ) return;
		if ( kind.startsWith( 'overview' ) ) {
			const o = blocks( body, headingIndexes( body, '### ' ) );
			intro.push( ...o.before );
			for ( const sub of o.blocks ) {
				if ( ! /^(resources|assets|tags)$/.test( parseFlags( sub[ 0 ].slice( 4 ) ).text.toLowerCase() ) ) intro.push( ...sub );
			}
			return;
		}

		// The closing --- and thank-you line after the last H3 belong to the intro, not the last section.
		if ( n === h2s.length - 1 ) {
			const hr = body.findLastIndex( ( l ) => l.trim() === '---' );
			if ( hr !== -1 && ! body.slice( hr ).some( ( l ) => /^### /.test( l ) ) ) body = body.slice( 0, hr );
		}

		const h3 = blocks( body, headingIndexes( body, '### ' ) );
		const pre = takeTags( h3.before );
		sections.push( {
			title,
			slug: slugify( title ),
			tags: pre.tags,
			body: clean( pre.lines ),
			items: h3.blocks.map( ( b ) => {
				const item = parseFlags( b[ 0 ].slice( 4 ) );
				const rest = takeTags( b.slice( 1 ) );
				return { title: item.text, slug: slugify( item.text ), tags: rest.tags, flags: item.flags, body: clean( rest.lines ) };
			} ),
		} );
	} );

	return { intro: clean( intro ), changelog, punted: '', sections };
}
