// Helpers that keep editorial markers and working comments out of published content.

const FLAGS = { '✏': 'edit', '🙏': 'blessed', '🔍': 'check', '🎨': 'visuals', '🏈': 'punted' };
const MARK = '(?:✏|🙏|🔍|🎨|🏈)\\uFE0F?';
const MARK_RE = new RegExp( MARK, 'gu' );
const LEAK_RE = new RegExp( `${ MARK }|<!--`, 'gu' );

// Google's Markdown export escapes punctuation. \* stays escaped so literal asterisks survive.
export const unescapeGoogle = ( s ) => s.replace( /\\([!#<>\-=|\[\]()+.`~{}_&:'"])/g, '$1' );

export function stripMarkers( s ) {
	return s
		// A marker straight after an opening ** or _ takes its trailing space with it.
		.replace( new RegExp( `(\\*\\*|__|\\*|_)(?:\\s*${ MARK })+[ \\t]*`, 'gu' ), '$1' )
		.replace( new RegExp( `[ \\t]*${ MARK }`, 'gu' ), '' )
		.trim();
}

// Plain comments and Google's escaped form (\<\!-- ... \--\>).
export function stripComments( s ) {
	return s.replace( /\\?<\\?!--[\s\S]*?\\?--\\?>/g, '' );
}

export function findLeaks( html ) {
	return [ ...html.matchAll( LEAK_RE ) ].map( ( m ) => html.slice( Math.max( 0, m.index - 40 ), m.index + m[ 0 ].length + 40 ) );
}

export function parseFlags( heading ) {
	const flags = [ ...heading.matchAll( MARK_RE ) ].map( ( m ) => FLAGS[ m[ 0 ].replace( /️/g, '' ) ] );
	return { text: stripMarkers( heading ).replace( /\*\*/g, '' ).trim(), flags: [ ...new Set( flags ) ] };
}

export const slugify = ( s ) => s.toLowerCase().replace( /<[^>]+>|[`*]/g, '' ).replace( /[^a-z0-9]+/g, '-' ).replace( /^-|-$/g, '' ).slice( 0, 60 );
