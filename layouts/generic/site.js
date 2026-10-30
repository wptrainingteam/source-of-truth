/* ==========================================================================
   Source of Truth — shared shell behavior.
   Works on any page built from the sot:* slots (see the wp-sot-site skill).
   Everything here is progressive: the page reads fine with JavaScript off.
   Exposes window.SOT for edition scripts (items list, random jump, toast).
   ========================================================================== */
(function () {
  'use strict';

  var doc = document, root = doc.documentElement;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var VERSION = root.getAttribute('data-sot-version') || 'unknown';
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('sot:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('sot:' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  var svg = function (d, size) {
    return '<svg aria-hidden="true" width="' + (size || 18) + '" height="' + (size || 18) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>';
  };
  var ICON = {
    link: 'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7',
    check: 'M20 6 9 17l-5-5',
    chev: 'M6 9l6 6 6-6',
    close: 'M18 6 6 18M6 6l12 12'
  };
  root.classList.add('sot-js');

  /* ---------- Toast ---------- */
  var toastEl = doc.createElement('div');
  toastEl.className = 'sot-toast'; toastEl.setAttribute('role', 'status'); toastEl.setAttribute('aria-live', 'polite');
  doc.body.appendChild(toastEl);
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add('is-on');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 1800);
  }

  /* ---------- Theme (light / dark / system) ---------- */
  var savedTheme = store.get('theme', null);
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  $$('[data-sot-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark' ||
        (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next); store.set('theme', next);
      btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  });

  /* ---------- Version picker ---------- */
  // Each release's dot in the picker. A release not listed here uses the accent color.
  var SWATCH = { '7.2': '#3858E9', '7.1': '#B4462E', '7.0': '#2F6B5E', '6.9': '#7A4BB0', '6.8': '#A35A00', '6.7': '#1F6FA8',
    '6.6': '#9C2F5B', '6.5': '#4E6B1E', '6.4': '#5A5AA8', '6.3': '#8A6A1F', '6.2': '#3D6E8C' };
  function versionHref(v) {
    if (v.url && v.version !== VERSION) return v.url;
    // On a server, use the site path. Opened from disk, link to the sibling folder.
    // dist/index.html is the newest page at the root; every other page sits in its own folder.
    if (location.protocol === 'file:') return (/\/\d+-\d+\/(index\.html)?$/.test(location.pathname) ? '../' : '') + v.path.replace(/^\/|\/$/g, '') + '/index.html';
    return v.path;
  }
  $$('[data-sot-picker]').forEach(function (picker) {
    var list = (window.SOT_VERSIONS || []).map(function (v) { v.swatch = v.swatch || SWATCH[v.version] || 'var(--sot-accent)'; return v; });
    if (!list.length) return;
    // An edition not yet in versions.js still shows its own number, not the newest one's.
    var current = list.filter(function (v) { return v.version === VERSION; })[0] ||
      { version: VERSION, swatch: 'var(--sot-accent)', status: '' };
    var id = 'sot-picker-panel';
    picker.innerHTML =
      '<button class="sot-picker__button" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="' + id + '">' +
        '<span class="sot-swatch" style="background:' + current.swatch + '"></span>' +
        '<span><span class="sot-picker__word">WordPress </span>' + current.version + '</span>' +
        (current.status ? '<span class="sot-picker__status">' + current.status + '</span>' : '') +
        '<span class="sot-chev">' + svg(ICON.chev, 16) + '</span>' +
      '</button>' +
      '<div class="sot-picker__panel" id="' + id + '" hidden>' +
        '<p class="sot-picker__intro">Every edition of the Source of Truth, newest first.</p>' +
        groupHTML(list, current) +
        archiveHTML(list) +
      '</div>';
    var btn = $('.sot-picker__button', picker), panel = $('.sot-picker__panel', picker);
    function options() { return $$('.sot-picker__option', panel); }
    function open() {
      panel.hidden = false; btn.setAttribute('aria-expanded', 'true');
      var cur = $('[aria-current="page"]', panel) || options()[0];
      if (cur) {
        cur.focus({ preventScroll: true });
        // Scroll only the panel, never the page.
        if (cur.offsetTop + cur.offsetHeight > panel.clientHeight) panel.scrollTop = cur.offsetTop - panel.clientHeight / 2;
      }
    }
    function close(focusBtn) { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); if (focusBtn) btn.focus(); }
    btn.addEventListener('click', function () { panel.hidden ? open() : close(); });
    btn.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { e.preventDefault(); open(); } });
    panel.addEventListener('keydown', function (e) {
      var opts = options(), i = opts.indexOf(doc.activeElement);
      if (e.key === 'Escape') { e.preventDefault(); close(true); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); (opts[i + 1] || opts[0]).focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); (opts[i - 1] || opts[opts.length - 1]).focus(); }
      else if (e.key === 'Home') { e.preventDefault(); opts[0].focus(); }
      else if (e.key === 'End') { e.preventDefault(); opts[opts.length - 1].focus(); }
      else if (e.key === 'Tab') { close(); }
    });
    doc.addEventListener('click', function (e) { if (!picker.contains(e.target)) close(); });
  });
  // Where each published edition lives. Counts come from the release list, so they stay right as editions are added.
  function archives() { return [
    { key: 'gt', name: 'Gutenberg Times', url: 'https://gutenbergtimes.com/tag/source-of-truth/' },
    { key: 'nomad', name: 'Nomad blog', url: 'https://nomad.blog/tag/source-of-truth/' }
  ]; }
  function archiveHTML(list) {
    var rows = archives().map(function (a) {
      var eds = list.filter(function (v) { return v.blog === a.key; });
      if (!eds.length) return '';
      var range = eds[eds.length - 1].version + (eds.length > 1 ? '–' + eds[0].version : '');
      return '<li><a class="sot-archive" href="' + a.url + '">' +
        '<span class="sot-archive__name">' + a.name + '</span>' +
        '<span class="sot-archive__meta">' + eds.length + ' edition' + (eds.length === 1 ? '' : 's') + ' · WordPress ' + range + '</span>' +
        '<span class="sot-archive__go" aria-hidden="true">↗</span></a></li>';
    }).join('');
    return '<div class="sot-picker__foot"><p class="sot-picker__foot-title">Archives</p><ul class="sot-archives">' + rows + '</ul></div>';
  }
  function groupHTML(list, current) {
    var out = '', year = null;
    list.forEach(function (v, i) {
      if (v.year !== year) {
        if (year !== null) out += '</ul>';
        year = v.year;
        out += '<p class="sot-picker__year" id="sot-year-' + year + '">' + year + '</p><ul class="sot-picker__group" aria-labelledby="sot-year-' + year + '">';
      }
      var isCur = v === current;
      var meta = (v.codename ? '<b style="font-size:13px;font-weight:500;color:var(--sot-ink-2)">' + v.codename + '</b><br>' : '') +
        (v.status ? '<span class="sot-picker__status">' + v.status + '</span>' : (v.released || ''));
      out += '<li><a class="sot-picker__option" href="' + versionHref(v) + '"' + (isCur ? ' aria-current="page"' : '') + '>' +
        '<span class="sot-picker__check">' + (isCur ? svg(ICON.check, 18) : '') + '</span>' +
        '<span class="sot-swatch" style="background:' + v.swatch + '"></span>' +
        '<b>WordPress ' + v.version + '</b>' +
        '<span class="sot-picker__meta">' + meta + '</span></a></li>';
      if (i === list.length - 1) out += '</ul>';
    });
    return out;
  }

  /* ---------- Content model: sections, items, tags, refs ---------- */
  function slug(t) { return t.toLowerCase().replace(/[`'’"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 64); }
  function parseTags(el) {
    if (!el) return null;
    var m = el.textContent.match(/\[([^\]]+)\]/g);
    return m ? m.map(function (t) { return t.slice(1, -1).trim().toLowerCase(); }) : null;
  }
  var sections = $$('.sot-section');
  var items = [];
  sections.forEach(function (sec) {
    var h2 = $('.sot-section__head h2', sec);
    if (h2 && !sec.id) sec.id = slug(h2.textContent);
    var secTags = parseTags($('.sot-section__head .sot-tags', sec));
    $$('.sot-item', sec).forEach(function (item) {
      var h3 = $('.sot-item__title', item);
      if (h3 && !item.id) item.id = slug(h3.textContent);
      var tags = parseTags($(':scope > .sot-tags, .sot-item__head .sot-tags', item)) || secTags || [];
      item.dataset.tags = tags.join(',');
      item._sot = { section: sec, title: h3 ? h3.textContent.trim() : item.id, tags: tags };
      items.push(item);
    });
  });

  // Tag lines -> filter buttons (text stays "[tag]" so browser Find still matches)
  $$('.sot-tags').forEach(function (line) {
    var tags = parseTags(line);
    if (!tags) return;
    line.setAttribute('aria-label', 'Audience');
    line.innerHTML = tags.map(function (t) {
      return '<button type="button" class="sot-tag" data-sot-tag="' + t + '" title="Show only items for ' + t + '">[' + t + ']</button>';
    }).join('');
  });

  // Inline references: links whose text is "#12345" or "r64677" get the compact ref style
  $$('.sot-content a, .sot-intro a').forEach(function (a) {
    if (/^(#\d{3,6}|r\d{4,6})$/.test(a.textContent.trim())) a.classList.add('sot-ref');
  });

  /* ---------- Anchor links on item titles ---------- */
  items.forEach(function (item) {
    var h3 = $('.sot-item__title', item);
    if (!h3) return;
    var b = doc.createElement('button');
    b.type = 'button'; b.className = 'sot-anchor'; b.innerHTML = svg(ICON.link, 16);
    b.setAttribute('aria-label', 'Copy link to “' + item._sot.title + '”');
    b.addEventListener('click', function () {
      var url = location.href.split('#')[0] + '#' + item.id;
      history.replaceState(null, '', '#' + item.id);
      var done = function () { b.classList.add('is-copied'); toast('Link copied'); setTimeout(function () { b.classList.remove('is-copied'); }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { toast('Link added to the address bar'); });
      else toast('Link added to the address bar');
    });
    h3.appendChild(b);
  });

  /* ---------- Table of contents ---------- */
  var startAnchors = $$('[data-sot-start]').filter(function (el) { return el.id; });
  var toc = $('[data-sot-toc]');
  var tocLinks = {}, tocApi = { open: function () {} };
  if (toc) {
    var ol = $('ol', toc) || toc.appendChild(doc.createElement('ol'));
    ol.innerHTML = ''; // The built list is the no-JavaScript fallback; rebuild it with counts and the Start here group.
    // 00 Start here: the intro, built from anything marked data-sot-start.
    if (startAnchors.length) {
      var sli = doc.createElement('li'); sli.className = 'sot-toc__section sot-toc__section--start';
      sli.innerHTML = '<a href="#top" data-label="Start here"><span class="n">00</span><span class="t">Start here</span></a>';
      var ssub = doc.createElement('ol'); ssub.className = 'sot-toc__items';
      startAnchors.forEach(function (el) {
        var ili = doc.createElement('li');
        ili.innerHTML = '<a href="#' + el.id + '"><span class="sot-tick sot-tick--start" aria-hidden="true"></span><span>' + el.getAttribute('data-sot-start') + '</span></a>';
        tocLinks[el.id] = $('a', ili); ssub.appendChild(ili);
      });
      tocLinks.top = $('a', sli);
      sli.appendChild(ssub); ol.appendChild(sli);
    }
    sections.forEach(function (sec, si) {
      var h2 = $('.sot-section__head h2', sec);
      var li = doc.createElement('li'); li.className = 'sot-toc__section';
      var n = $$('.sot-item', sec).length;
      li.innerHTML = '<a href="#' + sec.id + '" data-label="' + (sec.getAttribute('data-toc-title') || h2.textContent).replace(/"/g, '&quot;') + '"><span class="n">' + String(si + 1).padStart(2, '0') + '</span><span class="t">' + (sec.getAttribute('data-toc-title') || h2.textContent) + '</span><span class="c" data-sec-count="' + sec.id + '" data-total="' + n + '">' + n + '</span></a>';
      var sub = doc.createElement('ol'); sub.className = 'sot-toc__items';
      $$('.sot-item', sec).forEach(function (item) {
        var ili = doc.createElement('li');
        ili.innerHTML = '<a href="#' + item.id + '"><span class="sot-tick" aria-hidden="true"></span><span>' + (item.getAttribute('data-toc-title') || item._sot.title) + '</span></a>';
        tocLinks[item.id] = $('a', ili);
        sub.appendChild(ili);
      });
      tocLinks[sec.id] = $('a', li);
      li.appendChild(sub); ol.appendChild(li);
    });
    // Drawer behavior on smaller screens
    var scrim = doc.createElement('div'); scrim.className = 'sot-scrim'; doc.body.appendChild(scrim);
    var lastFocus = null;
    function openToc(focusEl) {
      lastFocus = doc.activeElement; toc.classList.add('is-open'); scrim.classList.add('is-on');
      syncToggle();
      var cur = focusEl || $('a.is-current', toc) || $('a', toc);
      setTimeout(function () { (cur || toc).focus({ preventScroll: !!focusEl }); if (cur && !focusEl) cur.scrollIntoView({ block: 'center' }); if (focusEl) toc.scrollTop = 0; }, 50);
    }
    tocApi.open = openToc;
    // Wide screens: the rail can fold down to a narrow strip. Open by default; remembered per visitor.
    var layout = toc.closest('.sot-layout');
    // One header toggle: folds the rail on wide screens, opens it as a drawer on smaller ones (closed by default).
    var drawerMode = function () { return window.innerWidth < 1100; };
    function syncToggle() {
      var railOpen = !(layout && layout.classList.contains('is-rail-closed')), drawerOpen = toc.classList.contains('is-open');
      $$('[data-sot-rail-toggle]').forEach(function (b) {
        b.setAttribute('aria-expanded', String(railOpen));
        var l = railOpen ? 'Collapse contents' : 'Expand contents'; b.setAttribute('aria-label', l); b.title = l + '  [';
      });
      $$('[data-sot-drawer-toggle]').forEach(function (b) {
        b.setAttribute('aria-expanded', String(drawerOpen));
        var l = drawerOpen ? 'Close contents' : 'Open contents'; b.setAttribute('aria-label', l); b.title = l;
      });
      root.classList.toggle('sot-drawer-open', drawerOpen && drawerMode());
    }
    function setRail(open, save) {
      if (!layout) return;
      layout.classList.toggle('is-rail-closed', !open);
      syncToggle();
      if (save) store.set('rail', open ? 1 : 0);
    }
    setRail(store.get('rail', 1) !== 0, false);
    function closeToc() {
      toc.classList.remove('is-open'); scrim.classList.remove('is-on');
      syncToggle();
      if (lastFocus) lastFocus.focus();
    }
    function toggleRail() { setRail(layout.classList.contains('is-rail-closed'), true); }
    $$('[data-sot-rail-toggle]').forEach(function (b) { b.addEventListener('click', function () { toggleRail(); b.focus(); }); });
    $$('[data-sot-drawer-toggle]').forEach(function (b) { b.addEventListener('click', function () { toc.classList.contains('is-open') ? closeToc() : openToc(); }); });
    // "[" folds and unfolds the rail, as in the WordPress editor's sidebars.
    doc.addEventListener('keydown', function (e) {
      if (e.key !== '[' || e.metaKey || e.ctrlKey || e.altKey || drawerMode()) return;
      var t = e.target; if (t.closest && t.closest('input, textarea, select, [contenteditable], .wpui, .ed-frame')) return;
      e.preventDefault(); toggleRail();
    });
    var wasDrawer = drawerMode();
    window.addEventListener('resize', function () {
      var d = drawerMode(); if (d === wasDrawer) return; wasDrawer = d;
      if (!d && toc.classList.contains('is-open')) { toc.classList.remove('is-open'); scrim.classList.remove('is-on'); }
      syncToggle();
    });
    $$('[data-sot-toc-close]', toc).forEach(function (b) { b.addEventListener('click', closeToc); });
    scrim.addEventListener('click', closeToc);
    toc.addEventListener('click', function (e) { if (e.target.closest('a') && drawerMode()) { lastFocus = null; closeToc(); } });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && toc.classList.contains('is-open')) closeToc(); });
  }

  /* ---------- Audience filter ----------
     Filters are defined once in the page: any element with data-sot-aud="tag",
     data-sot-aud-label="Human label" and data-sot-aud-desc="…". Items that don't
     match fold down to their title (with “Show anyway”) instead of fading out. */
  var selected = store.get('audience', []);
  if (!Array.isArray(selected)) selected = [];
  var AUD = [], AUDL = {};
  $$('[data-sot-aud-label]').forEach(function (el) {
    var t = el.getAttribute('data-sot-aud');
    if (AUDL[t]) return;
    AUDL[t] = el.getAttribute('data-sot-aud-label');
    AUD.push({ tag: t, label: AUDL[t], desc: el.getAttribute('data-sot-aud-desc') || '' });
  });
  selected = selected.filter(function (t) { return AUDL[t]; });
  function audLabel(t) { return AUDL[t] || t.replace(/^./, function (c) { return c.toUpperCase(); }); }
  function itemMatches(item) {
    if (!selected.length) return true;
    var t = item._sot.tags;
    return !t.length || t.indexOf('all') > -1 || t.some(function (x) { return selected.indexOf(x) > -1; });
  }
  var X_ICON = '<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 7 7 17M7 7l10 10"/></svg>';
  // Folded items get a one-line note with a way to read them anyway.
  items.forEach(function (item) {
    var head = $('.sot-item__title', item);
    if (!head) return;
    var note = doc.createElement('p'); note.className = 'sot-out';
    note.innerHTML = '<span></span><button type="button" class="sot-out__show" aria-expanded="false">Show anyway</button>';
    head.insertAdjacentElement('afterend', note);
    $('button', note).addEventListener('click', function () {
      var peek = !item.classList.contains('is-peek');
      item.classList.toggle('is-peek', peek); this.setAttribute('aria-expanded', String(peek));
      this.textContent = peek ? 'Fold it again' : 'Show anyway';
    });
  });
  function applyAudience(announce) {
    var matched = 0, label = selected.map(audLabel).join(', ');
    items.forEach(function (item) {
      var hit = itemMatches(item);
      if (hit) matched++;
      item.classList.toggle('is-out', !hit);
      if (hit) item.classList.remove('is-peek');
      var n = $('.sot-out span', item);
      if (n) n.textContent = hit ? '' : 'Not tagged ' + label + '.';
      var b = $('.sot-out__show', item); if (b && hit) { b.textContent = 'Show anyway'; b.setAttribute('aria-expanded', 'false'); }
      if (tocLinks[item.id]) tocLinks[item.id].parentNode.classList.toggle('is-out', !hit);
    });
    sections.forEach(function (sec) {
      var its = $$('.sot-item', sec), m = its.filter(itemMatches).length;
      $$('[data-sec-count="' + sec.id + '"]').forEach(function (el) {
        el.setAttribute('data-match', selected.length ? m + ' of ' + its.length : '');
        el.closest('li').classList.toggle('is-empty', !!selected.length && !m);
      });
    });
    $$('[data-sot-aud]').forEach(function (b) {
      var a = b.getAttribute('data-sot-aud');
      b.setAttribute('aria-pressed', String(a === 'everyone' ? !selected.length : selected.indexOf(a) > -1));
      if (b.classList.contains('sot-filter')) b.setAttribute('aria-label', audLabel(a) + (selected.indexOf(a) > -1 ? ', filtering. Remove filter' : ''));
    });
    $$('.sot-tag').forEach(function (b) { b.classList.toggle('is-active', selected.indexOf(b.getAttribute('data-sot-tag')) > -1); });
    var msg = selected.length
      ? '<b>' + matched + ' of ' + items.length + ' items</b> match ' + label + '. The rest are folded. <button type="button" class="sot-linkbtn" data-sot-aud-clear>Show everything</button>'
      : 'Showing all <b>' + items.length + ' items</b>.';
    $$('[data-sot-aud-status]').forEach(function (el) { el.innerHTML = msg; });
    $$('.sot-aud').forEach(renderPicker);
    root.classList.toggle('sot-filtered', !!selected.length);
    if (announce) toast(selected.length ? matched + ' items match ' + label : 'Showing everything');
  }
  function setAudience(list, announce) { selected = list; store.set('audience', selected); applyAudience(announce); }
  function toggleAudience(a, announce) {
    if (a === 'everyone') setAudience([], announce);
    else setAudience(selected.indexOf(a) > -1 ? selected.filter(function (x) { return x !== a; }) : selected.concat([a]), announce);
  }

  // Rail picker: a button that opens a multi-select list, with the active filters as removable chips.
  var CHECK = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var pickN = 0;
  $$('[data-sot-aud-picker]').forEach(function (box) {
    var id = 'sot-aud-' + (++pickN);
    box.innerHTML = '<div class="sot-aud"><span class="sot-aud__k" id="' + id + '-k">Reading as</span>' +
      '<button type="button" class="sot-aud__btn" aria-haspopup="listbox" aria-expanded="false" aria-controls="' + id + '" aria-labelledby="' + id + '-k ' + id + '-v"><span class="sot-aud__v" id="' + id + '-v"></span>' +
      '<svg class="sot-aud__chev" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<div class="sot-aud__pop" id="' + id + '" role="listbox" aria-multiselectable="true" aria-labelledby="' + id + '-k" tabindex="-1" hidden>' +
      '<div class="sot-aud__opt sot-aud__opt--all" role="option" id="' + id + '-all" data-tag="everyone" aria-selected="true"><span class="sot-aud__box sot-aud__box--radio">' + CHECK + '</span><span class="sot-aud__txt"><b>Everyone</b><span>Every item, nothing folded.</span></span></div>' +
      '<p class="sot-aud__sep" role="presentation">Or only items for</p>' +
      AUD.map(function (o, i) { return '<div class="sot-aud__opt" role="option" id="' + id + '-o' + i + '" data-tag="' + o.tag + '" aria-selected="false"><span class="sot-aud__box">' + CHECK + '</span><span class="sot-aud__txt"><b>' + o.label + '</b><span>' + o.desc + '</span></span></div>'; }).join('') +
      '<div class="sot-aud__foot"><span class="sot-aud__sum" aria-live="polite"></span><button type="button" class="sot-aud__done">Done</button></div></div>' +
      '<div class="sot-aud__active" role="group" aria-label="Active filters"></div></div>';
    var w = $('.sot-aud', box), btn = $('.sot-aud__btn', w), pop = $('.sot-aud__pop', w), opts = $$('.sot-aud__opt', w), act = 0;
    function setAct(i) { act = (i + opts.length) % opts.length; opts.forEach(function (o, j) { o.classList.toggle('is-active', j === act); }); pop.setAttribute('aria-activedescendant', opts[act].id); opts[act].scrollIntoView({ block: 'nearest' }); }
    function open() { pop.hidden = false; btn.setAttribute('aria-expanded', 'true'); setAct(Math.max(0, opts.findIndex(function (o) { return o.getAttribute('aria-selected') === 'true'; }))); pop.focus(); }
    function close(focus) { if (pop.hidden) return; pop.hidden = true; btn.setAttribute('aria-expanded', 'false'); if (focus) btn.focus(); }
    w._open = open;
    btn.addEventListener('click', function () { pop.hidden ? open() : close(true); });
    function pick(o) { if (o.dataset.tag === 'everyone') setAudience([], false); else toggleAudience(o.dataset.tag); }
    opts.forEach(function (o, i) { o.addEventListener('click', function () { setAct(i); pick(o); }); });
    $('.sot-aud__done', w).addEventListener('click', function () { close(true); });
    pop.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setAct(act + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setAct(act - 1); }
      else if (e.key === 'Home') { e.preventDefault(); setAct(0); }
      else if (e.key === 'End') { e.preventDefault(); setAct(opts.length - 1); }
      else if (e.key === ' ' || e.key === 'Enter') { if (e.target === pop) { e.preventDefault(); pick(opts[act]); } }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(true); }
    });
    doc.addEventListener('pointerdown', function (e) { if (!w.contains(e.target)) close(false); });
    w.addEventListener('focusout', function (e) { if (e.relatedTarget && !w.contains(e.relatedTarget)) close(false); });
  });
  function renderPicker(w) {
    var v = $('.sot-aud__v', w);
    v.textContent = !selected.length ? 'Everyone' : selected.length === 1 ? audLabel(selected[0]) : selected.length + ' audiences';
    $$('.sot-aud__opt', w).forEach(function (o) { o.setAttribute('aria-selected', String(o.dataset.tag === 'everyone' ? !selected.length : selected.indexOf(o.dataset.tag) > -1)); });
    var sum = $('.sot-aud__sum', w);
    if (sum) sum.textContent = selected.length ? items.filter(itemMatches).length + ' of ' + items.length + ' items' : 'All ' + items.length + ' items';
    var act = $('.sot-aud__active', w);
    act.innerHTML = selected.map(function (t) { return '<button type="button" class="sot-chip-x" data-sot-aud="' + t + '" aria-label="Remove filter: ' + audLabel(t) + '">' + audLabel(t) + X_ICON + '</button>'; }).join('') +
      (selected.length > 1 ? '<button type="button" class="sot-linkbtn" data-sot-aud-clear>Clear all</button>' : '');
    act.hidden = !selected.length;
  }
  tocApi.openAudience = function () { var w = $('.sot-aud', toc); if (w && w._open) w._open(); };
  doc.addEventListener('click', function (e) {
    var t = e.target.closest('.sot-tag');
    if (t) toggleAudience(t.getAttribute('data-sot-tag'), true);
    var a = e.target.closest('[data-sot-aud]');
    if (a && !a.classList.contains('sot-tag')) {
      var removing = a.classList.contains('sot-chip-x'), next = removing && (a.nextElementSibling || a.previousElementSibling);
      toggleAudience(a.getAttribute('data-sot-aud'), !removing);
      if (removing) { var w = a.closest ? null : null; var box = e.target.closest('.sot-aud'); var nb = box && ($('.sot-chip-x', box) || $('.sot-aud__btn', box)); if (nb) nb.focus(); }
    }
    if (e.target.closest('[data-sot-aud-clear]')) toggleAudience('everyone', true);
  });
  applyAudience(false);
  /* ---------- Reading progress, scrollspy, read tracking ---------- */
  var readKey = 'read:' + VERSION;
  var read = store.get(readKey, {});
  var progressBar = $('.sot-progress span');
  var toTop = $('.sot-to-top');
  function updateRead() {
    var n = items.filter(function (i) { return read[i.id]; }).length;
    Object.keys(tocLinks).forEach(function (id) { tocLinks[id].classList.toggle('is-read', !!read[id]); });
    $$('[data-sot-count="read"]').forEach(function (el) { el.textContent = n; });
    $$('.sot-toc__count').forEach(function (el) { el.textContent = n + ' / ' + items.length + ' read'; });
    $$('.sot-toc__meter span').forEach(function (el) { el.style.width = (items.length ? n / items.length * 100 : 0) + '%'; });
    $$('.sot-done').forEach(function (el) { el.classList.toggle('is-on', n === items.length && n > 0); });
    sections.forEach(function (sec) {
      var its = $$('.sot-item', sec), r = its.filter(function (i) { return read[i.id]; }).length;
      $$('[data-sec-count="' + sec.id + '"]').forEach(function (el) { el.setAttribute('data-read', r + ' of ' + its.length); el.classList.toggle('is-done', r === its.length && r > 0); });
    });
  }
  var ticking = false, seen = {};
  setInterval(function () {
    var now = Date.now(), changed = false;
    Object.keys(seen).forEach(function (id) {
      if (now - seen[id] >= 1200) { read[id] = 1; delete seen[id]; changed = true; }
    });
    if (changed) { store.set(readKey, read); updateRead(); }
  }, 400);
  function onScroll() {
    ticking = false;
    var h = doc.documentElement, max = h.scrollHeight - h.clientHeight;
    if (progressBar) progressBar.style.width = (max > 0 ? h.scrollTop / max * 100 : 0) + '%';
    if (toTop) toTop.classList.toggle('is-on', h.scrollTop > 1200);
    var line = window.innerHeight * 0.32, current = null, now = Date.now();
    items.forEach(function (item) {
      var r = item.getBoundingClientRect();
      if (r.top < line) current = item;
      // Candidate for "read": the item's end is on screen. It only counts once it
      // stays there for a moment, so jumping or flicking past items doesn't mark them.
      var endVisible = r.height > 0 && r.bottom > 0 && r.bottom < window.innerHeight * 0.85;
      if (endVisible && !read[item.id]) { if (!seen[item.id]) seen[item.id] = now; }
      else delete seen[item.id];
    });
    var curStart = null;
    if (!current || current.getBoundingClientRect().top > line) {
      startAnchors.forEach(function (el) { if (el.getBoundingClientRect().top < line) curStart = el; });
      if (curStart && current && current.getBoundingClientRect().top < curStart.getBoundingClientRect().top) curStart = null;
    }
    if (curStart) current = null;
    var curSec = current ? current._sot.section : null;
    // A new section's heading past the line wins over the previous section's last item.
    sections.forEach(function (sec) { var h = $('.sot-section__head', sec) || sec; if (h.getBoundingClientRect().top < line && current && sec !== curSec && sections.indexOf(sec) > sections.indexOf(curSec)) { curSec = sec; current = null; } });
    Object.keys(tocLinks).forEach(function (id) {
      var on = (current && id === current.id) || (curSec && id === curSec.id && !current) || (curStart && id === curStart.id);
      tocLinks[id].classList.toggle('is-current', !!on);
      if (on) tocLinks[id].setAttribute('aria-current', 'location'); else tocLinks[id].removeAttribute('aria-current');
    });
    var spy = current || curStart;
    if (spy && toc && window.innerWidth >= 1100 && tocLinks[spy.id]) {
      var a = tocLinks[spy.id], tr = toc.getBoundingClientRect(), ar = a.getBoundingClientRect();
      if (ar.top < tr.top + 40 || ar.bottom > tr.bottom - 40) toc.scrollTop += ar.top - tr.top - tr.height / 3;
    }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  $$('[data-sot-reset-read]').forEach(function (b) {
    b.addEventListener('click', function () { read = {}; store.set(readKey, read); updateRead(); toast('Reading progress cleared'); });
  });
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); });

  /* ---------- Counts, reading time ---------- */
  $$('[data-sot-count="items"]').forEach(function (el) { el.textContent = items.length; });
  $$('[data-sot-count="sections"]').forEach(function (el) { el.textContent = sections.length; });
  var content = $('.sot-content');
  if (content) {
    var words = (content.innerText || content.textContent).trim().split(/\s+/).length;
    var lo = Math.max(1, Math.round(words / 240)), hi = Math.max(lo, Math.round(words / 180));
    $$('[data-sot-reading-time]').forEach(function (el) { el.textContent = lo + '–' + hi + ' minute read (' + words.toLocaleString('en-US') + ' words)'; });
  }

  /* ---------- Timeline ---------- */
  $$('[data-sot-timeline]').forEach(function (tl) {
    var ms = $$('[data-date]', tl);
    var now = new Date(), next = -1;
    ms.forEach(function (li, i) {
      var d = new Date(li.getAttribute('data-date') + 'T00:00:00');
      var em = $('em', li) || li.appendChild(doc.createElement('em'));
      if (d <= now) { li.classList.add('is-done'); em.textContent = 'Done'; }
      else if (next < 0) { next = i; li.classList.add('is-next'); em.textContent = 'Up next'; }
      else em.textContent = 'Coming';
    });
    var list = $('.sot-milestones', tl);
    if (list) list.style.setProperty('--sot-ms-count', ms.length);
    var done = next < 0 ? ms.length : next;
    var pct = ms.length > 1 ? Math.min(100, Math.max(0, (done - 0.5) / (ms.length - 1) * 100)) : 0;
    var bar = $('.sot-timeline__track span', tl);
    if (bar) requestAnimationFrame(function () { bar.style.width = pct + '%'; });
    var last = ms[ms.length - 1];
    var days = last ? Math.ceil((new Date(last.getAttribute('data-date') + 'T00:00:00') - now) / 864e5) : 0;
    $$('[data-sot-countdown]', tl).forEach(function (el) {
      el.textContent = days > 1 ? days + ' days to go' : days === 1 ? 'Tomorrow' : days === 0 ? 'Today' : 'Released';
    });
    $$('[data-sot-today]', tl).forEach(function (el) { el.textContent = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }); });
    if (list && next > 0 && list.scrollWidth > list.clientWidth) {
      var pad = parseFloat(getComputedStyle(list).paddingLeft) || 0;
      list.scrollLeft = Math.max(0, ms[next - 1].getBoundingClientRect().left - list.getBoundingClientRect().left + list.scrollLeft - pad);
    }
  });

  /* ---------- Checklists ---------- */
  $$('ul.sot-checklist').forEach(function (ul, ci) {
    var key = 'check:' + VERSION + ':' + (ul.id || ci);
    var state = store.get(key, {});
    var lis = $$(':scope > li', ul);
    var meter = doc.createElement('div'); meter.className = 'sot-checklist__meter';
    meter.innerHTML = '<span class="sot-checklist__count"></span><div><span class="sot-checklist__bar"></span></div>';
    ul.parentNode.insertBefore(meter, ul);
    function update() {
      var n = lis.filter(function (li, i) { return state[i]; }).length;
      $('.sot-checklist__count', meter).textContent = n + ' of ' + lis.length + ' tested';
      $('.sot-checklist__bar', meter).style.width = (n / lis.length * 100) + '%';
    }
    lis.forEach(function (li, i) {
      var box = doc.createElement('input'); box.type = 'checkbox'; box.checked = !!state[i];
      var wrap = doc.createElement('div'); while (li.firstChild) wrap.appendChild(li.firstChild);
      box.setAttribute('aria-label', 'Tested: ' + wrap.textContent.trim().slice(0, 60));
      li.appendChild(box); li.appendChild(wrap); li.classList.toggle('is-done', box.checked);
      box.addEventListener('change', function () { state[i] = box.checked; li.classList.toggle('is-done', box.checked); store.set(key, state); update(); });
    });
    update();
  });

  /* ---------- Random item (also used by editions) ---------- */
  function goTo(item) {
    item.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + item.id);
    item.classList.remove('is-flash'); void item.offsetWidth; item.classList.add('is-flash');
  }
  function random(exclude) {
    var pool = items.filter(function (i) { return itemMatches(i) && i !== exclude && !read[i.id]; });
    if (!pool.length) pool = items.filter(function (i) { return i !== exclude; });
    var pick = pool[Math.floor(Math.random() * pool.length)];
    if (pick) { goTo(pick); toast('Landed on “' + pick._sot.title + '”'); }
    return pick;
  }
  $$('[data-sot-random]').forEach(function (b) { b.addEventListener('click', function () { random(b.closest('.sot-item')); }); });


  /* ---------- Find (⌘K): items, things to try, tags and actions ---------- */
  var tries = function () { return $$('[data-sot-try]'); };
  $$('[data-sot-count="try"]').forEach(function (el) { el.textContent = tries().length; });
  var isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  $$('[data-sot-kbd]').forEach(function (k) { k.textContent = isMac ? '⌘K' : 'Ctrl K'; });
  var finder = null, fInput, fList, fOpts = [], fActive = 0, fLast = null, fMode = '';
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function qwords(q) { return q.toLowerCase().replace(/[\[\]]/g, ' ').split(/\s+/).filter(Boolean); }
  function mark(text, ws) {
    var out = esc(text);
    ws.forEach(function (w) { if (w.length < 2) return; out = out.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![^<]*>)', 'ig'), '<mark>$1</mark>'); });
    return out;
  }
  function ownerTitle(el) {
    var it = el.closest('.sot-item'); if (it && it._sot) return it._sot.title;
    var st = el.closest('[data-sot-start]'); return st ? 'Start here · ' + st.getAttribute('data-sot-start') : '';
  }
  function secLabel(item) {
    var i = sections.indexOf(item._sot.section), h2 = $('.sot-section__head h2', item._sot.section);
    return String(i + 1).padStart(2, '0') + ' · ' + (item._sot.section.getAttribute('data-toc-title') || (h2 ? h2.textContent : ''));
  }
  function flash(el) { el.classList.remove('is-flash'); void el.offsetWidth; el.classList.add('is-flash'); }
  function goEl(el) { el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: el.offsetHeight > window.innerHeight * .7 ? 'start' : 'center' }); flash(el); }
  function actions() {
    var list = [];
    AUD.forEach(function (o) { var a = o.tag; list.push({ kind: 'tag', tag: a, label: (selected.indexOf(a) > -1 ? 'Stop reading as ' : 'Read as ') + o.label, sub: '[' + a + '] · ' + items.filter(function (i) { return i._sot.tags.indexOf(a) > -1; }).length + ' items tagged', icon: '⇄', run: function () { toggleAudience(a, true); } }); });
    if (selected.length) list.unshift({ kind: 'tag', tag: 'everyone', label: 'Show everything', sub: 'Clear the audience filters', icon: '⇄', run: function () { toggleAudience('everyone', true); } });
    list.push({ label: 'Jump to a random item', sub: 'Unread first', icon: '↗', run: function () { random(); } });
    var vs = window.SOT_VERSIONS || [], ci = -1;
    vs.forEach(function (v, i) { if (v.version === VERSION) ci = i; });
    var prev = ci > -1 ? vs[ci + 1] : null;
    if (prev) list.push({ label: 'Compare with WordPress ' + prev.version + (prev.codename ? ' “' + prev.codename + '”' : ''), sub: 'Open the ' + prev.version + ' Source of Truth', icon: prev.version, run: function () { location.href = versionHref(prev); } });
    var dark = root.getAttribute('data-theme') === 'dark' || (!root.getAttribute('data-theme') && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    list.push({ label: dark ? 'Switch to light mode' : 'Switch to dark mode', icon: dark ? '☀' : '☾', run: function () { var b = $('[data-sot-theme-toggle]'); if (b) b.click(); } });
    list.push({ label: 'Clear reading progress', icon: '↺', run: function () { var b = $('[data-sot-reset-read]'); if (b) b.click(); } });
    list.push({ label: 'Back to the top', icon: '↑', run: function () { window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); } });
    return list;
  }
  function results(q) {
    var ws = qwords(q), groups = [];
    var tagMode = /^\s*\[/.test(q);
    var tryRows = tries().map(function (el) { return { kind: 'try', label: el.getAttribute('data-sot-try'), sub: ownerTitle(el), run: function () { goEl(el); } }; });
    if (fMode === 'try' && !ws.length) return [{ title: 'Things to try', rows: tryRows }];
    if (!ws.length) {
      groups.push({ title: 'Jump to', rows: [{ kind: 'sec', n: '00', label: 'Start here', run: function () { window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); } }].concat(sections.map(function (sec, i) {
        var h2 = $('.sot-section__head h2', sec);
        return { kind: 'sec', n: String(i + 1).padStart(2, '0'), label: sec.getAttribute('data-toc-title') || h2.textContent, sub: $$('.sot-item', sec).length + ' items', run: function () { goEl(sec); } };
      })) });
      groups.push({ title: 'Things to try', rows: tryRows.slice(0, 4).concat(tryRows.length > 4 ? [{ kind: 'more', label: 'All ' + tryRows.length + ' things to try', icon: '›', keep: true, run: function () { fMode = 'try'; fInput.value = ''; render(); } }] : []) });
      groups.push({ title: 'Actions', rows: actions() });
      return groups;
    }
    var has = function (text) { text = text.toLowerCase(); return ws.every(function (w) { return text.indexOf(w) > -1; }); };
    if (!tagMode) {
      var hits = [];
      items.forEach(function (it) {
        var t = it._sot.title, body = it._bodyText || (it._bodyText = (it.textContent || '').replace(/\s+/g, ' '));
        var score = 0, why = '';
        if (has(t)) score = 100 + (t.toLowerCase().indexOf(ws[0]) === 0 ? 20 : 0);
        else if (has(it._sot.tags.join(' '))) { score = 60; why = 'Tagged [' + it._sot.tags.filter(function (x) { return ws.some(function (w) { return x.indexOf(w) > -1; }); }).join('] [') + ']'; }
        else if (has(secLabel(it))) { score = 40; why = 'In ' + secLabel(it).slice(5); }
        else if (has(body)) {
          score = 20;
          var low = body.toLowerCase(), at = low.indexOf(ws[0]);
          why = 'Mentions “' + body.slice(Math.max(0, at - 30), at + ws[0].length + 40).trim().replace(/^\S*\s/, '…') + '…”';
        }
        if (score) hits.push({ score: score, row: { kind: 'item', n: secLabel(it).slice(0, 2), label: t, sub: why || secLabel(it).slice(5) + (it._sot.tags.length ? ' · [' + it._sot.tags.join('] [') + ']' : ''), run: function () { goTo(it); } } });
      });
      startAnchors.forEach(function (el) { var l = el.getAttribute('data-sot-start'); if (has(l) || has(el.textContent)) hits.push({ score: has(l) ? 90 : 10, row: { kind: 'item', n: '00', label: l, sub: 'Start here', run: function () { goEl(el); } } }); });
      hits.sort(function (a, b) { return b.score - a.score; });
      if (hits.length) groups.push({ title: 'Items', rows: hits.slice(0, 8).map(function (h) { return h.row; }), more: hits.length > 8 ? hits.length - 8 : 0 });
      var tr = tryRows.filter(function (r) { return has(r.label + ' ' + r.sub); });
      if (tr.length) groups.push({ title: 'Things to try', rows: tr });
    }
    var acts = actions().filter(function (a) { return has(a.label + ' ' + (a.sub || '')) || (a.tag && ws.every(function (w) { return a.tag.indexOf(w) > -1; })); });
    if (acts.length) groups.push({ title: tagMode ? 'Tags' : 'Actions', rows: acts });
    return groups;
  }
  function render() {
    var q = fInput.value, ws = qwords(q), groups = results(q), html = '', idx = 0;
    fOpts = [];
    groups.forEach(function (g, gi) {
      html += '<div role="group" aria-labelledby="sot-fg' + gi + '"><p class="sot-finder__group" id="sot-fg' + gi + '">' + g.title + (g.more ? ' <span>+' + g.more + ' more, keep typing</span>' : '') + '</p>';
      g.rows.forEach(function (r) {
        var lead = r.kind === 'try' ? '<span class="sot-finder__play" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l12 7-12 7z"/></svg></span>'
          : r.n ? '<span class="sot-finder__n" aria-hidden="true">' + r.n + '</span>' : '<span class="sot-finder__ic" aria-hidden="true">' + (r.icon || '') + '</span>';
        html += '<div class="sot-finder__opt" role="option" id="sot-fo' + idx + '" data-i="' + idx + '" aria-selected="false">' + lead +
          '<span class="sot-finder__txt"><span class="sot-finder__label">' + mark(r.label, ws) + '</span>' + (r.sub ? '<span class="sot-finder__sub">' + mark(r.sub, ws) + '</span>' : '') + '</span><kbd aria-hidden="true">↵</kbd></div>';
        fOpts.push(r); idx++;
      });
      html += '</div>';
    });
    if (!fOpts.length) html = '<p class="sot-finder__empty">Nothing matches “' + esc(q) + '”. Try a block name, a tag like <b>[developer]</b>, or a PR number.</p>';
    if (fMode === 'try' && !ws.length) html = '<button type="button" class="sot-finder__back" data-back>‹ Everything</button>' + html;
    fList.innerHTML = html;
    var back = $('[data-back]', fList); if (back) back.addEventListener('click', function () { fMode = ''; render(); fInput.focus(); });
    $$('.sot-finder__opt', fList).forEach(function (o) {
      o.addEventListener('mousemove', function () { if (fActive !== +o.dataset.i) setActive(+o.dataset.i, true); });
      o.addEventListener('click', function () { choose(+o.dataset.i); });
    });
    $('.sot-finder__status', finder).textContent = fOpts.length ? fOpts.length + ' results' : 'No results';
    setActive(0);
  }
  function setActive(i, noScroll) {
    if (!fOpts.length) { fInput.removeAttribute('aria-activedescendant'); return; }
    fActive = (i + fOpts.length) % fOpts.length;
    $$('.sot-finder__opt', fList).forEach(function (o) { o.setAttribute('aria-selected', String(+o.dataset.i === fActive)); });
    var el = $('#sot-fo' + fActive, fList);
    fInput.setAttribute('aria-activedescendant', 'sot-fo' + fActive);
    if (el && !noScroll) el.scrollIntoView({ block: 'nearest' });
  }
  function choose(i) { var r = fOpts[i]; if (!r) return; if (r.keep) { r.run(); fInput.focus(); return; } closeFinder(true); setTimeout(r.run, 30); }
  function buildFinder() {
    finder = doc.createElement('div'); finder.className = 'sot-finder'; finder.hidden = true;
    finder.innerHTML = '<div class="sot-finder__scrim" data-close></div><div class="sot-finder__panel" role="dialog" aria-modal="true" aria-label="Find in WordPress ' + VERSION + '">' +
      '<div class="sot-finder__bar"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-5-5"/></svg>' +
      '<input type="text" role="combobox" aria-expanded="true" aria-controls="sot-finder-list" aria-autocomplete="list" aria-label="Search items, things to try, tags and actions" placeholder="Search items, demos, [tags] and actions" autocomplete="off" spellcheck="false">' +
      '<button type="button" class="sot-finder__esc" data-close aria-label="Close">esc</button></div>' +
      '<div class="sot-finder__list" id="sot-finder-list" role="listbox" aria-label="Results"></div>' +
      '<div class="sot-finder__foot" aria-hidden="true"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>↵</kbd> go</span><span><kbd>[</kbd> type a tag</span><span class="sot-finder__status"></span></div></div>';
    doc.body.appendChild(finder);
    fInput = $('input', finder); fList = $('.sot-finder__list', finder);
    $('.sot-finder__status', finder).setAttribute('aria-live', 'polite');
    $$('[data-close]', finder).forEach(function (b) { b.addEventListener('click', function () { closeFinder(); }); });
    fInput.addEventListener('input', function () { if (fMode === 'try' && fInput.value) fMode = ''; render(); });
    finder.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(fActive + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(fActive - 1); }
      else if (e.key === 'Home' && e.ctrlKey) { e.preventDefault(); setActive(0); }
      else if (e.key === 'Enter') { e.preventDefault(); choose(fActive); }
      else if (e.key === 'Escape') { e.preventDefault(); if (fMode === 'try' && !fInput.value) { fMode = ''; render(); } else closeFinder(); }
      else if (e.key === 'Backspace' && fMode === 'try' && !fInput.value) { fMode = ''; render(); }
      else if (e.key === 'Tab') { e.preventDefault(); fInput.focus(); }
    });
  }
  function openFinder(mode, q) {
    if (!finder) buildFinder();
    if (toc && toc.classList.contains('is-open')) $$('[data-sot-toc-close]', toc).forEach(function (b) { b.click(); });
    fLast = doc.activeElement; fMode = mode || ''; fInput.value = q || '';
    finder.hidden = false; root.classList.add('sot-finder-open');
    render(); fInput.focus(); if (q) fInput.select();
  }
  function closeFinder(silent) {
    if (!finder || finder.hidden) return;
    finder.hidden = true; root.classList.remove('sot-finder-open');
    if (!silent && fLast && fLast.focus) fLast.focus();
  }
  $$('[data-sot-find]').forEach(function (b) { b.addEventListener('click', function () { openFinder(); }); });
  $$('[data-sot-try-open]').forEach(function (b) { b.addEventListener('click', function () { openFinder('try'); }); });
  $$('[data-sot-aud-open]').forEach(function (b) { b.addEventListener('click', function () { tocApi.open($('.sot-aud__btn', toc)); setTimeout(function () { tocApi.openAudience(); }, 120); }); });
  doc.addEventListener('keydown', function (e) {
    var k = e.key.toLowerCase();
    if ((e.metaKey || e.ctrlKey) && k === 'k') { e.preventDefault(); finder && !finder.hidden ? closeFinder() : openFinder(); return; }
    var t = e.target, typing = /INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable || t.closest('.wpui');
    if (!typing && !e.metaKey && !e.ctrlKey && !e.altKey && (e.key === '/' || e.key === '[') && !(finder && !finder.hidden)) { e.preventDefault(); openFinder('', e.key === '[' ? '[' : ''); }
  });

  /* ---------- Scroll reveal ---------- */
  var reveals = $$('.sot-reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (r) { io.observe(r); });
  } else reveals.forEach(function (r) { r.classList.add('is-in'); });

  updateRead();
  onScroll();
  if (location.hash) { var target = doc.getElementById(location.hash.slice(1)); if (target && target.classList.contains('sot-item')) setTimeout(function () { target.classList.add('is-flash'); }, 300); }

  window.SOT = { version: VERSION, items: items, sections: sections, random: random, goTo: goTo, toast: toast, store: store, svg: svg, find: openFinder };
})();

