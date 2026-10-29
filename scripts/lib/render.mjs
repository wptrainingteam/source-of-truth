// Fills a layout's <!-- sot:* --> slots with one release's content.
import { marked } from 'marked';
import { versionSlug } from './versions.mjs';
import { slugify } from './clean.mjs';

export const esc = ( s ) => String( s ).replace( /[&<>"']/g, ( c ) => ( { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ c ] ) );

const md = ( s ) => ( s ? marked.parse( s, { async: false } ).trim() : '' );
const inline = ( s ) => marked.parseInline( s, { async: false } );
const plain = ( s ) => s.replace( /<[^>]+>/g, '' ).replace( /!?\[([^\]]*)\]\([^)]*\)/g, '$1' ).replace( /[*_`]/g, '' ).replace( /\s+/g, ' ' ).trim();

const PUBLISHED_POST = [ 'gutenbergtimes', 'nomadblog' ];
const RESERVED = [ 'top', 'content', 'progress', 'chips', 'matchLabel', 'aud-h', 'tocDetails', 'tocList', 'toTop', 'timeline-h', 'punted', 'changelog', 'resources' ];

function parseDate( s ) {
	if ( ! s ) return null;
	const d = /^\d{4}-\d{2}-\d{2}$/.test( s ) ? new Date( `${ s }T12:00:00Z` ) : new Date( `${ s } 12:00 UTC` );
	return isNaN( d ) ? null : d;
}
const longDate = ( s ) => parseDate( s )?.toLocaleDateString( 'en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' } ) ?? s;
const shortDate = ( s ) => parseDate( s )?.toLocaleDateString( 'en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' } ) ?? s;
const host = ( url ) => {
	try {
		return new URL( url ).hostname.replace( /^www\./, '' );
	} catch {
		return url;
	}
};
const tagLine = ( tags ) => ( tags.length ? `<p class="tags">${ tags.map( ( t ) => `[${ esc( t ) }]` ).join( ' ' ) }</p>` : '' );

// Sections and items as they appear on the page: punted items dropped, effective tags and unique ids resolved.
function model( structure ) {
	const used = new Set( RESERVED );
	const id = ( slug, fallback ) => {
		const base = slug || fallback;
		let out = base;
		for ( let n = 2; used.has( out ); n++ ) out = `${ base }-${ n }`;
		used.add( out );
		return out;
	};
	return structure.sections.map( ( sec ) => {
		const items = sec.items
			.filter( ( it ) => ! it.flags.includes( 'punted' ) )
			.map( ( it ) => ( { ...it, ownTags: it.tags, tags: it.tags.length ? it.tags : sec.tags } ) );
		// A section matches its own tags and any of its items' tags. Untagged, one untagged item makes it match everyone.
		const itemTags = items.flatMap( ( it ) => it.tags );
		const tags = sec.tags.length ? [ ...new Set( [ ...sec.tags, ...itemTags ] ) ]
			: items.some( ( it ) => ! it.tags.length ) ? sec.tags : [ ...new Set( itemTags ) ];
		return { ...sec, id: id( sec.slug, 'section' ), tags, ownTags: sec.tags, items: items.map( ( it ) => ( { ...it, id: id( it.slug, 'item' ) } ) ) };
	} );
}

const words = ( ...texts ) => texts.join( ' ' ).split( /\s+/ ).filter( ( w ) => /[\p{L}\p{N}]/u.test( plain( w ) ) ).length;

export function renderPage( layoutHtml, meta, structure, header, baseUrl = '' ) {
	const slug = versionSlug( meta.version );
	const sections = model( structure );
	const items = sections.flatMap( ( s ) => s.items );
	const isPost = PUBLISHED_POST.includes( meta.source?.type ) && meta.source?.url;

	const [ first = '', ...rest ] = structure.intro.split( /\n\s*\n/ );
	const description = ( () => {
		const p = plain( first );
		return p.length > 160 ? p.slice( 0, 157 ).replace( /\s+\S*$/, '' ) + '…' : p;
	} )();

	const url = `${ baseUrl.replace( /\/+$/, '' ) }/${ slug }/`;
	const head = [
		`<title>${ esc( meta.title ) }</title>`,
		description ? `<meta name="description" content="${ esc( description ) }">` : '',
		`<link rel="canonical" href="${ esc( url ) }">`,
		`<meta property="og:url" content="${ esc( url ) }">`,
		`<meta property="og:title" content="${ esc( meta.title ) }">`,
		description ? `<meta property="og:description" content="${ esc( description ) }">` : '',
		'<meta property="og:type" content="article">',
		'<meta property="og:site_name" content="WordPress Source of Truth">',
	].filter( Boolean ).join( '\n' );

	const count = words( structure.intro, ...sections.flatMap( ( s ) => [ s.title, s.body, ...s.items.flatMap( ( it ) => [ it.title, it.body ] ) ] ) );
	const byline = [
		meta.author?.name ? `Written by ${ meta.author.url ? `<a href="${ esc( meta.author.url ) }">${ esc( meta.author.name ) }</a>` : esc( meta.author.name ) }` : '',
		// A published post shows its own dates; the import date is not an update to the post.
		isPost && meta.published ? `Published ${ esc( longDate( meta.published ) ) }` : '',
		meta.updated && ! ( isPost && meta.updated === meta.published ) ? `Updated ${ esc( longDate( meta.updated ) ) }` : '',
		`${ Math.ceil( count / 200 ) } minute read (${ count.toLocaleString( 'en-US' ) } words)`,
	].filter( Boolean ).join( ' · ' );
	const eyebrow = `WORDPRESS ${ esc( meta.version ) }${ meta.releaseDate ? ` · ${ meta.published ? 'RELEASED' : 'SHIPS' } ${ esc( meta.releaseDate.toUpperCase() ) }` : '' }`;
	const hero = `<section class="hero">
  <p class="eyebrow">${ eyebrow }</p>
  <h1>${ esc( meta.title ) }</h1>
  ${ first ? `<p class="intro">${ inline( first ) }</p>` : '' }
  ${ rest.length ? `<div class="prose more">${ md( rest.join( '\n\n' ) ) }</div>` : '' }
  <p class="byline">${ byline }</p>
  ${ isPost ? `<p class="byline"><a href="${ esc( meta.source.url ) }">Originally published on ${ esc( host( meta.source.url ) ) } ↗</a></p>` : '' }
</section>`;

	const year = parseDate( meta.releaseDate )?.getUTCFullYear();
	const stats = [
		meta.releaseDate ? [ shortDate( meta.releaseDate ), year ? `Release date, ${ year }` : 'Release date' ] : null,
		[ String( sections.length ), sections.length === 1 ? 'Section' : 'Sections' ],
		[ String( items.length ), items.length === 1 ? 'Item' : 'Items' ],
		meta.gutenbergRange ? [ meta.gutenbergRange, 'Gutenberg releases' ] : null,
	].filter( Boolean );
	const statsHtml = `<section class="stats" aria-label="At a glance">
${ stats.map( ( [ b, s ] ) => `  <div class="stat"><b>${ esc( b ) }</b><span>${ esc( s ) }</span></div>` ).join( '\n' ) }
</section>`;

	const ms = [ [ 'beta1', 'Beta 1' ], [ 'rc1', 'RC 1' ], [ 'final', 'Release' ] ].filter( ( [ k ] ) => meta.milestones?.[ k ] );
	const timeline = ms.length ? `<section class="timeline" aria-labelledby="timeline-h">
  <div class="wrap">
    <div class="timeline-head">
      <h2 id="timeline-h">${ meta.milestones.final ? `The road to ${ esc( shortDate( meta.milestones.final ) ) }` : 'Release milestones' }</h2>
    </div>
    <ol class="milestones" aria-label="Release milestones">
${ ms.map( ( [ k, label ] ) => `      <li class="ms"><small>${ esc( shortDate( meta.milestones[ k ] ) ) }</small><b>${ label }</b></li>` ).join( '\n' ) }
    </ol>
  </div>
</section>` : '';

	const seen = [];
	for ( const s of sections ) for ( const t of [ ...s.ownTags, ...s.items.flatMap( ( it ) => it.tags ) ] ) if ( ! seen.includes( t ) ) seen.push( t );
	const filter = `<div class="pill-row" id="chips" role="group" aria-label="Filter by audience">
${ seen.map( ( t ) => `  <button class="pill" type="button" aria-pressed="false" data-aud="${ esc( t ) }">${ esc( t ) }</button>` ).join( '\n' ) }
</div>`;

	const toc = `<ol id="tocList">
${ sections.map( ( s, i ) => `  <li><a href="#${ s.id }"><span class="n">${ String( i + 1 ).padStart( 2, '0' ) }</span><span>${ esc( s.title ) }</span></a>${ s.items.length ? `
    <ol>
${ s.items.map( ( it ) => `      <li><a href="#${ it.id }"><span>${ esc( plain( it.title ) ) }</span></a></li>` ).join( '\n' ) }
    </ol>
  ` : '' }</li>` ).join( '\n' ) }
</ol>`;

	const sectionsHtml = sections.map( ( s ) => `<section class="section" id="${ s.id }" data-tags="${ esc( s.tags.join( ',' ) ) }" data-title="${ esc( s.title ) }">
  <h2 class="h2">${ inline( s.title ) }</h2>
  ${ tagLine( s.ownTags ) }
  ${ s.body ? `<div class="prose">${ md( s.body ) }</div>` : '' }
${ s.items.map( ( it ) => `  <article class="item" id="${ it.id }" data-tags="${ esc( it.tags.join( ',' ) ) }" data-title="${ esc( plain( it.title ) ) }">
    <h3>${ inline( it.title ) }</h3>
    ${ tagLine( it.ownTags ) }
    <div class="prose">${ md( it.body ) }</div>
  </article>` ).join( '\n' ) }
</section>` ).join( '\n' );

	const punted = structure.punted ? `<section id="punted" aria-labelledby="punted-h">
  <div class="punted">
    <svg role="img" aria-label="Football, for punted items" width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#7A4A1F" stroke-width="2.5" stroke-linecap="round"><ellipse cx="32" cy="32" rx="26" ry="15" transform="rotate(-35 32 32)"/><path d="M24 40 40 24M28 30l4 4M31 27l4 4M34 24l4 4"/></svg>
    <div style="flex:999 1 260px;min-width:0">
      <h2 id="punted-h">Punted to a later release</h2>
      <div class="prose">${ md( structure.punted ) }</div>
    </div>
  </div>
</section>` : '';

	const changelog = structure.changelog ? `<section class="changelog" id="changelog">
  <h2>Changelog</h2>
  <div class="prose">${ md( structure.changelog ) }</div>
</section>` : '';

	const links = [
		[ `https://make.wordpress.org/core/${ slug }/`, 'Development cycle', 'Make WordPress Core' ],
		[ `https://make.wordpress.org/core/tag/dev-notes+${ slug }/`, 'Dev notes', 'Make WordPress Core' ],
		isPost ? [ meta.source.url, 'Original post', host( meta.source.url ) ] : null,
	].filter( Boolean );
	const resources = `<section class="resources-wrap" id="resources">
  <h2>Keep reading</h2>
  <div class="resources">
${ links.map( ( [ href, b, s ] ) => `    <a href="${ esc( href ) }"><b>${ esc( b ) }</b><span>${ esc( s ) }</span></a>` ).join( '\n' ) }
  </div>
</section>`;

	const fill = { head, header, hero, stats: statsHtml, timeline, filter, toc, sections: sectionsHtml, punted, changelog, resources };
	let out = layoutHtml;
	for ( const [ name, html ] of Object.entries( fill ) ) {
		const slot = `<!-- sot:${ name } -->`;
		if ( ! out.includes( slot ) ) {
			if ( html ) throw new Error( `Layout is missing the sot:${ name } slot` );
			continue;
		}
		out = out.split( slot ).join( html );
	}
	return localAnchors( out, meta.source?.url, sections );
}

// Links to an anchor in the original post point at the same spot on this page when it exists here.
const bare = ( url ) => url.replace( /^https?:\/\//i, '' ).replace( /\/$/, '' );
function localAnchors( html, sourceUrl, sections ) {
	if ( ! sourceUrl ) return html;
	const base = bare( sourceUrl.split( '#' )[ 0 ] );
	const ids = new Set( [ ...html.matchAll( /\bid="([^"]+)"/g ) ].map( ( m ) => m[ 1 ] ) );
	// Published posts often slug the heading with its tag line: "#<heading>-<tags>".
	const suffixed = new Map();
	for ( const el of sections.flatMap( ( s ) => [ s, ...s.items ] ) ) {
		for ( const t of [ el.ownTags, el.tags ] ) if ( t.length ) suffixed.set( `${ el.id }-${ slugify( t.join( ' ' ) ) }`, el.id );
	}
	return html.replace( /href="([^"#]*)#([^"]+)"/g, ( m, url, frag ) => {
		if ( bare( url ) !== base ) return m;
		let decoded = frag;
		try {
			decoded = decodeURIComponent( frag );
		} catch {}
		const target = [ decoded, slugify( decoded ) ].find( ( f ) => ids.has( f ) ) ?? suffixed.get( decoded.toLowerCase() ) ?? suffixed.get( slugify( decoded ) );
		return target ? `href="#${ target }"` : m;
	} );
}
