// Audience filter, table of contents highlight, reading progress and back to top.
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('sot:' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('sot:' + k, JSON.stringify(v)); } catch (e) {} }
  };
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var sections = $$('main .section[data-tags]');
  var targets = $$('main .section[data-tags], main article[data-tags]');
  var tocLink = function (el) { return $('#tocList a[href="#' + el.id + '"]'); };

  /* Audience filter */
  var chipWrap = $('#chips');
  var pills = chipWrap ? $$('.pill', chipWrap) : [];
  var known = pills.map(function (b) { return b.getAttribute('data-aud'); });
  var selected = store.get('aud', []).filter(function (a) { return known.indexOf(a) > -1; });
  var hits = function (el) {
    var raw = el.getAttribute('data-tags');
    if (!selected.length || !raw) return true;
    var tags = raw.split(',');
    return tags.indexOf('all') > -1 || tags.some(function (t) { return selected.indexOf(t) > -1; });
  };
  function applyFilter() {
    var matched = 0;
    pills.forEach(function (b) {
      var a = b.getAttribute('data-aud');
      b.setAttribute('aria-pressed', String(a === 'all' ? selected.length === 0 : selected.indexOf(a) > -1));
    });
    targets.forEach(function (el) {
      var hit = hits(el);
      el.classList.toggle('is-dim', !hit);
      var a = tocLink(el);
      if (a) a.classList.toggle('is-dim', !hit);
    });
    sections.forEach(function (s) { if (hits(s)) matched++; });
    var label = $('#matchLabel');
    if (label) label.textContent = selected.length ? matched + ' of ' + sections.length + ' sections are for you.' : 'Showing all ' + sections.length + ' sections.';
  }
  pills.forEach(function (b) {
    b.addEventListener('click', function () {
      var a = b.getAttribute('data-aud');
      if (a === 'all') selected = [];
      else selected = selected.indexOf(a) > -1 ? selected.filter(function (x) { return x !== a; }) : selected.concat([a]);
      store.set('aud', selected); applyFilter();
    });
  });
  applyFilter();

  /* Table of contents: closed on small screens, closes after a pick */
  var details = $('#tocDetails');
  if (details) {
    var syncTocOpen = function () { details.open = window.innerWidth >= 1024; };
    syncTocOpen();
    var lastWide = window.innerWidth >= 1024;
    window.addEventListener('resize', function () { var wide = window.innerWidth >= 1024; if (wide !== lastWide) { lastWide = wide; syncTocOpen(); } });
    $$('a', details).forEach(function (a) { a.addEventListener('click', function () { if (window.innerWidth < 1024) details.open = false; }); });
  }

  /* Scroll spy, progress, back to top */
  var sectionLinks = sections.map(tocLink);
  var progress = $('#progress'), toTop = $('#toTop');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    if (toTop) toTop.classList.toggle('show', h.scrollTop > 900);
    var current = -1, line = window.innerHeight * 0.3;
    sections.forEach(function (s, i) { if (s.getBoundingClientRect().top < line) current = i; });
    sectionLinks.forEach(function (a, i) {
      if (!a) return;
      a.classList.toggle('is-current', i === current);
      if (i === current) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); });
})();
