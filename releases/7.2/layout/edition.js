/* ==========================================================================
   WordPress 7.2 edition demos. Each demo is optional and self-contained:
   if its markup isn't on the page, it does nothing.
   ========================================================================== */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SOT = window.SOT || { toast: function () {} };
  function el(tag, attrs, html) { var e = document.createElement(tag); for (var k in (attrs || {})) e.setAttribute(k, attrs[k]); if (html != null) e.innerHTML = html; return e; }
  function icon(d, size) { return '<svg aria-hidden="true" width="' + (size || 16) + '" height="' + (size || 16) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>'; }
  /* ---------- Hero: replace the placeholder ---------- */
  var heroBtn = $('#edHeroBtn');
  if (heroBtn) {
    var lorem = $('#edHeroLorem'), real = $('#edHeroReal'), state = $('#edHeroState');
    var full = real.textContent, filled = false, timer;
    heroBtn.addEventListener('click', function () {
      filled = !filled; clearInterval(timer);
      lorem.hidden = filled; real.hidden = !filled;
      state.textContent = filled ? 'Edited' : 'Placeholder';
      state.classList.toggle('is-live', filled);
      heroBtn.textContent = filled ? 'Back to placeholder' : 'Replace placeholder';
      if (filled && !reduced) {
        var n = 0; real.textContent = ''; real.classList.add('is-typing');
        timer = setInterval(function () {
          n += 1; real.textContent = full.slice(0, n);
          if (n >= full.length) { clearInterval(timer); real.classList.remove('is-typing'); }
        }, 42);
      } else real.textContent = full;
    });
  }

  /* Ipsum, Notes, design tools, states, Global Styles and Gallery are
     recreations of the real 7.2 UI: see recreations.js. */

  /* ---------- Icon block: keyword search, over real @wordpress/icons (wp-icons.js) ---------- */
  var iq = $('#edIconQ'), ir = $('#edIconResults');
  if (iq && ir && window.WPICONLIB) {
    var lib = WPICONLIB.map(function (x) { return { name: x.l, svg: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5">' + x.b + '</svg>', kw: (x.l + ' ' + x.s.replace(/-/g, ' ') + ' ' + x.k.join(' ')).toLowerCase(), keys: x.k.join(', ') }; });
    function renderIcons() {
      var q = iq.value.trim().toLowerCase();
      var hits = lib.filter(function (i) { return !q || i.kw.indexOf(q) > -1; });
      ir.innerHTML = hits.length
        ? hits.map(function (i) { return '<span title="' + i.name + (i.keys ? ' · keywords: ' + i.keys : '') + '">' + i.svg + i.name + '</span>'; }).join('')
        : '<span>No matches. Try “delete” or “arrow”.</span>';
    }
    iq.addEventListener('input', renderIcons);
    renderIcons();
  }

  /* ---------- Select all speed bars animate into view ---------- */
  var speed = $('#edSpeed');
  if (speed) {
    var bars = $$('i[data-w]', speed);
    var go = function () { bars.forEach(function (b) { b.style.width = b.getAttribute('data-w'); }); };
    if ('IntersectionObserver' in window && !reduced) {
      var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { go(); io.disconnect(); } }, { threshold: .5 });
      io.observe(speed);
    } else go();
  }
})();
