// The shared site header: brand mark for the current release and a version switcher.
import { esc } from './render.mjs';

export function renderHeader( current, all ) {
	const options = all.map( ( r ) => `        <option value="/${ esc( r.slug ) }/"${ r.version === current ? ' selected' : '' }>WordPress ${ esc( r.version ) }</option>` ).join( '\n' );
	const links = all.map( ( r ) => `<li><a href="/${ esc( r.slug ) }/"${ r.version === current ? ' aria-current="page"' : '' }>WordPress ${ esc( r.version ) }</a></li>` ).join( '' );
	return `<header class="site-header">
  <div class="wrap">
    <a class="brand" href="/">
      <span class="brand-mark" aria-hidden="true">${ esc( current ) }</span>
      <span class="brand-text"><b>Source of Truth</b><span>WordPress ${ esc( current ) }</span></span>
    </a>
    <div class="version-switch">
      <select aria-label="WordPress version" onchange="location.href=this.value">
${ options }
      </select>
      <noscript><ul class="version-list">${ links }</ul></noscript>
    </div>
  </div>
</header>`;
}
