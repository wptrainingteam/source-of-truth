// The shared site header: brand mark for the current release, a version picker, find and theme buttons.
import { esc, parseDate as parse } from './render.mjs';

const BLOGS = { gutenbergtimes: 'gt', nomadblog: 'nomad' };

// One picker entry per release, built from its release.json.
export function versionEntry( version, slug, meta = {} ) {
	const date = parse( meta.releaseDate ) ?? parse( meta.published );
	return {
		version,
		path: `/${ slug }/`,
		year: date?.getUTCFullYear() ?? '',
		status: meta.published ? '' : 'Upcoming',
		released: parse( meta.releaseDate )?.toLocaleDateString( 'en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' } ) ?? '',
		blog: BLOGS[ meta.source?.type ] ?? '',
		codename: meta.codename ?? '',
	};
}

export function renderHeader( current, all ) {
	const options = all.map( ( r ) => `          <option value="/${ esc( r.slug ) }/"${ r.version === current ? ' selected' : '' }>WordPress ${ esc( r.version ) }</option>` ).join( '\n' );
	const links = all.map( ( r ) => `<li><a href="/${ esc( r.slug ) }/"${ r.version === current ? ' aria-current="page"' : '' }>WordPress ${ esc( r.version ) }</a></li>` ).join( '' );
	const versions = JSON.stringify( all.map( ( r ) => r.entry ?? versionEntry( r.version, r.slug ) ) ).replace( /</g, '\\u003c' );
	return `<header class="sot-header">
  <div class="sot-wrap">
    <button class="sot-rail-toggle" type="button" data-sot-drawer-toggle aria-expanded="false" aria-controls="toc" aria-label="Open contents" title="Open contents">
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4.75" y="4.75" width="14.5" height="14.5" rx="1.25"/><path d="M9.25 5v14"/></svg>
    </button>
    <a class="sot-brand" href="/">
      <span class="sot-brand__mark" aria-hidden="true">${ esc( current ) }</span>
      <span class="sot-brand__text"><b>Source of Truth</b><span>Everything in WordPress ${ esc( current ) }</span></span>
    </a>
    <div class="sot-header__actions">
      <div class="sot-picker" data-sot-picker>
        <select class="sot-picker__fallback" aria-label="WordPress version" onchange="location.href=this.value">
${ options }
        </select>
        <noscript><ul class="sot-picker__fallback">${ links }</ul></noscript>
      </div>
      <button class="sot-btn sot-btn--ghost sot-btn--icon sot-header-find" type="button" data-sot-find aria-haspopup="dialog" aria-label="Find in this edition">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-5-5"/></svg>
      </button>
      <button class="sot-btn sot-btn--ghost sot-btn--icon sot-theme-toggle" type="button" data-sot-theme-toggle aria-label="Toggle dark mode">
        <svg class="sot-icon-sun" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="sot-icon-moon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>
      </button>
    </div>
  </div>
</header>
<script>document.documentElement.setAttribute('data-sot-version', ${ JSON.stringify( current ) });window.SOT_VERSIONS = ${ versions };</script>`;
}
