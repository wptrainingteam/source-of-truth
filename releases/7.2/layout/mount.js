/* ==========================================================================
   WordPress 7.2 layout: where each demo goes.
   Keys are item ids from the imported Doc. If an item's heading changes in
   the Doc, its id changes too: update it here or the demo won't show.
   Each entry is [position, markup]: the demo goes before the body's child at
   that index, or at the end for 'end'.
   Runs before site.js, so the shell counts the "things to try" and checklists.
   ========================================================================== */
(function () {
  'use strict';
  function rec(name, label, tryLabel) {
    return '<div class="ed-rec" data-wpui="' + name + '"' + (tryLabel ? ' data-sot-try="' + tryLabel + '"' : '') + ' role="region" aria-label="' + label + '"></div>';
  }
  var ICONS = '<div class="sot-demo ed-icons" data-sot-try="Search the icon library by keyword">' +
    '<p class="sot-demo__label">Try it · search by keyword</p>' +
    '<label class="ed-field-label" for="edIconQ">Search icons</label>' +
    '<input class="ed-input" id="edIconQ" type="search" value="delete" placeholder="delete, arrow, settings…" autocomplete="off">' +
    '<div class="ed-icons__results" id="edIconResults" aria-live="polite"></div></div>';
  var SPEED = '<div class="sot-demo ed-speed" id="edSpeed" data-sot-try="Race Select all in List View, 7.1 vs 7.2">' +
    '<p class="sot-demo__label"><strong>Select all</strong> in List View, post with 1,000 blocks</p>' +
    '<div class="ed-speed__row"><span>Before</span><div class="ed-speed__bar"><i data-w="100%"></i></div><b>16.8s</b></div>' +
    '<div class="ed-speed__row is-new"><span>WordPress 7.2</span><div class="ed-speed__bar"><i data-w="2.4%"></i></div><b>0.4s</b></div></div>';
  var RANDOM = '<div class="sot-demo ed-random" data-sot-try="Jump to a random post, like /random/">' +
    '<div><p class="sot-demo__label">Try it on this page</p><p class="ed-random__url"><span class="sot-muted">source-of-truth/7-2</span>/random/</p></div>' +
    '<button class="sot-btn sot-btn--accent" type="button" data-sot-random>' +
    '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>' +
    'Take me somewhere random</button></div>';

  var DEMOS = {
    'ipsum-the-new-default-theme': [[3, rec('ipsum', 'Ipsum style variations, recreated', 'Switch Ipsum’s style variations and type sets')]],
    'notes-add-emoji-support-ui-controls-and-usability-improvemen': [['end', rec('notes', 'Notes in the post editor, recreated', 'React, reply and resolve Notes')]],
    'design-tools-for-nearly-every-core-block': [['end', rec('inspector', 'Block inspector design tools, recreated', 'Add design tools from each panel’s ⋮ menu')]],
    'responsive-styles-and-states-round-two': [['end', rec('states', 'Navigation Link states in Global Styles, recreated', 'Style a link’s hover and focus states per viewport')]],
    'global-styles-form-elements-duotone-palettes-and-more': [
      [1, rec('gsform', 'Form input styles in Global Styles, recreated', 'Restyle every form input from Global Styles')],
      ['end', rec('duotone', 'Duotone palettes in Global Styles, recreated', 'Make a custom duotone palette')]
    ],
    'gallery-sort-shuffle-and-a-grid-variation': [
      [2, rec('gallery', 'Gallery block and settings, recreated', 'Sort a gallery and resize images in Gallery Grid')],
      ['end', rec('lightbox', 'Gallery lightbox on a phone, recreated', 'Swipe through a gallery lightbox on a phone')]
    ],
    'navigation-one-search-for-every-link': [[1, rec('linksearch', 'Navigation link search, mockup')]],
    'icon-block-search-by-keyword': [['end', ICONS]],
    'media-editor-restore-the-original-image': [['end', rec('mediaeditor', 'Edit media modal, recreated', 'Rotate, crop and restore an image in Edit media')]],
    'clearer-error-screens': [['end', rec('crash', 'Editor crash screen, recreated', 'Copy the error from the editor crash screen')]],
    'smaller-editor-improvements': [[0, SPEED]],
    'on-this-day-in-the-activity-widget': [['end', rec('dashboard', 'Dashboard Activity widget, recreated')]],
    'random-content-redirects': [[1, RANDOM]],
    'svg-icons-replace-dashicons-in-the-admin': [[1, rec('adminmenu', 'Admin menu with SVG icons, recreated', 'Compare Dashicons with the new SVG admin icons')]]
  };
  // Lists that become "tick them off as you test" checklists.
  var CHECKLISTS = ['deprecations-and-breaking-changes'];

  function body(id) { var item = document.getElementById(id); return item && item.querySelector(':scope > .sot-item__body'); }
  Object.keys(DEMOS).forEach(function (id) {
    var b = body(id);
    if (!b) return;
    var kids = Array.prototype.slice.call(b.children);
    DEMOS[id].forEach(function (d) {
      var ref = d[0] === 'end' ? null : kids[d[0]];
      if (ref) ref.insertAdjacentHTML('beforebegin', d[1]); else b.insertAdjacentHTML('beforeend', d[1]);
    });
  });
  CHECKLISTS.forEach(function (id) {
    var b = body(id), ul = b && b.querySelector(':scope > ul');
    if (ul) { ul.classList.add('sot-checklist'); ul.id = id + '-checklist'; }
  });
})();
