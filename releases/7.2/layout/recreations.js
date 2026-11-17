/* ==========================================================================
   WordPress 7.2 edition: recreations of real 7.2 screens.

   Labels, menus, icons and measurements come from WordPress 7.2 Beta 3 in
   Playground and from the Gutenberg and wordpress-develop source. Sample
   content (titles, notes, photos) is illustrative.

   Each recreation mounts into <div data-wpui="name"></div>. Only the piece a
   section is about is interactive; the surrounding screen is a static mockup
   (marked inert so it can't be focused or clicked).
   ========================================================================== */
(function () {
  'use strict';
  if (!window.WPUI) return;
  var I = WPUI.icon;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var uid = 0;
  var NOW = new Date();
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function ordinal(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
  function iconBtn(name, label, extra, attrs) { return '<button type="button" class="wpui-btn wpui-btn--icon ' + (extra || '') + '" aria-label="' + label + '"' + (attrs || '') + '>' + I(name) + '</button>'; }
  function frame(host, cls, caption) {
    var f = document.createElement('div');
    f.className = 'wpui wpui-frame ' + (cls || '');
    host.appendChild(f);
    if (caption) {
      var c = document.createElement('div'); c.className = 'wpui-caption'; c.innerHTML = caption; host.appendChild(c);
    }
    return f;
  }
  function cap(text, kind) { return '<b>' + (kind || 'Recreated from WordPress 7.2') + '</b><span>' + text + '</span>'; }
  function art(colors, label, opts) {
    var id = 'art' + (++uid); opts = opts || {};
    return '<svg class="wpui-art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + esc(label || 'Sample photo') + '">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + colors[0] + '"/><stop offset="1" stop-color="' + colors[1] + '"/></linearGradient>' + (opts.defs || '') + '</defs>' +
      '<g' + (opts.filter ? ' filter="url(#' + opts.filter + ')"' : '') + '><rect width="400" height="300" fill="url(#' + id + ')"/>' +
      '<circle cx="300" cy="92" r="44" fill="rgba(255,255,255,.6)"/>' +
      '<path d="M0 214 Q90 150 190 206 T400 182 V300 H0Z" fill="rgba(0,0,0,.22)"/>' +
      '<path d="M0 250 Q120 205 245 246 T400 232 V300 H0Z" fill="rgba(0,0,0,.36)"/>' +
      '<path d="M60 262 l18-40 l18 40Z M96 266 l14-30 l14 30Z" fill="rgba(0,0,0,.4)"/></g></svg>';
  }
  var PHOTOS = [
    { t: 'Harbor', c: ['#7FB7C9', '#1E5A6E'], d: 3 }, { t: 'Lantern', c: ['#F4A261', '#8C2A12'], d: 6 },
    { t: 'Fern', c: ['#B9D99A', '#2F5A2A'], d: 1 }, { t: 'Dune', c: ['#F6D18B', '#9A5A12'], d: 5 },
    { t: 'Ink', c: ['#8E8AC0', '#211C3F'], d: 2 }, { t: 'Bloom', c: ['#F3A6C8', '#7A1F4A'], d: 4 }
  ];
  function noNav(root) { root.addEventListener('click', function (e) { var a = e.target.closest('a[href="#"]'); if (a) e.preventDefault(); }); }
  function popAt(f, pop, anchor, align) {
    f.appendChild(pop);
    var fr = f.getBoundingClientRect(), ar = anchor.getBoundingClientRect();
    var top = ar.bottom - fr.top + 8, left = align === 'start' ? ar.left - fr.left : ar.right - fr.left - pop.offsetWidth;
    left = Math.max(8, Math.min(left, f.offsetWidth - pop.offsetWidth - 8));
    if (top + pop.offsetHeight > f.offsetHeight - 8) top = Math.max(8, ar.top - fr.top - pop.offsetHeight - 8);
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    var close = function (refocus) { pop.remove(); document.removeEventListener('mousedown', out, true); if (refocus && anchor.isConnected) anchor.focus(); };
    var out = function (e) { if (!pop.contains(e.target) && !anchor.contains(e.target)) close(); };
    setTimeout(function () { document.addEventListener('mousedown', out, true); }, 0);
    pop.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); close(true); } });
    return close;
  }

  /* Shared admin chrome (admin bar + admin menu) */
  var MENU = [
    ['dashboard', 'Dashboard', '', ['Home', 'Updates']], ['sep'],
    ['posts', 'Posts', '', ['All Posts', 'Add Post', 'Categories', 'Tags']],
    ['media', 'Media', '', ['Library', 'Add Media File']],
    ['pages', 'Pages', ''], ['comments', 'Comments', ''], ['sep'],
    ['appearance', 'Appearance', ''], ['plugins', 'Plugins', ''], ['users', 'Users', ''],
    ['tools', 'Tools', ''], ['settings', 'Settings', '']
  ];
  function adminChrome(current, currentSub, mode) {
    var dash = mode === 'dashicons';
    var glyph = function (name, code) { return dash ? '<span class="wpui-dashicon" aria-hidden="true">' + code + '</span>' : I(name); };
    var barIcon = function (name, code) { return dash ? '<span class="wpui-dashicon wpui-dashicon--bar" aria-hidden="true">' + code + '</span>' : I(name, 20); };
    var bar = '<div class="wpui-adminbar">' +
      '<span class="wpui-adminbar__item">' + barIcon('wp', '') + '</span>' +
      '<span class="wpui-adminbar__item">' + barIcon('home', '') + '<span class="wpui-adminbar__hide-sm">My WordPress Website</span></span>' +
      (dash ? '' : '<span class="wpui-adminbar__item wpui-adminbar__hide-sm">' + I('search', 20) + '<kbd>⌘K</kbd></span>') +
      '<span class="wpui-adminbar__item">' + barIcon('comments', '') + '0</span>' +
      '<span class="wpui-adminbar__item">' + barIcon('plus', '') + '<span class="wpui-adminbar__hide-sm">New</span></span>' +
      '<span class="wpui-adminbar__item wpui-adminbar__end"><span class="wpui-adminbar__hide-sm">Howdy, admin</span><span class="wpui-adminbar__avatar"></span></span></div>';
    var menu = '<nav class="wpui-adminmenu" aria-label="Main menu (mockup)"><ul>' + MENU.map(function (m) {
      if (m[0] === 'sep') return '<li class="wpui-adminmenu__sep"></li>';
      var cur = m[0] === current;
      var sub = cur && m[3] ? '<ul class="wpui-sub">' + m[3].map(function (s) { return '<li><a href="#" tabindex="-1" class="' + (s === currentSub ? 'is-current' : '') + '">' + s + '</a></li>'; }).join('') + '</ul>' : '';
      return '<li class="' + (cur ? 'is-current' : '') + '"><a href="#" tabindex="-1"><span class="wpui-adminmenu__icon">' + glyph(m[0], m[2]) + '</span><span class="wpui-adminmenu__label">' + m[1] + '</span></a>' + sub + '</li>';
    }).join('') + '<li class="wpui-adminmenu__collapse"><a href="#" tabindex="-1"><span class="wpui-adminmenu__icon">' + (dash ? '<span class="wpui-dashicon" aria-hidden="true"></span>' : I('left')) + '</span><span class="wpui-adminmenu__label">Collapse Menu</span></a></li></ul></nav>';
    return { bar: bar, menu: menu };
  }
  function postbox(title, inner, id) {
    return '<div class="wpui-postbox"' + (id ? ' id="' + id + '"' : '') + '><div class="wpui-postbox__head"><h2>' + title + '</h2><span class="wpui-postbox__handles" aria-hidden="true">' +
      '<span class="wpui-dashicon wpui-dashicon--handle"></span><span class="wpui-dashicon wpui-dashicon--handle"></span><span class="wpui-dashicon wpui-dashicon--handle is-toggle"></span></span></div>' +
      '<div class="wpui-postbox__inside">' + inner + '</div></div>';
  }
  function timeStr(d) { var h = d.getHours(), m = d.getMinutes(); return (h % 12 || 12) + ':' + (m < 10 ? '0' : '') + m + ' ' + (h < 12 ? 'am' : 'pm'); }
  function activityWidget() {
    var earlier = new Date(NOW.getTime() - 3 * 864e5); earlier.setHours(17, 30);
    var today = new Date(NOW); today.setHours(9, 0);
    return postbox('Activity',
      '<div class="activity-block"><h3>Recently Published</h3><ul>' +
        '<li><span>Today, ' + timeStr(today) + '</span><a href="#">Testing WordPress 7.2 Beta 3</a></li>' +
        '<li><span>' + MONTHS[earlier.getMonth()] + ' ' + ordinal(earlier.getDate()) + ', ' + timeStr(earlier) + '</span><a href="#">Hello world!</a></li></ul></div>' +
      '<div class="activity-block"><h3>Published On This Day</h3><ul>' +
        '<li><span>' + MONTHS[NOW.getMonth()] + ' ' + ordinal(NOW.getDate()) + ', ' + (NOW.getFullYear() - 1) + '</span><span><a href="#">Our first State of the Word recap</a> <span class="wpui-ontheday-author">by Anne</span></span></li>' +
        '<li><span>' + MONTHS[NOW.getMonth()] + ' ' + ordinal(NOW.getDate()) + ', ' + (NOW.getFullYear() - 3) + '</span><span><a href="#">Five block themes we loved this fall</a></span></li></ul></div>', 'ed-activity-' + (activityWidget.n = (activityWidget.n || 0) + 1));
  }

  /* Post editor header (static mockup), in the 7.2 order */
  function editorHeader(opts) {
    opts = opts || {};
    return '<div class="wpui-editor__header" inert>' +
      '<span class="ed-wbtn" aria-hidden="true">' + I('wp', 36) + '</span>' +
      '<span class="wpui-btn wpui-btn--icon wpui-editor__inserter">' + I('plus') + '</span>' +
      '<span class="wpui-hide-sm" style="display:flex;gap:4px">' + '<span class="wpui-btn wpui-btn--icon">' + I('undo') + '</span><span class="wpui-btn wpui-btn--icon ed-disabled">' + I('redo') + '</span><span class="wpui-btn wpui-btn--icon">' + I('listView') + '</span></span>' +
      '<div class="wpui-editor__title"><span>' + esc(opts.title || 'Testing WordPress 7.2 Beta 3') + '<i>· Post</i></span></div>' +
      '<span class="wpui-btn wpui-btn--tertiary wpui-hide-sm">Save draft</span>' +
      '<span class="wpui-btn wpui-btn--icon wpui-hide-sm">' + I('view') + '</span>' +
      '<span class="wpui-btn wpui-btn--icon wpui-hide-sm' + (opts.settings ? ' is-pressed' : '') + '">' + I('sidebar') + '</span>' +
      (opts.notes ? '<span class="wpui-btn wpui-btn--icon is-pressed">' + I('comment') + '</span>' : '') +
      '<span class="wpui-btn wpui-btn--primary">Publish</span>' +
      '<span class="wpui-btn wpui-btn--icon">' + I('more') + '</span></div>';
  }

  /* ---------- Phone-width WordPress ----------
     Below the breakpoint each recreation switches to the layout WordPress 7.2
     uses on a phone (measured at 375px in 7.2 Beta 3): the 46px admin bar,
     the compact editor header, a toolbar docked under it, full-screen
     sidebars and panels. Frames get .is-m; mounts read isM(f). */
  var BP = 640;
  function isM(f) { return f.classList.contains('is-m'); }
  function watchWidth(f, cb) {
    var last = null;
    function check() { var n = f.offsetWidth > 0 && f.offsetWidth < BP; if (n !== last) { last = n; f.classList.toggle('is-m', n); cb(n); } }
    // Re-layout outside the observer callback, so switching layouts can't trigger a ResizeObserver loop.
    var queued = false;
    function later() { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; check(); }); }
    if (window.ResizeObserver) new ResizeObserver(later).observe(f); else window.addEventListener('resize', later);
    check();
  }
  // 46px admin bar: menu toggle, site, command palette, new, account.
  function mAdminBar(opts) {
    opts = opts || {};
    var dash = opts.dashicons;
    var ic = function (name, code) { return dash ? '<span class="wpui-dashicon wpui-dashicon--bar" aria-hidden="true">' + code + '</span>' : I(name); };
    return '<div class="wpui-adminbar wpui-adminbar--m"' + (opts.interactive ? '' : ' inert') + '>' +
      (opts.interactive ? '<button type="button" class="wpui-adminbar__item ed-menutoggle" aria-label="Menu" aria-expanded="' + !!opts.open + '">' + ic('menu', '') + '</button>' : '<span class="wpui-adminbar__item">' + ic('menu', '') + '</span>') +
      '<span class="wpui-adminbar__item" inert>' + ic('home', '') + '</span>' +
      (dash ? '' : '<span class="wpui-adminbar__item" inert>' + I('search') + '</span>') +
      '<span class="wpui-adminbar__item" inert>' + ic('plus', '') + '</span>' +
      '<span class="wpui-adminbar__item wpui-adminbar__end" inert><span class="wpui-adminbar__avatar"></span></span></div>';
  }
  // Compact post editor header (under 782px): the admin bar stays above it.
  function mEditorHeader(opts) {
    opts = opts || {};
    return mAdminBar() + '<div class="wpui-editor__header ed-mheader">' +
      '<span inert class="ed-mheader__l"><span class="wpui-btn wpui-btn--icon wpui-editor__inserter">' + I('plus') + '</span><span class="wpui-btn wpui-btn--icon">' + I('listView') + '</span><span class="wpui-btn wpui-btn--icon">' + I('cloudUpload') + '</span><span class="wpui-btn ed-mheader__preview">Preview</span></span>' +
      (opts.settingsInteractive ? '<button type="button" class="wpui-btn wpui-btn--icon ed-m-settings" aria-label="Settings" aria-pressed="' + !!opts.settingsOpen + '">' + I('sidebar') + '</button>' : '<span inert class="wpui-btn wpui-btn--icon' + (opts.settingsOpen ? ' is-pressed' : '') + '">' + I('sidebar') + '</span>') +
      '<span inert class="ed-mheader__r"><span class="wpui-btn wpui-btn--primary">Publish</span><span class="wpui-btn wpui-btn--icon">' + I('more') + '</span></span></div>';
  }
  // Block toolbar docked under the header, full width, scrolls sideways.
  function dockedToolbar(groups, interactive) {
    return '<div class="ed-docked" role="toolbar" aria-label="Block tools">' + groups.map(function (g) {
      return '<div class="ed-docked__group">' + g.map(function (b) {
        var live = interactive && interactive.indexOf(b[1]) > -1;
        if (b[0] === 'text') return '<span class="wpui-btn ed-docked__text" inert>' + b[1] + '</span>';
        if (b[0] === 'duotone') return '<span class="wpui-btn wpui-btn--icon" inert aria-label="' + b[1] + '"><span class="ed-duo-swatch"></span></span>';
        return live ? '<button type="button" class="wpui-btn wpui-btn--icon" data-dock="' + b[1] + '" aria-label="' + b[1] + '">' + I(b[0]) + '</button>'
          : '<span class="wpui-btn wpui-btn--icon" inert>' + I(b[0]) + '</span>';
      }).join('') + '</div>';
    }).join('') + '</div>';
  }
  // Site Editor on a phone: admin bar, dark frame with Back, the Styles panel, and the Saved bar.
  function mSiteEditorTop() { return mAdminBar() + '<div class="ed-gsm__top" inert><span class="wpui-btn wpui-btn--icon">' + I('back') + '</span></div>'; }
  function mSiteEditorBottom() { return '<div class="ed-gsm__bottom" inert><span>' + I('check') + 'Saved</span></div>'; }
  // Where the site preview goes on a phone: below the WordPress screen, labelled.
  function onSite(host, label) {
    var el = document.createElement('div'); el.className = 'ed-onsite'; el.hidden = true;
    el.innerHTML = '<p class="ed-onsite__label">' + (label || 'On the site') + '</p>';
    var capEl = $('.wpui-caption', host); host.insertBefore(el, capEl || null);
    return el;
  }
  function placeSite(f, siteEl, home, onsiteEl) {
    if (isM(f)) { onsiteEl.hidden = false; onsiteEl.appendChild(siteEl); } else { onsiteEl.hidden = true; home.appendChild(siteEl); }
  }

  var M_TOP = function () { return '<div class="ed-m-only">' + mSiteEditorTop() + '</div>'; };
  var M_BOTTOM = function () { return '<div class="ed-m-only">' + mSiteEditorBottom() + '</div>'; };

  var mounts = {};

  /* ======================================================================
     Tags: find on page
     ====================================================================== */
  mounts.find = function (host) {
    var wrap = document.createElement('div'); wrap.className = 'ed-find';
    wrap.innerHTML = '<label class="sot-sr" for="edFindQ">Find in page</label><input id="edFindQ" type="text" value="[theme builder]" autocomplete="off">' +
      '<span class="ed-find__count" aria-live="polite"></span><span class="ed-find__sep"></span>' +
      '<button type="button" aria-label="Previous result">' + I('up', 20) + '</button><button type="button" aria-label="Next result">' + I('down', 20) + '</button>';
    host.appendChild(wrap);
    var input = $('input', wrap), count = $('.ed-find__count', wrap), idx = -1;
    function matches() {
      var q = input.value.trim().toLowerCase();
      if (!q) return [];
      return $$('.sot-content .sot-tag').filter(function (t) { return t.textContent.toLowerCase().indexOf(q) > -1; });
    }
    function go(step) {
      var m = matches();
      $$('.ed-find-hit').forEach(function (t) { t.classList.remove('ed-find-hit'); });
      if (!m.length) { count.textContent = '0/0'; return; }
      idx = (idx + step + m.length) % m.length;
      var t = m[idx]; t.classList.add('ed-find-hit');
      t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
      count.textContent = (idx + 1) + '/' + m.length;
    }
    input.addEventListener('input', function () { idx = -1; var m = matches(); count.textContent = m.length ? '0/' + m.length : '0/0'; });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); go(e.shiftKey ? -1 : 1); } });
    $$('button', wrap)[0].addEventListener('click', function () { go(-1); });
    $$('button', wrap)[1].addEventListener('click', function () { go(1); });
    count.textContent = '0/' + matches().length;
  };

  /* ======================================================================
     WordPress 7.2's own markup (wp-snapshots.js, captured offline from the
     real components) wired up with a little plain JavaScript.
     ====================================================================== */
  var SNAP = window.WPSNAP || {}, snapN = 0, IP = SNAP.ipsum || {};
  function uniq(root) {
    var n = ++snapN, map = {};
    $$('[id]', root).forEach(function (e) { map[e.id] = e.id + '-s' + n; e.id = map[e.id]; });
    ['for', 'aria-labelledby', 'aria-describedby', 'aria-controls'].forEach(function (a) {
      $$('[' + a + ']', root).forEach(function (e) { e.setAttribute(a, e.getAttribute(a).split(' ').map(function (x) { return map[x] || x; }).join(' ')); });
    });
    $$('input[type=radio][name]', root).forEach(function (e) { e.name = e.name + '-s' + n; });
  }
  function putSnap(el, name) { el.innerHTML = SNAP[name] || '<p style="padding:16px">Missing: ' + name + '</p>'; uniq(el); wireControls(el); return el; }
  function snapNode(html) { var t = document.createElement('div'); t.innerHTML = html; uniq(t); wireControls(t); return t.firstElementChild; }
  function clsLike(el, part) { return [].slice.call(el.classList).filter(function (c) { return c.indexOf(part) > -1; })[0]; }
  var PRESSED = null, OPT = '.components-toggle-group-control-option-base';
  // ToggleGroupControl (radio group, or a button group when it can be deselected): move the pressed state and the sliding indicator.
  function isOn(b) { return b.getAttribute('aria-checked') === 'true' || b.getAttribute('aria-pressed') === 'true'; }
  function pressToggle(btn, on) {
    var group = btn.closest('.components-toggle-group-control'); if (!group) return;
    if (!PRESSED) { var p = $(OPT + '[aria-checked="true"], ' + OPT + '[aria-pressed="true"]', document.body); PRESSED = (p && clsLike(p, '__is-pressed')) || '_617c0f0a1c161590__is-pressed'; }
    $$(OPT, group).forEach(function (b) {
      var me = b === btn && on !== false;
      if (b.hasAttribute('aria-pressed')) b.setAttribute('aria-pressed', String(me)); else { b.setAttribute('aria-checked', String(me)); b.tabIndex = me ? 0 : -1; }
      b.classList.toggle(PRESSED, me);
    });
    if (on === false) { group.style.setProperty('--selected-width', 0); group.style.setProperty('--selected-height', 0); return; }
    var g = group.getBoundingClientRect(), r = btn.getBoundingClientRect(), cs = getComputedStyle(group), bl = parseFloat(cs.borderLeftWidth) || 0, bt = parseFloat(cs.borderTopWidth) || 0;
    group.style.setProperty('--selected-left', r.left - g.left - bl); group.style.setProperty('--selected-top', r.top - g.top - bt);
    group.style.setProperty('--selected-width', r.width); group.style.setProperty('--selected-height', r.height);
  }
  function syncToggles(root) { $$(OPT, root).forEach(function (b) { if (isOn(b)) pressToggle(b); }); }
  function setRange(range, v) {
    var min = +range.min || 0, max = +range.max || 100, pct = Math.max(0, Math.min(100, (v - min) / (max - min) * 100));
    range.value = v;
    var w = range.parentNode;
    var tr = $('.components-range-control__track', w); if (tr) tr.style.width = pct + '%';
    var th = $('.components-range-control__thumb-wrapper', w); if (th) th.style.left = pct + '%';
    var tip = $('.components-range-control__tooltip', w); if (tip) { tip.style.left = pct + '%'; tip.textContent = v; }
  }
  function wireControls(root) {
    $$(OPT, root).forEach(function (b) {
      b.addEventListener('click', function () {
        var desel = isOn(b) && (b.hasAttribute('aria-pressed') || /deselectable/.test(b.className));
        pressToggle(b, desel ? false : true);
        b.dispatchEvent(new CustomEvent('wps-change', { bubbles: true, detail: { value: desel ? null : b.getAttribute('data-value') } }));
      });
    });
    $$('input[type="range"]', root).forEach(function (r) {
      var rootEl = r.closest('.components-range-control__root'), num = rootEl && $('input[type="number"]', rootEl);
      r.addEventListener('input', function () { setRange(r, r.value); if (num) num.value = r.value; });
      if (num) num.addEventListener('input', function () { if (num.value !== '') setRange(r, num.value); });
    });
    $$('.components-form-toggle__input', root).forEach(function (c) { c.addEventListener('change', function () { c.parentNode.classList.toggle('is-checked', c.checked); }); });
    $$('.components-range-control__tooltip', root).forEach(function (t) { t.classList.add('ed-tip-hover'); });
  }
  // Popovers live at the end of <body>, like WordPress's own.
  function wpPopover(anchor, html, place) {
    var holder = document.createElement('div'); holder.className = 'ed-pop-slot';
    holder.innerHTML = html; uniq(holder); wireControls(holder);
    var pop = holder.firstElementChild;
    document.body.appendChild(holder);
    pop.style.transform = 'none'; pop.style.position = 'absolute';
    var a = anchor.getBoundingClientRect(), w = pop.offsetWidth, x, y;
    if (place === 'left') { var side = anchor.closest('.wpui-sidebar, .ed-real-gs') || anchor; var sr = side.getBoundingClientRect(); x = sr.left - w - 8; y = a.top; if (x < 8) { x = Math.max(8, a.left); y = a.bottom + 6; } }
    else { x = Math.min(window.innerWidth - w - 8, Math.max(8, a.right - w)); y = a.bottom + 6; }
    pop.style.left = (x + window.scrollX) + 'px'; pop.style.top = (y + window.scrollY) + 'px';
    function close(focus) { if (!holder.parentNode) return; holder.remove(); document.removeEventListener('pointerdown', outside, true); document.removeEventListener('keydown', key, true); anchor.setAttribute('aria-expanded', 'false'); if (focus) anchor.focus(); }
    function outside(e) { if (!holder.contains(e.target) && !anchor.contains(e.target)) close(false); }
    function key(e) { if (e.key === 'Escape') { e.stopPropagation(); close(true); } }
    document.addEventListener('pointerdown', outside, true); document.addEventListener('keydown', key, true);
    anchor.setAttribute('aria-expanded', 'true');
    var first = $('[role^="menuitem"], button:not([disabled]), [tabindex="0"]', pop); if (first) first.focus({ preventScroll: true });
    return { el: pop, close: close };
  }
  function menuCheck(item, on) {
    item.setAttribute('aria-checked', String(on));
    var svg = $('svg', item);
    if (on && !svg) item.insertAdjacentHTML('beforeend', '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="24" height="24" class="components-menu-items__item-icon has-icon-right" aria-hidden="true" focusable="false" style="fill: none;"><path d="M7 12L10 15L17 8"></path></svg>');
    if (!on && svg) svg.remove();
  }
  function ipsumFont(slug) { return { 'small': IP.sizes && IP.sizes.small }[slug]; }

  /* ======================================================================
     Ipsum: Site Editor › Styles › Browse styles, with the front page
     ====================================================================== */
  mounts.ipsum = function (host) {
    var f = frame(host, 'ed-ipsum-frame', cap('Pick a style variation or a typography set. The Styles panel is WordPress 7.2’s own markup, running Ipsum’s theme.json'));
    var today = NOW.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    f.innerHTML = M_TOP() +
      '<div class="ed-ipsum">' +
        '<div class="wpui-gs ed-real-gs"></div>' +
        '<div class="ed-ipsum__site" aria-label="Ipsum front page preview" inert>' +
          '<div class="ed-ipsum__header"><span class="ed-ipsum__sitetitle">My WordPress Website</span><span>Sample Page</span></div>' +
          '<div class="ed-ipsum__img" aria-hidden="true"></div>' +
          '<h4 class="ed-ipsum__post">Hello world!</h4>' +
          '<p class="ed-ipsum__meta"><span>' + today + '</span> · <span>Uncategorized</span></p>' +
          '<p class="ed-ipsum__excerpt">Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>' +
          '<p class="ed-ipsum__more"><span>1 comment</span> · <span class="ed-ipsum__cta">Leave a comment ›</span></p>' +
        '</div>' +
      '</div>' + M_BOTTOM();
    var gs = putSnap($('.ed-real-gs', f), 'gs-ipsum'), site = $('.ed-ipsum__site', f);
    $$('[aria-label="Back"]', gs).forEach(function (b) { b.setAttribute('inert', ''); });
    var sel = { colors: 'Default', type: 'Default' };
    function paint() {
      var pal = sel.colors === 'Default' ? IP.palette : IP.colors[sel.colors];
      ['bg', 'text', 'accent', 'line', 'soft', 'strong'].forEach(function (k, i) { site.style.setProperty('--ip-' + k, pal['theme-' + (i + 1)]); });
      var t = sel.type === 'Default' ? { body: IP.body } : IP.type[sel.type];
      site.style.fontFamily = t.body || IP.body; $('.ed-ipsum__post', site).style.fontFamily = t.heading || t.body || IP.body;
      $('.ed-ipsum__post', site).style.fontStretch = sel.type === 'Archivo Condensed' ? '62.5%' : '';
    }
    $$('.global-styles-ui-variations_item', gs).forEach(function (v) {
      var label = v.getAttribute('aria-label'), kind = IP.type[label] || (label === 'Default' && v.closest('[class*="typography"], .global-styles-ui-typography-variations')) ? 'type' : 'colors';
      // The two Default tiles: the first group is colors, the second typography.
      var group = v.parentNode;
      v.addEventListener('click', choose); v.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); } });
      function choose() {
        var all = $$('.global-styles-ui-variations_item', gs), idx = all.indexOf(v), firstType = all.filter(function (x) { return IP.type[x.getAttribute('aria-label')]; })[0];
        var isType = IP.type[label] || (firstType && idx >= all.indexOf(firstType) - 1 && label === 'Default' && idx > 0);
        sel[isType ? 'type' : 'colors'] = label;
        $$('.global-styles-ui-variations_item', group).forEach(function (x) { var on = x === v; x.classList.toggle('is-active', on); x.setAttribute('aria-current', String(on)); });
        paint();
      }
    });
    paint();
    var onsite = onSite(host, 'On the site');
    watchWidth(f, function () { placeSite(f, site, $('.ed-ipsum', f), onsite); });
  };

  /* ======================================================================
     Notes: only the notes in the canvas margin are interactive
     ====================================================================== */
  var REACTIONS = [['👍', 'Thumbs up'], ['➕', 'Plus'], ['❤️', 'Heart'], ['🎉', 'Celebration'], ['😄', 'Smile'], ['👀', 'Eyes'], ['🚀', 'Rocket']];
  var PEOPLE = { Justin: '#D94145', Anne: '#0F766E', admin: '#6F42C1' };
  function avatar(name) { return '<span class="wpui-avatar" style="border-color:' + (PEOPLE[name] || '#6F42C1') + '">' + I('person') + '</span>'; }
  mounts.notes = function (host) {
    var f = frame(host, 'ed-notes-frame', cap('React, reply, resolve, or use a note’s ⋮ menu. On a phone, open them with the toolbar’s note button. The rest of the editor is a static mockup. <button type="button" class="ed-reset">Reset</button>'));
    var initial = function () {
      return {
        selected: 1, next: 10,
        threads: [
          { id: 1, block: 0, notes: [
            { id: 1, author: 'Justin', text: 'Should we lead the overview with the SVG icons? It’s the change people notice first.', time: Date.now() - 6 * 60000, reactions: { '👍': { c: 2, mine: false }, '👀': { c: 1, mine: false } } },
            { id: 2, author: 'Anne', text: 'Agreed. I’ll move it up.', time: Date.now() - 2 * 60000, reactions: {} }] },
          { id: 3, block: 2, notes: [
            { id: 3, author: 'Anne', text: 'Can we link the Notes tracking issue here?', time: Date.now() - 12 * 60000, reactions: {} }] }
        ]
      };
    };
    var S = initial(), draft = '', editing = null;
    var BLOCKS = [
      'The admin gets a visual refresh, too. The admin bar and admin menu replace the Dashicons icon font with SVG icons drawn in the same style as the block editor’s.',
      'Much of this release fills in gaps. Dozens of Core blocks pick up design tools they were missing, from backgrounds and shadows to minimum widths and duotone.',
      'Collaboration inside the editor keeps improving. Notes move into a margin beside the canvas, where they stay visible while you work.'
    ];
    f.innerHTML = '<div class="wpui-editor"><div class="ed-d-only">' + editorHeader({ notes: true }) + '</div>' +
      '<div class="ed-m-only">' + mEditorHeader() + '<div class="ed-m-dock"></div></div>' +
      '<div class="wpui-editor__body ed-notes-body"><div class="wpui-canvas" inert><h4 class="wpui-canvas__title">Testing WordPress 7.2 Beta 3</h4>' +
      BLOCKS.map(function (t, i) { return '<p class="wpui-block" data-b="' + i + '">' + t + '</p>'; }).join('') +
      '</div><div class="ed-notes-side"><div class="ed-notes-side__head ed-m-only"><span>All notes</span>' + iconBtn('close', 'Close Notes', 'ed-notes-close') + '</div>' +
      '<div class="ed-margin" role="tree" aria-label="Unresolved notes"></div></div></div></div>';
    var margin = $('.ed-margin', f), side = $('.ed-notes-side', f), dock = $('.ed-m-dock', f), mOpen = false, dockSeen = false;
    function renderDock() {
      var t = S.threads.filter(function (x) { return x.block === 0; })[0];
      var n = S.threads.reduce(function (a, x) { return a + (x.block === 0 ? x.notes.length : 0); }, 0);
      var label = n ? 'Add note (' + n + ' note' + (n > 1 ? 's' : '') + ')' : 'Add note';
      dock.innerHTML = dockedToolbar([[['paragraph', 'Paragraph'], ['up', 'Move up'], ['down', 'Move down']], [['alignNone', 'Align'], ['alignLeft', 'Align text']], [['bold', 'Bold'], ['italic', 'Italic'], ['link', 'Link'], ['down', 'More']], [['comment', label]], [['more', 'Options']]], [label]);
      var nb = $('[data-dock]', dock);
      nb.setAttribute('aria-pressed', String(mOpen));
      if (!dockSeen) nb.classList.add('ed-hotspot');
      // Bring the note button into view, as when you scroll the docked toolbar.
      requestAnimationFrame(function () { $('.ed-docked', dock).scrollLeft = Math.max(0, nb.offsetLeft + nb.offsetWidth + 56 - dock.clientWidth); });
      nb.addEventListener('click', function () { dockSeen = true; mOpen = !mOpen; if (t) S.selected = t.id; render(true); renderDock(); });
    }
    function reactionsHTML(n) {
      var keys = REACTIONS.map(function (r) { return r[0]; }).filter(function (k) { return n.reactions[k] && n.reactions[k].c > 0; });
      var pills = keys.map(function (k) {
        var r = n.reactions[k], name = REACTIONS.filter(function (x) { return x[0] === k; })[0][1];
        return '<button type="button" class="wpui-reaction" aria-pressed="' + r.mine + '" aria-label="' + name + ', ' + r.c + ' reaction' + (r.c > 1 ? 's' : '') + '" title="' + name + '" data-r="' + k + '"><span aria-hidden="true">' + k + '</span><span>' + r.c + '</span></button>';
      }).join('');
      return '<div class="ed-reactions' + (keys.length ? '' : ' is-floating') + '">' + pills + iconBtn('reaction', 'Add reaction', 'wpui-btn--sm ed-add-react', ' aria-haspopup="menu" title="Add reaction"') + '</div>';
    }
    function noteHTML(t, n, isParent, sel) {
      var actions = sel ? '<span class="ed-note__actions">' + (isParent ? iconBtn('published', 'Resolve', 'wpui-btn--sm ed-resolve', ' title="Resolve"') : '') + iconBtn('more', 'Actions', 'wpui-btn--sm ed-actions', ' aria-haspopup="menu"') + '</span>' : '';
      var body = editing === n.id
        ? '<div class="wpui-composer ed-edit" contenteditable="true" role="textbox" aria-label="Edit note">' + esc(n.text) + '</div><div class="ed-form-actions"><button type="button" class="wpui-btn wpui-btn--tertiary" data-a="cancel-edit">Cancel</button><button type="button" class="wpui-btn wpui-btn--primary" data-a="update">Update</button></div>'
        : '<div class="ed-note__body"><div class="ed-note__content">' + esc(n.text) + '</div>' + reactionsHTML(n) + '</div>';
      return '<div class="ed-note" data-n="' + n.id + '"><div class="ed-note__head">' + avatar(n.author) + '<div class="wpui-thread__who"><b>' + esc(n.author) + '</b><time>' + WPUI.relTime(n.time) + '</time></div>' + actions + '</div>' + body + '</div>';
    }
    function render(focusSel) {
      var tops = {};
      $$('.wpui-block', f).forEach(function (el) {
        var i = +el.dataset.b, on = S.threads.filter(function (t) { return t.block === i; });
        el.classList.toggle('has-note', on.length > 0);
        el.classList.toggle('is-note-selected', on.some(function (t) { return t.id === S.selected; }));
        tops[i] = el.offsetTop;
      });
      margin.innerHTML = '';
      var narrow = isM(f), lastBottom = 0;
      side.classList.toggle('is-open', narrow && mOpen);
      $$('.wpui-block', f).forEach(function (el) { el.classList.toggle('is-m-selected', narrow && el.dataset.b === '0'); var t = S.threads.filter(function (x) { return x.block === +el.dataset.b; })[0]; el.style.setProperty('--note-color', t ? PEOPLE[t.notes[0].author] || '#D94145' : '#D94145'); });
      S.threads.forEach(function (t) {
        var sel = t.id === S.selected;
        var card = document.createElement('div');
        card.className = 'wpui-thread ed-thread' + (sel ? ' is-selected' : '');
        card.setAttribute('role', 'treeitem'); card.tabIndex = sel ? -1 : 0;
        card.setAttribute('aria-label', 'Note: ' + t.notes[0].text);
        card.dataset.t = t.id;
        card.innerHTML = t.notes.map(function (n, i) { return noteHTML(t, n, i === 0, sel); }).join('') +
          (sel ? '<div class="ed-note ed-reply">' + '<div class="ed-note__head">' + avatar('admin') + '<div class="wpui-thread__who"><b>admin</b></div></div>' +
            '<div class="wpui-composer ed-reply-input" contenteditable="true" role="textbox" aria-label="Reply to note by ' + t.notes[0].author + '" data-placeholder="Reply or @ mention">' + esc(draft) + '</div>' +
            '<div class="ed-form-actions"><button type="button" class="wpui-btn wpui-btn--tertiary" data-a="cancel">Cancel</button><button type="button" class="wpui-btn wpui-btn--primary" data-a="reply"' + (draft.trim() ? '' : ' aria-disabled="true"') + '>Reply</button></div></div>' : '');
        margin.appendChild(card);
        if (!narrow) {
          var top = Math.max((tops[t.block] || 0) - 16, lastBottom + 16);
          card.style.top = top + 'px';
          lastBottom = top + card.offsetHeight;
        }
        bindThread(card, t, sel);
      });
      margin.style.minHeight = narrow ? '' : (lastBottom + 24) + 'px';
      if (!S.threads.length) margin.innerHTML = '<p class="ed-margin__empty">All notes resolved. Use Reset below to bring them back.</p>';
      if (focusSel) { var c = $('.ed-thread.is-selected', margin); if (c) c.focus({ preventScroll: true }); }
    }
    function bindThread(card, t, sel) {
      if (!sel) {
        var pick = function () { S.selected = t.id; draft = ''; editing = null; render(true); };
        card.addEventListener('click', function (e) { if (!e.target.closest('.wpui-reaction, .ed-add-react')) pick(); });
        card.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target === card) { e.preventDefault(); pick(); } });
      }
      $$('.ed-note', card).forEach(function (nEl) {
        var n = t.notes.filter(function (x) { return x.id === +nEl.dataset.n; })[0];
        if (!n) return;
        $$('.wpui-reaction', nEl).forEach(function (b) { b.addEventListener('click', function (e) { e.stopPropagation(); toggleReaction(n, b.dataset.r); }); });
        var add = $('.ed-add-react', nEl);
        if (add) add.addEventListener('click', function (e) { e.stopPropagation(); picker(add, n); });
        var act = $('.ed-actions', nEl);
        if (act) act.addEventListener('click', function () {
          WPUI.menu({ anchor: act, frame: f, label: 'Actions', minWidth: 160, variant: 'menu', groups: [{ items: [
            { label: 'Edit', onSelect: function () { editing = n.id; render(); var ed = $('.ed-edit', margin); if (ed) { ed.focus(); placeEnd(ed); } } },
            { label: 'Delete', onSelect: function () { removeNote(t, n); } }] }] });
        });
        var res = $('.ed-resolve', nEl);
        if (res) res.addEventListener('click', function () {
          card.classList.add('is-leaving');
          setTimeout(function () { S.threads = S.threads.filter(function (x) { return x !== t; }); S.selected = S.threads[0] ? S.threads[0].id : null; render(); }, reduced ? 0 : 200);
        });
        var upd = $('[data-a=update]', nEl);
        if (upd) {
          $('[data-a=cancel-edit]', nEl).addEventListener('click', function () { editing = null; render(); });
          upd.addEventListener('click', function () { var v = $('.ed-edit', nEl).textContent.trim(); if (v) n.text = v; editing = null; render(); WPUI.snackbar(f, 'Note updated.'); });
        }
      });
      var input = $('.ed-reply-input', card);
      if (input) {
        var rb = $('[data-a=reply]', card);
        input.addEventListener('input', function () { draft = input.textContent; rb.setAttribute('aria-disabled', String(!draft.trim())); });
        input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); rb.click(); } });
        $('[data-a=cancel]', card).addEventListener('click', function () { draft = ''; input.textContent = ''; rb.setAttribute('aria-disabled', 'true'); });
        rb.addEventListener('click', function () {
          if (!draft.trim()) return;
          t.notes.push({ id: S.next++, author: 'admin', text: draft.trim(), time: Date.now(), reactions: {} });
          draft = ''; render(); WPUI.snackbar(f, 'Reply added.');
        });
      }
    }
    function placeEnd(el) { var r = document.createRange(); r.selectNodeContents(el); r.collapse(false); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
    function toggleReaction(n, k) {
      var r = n.reactions[k] || (n.reactions[k] = { c: 0, mine: false });
      if (r.mine) { r.mine = false; r.c--; } else { r.mine = true; r.c++; }
      render();
      var b = $('.ed-note[data-n="' + n.id + '"] .wpui-reaction[data-r="' + k + '"]', margin);
      if (b) { if (!reduced) b.classList.add('is-pop'); b.focus({ preventScroll: true }); }
    }
    function picker(anchor, n) {
      var pop = document.createElement('div'); pop.className = 'ed-react-picker'; pop.setAttribute('role', 'menu'); pop.setAttribute('aria-label', 'Add reaction');
      pop.innerHTML = REACTIONS.map(function (r) {
        var on = n.reactions[r[0]] && n.reactions[r[0]].mine;
        return '<button type="button" role="menuitemcheckbox" aria-checked="' + !!on + '" aria-label="' + r[1] + '" title="' + r[1] + '" data-r="' + r[0] + '">' + r[0] + '</button>';
      }).join('');
      var close = popAt(f, pop, anchor, 'end');
      var btns = $$('button', pop);
      btns.forEach(function (b, i) {
        b.addEventListener('click', function () { close(); toggleReaction(n, b.dataset.r); });
        b.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowRight') { e.preventDefault(); (btns[i + 1] || btns[0]).focus(); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); (btns[i - 1] || btns[btns.length - 1]).focus(); }
        });
      });
      btns[0].focus();
    }
    function removeNote(t, n) {
      var isParent = t.notes[0] === n;
      var msg = isParent ? 'Are you sure you want to delete this note? This will also delete all of this note’s replies.' : 'Are you sure you want to delete this reply?';
      WPUI.confirm(f, msg, 'Delete').then(function (ok) {
        if (!ok) return;
        var snapshot = JSON.parse(JSON.stringify(S.threads));
        if (isParent) { S.threads = S.threads.filter(function (x) { return x !== t; }); if (S.selected === t.id) S.selected = S.threads[0] ? S.threads[0].id : null; }
        else t.notes.splice(t.notes.indexOf(n), 1);
        render();
        WPUI.snackbar(f, 'Note deleted.', { label: 'Undo', onClick: function () { S.threads = snapshot; S.selected = t.id; render(); WPUI.snackbar(f, 'Note restored.'); } });
      });
    }
    $('.ed-reset', host).addEventListener('click', function () { S = initial(); draft = ''; editing = null; mOpen = false; render(); renderDock(); });
    $('.ed-notes-close', f).addEventListener('click', function () { mOpen = false; render(); renderDock(); var nb = $('[data-dock]', dock); if (nb) nb.focus(); });
    watchWidth(f, function () { render(); renderDock(); });
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(render, 120); });
    setInterval(function () { $$('.ed-note', margin).forEach(function (el) { S.threads.forEach(function (t) { t.notes.forEach(function (n) { if (n.id === +el.dataset.n) { var tm = $('time', el); if (tm) tm.textContent = WPUI.relTime(n.time); } }); }); }); }, 30000);
  };

  /* ======================================================================
     Design tools: the block settings sidebar (WordPress 7.2's own markup)
     ====================================================================== */
  mounts.inspector = function (host) {
    var f = frame(host, 'ed-insp-frame', cap('Select a block, then add design tools from each panel’s ⋮ menu'));
    var cur = 'heading', level = 2, mSettings = false;
    var NAMES = { heading: 'Heading', paragraph: 'Paragraph', quote: 'Quote' }, ICONS = { paragraph: 'paragraph', quote: 'quote' };
    var LEVEL_SIZE = { 1: '40px', 2: '32px', 3: '26px', 4: '22px', 5: '18px', 6: '16px' };
    var V = { heading: {}, paragraph: {}, quote: {} }, SHOWN = { heading: {}, paragraph: {}, quote: {} };
    f.innerHTML = '<div class="wpui-editor"><div class="ed-d-only">' + editorHeader({ settings: true, title: 'WordPress 7.2 is almost here' }) + '</div>' +
      '<div class="ed-m-only ed-m-headwrap"></div>' +
      '<div class="wpui-editor__body"><div class="wpui-canvas ed-insp-canvas" role="list" aria-label="Blocks"></div><div class="wpui-sidebar ed-real-sidebar"></div></div></div>';
    var canvas = $('.ed-insp-canvas', f), mHead = $('.ed-m-headwrap', f), sidebar = $('.wpui-sidebar', f);
    function renderMHead() {
      var icon = cur === 'heading' ? 'h' + level : ICONS[cur];
      mHead.innerHTML = mEditorHeader({ settingsInteractive: true, settingsOpen: mSettings }) + (mSettings ? '' : dockedToolbar([[[icon, NAMES[cur]], ['up', 'Move up'], ['down', 'Move down']], [['alignLeft', 'Align text']], [['bold', 'Bold'], ['italic', 'Italic'], ['link', 'Link'], ['down', 'More']], [['more', 'Options']]]));
      sidebar.classList.toggle('is-open', mSettings); if (mSettings) requestAnimationFrame(function () { syncToggles(sidebar); });
      $('.ed-m-settings', mHead).addEventListener('click', function () { mSettings = !mSettings; renderMHead(); $('.ed-m-settings', mHead).focus(); });
    }
    var CONTENT = {
      heading: '<span>WordPress 7.2 is almost here</span>',
      paragraph: '<span>Dozens of Core blocks pick up design tools they were missing. There are no new controls to learn, just fewer cases where you need a wrapper Group block or custom CSS.</span>',
      quote: '<span><span class="ed-quote-text">“Fewer cases where you need a wrapper Group block.”</span><cite>The 7.2 Source of Truth</cite></span>'
    };
    function css(k) {
      var v = V[k], s = [];
      if (v.size) s.push('font-size:' + v.size);
      if (v.color) s.push('color:' + v.color);
      if (v.tgrad) s.push('background-image:' + v.tgrad, '-webkit-background-clip:text', 'background-clip:text', 'color:transparent');
      if (v.bg || v.bgrad) s.push('padding:20px 24px');
      if (v.bg) s.push('background-color:' + v.bg);
      if (v.bgrad) s.push('background-image:' + v.bgrad);
      Object.keys(v.props || {}).forEach(function (p) { if (v.props[p] != null && v.props[p] !== '') s.push(p + ':' + v.props[p]); });
      return s.join(';');
    }
    function renderCanvas() {
      canvas.innerHTML = '';
      ['heading', 'paragraph', 'quote'].forEach(function (k) {
        var el = document.createElement('div');
        el.className = 'wpui-block ed-iblock ed-iblock--' + k + (k === cur ? ' is-selected' : '');
        el.tabIndex = 0; el.setAttribute('role', 'listitem');
        el.setAttribute('aria-label', 'Block: ' + NAMES[k] + (k === cur ? ', selected' : ''));
        el.innerHTML = CONTENT[k];
        el.setAttribute('style', (k === 'heading' ? 'font-size:' + LEVEL_SIZE[level] + ';' : '') + css(k));
        var pick = function () { if (cur !== k) { cur = k; render(); } };
        el.addEventListener('click', pick);
        el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
        canvas.appendChild(el);
      });
    }
    // CSS each optional tool writes, keyed by its label in the ⋮ menu.
    var ITEM_CSS = { 'Line height': 'line-height', 'Letter spacing': 'letter-spacing', 'Line indent': 'text-indent', 'Columns': 'column-count', 'Decoration': 'text-decoration', 'Letter case': 'text-transform',
      'Orientation': 'writing-mode', 'Text alignment': 'text-align', 'Minimum height': 'min-height', 'Minimum width': 'min-width', 'Radius': 'border-radius', 'Border': 'border-width', 'Padding': 'padding', 'Margin': 'margin-block' };
    function wireItem(el, label) {
      var prop = ITEM_CSS[label]; if (!prop) { $$('button, input, select', el).forEach(function (c) { c.setAttribute('tabindex', '-1'); }); el.setAttribute('inert', ''); return; }
      var v = V[cur]; v.props = v.props || {};
      function set(val) { v.props[prop] = val; if (prop === 'border-width') v.props['border-style'] = val ? 'solid' : ''; if (prop === 'min-height') { v.props.display = val ? 'flex' : ''; v.props['align-items'] = val ? 'center' : ''; } renderCanvas(); }
      el.addEventListener('wps-change', function (e) { var d = e.detail.value; set(d == null ? '' : d === 'vertical-rl' || d === 'horizontal-tb' ? d : d); });
      $$('input[type="number"], input[type="text"], input[type="range"]', el).forEach(function (inp) {
        inp.addEventListener('input', function () {
          var unitSel = $('select', el), unit = unitSel ? unitSel.value : '';
          if (inp.type === 'range' && (label === 'Padding' || label === 'Margin')) { var i = +inp.value; set(i ? (IP.spacing[i - 1] || '') : '0'); return; }
          var n = inp.value; if (n === '') { set(''); return; }
          set(prop === 'line-height' || prop === 'column-count' ? n : n + (unit || 'px'));
        });
      });
    }
    var GROUP = { Typography: 'typography', Background: 'background', Dimensions: 'dimensions', Borders: 'border' };
    function panelOf(name) { return $('.' + GROUP[name] + '-block-support-panel', sidebar); }
    function placeholders(panel) { return $$('[class*="tools-panel-item-placeholder"]', panel); }
    function showItem(panelName, label) {
      var panel = panelOf(panelName), labels = ((SNAP.blocks || {})[cur] || {})[panelName] || [], i = labels.indexOf(label);
      var html = SNAP.items[panelName + ':' + label]; if (!panel || i < 0 || !html) return;
      // Placeholders keep their place: the i-th optional tool sits in the i-th placeholder.
      var holders = $$('[data-opt]', panel).concat([]), ph = panel.querySelectorAll('[class*="tools-panel-item"]');
      var slot = $('[data-opt="' + i + '"]', panel); if (!slot) return;
      var node = snapNode(html); node.setAttribute('data-shown', label); node.setAttribute('data-opt', i);
      slot.replaceWith(node); wireItem(node, label); syncToggles(node);
    }
    function hideItem(panelName, label) {
      var panel = panelOf(panelName), node = panel && $('[data-shown="' + label + '"]', panel); if (!node) return;
      var ph = document.createElement('div'); ph.className = node.className.split(' ')[0] + ' ' + (PH_CLASS || ''); ph.setAttribute('data-opt', node.getAttribute('data-opt'));
      node.replaceWith(ph);
      var p = (V[cur].props = V[cur].props || {}); if (ITEM_CSS[label]) { delete p[ITEM_CSS[label]]; }
    }
    var PH_CLASS = null;
    function renderSidebar() {
      putSnap(sidebar, 'insp-' + cur);
      if (cur === 'heading') {
        var btn = $('[role="radio"][data-value="h' + level + '"]', sidebar), card = $('.block-editor-block-card', sidebar);
        if (btn && card) { $('.block-editor-block-card__name', card).textContent = 'Heading ' + level; $('.block-editor-block-icon', card).innerHTML = $('.block-editor-block-icon', btn).innerHTML; pressToggle(btn); }
        $$('[role="radio"][data-value^="h"]', sidebar).forEach(function (b) { b.addEventListener('click', function () { level = +b.getAttribute('data-value').slice(1); renderCanvas(); renderSidebar(); if (isM(f)) renderMHead(); var nb = $('[role="radio"][data-value="h' + level + '"]', sidebar); if (nb) nb.focus(); }); });
      }
      // Number the placeholders per panel so optional tools can return to their place.
      ['Typography', 'Background', 'Dimensions', 'Borders'].forEach(function (pn) {
        var panel = panelOf(pn); if (!panel) return;
        placeholders(panel).forEach(function (ph, i) { if (!PH_CLASS) PH_CLASS = clsLike(ph, 'placeholder'); ph.setAttribute('data-opt', i); });
        (SHOWN[cur][pn] || []).forEach(function (l) { showItem(pn, l); });
        var mb = $('button[aria-label="' + pn + ' options"]', panel);
        if (mb) mb.addEventListener('click', function () { openMenu(pn, mb); });
      });
      // Font size presets (Ipsum's), and color/gradient dropdowns.
      $$('[role="radiogroup"] [role="radio"]', sidebar).forEach(function (b) {
        var g = b.closest('[role="radiogroup"]'); if (!/font size/i.test(g.getAttribute('aria-label') || '')) return;
        var map = { 'Small': 'small', 'Medium': 'medium', 'Large': 'large', 'Extra Large': 'x-large', 'X-Large': 'x-large', 'Extra Extra Large': '2-x-large', '2X-Large': '2-x-large' };
        if (V[cur].sizeLabel === b.getAttribute('aria-label')) pressToggle(b);
        b.addEventListener('wps-change', function (e) { V[cur].size = e.detail.value == null ? null : IP.sizes[map[b.getAttribute('aria-label')]] || null; V[cur].sizeLabel = e.detail.value == null ? null : b.getAttribute('aria-label'); renderCanvas(); });
      });
      $$('.block-editor-panel-color-gradient-settings__dropdown', sidebar).forEach(function (b) {
        if (b.tagName !== 'BUTTON') return;
        var label = $('.block-editor-panel-color-gradient-settings__color-name', b).textContent.trim(), inBg = !!b.closest('[class*="background-block-support-panel"]');
        var key = label === 'Gradient' ? (inBg ? 'bgrad' : 'tgrad') : (inBg ? 'bg' : 'color'), ind = $('.component-color-indicator', b);
        if (V[cur][key] && ind) ind.style.background = V[cur][key];
        b.addEventListener('click', function () {
          var pop = wpPopover(b, SNAP[label === 'Gradient' ? 'pop-gradient' : inBg ? 'pop-bgcolor' : 'pop-color'], 'left');
          $$('.components-circular-option-picker__option', pop.el).forEach(function (o) {
            o.addEventListener('click', function () {
              var val = o.style.background || o.style.backgroundColor || getComputedStyle(o).backgroundImage;
              V[cur][key] = val; if (ind) ind.style.background = val; pop.close(true); renderCanvas();
            });
          });
          $$('button', pop.el).filter(function (x) { return /^(Clear|Reset)$/.test(x.textContent.trim()); }).forEach(function (c) { c.addEventListener('click', function () { V[cur][key] = null; if (ind) ind.style.background = ''; pop.close(true); renderCanvas(); }); });
          $$('.components-color-palette__custom-color-button, .components-custom-gradient-picker', pop.el).forEach(function (x) { x.setAttribute('inert', ''); });
        });
      });
      $$('[class*="tools-panel-item"] .components-dropdown button:not(.block-editor-panel-color-gradient-settings__dropdown), .block-editor-global-styles-background-panel__dropdown-toggle', sidebar).forEach(function (x) { if (!x.closest('[data-shown]')) x.setAttribute('inert', ''); });
      $$('[aria-label="Close Settings"]', sidebar).forEach(function (c) { c.addEventListener('click', function () { if (isM(f)) { mSettings = false; renderMHead(); $('.ed-m-settings', mHead).focus(); } }); });
      syncToggles(sidebar);
    }
    function openMenu(pn, btn) {
      var pop = wpPopover(btn, SNAP['menu-' + cur + '-' + pn], 'below');
      var shown = SHOWN[cur][pn] = SHOWN[cur][pn] || [];
      $$('[role="menuitemcheckbox"]', pop.el).forEach(function (it) {
        var label = $('.components-menu-item__item', it) ? $('.components-menu-item__item', it).textContent.trim() : it.textContent.trim();
        if (it.getAttribute('aria-disabled') === 'true') return;
        menuCheck(it, shown.indexOf(label) > -1);
        it.addEventListener('click', function () {
          var i = shown.indexOf(label);
          if (i > -1) { shown.splice(i, 1); hideItem(pn, label); menuCheck(it, false); } else { shown.push(label); showItem(pn, label); menuCheck(it, true); }
          renderCanvas(); it.focus();
        });
      });
      $$('[role="menuitem"]', pop.el).forEach(function (it) {
        if (!/Reset all/.test(it.textContent)) return;
        it.removeAttribute('aria-disabled'); it.disabled = false;
        it.addEventListener('click', function () { (SHOWN[cur][pn] || []).slice().forEach(function (l) { hideItem(pn, l); }); SHOWN[cur][pn] = []; if (pn === 'Typography') { V[cur].size = V[cur].color = V[cur].tgrad = V[cur].sizeLabel = null; } if (pn === 'Background') V[cur].bg = V[cur].bgrad = null; pop.close(true); renderCanvas(); renderSidebar(); });
      });
    }
    function render() { renderCanvas(); renderSidebar(); if (isM(f)) renderMHead(); }
    render();
    watchWidth(f, function (m) { if (m) { mSettings = false; renderMHead(); } else sidebar.classList.remove('is-open'); syncToggles(sidebar); });
  };

  /* ======================================================================
     Site Editor › Styles screens (WordPress 7.2's own markup) beside the site
     ====================================================================== */
  function gsMount(host, o) {
    var f = frame(host, o.cls, cap(o.caption));
    f.innerHTML = M_TOP() + '<div class="ed-gsx"><div class="wpui-gs ed-real-gs"></div><div class="ed-gsx__site"><div class="ed-site" inert>' + o.markup + '</div></div></div>' + M_BOTTOM();
    var gs = putSnap($('.ed-real-gs', f), o.snap), siteWrap = $('.ed-gsx__site', f), site = $('.ed-site', f);
    $$('[aria-label="Back"]', gs).forEach(function (b) { b.setAttribute('inert', ''); });
    if (IP.palette) Object.keys(IP.palette).forEach(function (k) { site.style.setProperty('--wp--preset--color--' + k, IP.palette[k]); });
    site.style.fontFamily = IP.body || '';
    if (o.init) o.init(gs, site, f);
    var onsite = onSite(host, o.onSiteLabel || 'On the site');
    watchWidth(f, function () { placeSite(f, siteWrap, $('.ed-gsx', f), onsite); syncToggles(gs); });
    return f;
  }
  var SIZE_BY_LABEL = { 'Small': 'small', 'Medium': 'medium', 'Large': 'large', 'X-Large': 'x-large', '2X-Large': '2-x-large' };
  function fontSizeWiring(gs, apply) {
    $$('[role="radiogroup"] [role="radio"]', gs).forEach(function (b) {
      if (!/font size/i.test(b.closest('[role="radiogroup"]').getAttribute('aria-label') || '')) return;
      b.addEventListener('wps-change', function (e) { apply(e.detail.value == null ? '' : IP.sizes[SIZE_BY_LABEL[b.getAttribute('aria-label')]] || ''); });
    });
    $$('.components-dropdown button, [role="combobox"], button[aria-haspopup]', gs).forEach(function (x) { if (!/States/.test(x.textContent)) x.setAttribute('inert', ''); });
    $$('button[aria-label$=" options"], button[aria-label="Set custom size"]', gs).forEach(function (x) { x.setAttribute('inert', ''); });
  }

  mounts.states = function (host) {
    gsMount(host, {
      cls: 'ed-states-frame', snap: 'gs-states',
      caption: 'Open <strong>States</strong> to pick a viewport or a state like Hover, then change the font size. Hover, focus or click the menu to see it',
      markup: '<header class="ed-site__head"><p class="ed-site__title">My WordPress Website</p><nav aria-label="Navigation"><ul class="ed-site__nav">' + ['Home', 'About', 'Blog', 'Contact'].map(function (t) { return '<li><a href="#" tabindex="-1">' + t + '</a></li>'; }).join('') + '</ul></nav></header>' +
        '<div class="ed-site__hero"></div><p class="ed-site__note">All viewports, default state.</p>',
      init: function (gs, site, f) {
        site.removeAttribute('inert'); $$('a', site).forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
        var vp = 'Default', st = 'Default', sizes = {}, styleEl = document.createElement('style'); site.appendChild(styleEl);
        var scope = '#' + (site.id = 'edSite' + (++uid));
        function paint() {
          var sel = { Default: '', Hover: ':hover', Focus: ':focus', 'Focus-visible': ':focus-visible', Active: ':active' };
          styleEl.textContent = Object.keys(sizes).map(function (k) { var p = k.split('|'); if (p[0] !== vp && p[0] !== 'Default') return ''; return scope + ' .ed-site__nav a' + sel[p[1]] + '{font-size:' + sizes[k] + '}'; }).join('');
          site.style.maxWidth = vp === 'Tablet' ? '600px' : vp === 'Mobile' ? '340px' : ''; site.classList.toggle('is-mobile', vp === 'Mobile');
          $('.ed-site__note', site).textContent = (vp === 'Default' ? 'All viewports' : vp) + ', ' + (st === 'Default' ? 'default state' : st.toLowerCase() + ' state') + '.';
        }
        fontSizeWiring(gs, function (v) { sizes[vp + '|' + st] = v; paint(); });
        var btn = $$('button', gs).filter(function (b) { return /States/.test(b.textContent); })[0];
        if (btn) btn.addEventListener('click', function () {
          var pop = wpPopover(btn, SNAP['menu-states'], 'below');
          $$('.components-menu-group', pop.el).forEach(function (g, gi) {
            $$('[role="menuitem"]', g).forEach(function (it) {
              var label = it.textContent.trim();
              menuCheck(it, label === (gi ? st : vp));
              it.addEventListener('click', function () {
                if (gi) st = label; else vp = label;
                $$('[role="menuitem"]', g).forEach(function (x) { menuCheck(x, x === it); });
                $$('[role="radio"]', gs).forEach(function (b) { pressToggle(b, false); b.setAttribute('aria-checked', 'false'); });
                paint(); pop.close(true);
              });
            });
          });
        });
        paint();
      }
    });
  };

  mounts.gsform = function (host) {
    gsMount(host, {
      cls: 'ed-gsf-frame', snap: 'gs-form',
      caption: 'Change the Input font size. The preview in the panel and every form on the site follow',
      markup: '<p class="ed-site__title">My WordPress Website</p><form class="ed-site__search" onsubmit="return false"><label for="edS' + uid + '">Search</label><div><input id="edS' + uid + '" type="search" value="duotone palettes" tabindex="-1" autocomplete="off" data-1p-ignore data-lpignore="true"><button type="button" tabindex="-1">Search</button></div></form>' +
        '<h3 class="ed-site__h">Leave a Reply</h3><p class="ed-site__field"><label>Name <span>*</span><input type="text" value="Ada" tabindex="-1" autocomplete="off" data-1p-ignore data-lpignore="true"></label></p><p class="ed-site__field"><label>Email <span>*</span><input type="email" value="ada@example.com" tabindex="-1" autocomplete="off" data-1p-ignore data-lpignore="true"></label></p>',
      init: function (gs, site) {
        fontSizeWiring(gs, function (v) { $$('input', site).concat($$('input, textarea', $('.global-styles-ui-sidebar__panel', gs) || gs)).forEach(function (i) { i.style.fontSize = v; }); });
      }
    });
  };

  function duotoneFilter(id, colors) {
    var rgb = colors.map(function (c) { var h = c.replace('#', ''); if (h.length === 3) h = h.split('').map(function (x) { return x + x; }).join(''); return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16) / 255; }); });
    var t = [0, 1, 2].map(function (k) { return rgb.map(function (c) { return c[k].toFixed(3); }).join(' '); });
    return '<filter id="' + id + '" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values=".299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="' + t[0] + '"/><feFuncG type="table" tableValues="' + t[1] + '"/><feFuncB type="table" tableValues="' + t[2] + '"/></feComponentTransfer></filter>';
  }
  mounts.duotone = function (host) {
    gsMount(host, {
      cls: 'ed-duo-frame', snap: 'gs-duo', onSiteLabel: 'In the editor',
      caption: 'Add a custom duotone with <strong>+</strong>, pick its Shadows and Highlights, then apply it to the image',
      markup: '<div class="ed-duo2__img">' + art(['#f6c28b', '#3a4a7a'], 'Harbor at dusk') + '</div><div class="ed-duo2__pick"><p>Image block › Apply duotone filter</p><div class="ed-duo2__row" role="radiogroup" aria-label="Duotone"></div></div><svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs class="ed-duo2__defs"></defs></svg>',
      init: function (gs, site) {
        site.removeAttribute('inert');
        var applied = null, n = ++uid, custom = null, paletteHTML = null;
        function lockTabs() { $$('[role="tab"]', gs).forEach(function (t) { if (!/Duotone/.test(t.textContent)) t.setAttribute('inert', ''); }); $$('[aria-label="Back"], [aria-label="Duotone options"], [aria-label="Add duotone"][aria-disabled="true"]', gs).forEach(function (b) { b.setAttribute('inert', ''); }); }
        function all() { return (IP.duotone || []).map(function (d) { return { name: d.name, colors: d.colors }; }).concat(custom ? [custom] : []); }
        function grad(c) { return 'linear-gradient(135deg, ' + c[0] + ' 0%, ' + c[0] + ' 50%, ' + c[1] + ' 50%, ' + c[1] + ' 100%)'; }
        function paint() {
          var L = all();
          $('.ed-duo2__defs', site).innerHTML = L.map(function (x, i) { return duotoneFilter('duo' + n + '-' + i, x.colors); }).join('');
          var row = $('.ed-duo2__row', site);
          row.innerHTML = '<button type="button" role="radio" aria-label="Unset" aria-checked="' + (applied === null) + '" data-i="" class="is-unset"></button>' + L.map(function (x, i) { return '<button type="button" role="radio" aria-label="' + esc(x.name) + '" title="' + esc(x.name) + '" aria-checked="' + (applied === i) + '" data-i="' + i + '" style="background:' + grad(x.colors) + '"></button>'; }).join('');
          $$('button', row).forEach(function (b) { b.addEventListener('click', function () { applied = b.dataset.i === '' ? null : +b.dataset.i; paint(); }); });
          $('.ed-duo2__img svg', site).style.filter = applied === null ? '' : 'url(#duo' + n + '-' + applied + ')';
          var ed = $('button[aria-label^="Edit:"] .component-color-indicator', gs); if (ed && custom) ed.style.background = grad(custom.colors);
        }
        function editPopover(btn) {
          var pop = wpPopover(btn, SNAP['pop-duo-edit'], 'left');
          if (!paletteHTML && SNAP['pop-duo-edit-open']) { var t = document.createElement('div'); t.innerHTML = SNAP['pop-duo-edit-open']; var g = t.querySelector('[id^="color-list-picker-option-0__content"]'); paletteHTML = g ? g.innerHTML : ''; }
          $$('button', pop.el).filter(function (b) { return b.textContent.trim() === 'Close'; }).forEach(function (b) { b.addEventListener('click', function () { pop.close(true); }); });
          $$('.components-custom-gradient-picker__control-point-button, .components-custom-gradient-picker__gradient-bar', pop.el).forEach(function (x) { x.setAttribute('inert', ''); });
          function bar() { $$('[style*="linear-gradient"]', pop.el).forEach(function (gb) { gb.style.background = 'linear-gradient(90deg, ' + custom.colors[0] + ' 0%, ' + custom.colors[1] + ' 100%)'; }); $$('.components-color-list-picker__swatch-color', pop.el).forEach(function (s, i) { s.style.background = custom.colors[i]; }); }
          $$('.components-color-list-picker__swatch-button', pop.el).forEach(function (b, i) {
            var group = b.nextElementSibling;
            b.addEventListener('click', function () {
              var open = b.getAttribute('aria-expanded') !== 'true';
              b.setAttribute('aria-expanded', String(open)); group.setAttribute('aria-hidden', String(!open));
              if (open && !group.children.length) {
                group.innerHTML = paletteHTML; uniq(group); wireControls(group);
                $$('.components-color-palette__custom-color-button', group).forEach(function (x) { x.setAttribute('inert', ''); });
                $$('.components-circular-option-picker__option', group).forEach(function (o) {
                  o.addEventListener('click', function () {
                    var c = getComputedStyle(o).backgroundColor, m = c.match(/\d+(\.\d+)?/g);
                    custom.colors[i] = '#' + m.slice(0, 3).map(function (x) { return ('0' + (+x).toString(16)).slice(-2); }).join('');
                    $$('.components-circular-option-picker__option', group).forEach(function (x) { x.setAttribute('aria-selected', String(x === o)); });
                    var name = $('.components-color-palette__custom-color-name', group), val = $('.components-color-palette__custom-color-value', group);
                    if (name) name.textContent = o.getAttribute('aria-label'); if (val) val.textContent = custom.colors[i];
                    var cb = $('.components-color-palette__custom-color-button', group); if (cb) cb.style.background = custom.colors[i];
                    applied = all().length - 1; bar(); paint();
                  });
                });
              }
              if (!open) group.innerHTML = '';
            });
          });
          bar();
        }
        function wireAdded() {
          lockTabs();
          var ed = $('button[aria-label^="Edit:"]', gs); if (ed) ed.addEventListener('click', function () { editPopover(ed); });
          var name = $$('input[type="text"]', gs).filter(function (i) { return /Duotone/.test(i.value); })[0];
          if (name) name.addEventListener('input', function () { custom.name = name.value || 'Duotone 1'; if (ed) ed.setAttribute('aria-label', 'Edit: ' + custom.name); paint(); });
          $$('button', gs).forEach(function (b) { if (/^(Done|Remove|Add duotone)$/.test(b.textContent.trim() || b.getAttribute('aria-label'))) b.setAttribute('inert', ''); });
        }
        lockTabs();
        var add = $('[aria-label="Add duotone"]', gs);
        if (add) add.addEventListener('click', function () {
          custom = { name: 'Duotone 1', colors: ['#000000', IP.palette ? IP.palette['theme-1'] : '#fcfcfc'] };
          putSnap(gs, 'gs-duo-added'); wireAdded(); applied = all().length - 1; paint(); syncToggles(gs);
          var ed = $('button[aria-label^="Edit:"]', gs); if (ed) ed.focus();
        });
        paint();
      }
    });
  };

  /* ======================================================================
     Gallery: Order by, Gallery Grid with resizable images
     ====================================================================== */
  mounts.gallery = function (host) {
    var f = frame(host, 'ed-gal-frame', cap('Try <strong>Order by</strong>, then switch to <strong>Gallery Grid</strong>, select an image and drag its handles to resize it'));
    var S = { variation: 'flex', order: 'custom', random: false, cols: 3, list: PHOTOS.slice(), span: { Harbor: [2, 2] }, sel: null, aspect: 'auto', crop: true, sizeSlug: 'large' };
    var mSettings = false;
    f.innerHTML = '<div class="wpui-editor"><div class="ed-d-only">' + editorHeader({ settings: true, title: 'Fall photo walk' }) + '</div><div class="ed-m-only ed-m-headwrap"></div>' +
      '<div class="wpui-editor__body"><div class="wpui-canvas ed-gal-canvas"><figure class="ed-gal-wrap"><div class="wpui-gallery" role="list" aria-label="Gallery block"></div></figure></div>' +
      '<div class="wpui-sidebar ed-real-sidebar"></div></div></div>';
    var gal = $('.wpui-gallery', f), wrapEl = $('.ed-gal-wrap', f), mHead = $('.ed-m-headwrap', f), sidebar = $('.wpui-sidebar', f);
    function renderMHead() {
      var img = S.variation === 'grid' && S.sel;
      mHead.innerHTML = mEditorHeader({ settingsInteractive: true, settingsOpen: mSettings }) + (mSettings ? '' : dockedToolbar(img
        ? [[['image', 'Image'], ['up', 'Move up'], ['down', 'Move down']], [['alignNone', 'Align'], ['duotone', 'Apply duotone filter']], [['link', 'Link'], ['crop', 'Edit image'], ['overlayText', 'Add text over image'], ['caption', 'Add caption']], [['text', 'Replace']], [['comment', 'Add note']], [['more', 'Options']]]
        : [[[S.variation === 'grid' ? 'galleryGrid' : 'gallery', 'Gallery'], ['up', 'Move up'], ['down', 'Move down']], [['alignNone', 'Align'], ['duotone', 'Apply duotone filter']], [['caption', 'Add caption']], [['text', 'Add']], [['comment', 'Add note']], [['more', 'Options']]]));
      sidebar.classList.toggle('is-open', mSettings); if (mSettings) requestAnimationFrame(function () { syncToggles(sidebar); });
      $('.ed-m-settings', mHead).addEventListener('click', function () { mSettings = !mSettings; renderMHead(); $('.ed-m-settings', mHead).focus(); });
    }
    function sortList(order) {
      var cmp = {
        'date/desc': function (x, y) { return y.d - x.d; }, 'date/asc': function (x, y) { return x.d - y.d; },
        'title/asc': function (x, y) { return x.t.localeCompare(y.t); }, 'title/desc': function (x, y) { return y.t.localeCompare(x.t); } }[order];
      return S.list.slice().sort(cmp);
    }
    function spanOf(t) { return S.span[t] || [1, 1]; }
    function renderGallery() {
      var grid = S.variation === 'grid';
      gal.className = 'wpui-gallery' + (grid ? ' is-grid' : '') + (S.aspect !== 'auto' ? ' has-aspect' : '') + (!grid && !S.crop ? ' is-uncropped' : '');
      wrapEl.classList.toggle('is-selected', !grid || !S.sel);
      gal.innerHTML = S.list.map(function (p) {
        var sp = spanOf(p.t);
        var style = (grid ? 'grid-column:span ' + sp[0] + ';grid-row:span ' + sp[1] + ';' : 'flex-basis:calc(' + (100 / S.cols) + '% - ' + (8 * (S.cols - 1) / S.cols) + 'px);') + (S.aspect !== 'auto' ? 'aspect-ratio:' + S.aspect + ';' : '');
        var sel = grid && S.sel === p.t;
        return '<figure role="listitem" ' + (grid ? 'tabindex="0" ' : '') + 'data-t="' + p.t + '" class="' + (sel ? 'is-selected' : '') + '" style="' + style + '" aria-label="Image: ' + p.t + (sel ? ', selected' : '') + '">' + art(p.c, p.t) +
          (sel ? '<div class="ed-resizer"><button type="button" class="ed-handle ed-handle--right" aria-label="Resize width. Spans ' + sp[0] + ' columns. Use the left and right arrow keys."></button><button type="button" class="ed-handle ed-handle--bottom" aria-label="Resize height. Spans ' + sp[1] + ' rows. Use the up and down arrow keys."></button></div>' : '') + '</figure>';
      }).join('');
      if (grid) $$('figure', gal).forEach(function (fig) {
        var t = fig.getAttribute('data-t');
        var pick = function (e) { if (e && e.target.closest('.ed-handle')) return; if (S.sel !== t) { S.sel = t; renderGallery(); if (isM(f)) renderMHead(); var nf = $('figure[data-t="' + t + '"]', gal); if (nf) nf.focus({ preventScroll: true }); } };
        fig.addEventListener('click', pick);
        fig.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target === fig) { e.preventDefault(); pick(); } });
      });
      $$('.ed-handle', gal).forEach(bindHandle);
    }
    function metrics() {
      var cs = getComputedStyle(gal), gap = parseFloat(cs.columnGap) || 8;
      var cols = cs.gridTemplateColumns.split(' ').length;
      var colW = (gal.clientWidth - gap * (cols - 1)) / cols;
      var rowH = parseFloat(cs.gridAutoRows) || 120;
      return { gap: gap, cols: cols, colW: colW, rowH: rowH };
    }
    function bindHandle(h) {
      var dir = h.classList.contains('ed-handle--right') ? 'x' : 'y';
      var t = S.sel, fig = h.closest('figure');
      function setSpan(n) {
        var m = metrics(), sp = spanOf(t).slice(), colStart = Math.round(fig.offsetLeft / (m.colW + m.gap));
        if (dir === 'x') sp[0] = Math.max(1, Math.min(n, m.cols - colStart)); else sp[1] = Math.max(1, Math.min(n, 3));
        S.span[t] = sp;
        fig.style.gridColumn = 'span ' + sp[0]; fig.style.gridRow = 'span ' + sp[1];
      }
      h.addEventListener('pointerdown', function (e) {
        e.preventDefault(); e.stopPropagation(); h.setPointerCapture(e.pointerId);
        gal.classList.add('is-resizing');
        var m = metrics(), r = fig.getBoundingClientRect();
        var move = function (ev) {
          if (dir === 'x') setSpan(Math.round((ev.clientX - r.left + m.gap) / (m.colW + m.gap)));
          else setSpan(Math.round((ev.clientY - r.top + m.gap) / (m.rowH + m.gap)));
        };
        var up = function () { h.removeEventListener('pointermove', move); h.removeEventListener('pointerup', up); gal.classList.remove('is-resizing'); renderGallery(); var nh = $('.ed-handle--' + (dir === 'x' ? 'right' : 'bottom'), gal); if (nh) nh.focus({ preventScroll: true }); };
        h.addEventListener('pointermove', move); h.addEventListener('pointerup', up);
      });
      h.addEventListener('keydown', function (e) {
        var sp = spanOf(t), d = 0;
        if (dir === 'x' && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) d = e.key === 'ArrowRight' ? 1 : -1;
        if (dir === 'y' && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) d = e.key === 'ArrowDown' ? 1 : -1;
        if (!d) return;
        e.preventDefault(); setSpan((dir === 'x' ? sp[0] : sp[1]) + d); renderGallery();
        var nh = $('.ed-handle--' + (dir === 'x' ? 'right' : 'bottom'), gal); if (nh) nh.focus({ preventScroll: true });
      });
    }
    function renderInsp() {
      putSnap(sidebar, S.variation === 'grid' ? 'gal-grid' : 'gal-flex');
      $$('[role="tab"], [aria-label="Settings options"]', sidebar).forEach(function (t) { t.setAttribute('inert', ''); });
      $$('[aria-label="Close Settings"]', sidebar).forEach(function (c) { c.addEventListener('click', function () { if (isM(f)) { mSettings = false; renderMHead(); $('.ed-m-settings', mHead).focus(); } }); });
      $$('[role="radio"][data-value]', sidebar).forEach(function (b) {
        b.addEventListener('wps-change', function () {
          var v = b.getAttribute('data-value') === 'gallery-grid' ? 'grid' : 'flex';
          if (v === S.variation) return;
          S.variation = v; S.sel = v === 'grid' ? 'Harbor' : null; renderInsp(); renderGallery(); if (isM(f)) renderMHead();
          var nb = $('[role="radio"][aria-checked="true"]', sidebar); if (nb) nb.focus();
        });
      });
      var range = $('input[type="range"]', sidebar), num = range && $('input[type="number"]', range.closest('.components-range-control__root'));
      if (range) { setRange(range, S.cols); if (num) num.value = S.cols; [range, num].forEach(function (i) { if (i) i.addEventListener('input', function () { if (i.value === '') return; S.cols = Math.max(1, Math.min(6, +i.value)); renderGallery(); }); }); }
      $$('select', sidebar).forEach(function (sel) {
        var lab = sel.closest('.components-base-control'), name = lab && $('label', lab) ? $('label', lab).textContent.trim() : '';
        var help = function () { return lab && $('.components-base-control__help', lab); };
        if (/Order by/.test(name)) {
          sel.value = S.random ? 'random' : S.order;
          $$('option', sel).forEach(function (o) { if (o.value === 'custom') o.disabled = !S.random; });
          sel.addEventListener('change', function () {
            if (sel.value === 'random') S.random = true; else { S.random = false; S.order = sel.value; if (sel.value !== 'custom') S.list = sortList(sel.value); }
            $$('option', sel).forEach(function (o) { if (o.value === 'custom') o.disabled = !S.random; });
            var h = $('.ed-order-help', lab); if (S.random && !h) sel.closest('.components-base-control__field').insertAdjacentHTML('afterend', '<p class="components-base-control__help ed-order-help">Images are shown in a random order each time the page loads.</p>'); else if (!S.random && h) h.remove();
            renderGallery();
          });
        } else if (/Aspect ratio/.test(name)) {
          var VALS = { 'Original': 'auto', 'Square - 1:1': '1', 'Standard - 4:3': '4/3', 'Portrait - 3:4': '3/4', 'Classic - 3:2': '3/2', 'Classic Portrait - 2:3': '2/3', 'Wide - 16:9': '16/9', 'Tall - 9:16': '9/16' };
          sel.addEventListener('change', function () { var o = sel.options[sel.selectedIndex]; S.aspect = VALS[o.textContent.trim()] || (o.value === 'auto' ? 'auto' : o.value.replace(':', '/')); renderGallery(); });
        }
      });
      var crop = $('.components-form-toggle__input', sidebar);
      if (crop) { crop.checked = S.crop; crop.parentNode.classList.toggle('is-checked', S.crop); crop.addEventListener('change', function () { S.crop = crop.checked; renderGallery(); }); }
      syncToggles(sidebar);
    }
    renderInsp(); renderGallery();
    watchWidth(f, function (m) { if (m) { mSettings = false; renderMHead(); } else sidebar.classList.remove('is-open'); renderGallery(); syncToggles(sidebar); });
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(renderGallery, 150); });
  };

  /* Gallery lightbox on a phone (front end) */
  mounts.lightbox = function (host) {
    var f = frame(host, 'ed-lb-frame', cap('Swipe or drag the image, or use the arrows', 'Front end, recreated'));
    var idx = 0;
    f.innerHTML = '<div class="ed-phone"><div class="ed-phone__screen"><div class="wpui-lightbox" role="dialog" aria-label="Enlarged images">' +
      '<div class="wpui-lightbox__track">' + PHOTOS.map(function (p) { return '<div class="wpui-lightbox__slide"><div>' + art(p.c, p.t) + '</div></div>'; }).join('') + '</div>' +
      '<span class="ed-lb-close" aria-hidden="true">' + I('close') + '</span>' +
      iconBtn('left', 'Previous', 'wpui-lightbox__prev') + iconBtn('right', 'Next', 'wpui-lightbox__next') +
      '<p class="ed-lb-count" aria-live="polite"></p></div></div></div>';
    var track = $('.wpui-lightbox__track', f), count = $('.ed-lb-count', f);
    function go(i, animate) {
      idx = Math.max(0, Math.min(PHOTOS.length - 1, i));
      track.style.transition = animate === false || reduced ? 'none' : '';
      track.style.transform = 'translateX(' + (-idx * 100) + '%)';
      count.textContent = (idx + 1) + ' / ' + PHOTOS.length;
      $('.wpui-lightbox__prev', f).setAttribute('aria-disabled', String(idx === 0));
      $('.wpui-lightbox__next', f).setAttribute('aria-disabled', String(idx === PHOTOS.length - 1));
    }
    go(0, false);
    $('.wpui-lightbox__prev', f).addEventListener('click', function () { go(idx - 1); });
    $('.wpui-lightbox__next', f).addEventListener('click', function () { go(idx + 1); });
    var sx = null, dx = 0;
    track.addEventListener('pointerdown', function (e) { sx = e.clientX; dx = 0; track.style.transition = 'none'; track.setPointerCapture(e.pointerId); });
    track.addEventListener('pointermove', function (e) { if (sx === null) return; dx = e.clientX - sx; var edge = (idx === 0 && dx > 0) || (idx === PHOTOS.length - 1 && dx < 0); track.style.transform = 'translateX(calc(' + (-idx * 100) + '% + ' + (edge ? dx / 3 : dx) + 'px))'; });
    var end = function () { if (sx === null) return; var w = track.offsetWidth; sx = null; if (Math.abs(dx) > w * 0.15) go(idx + (dx < 0 ? 1 : -1)); else go(idx); };
    track.addEventListener('pointerup', end); track.addEventListener('pointercancel', end);
  };

  /* ======================================================================
     Navigation: link search (static mockup)
     ====================================================================== */
  mounts.linksearch = function (host) {
    var f = frame(host, 'ed-ls-frame', cap('One search returns every kind of content, with its type on the right', 'Mockup of WordPress 7.2'));
    var results = [
      ['postList', '<mark>Release</mark> party schedule', '/release-party-schedule', 'Post'],
      ['page', '<mark>Release</mark> notes', '/release-notes', 'Page'],
      ['category', '<mark>Release</mark>s', '/category/releases', 'Category'],
      ['tag', '<mark>release</mark>-day', '/tag/release-day', 'Tag'],
      ['file', '<mark>release</mark>-banner', '/release-banner', 'Attachment']
    ];
    f.innerHTML = '<div class="ed-ls" inert><div class="ed-ls__nav"><span class="ed-ls__site">My WordPress Website</span><span class="ed-ls__items"><span>Home</span><span>About</span><span>Blog</span><span class="ed-ls__new">Add link</span>' +
      '<span class="wpui-btn wpui-btn--icon ed-ls__appender">' + I('plus') + '</span></span></div>' +
      '<div class="wpui-pop ed-ls__pop"><div class="ed-ls__field"><span class="wpui-label">Link</span><div class="ed-ls__input"><span>release</span>' + I('search', 20) + '</div></div>' +
      '<div class="ed-ls__results" role="listbox" aria-label="Search results">' + results.map(function (r, i) {
        return '<div class="ed-ls__item' + (i === 0 ? ' is-focused' : '') + '">' + I(r[0]) + '<span class="ed-ls__text"><span>' + r[1] + '</span><small>' + r[2] + '</small></span><span class="ed-ls__type">' + r[3] + '</span></div>';
      }).join('') + '</div></div><div class="ed-ls__page"><span></span><span></span><span></span></div></div>';
  };

  /* ======================================================================
     Media editor: the Edit media modal (crop handles are not draggable)
     ====================================================================== */
  mounts.mediaeditor = function (host) {
    var f = frame(host, 'ed-me-frame', cap('This image was edited earlier. Rotate, flip, zoom or change the aspect ratio, then try <strong>More options</strong> (⋮) › Restore original image. <button type="button" class="ed-reset">Reset</button>'));
    var ORIGINAL = { rot: 0, fx: 1, fy: 1, zoom: 1, tilt: 0, ratio: 'original' };
    var EDITED = { rot: 90, fx: 1, fy: 1, zoom: 1.2, tilt: 0, ratio: '1' };
    var saved, work, hist, fut, tab = 'Crop', side = true;
    var RATIOS = [['free', 'Free'], ['original', 'Original'], ['1', 'Square - 1:1'], ['4/3', 'Standard - 4:3'], ['3/4', 'Portrait - 3:4'], ['3/2', 'Classic - 3:2'], ['2/3', 'Classic Portrait - 2:3'], ['16/9', 'Wide - 16:9'], ['9/16', 'Tall - 9:16']];
    var date = NOW.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    var meta = { title: 'harbor', alt: '', caption: '', desc: '' };
    function copy(o) { return JSON.parse(JSON.stringify(o)); }
    function same(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
    function reset() { saved = copy(EDITED); work = copy(EDITED); hist = []; fut = []; }
    reset();
    var CTL = [['rotateLeft', 'Rotate 90° counter-clockwise', 'rl'], ['rotateRight', 'Rotate 90° clockwise', 'rr'], ['flipH', 'Flip horizontal', 'fh'], ['flipV', 'Flip vertical', 'fv'], ['plus', 'Zoom in', 'zi'], ['minus', 'Zoom out', 'zo']];
    var ticks = ''; for (var t = -45; t <= 45; t += 5) ticks += '<i' + (t % 15 === 0 ? ' class="is-major"' : '') + (t === 0 ? ' data-zero' : '') + '></i>';
    f.innerHTML = '<div class="ed-me" role="dialog" aria-label="Edit media" tabindex="-1">' +
      '<div class="ed-me__head"><h4>Edit media</h4><span style="flex:1"></span>' + iconBtn('sidebar', 'Media settings', 'ed-me-side', ' aria-pressed="true"') + iconBtn('more', 'More options', 'ed-me-more ed-hotspot', ' aria-haspopup="menu"') + iconBtn('close', 'Close', 'ed-me-close') + '</div>' +
      '<div class="ed-me__body"><div class="ed-me__content"><div class="ed-me__stage"><div class="ed-me__crop" aria-label="Crop area"><div class="ed-me__img">' + art(['#7FB7C9', '#1E5A6E'], 'harbor.jpg') + '</div><span class="ed-me__grid" aria-hidden="true"></span><i class="h tl"></i><i class="h tr"></i><i class="h bl"></i><i class="h br"></i><i class="h tc"></i><i class="h bc"></i><i class="h ml"></i><i class="h mr"></i></div></div>' +
        '<div class="ed-me__tools"><div class="ed-me__ruler"><div class="ed-me__track"><div class="ed-me__ticks" aria-hidden="true">' + ticks + '</div><input type="range" min="-45" max="45" step="1" value="0" aria-label="Fine rotation"></div><output class="ed-me__deg">0°</output></div>' +
        '<div class="ed-me__mctl ed-m-only" role="toolbar" aria-label="Image controls">' + CTL.map(function (c) { return iconBtn(c[0], c[1], 'ed-' + c[2]); }).join('') + iconBtn('aspectRatio', 'Aspect ratio', 'ed-me-ratio', ' aria-haspopup="menu"') + '</div></div></div>' +
      '<div class="ed-me__side"><div class="ed-me__tablist"><div class="wpui-tabs" role="tablist"><button type="button" role="tab" data-tab="Crop">Crop</button><button type="button" role="tab" data-tab="Details">Details</button></div></div><div class="ed-me__panel"></div></div></div>' +
      '<div class="ed-me__foot"><button type="button" class="wpui-btn wpui-btn--tertiary ed-me-reset">Reset</button>' + iconBtn('undo', 'Undo', 'ed-me-undo') + iconBtn('redo', 'Redo', 'ed-me-redo') + '<span style="flex:1"></span><button type="button" class="wpui-btn wpui-btn--tertiary ed-me-cancel">Cancel</button><button type="button" class="wpui-btn wpui-btn--primary ed-me-save">Save</button></div>' +
    '</div>';
    var dlg = $('.ed-me', f), imgEl = $('.ed-me__img', f), crop = $('.ed-me__crop', f), panel = $('.ed-me__panel', f), ruler = $('.ed-me__ruler input', f);
    function ratioValue(r) { if (r === 'original') return 4 / 3; if (r === 'free') return null; var p = r.split('/'); return p.length > 1 ? +p[0] / +p[1] : +p[0]; }
    function apply() {
      var quarter = Math.abs(work.rot / 90) % 2 === 1;
      var natural = quarter ? 3 / 4 : 4 / 3;
      var ar = work.ratio === 'original' ? natural : (ratioValue(work.ratio) || natural);
      crop.style.aspectRatio = String(ar);
      var narrow = isM(f), base = narrow ? 230 : 300;
      crop.style.width = 'min(100%, ' + Math.round(base * Math.min(ar, narrow ? 1.25 : 1.6)) + 'px)';
      // Scale the (rotated) 4:3 image so it always covers the crop box.
      var cover = quarter ? Math.max(4 / 3, 1 / ar) : Math.max(1, 1 / (0.75 * ar));
      if (work.tilt) cover *= 1 + Math.abs(work.tilt) / 60;
      imgEl.style.transform = 'translate(-50%, -50%) rotate(' + (work.rot + work.tilt) + 'deg) scale(' + (work.fx * work.zoom * cover) + ',' + (work.fy * work.zoom * cover) + ')';
      ruler.value = work.tilt; $('.ed-me__deg', f).textContent = work.tilt + '°';
      var dirty = !same(work, saved);
      $('.ed-me-save', f).setAttribute('aria-disabled', String(!dirty));
      $('.ed-me-reset', f).setAttribute('aria-disabled', String(!dirty));
      $('.ed-me-undo', f).setAttribute('aria-disabled', String(!hist.length));
      $('.ed-me-redo', f).setAttribute('aria-disabled', String(!fut.length));
      var sel = $('select[data-ratio]', panel); if (sel) sel.value = work.ratio;
      $$('.ed-zo', f).forEach(function (zo) { zo.setAttribute('aria-disabled', String(work.zoom <= 1)); });
    }
    function change(fn) { hist.push(copy(work)); fut = []; fn(); apply(); }
    function renderPanel() {
      $$('[data-tab]', f).forEach(function (t) { t.setAttribute('aria-selected', String(t.getAttribute('data-tab') === tab)); });
      if (tab === 'Crop') {
        var sel = '<div><p class="ed-me__h">Crop options</p><label class="wpui-label" for="edRatio' + uid + '">Aspect ratio</label><select class="wpui-select" id="edRatio' + uid + '" data-ratio>' + RATIOS.map(function (r) { return '<option value="' + r[0] + '">' + r[1] + '</option>'; }).join('') + '</select></div>';
        panel.innerHTML = (isM(f) ? '' : '<div class="ed-me__controls"><div class="ed-me__group"><span class="wpui-label">Rotate</span><div class="ed-me__btns">' + iconBtn('rotateLeft', 'Rotate 90° counter-clockwise', 'ed-rl') + iconBtn('rotateRight', 'Rotate 90° clockwise', 'ed-rr') + '</div></div>' +
          '<div class="ed-me__group"><span class="wpui-label">Flip</span><div class="ed-me__btns">' + iconBtn('flipH', 'Flip horizontal', 'ed-fh') + iconBtn('flipV', 'Flip vertical', 'ed-fv') + '</div></div>' +
          '<div class="ed-me__group"><span class="wpui-label">Zoom</span><div class="ed-me__btns">' + iconBtn('plus', 'Zoom in', 'ed-zi') + iconBtn('minus', 'Zoom out', 'ed-zo') + '</div></div></div>') + sel;
        if (!isM(f)) wireCtl(panel);
        $('select', panel).addEventListener('change', function () { var v = this.value; change(function () { work.ratio = v; }); });
      } else {
        panel.innerHTML = '' +
          '<div><label class="wpui-label" for="edMt' + uid + '">Title</label><input class="wpui-input" id="edMt' + uid + '" data-m="title" autocomplete="off" data-1p-ignore data-lpignore="true" value="' + esc(meta.title) + '"></div>' +
          '<div><label class="wpui-label" for="edMa' + uid + '">Alt text</label><textarea class="wpui-input ed-me__ta" id="edMa' + uid + '" data-m="alt">' + esc(meta.alt) + '</textarea><p class="wpui-help"><a href="https://www.w3.org/WAI/tutorials/images/decision-tree/" target="_blank" rel="noopener">Describe the purpose of the image.<span class="sot-sr"> (opens in a new tab)</span> ↗</a><br>Leave empty if decorative.</p></div>' +
          '<div><label class="wpui-label" for="edMc' + uid + '">Caption</label><textarea class="wpui-input ed-me__ta" id="edMc' + uid + '" data-m="caption">' + esc(meta.caption) + '</textarea></div>' +
          '<div><label class="wpui-label" for="edMd' + uid + '">Description</label><textarea class="wpui-input ed-me__ta" id="edMd' + uid + '" data-m="desc">' + esc(meta.desc) + '</textarea></div>' +
          '<dl class="ed-me__meta"><dt>Date added</dt><dd>' + date + '</dd><dt>Author</dt><dd>admin</dd><dt>File name</dt><dd>harbor-edited.jpg</dd><dt>File type</dt><dd>image/jpeg</dd><dt>Dimensions</dt><dd>1200 × 1200</dd><dt>Attached to</dt><dd>Testing WordPress 7.2 Beta 3</dd></dl>';
        $$('[data-m]', panel).forEach(function (i) { i.addEventListener('input', function () { meta[i.dataset.m] = i.value; }); });
      }
      apply();
    }
    $$('[data-tab]', f).forEach(function (t) { t.addEventListener('click', function () { tab = t.getAttribute('data-tab'); renderPanel(); t.focus(); }); });
    var tiltStart = null;
    ruler.addEventListener('pointerdown', function () { tiltStart = copy(work); });
    ruler.addEventListener('input', function () { if (!tiltStart) tiltStart = copy(work); work.tilt = +ruler.value; apply(); });
    ruler.addEventListener('change', function () { if (tiltStart && !same(tiltStart, work)) { hist.push(tiltStart); fut = []; } tiltStart = null; apply(); });
    $('.ed-me-undo', f).addEventListener('click', function () { if (!hist.length) return; fut.push(copy(work)); work = hist.pop(); apply(); });
    $('.ed-me-redo', f).addEventListener('click', function () { if (!fut.length) return; hist.push(copy(work)); work = fut.pop(); apply(); });
    $('.ed-me-reset', f).addEventListener('click', function () { if (same(work, saved)) return; change(function () { work = copy(saved); }); });
    function discard() { work = copy(saved); hist = []; fut = []; apply(); }
    $('.ed-me-cancel', f).addEventListener('click', discard);
    $('.ed-me-close', f).addEventListener('click', discard);
    function layoutSide() { $('.ed-me__side', f).hidden = !side; $('.ed-me__body', f).classList.toggle('has-panel-open', side); $('.ed-me-side', f).setAttribute('aria-pressed', String(side)); }
    $('.ed-me-side', f).addEventListener('click', function () { side = !side; layoutSide(); });
    function zoomBy(d) { return function () { work.zoom = d > 0 ? Math.min(3, Math.round((work.zoom + 0.2) * 10) / 10) : Math.max(1, Math.round((work.zoom - 0.2) * 10) / 10); }; }
    var ACTS = { rl: function () { work.rot -= 90; }, rr: function () { work.rot += 90; }, fh: function () { work.fx *= -1; }, fv: function () { work.fy *= -1; }, zi: zoomBy(1), zo: zoomBy(-1) };
    function wireCtl(root) { Object.keys(ACTS).forEach(function (k) { var b = $('.ed-' + k, root); if (b) b.addEventListener('click', function () { if (this.getAttribute('aria-disabled') === 'true') return; change(ACTS[k]); }); }); }
    wireCtl($('.ed-me__mctl', f));
    var ratioBtn = $('.ed-me-ratio', f);
    ratioBtn.addEventListener('click', function () {
      WPUI.menu({ anchor: ratioBtn, frame: f, label: 'Aspect ratio', variant: 'menu', minWidth: 220, groups: [{ label: 'Aspect ratio', items: RATIOS.map(function (r) { return { label: r[1], type: 'radio', checked: work.ratio === r[0], onSelect: function () { if (work.ratio !== r[0]) change(function () { work.ratio = r[0]; }); } }; }) }] });
    });
    watchWidth(f, function (m) { side = !m; layoutSide(); renderPanel(); });
    $('.ed-me-save', f).addEventListener('click', function () {
      if (same(work, saved)) return;
      var before = copy(saved);
      saved = copy(work); hist = []; fut = []; apply();
      WPUI.snackbar(f, 'Image edited.', { label: 'Undo', onClick: function () { saved = before; work = copy(before); apply(); } });
    });
    var more = $('.ed-me-more', f);
    more.addEventListener('click', function () {
      more.classList.remove('ed-hotspot');
      var groups = [];
      if (!same(saved, ORIGINAL)) groups.push({ items: [{ icon: 'backup', label: 'Restore original image', sub: 'Discards unsaved changes and loads the original image.', onSelect: function () { hist.push(copy(work)); fut = []; work = copy(ORIGINAL); apply(); } }] });
      groups.push({ items: [{ icon: 'keyboard', label: 'Keyboard shortcuts', onSelect: shortcuts }] });
      WPUI.menu({ anchor: more, frame: f, label: 'More options', minWidth: 280, groups: groups });
    });
    // The real editor's keyboard shortcuts, while focus is in the modal.
    dlg.addEventListener('mousedown', function (e) { if (!e.target.closest('button, input, select, textarea, a, [tabindex]:not(.ed-me)')) setTimeout(function () { dlg.focus({ preventScroll: true }); }, 0); });
    dlg.addEventListener('keydown', function (e) {
      var t = e.target; if (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.closest('.wpui-pop, .wpui-overlay')) return;
      var mod = e.metaKey || e.ctrlKey, k = e.key.toLowerCase(), fn = null;
      if (mod && k === 'z') { e.preventDefault(); $(e.shiftKey ? '.ed-me-redo' : '.ed-me-undo', f).click(); return; }
      if (mod || e.altKey) return;
      if (k === 'r') fn = e.shiftKey ? function () { work.rot -= 90; } : function () { work.rot += 90; };
      else if (k === 'h') fn = function () { work.fx *= -1; };
      else if (k === 'v') fn = function () { work.fy *= -1; };
      else if (e.key === '+' || e.key === '=') fn = function () { work.zoom = Math.min(3, Math.round((work.zoom + 0.2) * 10) / 10); };
      else if (e.key === '-') fn = function () { work.zoom = Math.max(1, Math.round((work.zoom - 0.2) * 10) / 10); };
      if (fn) { e.preventDefault(); change(fn); }
    });
    function shortcuts() {
      var rows = [['Undo', ['⌘', 'Z']], ['Redo', ['⇧', '⌘', 'Z']], ['Pan', ['↑', '↓', '←', '→']], ['Zoom in', ['+']], ['Zoom out', ['-']], ['Rotate 90° clockwise', ['R']], ['Rotate 90° counter-clockwise', ['⇧', 'R']], ['Flip horizontal', ['H']], ['Flip vertical', ['V']], ['Pan or resize crop (large step)', ['⇧', '↑', '↓', '←', '→']]];
      var o = document.createElement('div'); o.className = 'wpui-overlay';
      o.innerHTML = '<div class="wpui-modal ed-kbd-modal" role="dialog" aria-modal="true" aria-labelledby="edKbd' + uid + '"><div class="ed-kbd-modal__head"><h4 id="edKbd' + uid + '">Keyboard shortcuts</h4>' + iconBtn('close', 'Close', 'ed-kbd-close') + '</div><ul>' +
        rows.map(function (r) { return '<li><span>' + r[0] + '</span><kbd>' + r[1].map(function (k) { return '<kbd>' + k + '</kbd>'; }).join('') + '</kbd></li>'; }).join('') + '</ul></div>';
      f.appendChild(o);
      var close = function () { o.remove(); more.focus(); };
      $('.ed-kbd-close', o).addEventListener('click', close);
      o.addEventListener('click', function (e) { if (e.target === o) close(); });
      o.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      $('.ed-kbd-close', o).focus();
    }
    $('.ed-reset', host).addEventListener('click', function () { reset(); more.classList.add('ed-hotspot'); side = !isM(f); layoutSide(); apply(); });
  };

  /* ======================================================================
     Clearer error screens: the editor crash screen (copy buttons + details)
     ====================================================================== */
  mounts.crash = function (host) {
    var f = frame(host, 'ed-crash-frame', cap('Copy the contents or the error report. Error details appear when <code>SCRIPT_DEBUG</code> is on'));
    var ERRMSG = "Cannot read properties of undefined (reading 'map')";
    var STACK = "TypeError: Cannot read properties of undefined (reading 'map')\n    at PostTitle (editor.min.js:12:4031)\n    at renderWithHooks (react-dom.min.js:10:51827)";
    var CSTACK = 'at PostTitle\n    at EditorCanvas\n    at Editor\n    at ErrorBoundary';
    var ENV = 'User agent: ' + navigator.userAgent;
    var REPORT = '### Error report\n\n**TypeError**\n\n' + ERRMSG + '\n\n**Stack**\n\n```\n' + STACK + '\n```\n\n**Component stack**\n\n```\n' + CSTACK + '\n```\n\n**Environment**\n\n```\n' + ENV + '\n```';
    f.innerHTML = '<div class="ed-crash">' +
      '<div class="wpui-notice wpui-notice--error" role="alert"><div class="ed-crash__text"><p class="wpui-notice__title">The editor has crashed</p><p class="wpui-notice__msg">An unknown error occurred. Reload your browser to try again, or copy the error to report the problem or search.</p>' +
        '<div class="wpui-notice__actions"><button type="button" class="wpui-btn wpui-btn--outline" data-copy="contents">Copy contents</button><button type="button" class="wpui-btn wpui-btn--dark" data-copy="error">Copy error</button></div></div>' + I('error') + '</div>' +
      '<div class="ed-ccard"><button type="button" class="ed-ccard__head" aria-expanded="false"><span>Error details</span>' + I('down') + '</button><div class="ed-ccard__content" hidden>' +
        [['TypeError', ERRMSG], ['Stack', STACK], ['Component stack', CSTACK], ['Environment', ENV]].map(function (s) { return '<div class="ed-ccard__sec"><p>' + s[0] + '</p><pre>' + esc(s[1]) + '</pre></div>'; }).join('') +
      '</div></div></div>';
    $$('[data-copy]', f).forEach(function (b) {
      b.addEventListener('click', function () {
        var isErr = b.getAttribute('data-copy') === 'error';
        var text = isErr ? REPORT : '<!-- wp:paragraph -->\n<p>The admin gets a visual refresh, too.</p>\n<!-- /wp:paragraph -->';
        var label = b.textContent;
        var done = function () { b.textContent = 'Copied!'; setTimeout(function () { b.textContent = label; }, 1600); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done); else done();
      });
    });
    var head = $('.ed-ccard__head', f);
    head.addEventListener('click', function () { var open = head.getAttribute('aria-expanded') === 'true'; head.setAttribute('aria-expanded', String(!open)); $('.ed-ccard__content', f).hidden = open; });
  };

  /* ======================================================================
     On This Day: the Activity widget only (static mockup)
     ====================================================================== */
  mounts.dashboard = function (host) {
    var f = frame(host, 'ed-dash-frame', cap('Dates follow today’s date, like the real widget', 'Mockup of WordPress 7.2'));
    f.innerHTML = '<div class="wpui-admin ed-widget-only" inert>' + activityWidget() + '</div>';
  };

  /* ======================================================================
     Browser image processing: Upload Media screen (static mockup)
     ====================================================================== */
  mounts.upload = function (host) {
    var f = frame(host, 'ed-up-frame', cap('Large uploads finish in the browser instead of timing out on the server', 'Mockup of WordPress 7.2'));
    var ch = adminChrome('media', 'Add Media File');
    function render(m) {
      f.innerHTML = '<div class="wpui-admin" inert>' + (m ? mAdminBar() : ch.bar) + '<div class="wpui-adminwrap' + (m ? ' wpui-adminwrap--m' : '') + '">' + ch.menu + '<div class="wpui-admin-main">' + (m ? '<div class="ed-screen-meta"><span>Help ' + I('down', 20) + '</span></div>' : '') + '<p class="wpui-h1">Upload Media</p>' +
        '<div class="wpui-dropzone"><p>Drop files to upload</p><p>or</p><p><span class="wpui-classic-btn">Select Files</span></p></div>' +
        '<p style="margin-top:10px">You are using the multi-file uploader. Problems? Try the <a href="#">browser uploader</a> instead.</p>' +
        '<p style="margin-top:10px">Maximum upload file size: 64 MB.</p>' +
        '<div class="wpui-media-item"><div><div class="filename">autumn-leaves.gif</div><div class="wpui-progress"><span style="width:' + (m ? 96 : 128) + 'px"></span><em>64%</em></div></div></div>' +
        '<div class="wpui-media-item"><div class="thumb">' + art(['#3858E9', '#111'], 'state-of-the-word-panorama.jpg') + '</div><div class="wpui-media-item__info"><strong>state-of-the-word-panorama</strong><span>state-of-the-word-panorama-scaled.jpg</span><span class="wpui-media-item__actions"><a href="#">Edit</a><span class="wpui-classic-btn wpui-classic-btn--sm">Copy URL to clipboard</span></span></div></div>' +
        '</div></div></div>';
    }
    watchWidth(f, render);
  };

  /* ======================================================================
     SVG icons replace Dashicons: 7.1 / 7.2 toggle
     ====================================================================== */
  mounts.adminmenu = function (host) {
    var f = frame(host, 'ed-am-frame', '<b>Recreated from WordPress 7.2</b><span class="ed-seg-mini" role="radiogroup" aria-label="Icons"><button type="button" role="radio" aria-checked="false" data-v="dashicons">7.1: Dashicons font</button><button type="button" role="radio" aria-checked="true" data-v="svg">7.2: SVG icons</button></span>');
    var mode = 'svg', mOpen = true;
    function glance(dash) {
      var i = function (n, code) { return dash ? '<span class="wpui-dashicon ed-glance-dash">' + code + '</span>' : I(n, 20); };
      return postbox('At a Glance', '<div class="wpui-glance"><ul><li><a href="#">' + i('posts', '') + '4 Posts</a></li><li><a href="#">' + i('pages', '') + '1 Page</a></li><li><a href="#">' + i('comments', '') + '1 Comment</a></li></ul><p>WordPress 7.2-beta3 running <a href="#">Ipsum</a> theme.</p></div>');
    }
    function render() {
      var dash = mode === 'dashicons', ch = adminChrome('dashboard', 'Home', dash ? 'dashicons' : 'svg');
      var m = isM(f);
      f.innerHTML = '<div class="wpui-admin">' + (m ? mAdminBar({ dashicons: dash, interactive: true, open: mOpen }) : '<div inert>' + ch.bar + '</div>') + '<div class="wpui-adminwrap' + (m ? ' wpui-adminwrap--m' + (mOpen ? ' is-open' : '') : '') + '" inert>' + ch.menu + '<div class="wpui-admin-main">' + (m ? '<div class="ed-screen-meta"><span>Screen Options ' + I('down', 20) + '</span><span>Help ' + I('down', 20) + '</span></div>' : '') + '<p class="wpui-h1">Dashboard</p><div class="ed-dash-cols"><div>' + glance(dash) + '</div><div>' + activityWidget() + '</div></div></div></div></div>';
      var tg = $('.ed-menutoggle', f);
      if (tg) tg.addEventListener('click', function () { mOpen = !mOpen; tg.setAttribute('aria-expanded', String(mOpen)); $('.wpui-adminwrap', f).classList.toggle('is-open', mOpen); });
    }
    $$('[data-v]', host).forEach(function (b) { b.addEventListener('click', function () { mode = b.getAttribute('data-v'); $$('[data-v]', host).forEach(function (x) { x.setAttribute('aria-checked', String(x === b)); }); render(); }); });
    watchWidth(f, function () { render(); });
  };

  /* ---------- Mount everything on the page ----------
     Recreations built from WordPress's captured markup wait for wp-snapshots.js,
     which only loads once one of them comes near the screen. */
  var NEEDS_SNAP = { ipsum: 1, inspector: 1, states: 1, gsform: 1, duotone: 1, gallery: 1 };
  var snapSrc = (document.currentScript && document.currentScript.src || '').replace(/recreations\.js(\?.*)?$/, 'wp-snapshots.js'), snapLoad = null;
  function loadSnaps() {
    if (window.WPSNAP) return Promise.resolve();
    if (!snapLoad) snapLoad = Promise.all([snapSrc, snapSrc.replace(/\.js$/, '.css')].map(function (src, i) {
      return new Promise(function (res, rej) { var el = document.createElement(i ? 'link' : 'script'); if (i) { el.rel = 'stylesheet'; el.href = src; } else el.src = src; el.onload = res; el.onerror = rej; document.head.appendChild(el); });
    }));
    return snapLoad;
  }
  function mount(host) {
    var name = host.getAttribute('data-wpui');
    try { mounts[name](host); } catch (e) { if (window.console) console.error('Recreation "' + name + '" failed', e); }
  }
  var io = !window.WPSNAP && 'IntersectionObserver' in window && new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      loadSnaps().then(function () { SNAP = window.WPSNAP || {}; IP = SNAP.ipsum || {}; mount(en.target); }, function () { en.target.insertAdjacentHTML('beforeend', '<p class="wpui-caption">This example couldn’t load.</p>'); });
    });
  }, { rootMargin: '1200px 0px' });
  $$('[data-wpui]').forEach(function (host) {
    var name = host.getAttribute('data-wpui');
    if (!mounts[name]) return;
    if (NEEDS_SNAP[name] && io) io.observe(host); else mount(host);
  });
})();

