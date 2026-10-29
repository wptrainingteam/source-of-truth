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

// Published posts put the audience tags at the end of the heading: "Title [end user] [site admin]".
function headingTags( text ) {
	const m = text.match( /(?:\s*\[[^\][]+\](?!\())+\s*$/ );
	if ( ! m ) return { text, tags: [] };
	return { text: text.slice( 0, m.index ).trim(), tags: [ ...m[ 0 ].matchAll( /\[([^\]]+)\]/g ) ].map( ( t ) => t[ 1 ] ) };
}
// Older posts put "Important Note/Guidelines" and "Changelog" as bold-only paragraphs before the Overview H2.
const BOLD_ONLY = /^\*\*([^*]+)\*\*$/;
const OLD_BLOCKS = /^(important note|guidelines|changelog|table of contents)/i;
function takeBoldBlocks( lines ) {
	const kept = [];
	let changelog = '';
	for ( let i = 0; i < lines.length; i++ ) {
		const m = lines[ i ].trim().match( BOLD_ONLY );
		const name = m && OLD_BLOCKS.test( m[ 1 ].trim() ) ? m[ 1 ].trim().toLowerCase() : '';
		if ( ! name || name.startsWith( 'table' ) ) {
			kept.push( lines[ i ] );
			continue;
		}
		let end = i + 1;
		while ( end < lines.length ) {
			const n = lines[ end ].trim().match( BOLD_ONLY );
			if ( n && OLD_BLOCKS.test( n[ 1 ].trim() ) ) break;
			end++;
		}
		if ( name === 'changelog' ) changelog = lines.slice( i + 1, end ).join( '\n' ).trim();
		i = end - 1;
	}
	return { lines: kept, changelog };
}

// The post's own Table of Contents (a list of in-page #anchor links) and "Estimated reading time" lines.
const TOC_ITEM = /^\s*(\d+\.|[*-])\s+\[.*\]\([^)\s]*#[^)\s]*\)\s*$/;
function stripPostFurniture( lines ) {
	const out = [];
	for ( let i = 0; i < lines.length; i++ ) {
		const t = lines[ i ].trim();
		if ( /^(\*\*)?Table of Contents(\*\*)?$/i.test( t ) ) continue;
		if ( TOC_ITEM.test( lines[ i ] ) ) {
			let j = i;
			while ( j < lines.length && ( TOC_ITEM.test( lines[ j ] ) || lines[ j ].trim() === '' ) ) j++;
			// Only drop a list made up entirely of anchor links; a mixed list is real content.
			const LIST = /^\s*(\d+\.|[*-])\s/;
			const before = out.findLast( ( l ) => l.trim() !== '' );
			if ( ! ( before && LIST.test( before ) ) && ! ( lines[ j ] && LIST.test( lines[ j ] ) ) ) {
				i = j - 1;
				continue;
			}
		}
		if ( /^Estimated reading time$/i.test( t ) ) {
			const end = lines.findIndex( ( l, k ) => k > i && /^[\d,]+ words$/.test( l.trim() ) );
			if ( end !== -1 && end - i <= 8 ) i = end;
			continue;
		}
		out.push( lines[ i ] );
	}
	return out;
}

const union = ( a, b ) => [ ...new Set( [ ...a, ...b ] ) ];

const clean = ( lines ) => stripMarkers( stripComments( lines.join( '\n' ) ) ).replace( /[ \t]+$/gm, '' ).replace( /\n{3,}/g, '\n\n' ).trim();

// Splits `lines` at the given heading indexes: [ before, ...blocks ] where each block starts at its heading.
function blocks( lines, idx ) {
	return { before: lines.slice( 0, idx[ 0 ] ?? lines.length ), blocks: idx.map( ( s, n ) => lines.slice( s, idx[ n + 1 ] ?? lines.length ) ) };
}

export function split( markdown ) {
	let lines = stripComments( markdown ).split( '\n' );
	if ( /^# /.test( lines[ 0 ] ) ) lines = lines.slice( 1 );

	const { before, blocks: h2s } = blocks( lines, headingIndexes( lines, '## ' ) );
	const old = takeBoldBlocks( before );
	const intro = [ ...old.lines ];
	let changelog = old.changelog;
	const entries = [];

	h2s.forEach( ( block ) => {
		const { text: title } = parseFlags( block[ 0 ].slice( 3 ) );
		const body = block.slice( 1 );
		const kind = title.toLowerCase();

		if ( kind.startsWith( 'changelog' ) ) {
			changelog = clean( body );
			return;
		}
		if ( kind.startsWith( 'important note' ) || kind === 'guidelines' || kind === 'tags' ) return;
		if ( kind.startsWith( 'overview' ) ) {
			const o = blocks( body, headingIndexes( body, '### ' ) );
			intro.push( ...o.before );
			for ( const sub of o.blocks ) {
				if ( ! /^(resources|assets|tags)$/.test( parseFlags( sub[ 0 ].slice( 4 ) ).text.toLowerCase() ) ) intro.push( ...sub );
			}
			return;
		}

		const { text, tags } = headingTags( title );
		entries.push( { title: text, headingTags: tags, body } );
	} );

	// The closing --- and thank-you line after the last item belong to the intro, not the last section.
	const last = entries.at( -1 );
	if ( last ) {
		const hr = last.body.findLastIndex( ( l ) => l.trim() === '---' );
		if ( hr !== -1 && ! last.body.slice( hr ).some( ( l ) => /^### /.test( l ) ) ) last.body = last.body.slice( 0, hr );
	}

	const sections = entries.map( ( { title, headingTags: hTags, body } ) => {
		const h3 = blocks( body, headingIndexes( body, '### ' ) );
		const pre = takeTags( h3.before );
		return {
			title,
			slug: slugify( title ),
			tags: union( hTags, pre.tags ),
			body: clean( pre.lines ),
			items: h3.blocks.map( ( b ) => {
				const parsed = parseFlags( b[ 0 ].slice( 4 ) );
				const item = { ...parsed, ...headingTags( parsed.text ) };
				const rest = takeTags( b.slice( 1 ) );
				return { title: item.text, slug: slugify( item.text ), tags: union( item.tags, rest.tags ), flags: item.flags, body: clean( rest.lines ) };
			} ),
		};
	} );

	return { intro: clean( stripPostFurniture( intro ) ), changelog, punted: '', sections };
}
