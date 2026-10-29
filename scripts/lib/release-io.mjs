// Persist a Structure to releases/<version>/ and read it back.
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DEFAULT_META = {
	version: '', title: '', releaseDate: '', gutenbergRange: '',
	author: { name: '', url: '' }, published: '', updated: '',
	source: { type: '', id: '', url: '' }, layout: 'generic',
	milestones: { beta1: '', rc1: '', final: '' },
};
const DEEP = [ 'author', 'source', 'milestones' ];

const SAFE = /^[A-Za-z0-9][A-Za-z0-9 .\-/&']*$/;
const scalar = ( s ) => ( SAFE.test( s ) && !s.endsWith( ' ' ) ? s : JSON.stringify( s ) );
const list = ( a ) => ( a.every( ( x ) => SAFE.test( x ) && !x.endsWith( ' ' ) ) ? `[${ a.join( ', ' ) }]` : JSON.stringify( a ) );
const unscalar = ( v ) => ( v.startsWith( '"' ) ? JSON.parse( v ) : v );
const unlist = ( v ) => {
	if ( v.startsWith( '["' ) ) return JSON.parse( v );
	const inner = v.slice( 1, -1 ).trim();
	return inner ? inner.split( ',' ).map( ( x ) => x.trim() ) : [];
};

function frontmatter( fields, body ) {
	const lines = Object.entries( fields ).map( ( [ k, v ] ) => `${ k }: ${ Array.isArray( v ) ? list( v ) : scalar( v ) }` );
	return `---\n${ lines.join( '\n' ) }\n---\n\n${ body }\n`;
}

function parse( text ) {
	const m = text.match( /^---\n([\s\S]*?)\n---\n([\s\S]*)$/ );
	const data = {};
	for ( const line of m[ 1 ].split( '\n' ) ) {
		const i = line.indexOf( ': ' );
		const k = line.slice( 0, i );
		const v = line.slice( i + 2 );
		data[ k ] = v.startsWith( '[' ) ? unlist( v ) : unscalar( v );
	}
	return { data, body: m[ 2 ].replace( /^\n/, '' ).replace( /\n$/, '' ) };
}

const body = ( text ) => text.replace( /\n$/, '' );
const pad = ( n, w ) => String( n ).padStart( w, '0' );

function merge( base, meta ) {
	const out = { ...base, ...meta };
	for ( const k of DEEP ) out[ k ] = { ...base[ k ], ...meta[ k ] };
	return out;
}

export function writeRelease( dir, structure, meta = {} ) {
	mkdirSync( dir, { recursive: true } );
	const jsonPath = join( dir, 'release.json' );
	const existing = existsSync( jsonPath ) ? JSON.parse( readFileSync( jsonPath, 'utf8' ) ) : {};
	writeFileSync( jsonPath, JSON.stringify( merge( merge( DEFAULT_META, existing ), meta ), null, '\t' ) + '\n' );

	const content = join( dir, 'content' );
	rmSync( content, { recursive: true, force: true } );
	mkdirSync( content, { recursive: true } );
	writeFileSync( join( content, '00-intro.md' ), structure.intro + '\n' );
	if ( structure.changelog ) writeFileSync( join( content, 'changelog.md' ), structure.changelog + '\n' );
	if ( structure.punted ) writeFileSync( join( content, 'punted.md' ), structure.punted + '\n' );

	structure.sections.forEach( ( sec, i ) => {
		const sdir = join( content, `${ pad( ( i + 1 ) * 10, 2 ) }-${ sec.slug }` );
		mkdirSync( sdir );
		const sf = { title: sec.title, slug: sec.slug };
		if ( sec.tags.length ) sf.tags = sec.tags;
		writeFileSync( join( sdir, '_section.md' ), frontmatter( sf, sec.body ) );
		sec.items.forEach( ( it, j ) => {
			const f = { title: it.title, slug: it.slug, tags: it.tags };
			if ( it.flags.length ) f.flags = it.flags;
			writeFileSync( join( sdir, `${ pad( ( j + 1 ) * 10, 3 ) }-${ it.slug }.md` ), frontmatter( f, it.body ) );
		} );
	} );
}

export function readRelease( dir ) {
	const meta = merge( DEFAULT_META, JSON.parse( readFileSync( join( dir, 'release.json' ), 'utf8' ) ) );
	const content = join( dir, 'content' );
	const opt = ( f ) => ( existsSync( join( content, f ) ) ? body( readFileSync( join( content, f ), 'utf8' ) ) : '' );

	const sections = readdirSync( content, { withFileTypes: true } )
		.filter( ( e ) => e.isDirectory() )
		.map( ( e ) => e.name )
		.sort()
		.map( ( name ) => {
			const sdir = join( content, name );
			const { data, body: sbody } = parse( readFileSync( join( sdir, '_section.md' ), 'utf8' ) );
			const items = readdirSync( sdir )
				.filter( ( f ) => f !== '_section.md' && f.endsWith( '.md' ) )
				.sort()
				.map( ( f ) => {
					const it = parse( readFileSync( join( sdir, f ), 'utf8' ) );
					return { title: it.data.title, slug: it.data.slug, tags: it.data.tags ?? [], flags: it.data.flags ?? [], body: it.body };
				} );
			return { title: data.title, slug: data.slug, tags: data.tags ?? [], body: sbody, items };
		} );

	return { meta, structure: { intro: opt( '00-intro.md' ), changelog: opt( 'changelog.md' ), punted: opt( 'punted.md' ), sections } };
}
