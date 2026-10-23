# Notes

**Emoji key**

* ✏️ To be edited
* 🙏 Blessed feature: will be developed during the Beta cycle
* 🔍 To-do or double-check
* 🎨 Visuals being edited or created
* 🏈 Confirmed punted to the next release

---

## **Release basics**

| Milestone | Date |
| :---- | :---- |
| Beta 1 | October 20, 15:00 UTC |
| Beta 2 | October 27 |
| Beta 3 | November 3 |
| Beta 4 | November 10 |
| RC 1 (Field Guide, hard string freeze, branch) | November 17 |
| RC 2 | November 24 |
| RC 3 | December 1 |
| Final | December 8 (State of the Word) |

* **Gutenberg range (likely, confirm at Beta 1) 🔍:** 7.1 shipped 22.7–23.6. 7.2 should cover 23.7–24.2, with 24.2 (October 14) the last plugin release before Beta 1. 23.8 straddled both cycles: some PRs were backported to 7.1, others target 7.2.
* **Release squad:** Matt Mullenweg (lead), David Baumwald (coordination), George Mamadashvili and Peter Wilson (tech), Henrique Iamarino (theme design), Maggie Cabrera and Carolina Nymark (theme dev), Jb Audras and Eshaan Dabasiya (triage), Md Noruzzaman, Jina Parekh, Erick Wambua (test).
* **Release parties** move to livestreamed webinars starting with 7.2.

**Official planning sources**

* [WordPress 7.2 development cycle page](https://make.wordpress.org/core/7-2/)
* [Roadmap to 7.2](https://make.wordpress.org/core/2026/09/18/roadmap-to-7-2/) (Anne McCarthy, Sep 18, updated Sep 28)
* [7.2 GitHub project board](https://github.com/orgs/WordPress/projects/300)
* [Open Gutenberg iteration issues](https://github.com/WordPress/gutenberg/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22%5BType%5D%20Iteration%22)
* [Announcing the 7.2 release squad](https://make.wordpress.org/core/2026/09/09/announcing-the-wordpress-7-2-release-squad/)
* [7.2 Call for Volunteers (schedule)](https://make.wordpress.org/core/2026/08/12/wordpress-7-2-call-for-volunteers/)
* [7.2 release party schedule](https://make.wordpress.org/core/2026/10/06/wordpress-7-2-release-party-schedule/)
* [Iterating from live events to livestreamed releases](https://make.wordpress.org/core/2026/09/23/iterating-from-live-events-to-livestreamed-releases/)
* [Bug scrub schedule for 7.2](https://make.wordpress.org/core/2026/09/09/bug-scrub-schedule-for-wordpress-7-2/)
* [Test scrub schedule for 7.2](https://make.wordpress.org/test/2026/10/01/test-scrub-schedule-for-wordpress-7-2/)
* [All posts tagged 7.2](https://make.wordpress.org/core/tag/7-2/)
* [Dev notes tagged 7.2](https://make.wordpress.org/core/tag/dev-notes+7-2/) (one so far)
* [Dev Chat Agenda, October 14](https://make.wordpress.org/core/2026/10/14/dev-chat-agenda-oct-14-2026/)
* [Trac: tickets for the next major release](https://core.trac.wordpress.org/report/6)

**Gutenberg release posts in range**

* [What's new in Gutenberg 23.7 (Aug 5)](https://make.wordpress.org/core/2026/08/06/whats-new-in-gutenberg-23-7-05-august/)
* [What's new in Gutenberg 23.8 (Aug 19)](https://make.wordpress.org/core/2026/08/19/whats-new-in-gutenberg-23-8-19-august/) · [v23.8.0 notes](https://github.com/WordPress/gutenberg/releases/tag/v23.8.0)
* [What's new in Gutenberg 23.9 (Sep 2)](https://make.wordpress.org/core/2026/09/02/whats-new-in-gutenberg-23-9-2-september/)
* [What's new in Gutenberg 24.0 (Sep 16)](https://make.wordpress.org/core/2026/09/16/whats-new-in-gutenberg-24-0-16-september/)
* [What's new in Gutenberg 24.1 (Sep 30)](https://make.wordpress.org/core/2026/09/30/whats-new-in-gutenberg-24-1-30-september/) · [v24.1.0 notes](https://github.com/WordPress/gutenberg/releases/tag/v24.1.0)
* [What's new in Gutenberg 24.2 (Oct 14)](https://make.wordpress.org/core/2026/10/14/whats-new-in-gutenberg-24-2-14-october/)

**Project docs to cross-check:** `wp-7-1-sot-backlog.md`, `wp-7-1-punted-items.md`, `gutenberg-23-8-developer-roundup.md`, `gutenberg-24-0-24-1-features.md`, `whats-new-for-developers-october-2026-notes.md`.

---

## **Priority item candidates (first pass) ✏️**

My opinionated short list, based on the roadmap, the highlight-worthy work that has actually merged, and breadth of impact. The release's highlight grid issue doesn't exist yet (or I haven't found it); check for it after Beta 1. 🔍

1. **Ipsum, the new default theme**: ships with the release and ends year-based theme names. Highest visibility.
2. **Notes in the canvas margin**: the biggest visible editor change merged this cycle, building on 6.9 and 7.1.
3. **Design tools everywhere**: hundreds of PRs turning on background, shadow, min width/height, color, and border supports across most Core blocks. Big for themes.
4. **Responsive and state styling, round two**: public viewport API for custom blocks, per-viewport position and custom CSS, Navigation Link hover/focus/active in Global Styles.
5. **Global Styles grows up**: form elements (labels, inputs, selects, citations), custom duotone palettes, "show only customized blocks," inherited values in the inspector.
6. **Security foundations**: Secrets API (if it lands), application password hardening, `wp_kses()` on the HTML API (7.2 or 7.3).

---

## **Default theme**

### **Ipsum 🔍 🎨**

==[all] [theme builder]==

* Minimal blank-canvas blog theme with style variations, typesets, and dotted-underline accents. The post says all color combinations meet WCAG AA.
* Ends the year-based "Twenty\*" naming. Replaces the earlier Mētis direction (the squad post still calls it Twenty Twenty-Seven).
* Leads: Henrique Iamarino (design); Carolina Nymark, Maggie Cabrera, Juanfra Aldasoro (development).
* Links:
  * [Introducing Ipsum, the new default theme](https://make.wordpress.org/core/2026/09/16/introducing-ipsum-the-new-default-theme/)
  * [GitHub: WordPress/ipsum](https://github.com/WordPress/ipsum)
  * [Playground blueprint](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/ipsum/trunk/.github/blueprint.json) (one commenter reported it failed to load 🔍)
  * [Twenty Twenty-Seven team announcement (Mētis)](https://make.wordpress.org/core/2026/04/08/tt7-team/)
* 🔍 Confirm when Ipsum is committed to Core and which Gutenberg features it showcases.

---

## **Collaboration**

### **Notes: canvas margin, drafts, undo 🔍 🎨**

==[end user] [site admin] [enterprise]==

* **Merged (Gutenberg 24.2):** floating notes move into a margin beside the canvas and stay visible while editing; threads collapse to avatars in narrow views; a Notes submenu controls visibility; deleting a note offers Undo; unsent drafts are kept; child notes restore with their parent.
* **Carried from 7.1, not confirmed:** emoji reactions ([#75144](https://github.com/WordPress/gutenberg/issues/75144)), in progress. No merged reactions PR found.
* **Exploring only:** suggestion mode ([#73411](https://github.com/WordPress/gutenberg/issues/73411)). Likely not 7.2. 🔍
* **Mentions send email** (merged in 23.8, not behind a flag): [#79606](https://github.com/WordPress/gutenberg/pull/79606). Confirm it's in 7.2, not 7.1. 🔍
* Links:
  * Tracking: [Notes iteration for WordPress 7.2 (#80015)](https://github.com/WordPress/gutenberg/issues/80015)
  * Canvas margin: [#79970 (issue)](https://github.com/WordPress/gutenberg/issues/79970), [#83786](https://github.com/WordPress/gutenberg/pull/83786), [#83768](https://github.com/WordPress/gutenberg/pull/83768), [#83852](https://github.com/WordPress/gutenberg/pull/83852)
  * Undo and drafts: [#83988](https://github.com/WordPress/gutenberg/pull/83988), [#84110](https://github.com/WordPress/gutenberg/pull/84110), [#84100](https://github.com/WordPress/gutenberg/pull/84100)
  * Notes action menu uses UI Menu: [#81930](https://github.com/WordPress/gutenberg/pull/81930)
  * Anne's proposal post: [Elevating and refining the WordPress Notes feature](https://nomad.blog/2026/09/03/elevating-and-refining-the-wordpress-notes-feature/)

### **Real-time collaboration 🏈**

* Not on the 7.2 roadmap. The direction moved to a server-aware approach, developed as a feature plugin.
* Links:
  * [Moving to a server-aware approach for collaboration](https://make.wordpress.org/core/2026/09/18/moving-to-a-server-aware-approach-for-collaboration/)
  * [Real-time Collaboration: A Guide to Sync Engines (Oct 14)](https://make.wordpress.org/core/2026/10/14/real-time-collaboration-a-guide-to-sync-engines/)
  * [Iteration issue #82146](https://github.com/WordPress/gutenberg/issues/82146)
  * [Presence API: What's new](https://make.wordpress.org/core/2026/10/02/presence-api-whats-new/)
  * [RTC removed from 7.0](https://make.wordpress.org/core/2026/05/08/rtc-removed-from-7-0/)
* **Developer note:** `WP_ALLOW_COLLABORATION` removed and `wp_collaboration_enabled` option deleted on upgrade; RTC is now a single Gutenberg experiment ([#80658](https://github.com/WordPress/gutenberg/pull/80658)). Plugin-only, but worth a line for anyone who configured it. 🔍

---

## **Design tools and styling**

### **Block supports on nearly every Core block 🔍**

==[theme builder] [site admin] [end user]==

* Gutenberg 24.1 (~140 PRs) and 24.2 (~80 PRs) enabled existing supports on Core blocks that lacked them: background image/size/gradient, shadow, min width/height, link/heading/button colors, border, padding/margin, text columns, text align, text indent, duotone (Gallery, Video, Media & Text), fit text (Site Title, Site Tagline, Poetry).
* All reachable from `theme.json` `styles.blocks`.
* **Theme watch-out:** Accordion, Tabs, Tab Panel, and Post Template now output `has-link-color` and similar classes. Possible specificity collisions.
* Background-clip infrastructure and UI (text gradients).
* Links:
  * Tracking: [Block supports and design tools (#76525)](https://github.com/WordPress/gutenberg/issues/76525) (still titled for 7.1 when fetched)
  * [24.1 changelog](https://github.com/WordPress/gutenberg/releases/tag/v24.1.0) · [24.2 post](https://make.wordpress.org/core/2026/10/14/whats-new-in-gutenberg-24-2-14-october/)
  * Background-clip: [#77141](https://github.com/WordPress/gutenberg/pull/77141), [#77142](https://github.com/WordPress/gutenberg/pull/77142)
  * Duotone: [Gallery #83978](https://github.com/WordPress/gutenberg/pull/83978), [Video #83979](https://github.com/WordPress/gutenberg/pull/83979), [Media & Text #83981](https://github.com/WordPress/gutenberg/pull/83981)
  * Fit text: [Site Title #82074](https://github.com/WordPress/gutenberg/pull/82074), [Site Tagline #83034](https://github.com/WordPress/gutenberg/pull/83034), [Poetry #83980](https://github.com/WordPress/gutenberg/pull/83980)
  * Text columns: [Group #83425](https://github.com/WordPress/gutenberg/pull/83425)
  * Background image from URL: [#82230](https://github.com/WordPress/gutenberg/pull/82230)
  * Override background-color padding: [#82024](https://github.com/WordPress/gutenberg/pull/82024)
  * Axial block gap for Group (flex/grid): [#81476](https://github.com/WordPress/gutenberg/pull/81476)

### **Text shadow block support and presets 🔍**

==[theme builder] [developer]==

* New `supports.typography.textShadow`; Paragraph and Heading opt in. `theme.json` gains `textShadow`, `textShadowPresets`, `defaultTextShadowPresets` (defaults: Light and Strong). Global Styles text shadow already shipped in 7.1; this is the block support and presets.
* Link: [#79584](https://github.com/WordPress/gutenberg/pull/79584)

### **Responsive style states, round two 🔍**

==[developer] [plugin author] [theme builder]==

* **Merged:** public API for viewport states in custom block controls (`getStyleForState()`, `setStyleForState()`, `getSelectedBlockStyleState()`, `hasSelectedBlockStyleState()`); Gallery columns, crop, and aspect ratio per viewport; position per viewport; state-specific custom CSS; responsive status in the footer.
* **Still open:** overlay colors, duotone, drop cap and fit text per viewport, plugin-registered viewports. The `group="viewport"` slot is undocumented. `wp_get_viewport_media_queries()` for Core is in review, not merged. 🔍
* Links:
  * Tracking: [Responsive style states for blocks, 7.2 tasks (#80388)](https://github.com/WordPress/gutenberg/issues/80388)
  * [#82741 public API](https://github.com/WordPress/gutenberg/pull/82741), [#82003 Gallery columns/crop](https://github.com/WordPress/gutenberg/pull/82003), [#82233 Gallery aspect ratio](https://github.com/WordPress/gutenberg/pull/82233), [#83094 position](https://github.com/WordPress/gutenberg/pull/83094), [#83539 custom CSS](https://github.com/WordPress/gutenberg/pull/83539), [#84146 footer status](https://github.com/WordPress/gutenberg/pull/84146)
  * Core helper: [wordpress-develop #13561](https://github.com/WordPress/wordpress-develop/pull/13561)
  * UI gates: `responsiveEditingEnabled` ([#80814](https://github.com/WordPress/gutenberg/pull/80814)) and `blockStatesEditingEnabled` ([#80956](https://github.com/WordPress/gutenberg/pull/80956), [#81058](https://github.com/WordPress/gutenberg/pull/81058)). 🔍 The first may have shipped in 7.1 already (the 7.1 SoT covers it).
  * 7.1 background: [Responsive block styles dev note](https://make.wordpress.org/core/2026/08/05/responsive-block-styles-and-configurable-viewports-in-wordpress-7-1/)

### **Custom states (`-current`) and Navigation Link states 🔍**

==[theme builder] [site admin]==

* **Merged:** Global Styles pseudo-state controls (hover, focus, active) for Navigation Link ([#83451](https://github.com/WordPress/gutenberg/pull/83451)); per-instance state rules scoped to the block root ([#83986](https://github.com/WordPress/gutenberg/pull/83986)).
* **Not found on trunk:** the `-current` state UI for Navigation Link and Tabs, Navigation Link color/border/spacing supports ([#83454](https://github.com/WordPress/gutenberg/pull/83454), [#83457](https://github.com/WordPress/gutenberg/pull/83457)). The core of this item may miss 7.2. 🔍
* Links: Tracking [Custom states for blocks, iteration for WP 7.2 (#79283)](https://github.com/WordPress/gutenberg/issues/79283) · [7.1 dev note: Pseudo and custom style states](https://make.wordpress.org/core/2026/08/05/pseudo-and-custom-style-states-in-wordpress-7-1/)

### **Global Styles: form elements, duotone, custom-style filter 🔍**

==[theme builder] [site admin]==

* Labels register as a `theme.json` element ([#81160](https://github.com/WordPress/gutenberg/pull/81160)); citations, inputs, and selects exposed in Global Styles typography and color ([#80852](https://github.com/WordPress/gutenberg/pull/80852)). More design work needed before full Elements API support.
* Custom duotone palettes in a Duotone tab ([#81605](https://github.com/WordPress/gutenberg/pull/81605)).
* A dot marks blocks with custom styles; filter to show only those ([#81373](https://github.com/WordPress/gutenberg/pull/81373)).
* Global Styles revisions use the DataViews pickerActivity layout ([#80856](https://github.com/WordPress/gutenberg/pull/80856)).
* Links: Tracking [Form elements in Global Styles, iteration for WP 7.2](https://github.com/WordPress/gutenberg/issues/34198) (🔍 the fetched page may be a separate 7.2 issue citing #34198) · Sub-issues [#81647](https://github.com/WordPress/gutenberg/issues/81647), [#81648](https://github.com/WordPress/gutenberg/issues/81648) · 6.9 background: [How WordPress 6.9 gives forms a theme.json makeover](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/)

### **Inherited Global Styles values in the inspector 🔍**

==[site admin] [theme builder]==

* Block controls now show values inherited from Global Styles, without an experiment flag ([#82840](https://github.com/WordPress/gutenberg/pull/82840)). The dot/diamond indicators stay behind the `gutenberg-global-styles-inheritance-ui` experiment and look unlikely for 7.2.
* Links: Tracking [Display inherited Global Styles and local overrides (7.2) (#82520)](https://github.com/WordPress/gutenberg/issues/82520) · [#77894](https://github.com/WordPress/gutenberg/pull/77894) · [#80815](https://github.com/WordPress/gutenberg/pull/80815) · 7.1 tracking [#77595](https://github.com/WordPress/gutenberg/issues/77595)
* Carryover: listed as punted from 7.1 ("decision before Beta 2"). 🔍

### **Preset slug kebab-casing fix 🔍**

==[theme builder] [developer]==

* `var:preset|…` references now kebab-case slugs to match emitted custom properties (bug since 5.8). Targets 7.2, not backported to 7.1.
* Link: [#80583](https://github.com/WordPress/gutenberg/pull/80583)

---

## **Blocks**

### **New: Description list block 🔍**

==[end user] [site admin]==

* Roadmap: three static blocks outputting `<dl>`, `<dt>`, `<dd>`. No implementing PR found yet.
* Link: [Block for description list (#4880)](https://github.com/WordPress/gutenberg/issues/4880)

### **Table of Contents block stabilization 🔍**

==[end user] [theme builder]==

* Now server-rendered, with saved static markup dropped. Still open: where heading-level detection runs in the editor, template context, third-party heading sources, tests, and edge cases. Tight four days out.
* "Convert to static list" renamed to a confirmed Detach action ([#80844](https://github.com/WordPress/gutenberg/pull/80844)). New supports: background, shadow, text align ([#83251](https://github.com/WordPress/gutenberg/pull/83251), [#83187](https://github.com/WordPress/gutenberg/pull/83187), [#83430](https://github.com/WordPress/gutenberg/pull/83430)).
* Links: Tracking [Stabilize the Table of Contents Block (#42229)](https://github.com/WordPress/gutenberg/issues/42229) · [#80318](https://github.com/WordPress/gutenberg/pull/80318) · [#80404](https://github.com/WordPress/gutenberg/pull/80404) · [#80786](https://github.com/WordPress/gutenberg/issues/80786) · [#80199 tests](https://github.com/WordPress/gutenberg/pull/80199)
* Carryover: punted from 7.1.

### **Gallery: sorting, dynamic mode, Grid variation, lightbox 🔍**

==[end user] [site admin]==

* Order by works on hand-picked images; Random shuffles each page load ([#83438](https://github.com/WordPress/gutenberg/pull/83438)). Duotone ([#83978](https://github.com/WordPress/gutenberg/pull/83978)).
* Dynamic mode: toolbar button renamed "Detach" with an explanatory modal ([#80727](https://github.com/WordPress/gutenberg/pull/80727)); single undo step ([#80665](https://github.com/WordPress/gutenberg/pull/80665)).
* Grid block variation of Gallery ([#81909](https://github.com/WordPress/gutenberg/pull/81909)).
* Lightbox: clicking an image no longer closes the dialog when navigation is on ([#78898](https://github.com/WordPress/gutenberg/pull/78898)). Roadmap lists lightbox UX gaps as open to contributors ([#51132](https://github.com/WordPress/gutenberg/issues/51132)).
* Media inserter redesign for large libraries is still open ([#79729](https://github.com/WordPress/gutenberg/issues/79729)).
* Links: Tracking [WordPress 7.2: Dynamic galleries and media inserter (#81370)](https://github.com/WordPress/gutenberg/issues/81370) · 7.1 background [#77117](https://github.com/WordPress/gutenberg/issues/77117)

### **Navigation: one search for every link, Custom Link variation 🔍**

==[site admin] [end user]==

* Link search covers all content types at once, with types shown and posts/pages ranked first ([#83408](https://github.com/WordPress/gutenberg/pull/83408), [#83652](https://github.com/WordPress/gutenberg/pull/83652), [#83407](https://github.com/WordPress/gutenberg/pull/83407)).
* Navigation Link block name changes, with a default Custom Link variation ([#82375](https://github.com/WordPress/gutenberg/pull/82375)).
* Sidebar navigation editing in the Site Editor is a 7.2 target with no task list yet: [#77069](https://github.com/WordPress/gutenberg/issues/77069).
* Open request from Dev Chat: border/spacing support for Navigation blocks ([#66392](https://github.com/WordPress/gutenberg/pull/66392), [#66483](https://github.com/WordPress/gutenberg/pull/66483), [#68455](https://github.com/WordPress/gutenberg/pull/68455)). 🔍

### **Icons: keyword search, private collections, stroke redraw 🔍**

==[end user] [plugin author] [developer]==

* Icon block search matches keywords, like "hamburger" for Menu ([#82367](https://github.com/WordPress/gutenberg/pull/82367), [#83884](https://github.com/WordPress/gutenberg/pull/83884)).
* Icons can ship to Core without appearing in the Icon block; new `core-admin` collection; `public` moved to collections ([#82634](https://github.com/WordPress/gutenberg/pull/82634), [#83261](https://github.com/WordPress/gutenberg/pull/83261), [#83277](https://github.com/WordPress/gutenberg/pull/83277), [#82774](https://github.com/WordPress/gutenberg/pull/82774)).
* Icon block bindings for the `icon` attribute ([#80730](https://github.com/WordPress/gutenberg/pull/80730)).
* **Breaking for icon styling:** ~330 icons redrawn as strokes; `fill` no longer recolors them, use `color` ([#78812](https://github.com/WordPress/gutenberg/pull/78812), [#82540](https://github.com/WordPress/gutenberg/pull/82540), [#82754](https://github.com/WordPress/gutenberg/pull/82754)).

### **Other block changes worth a look ✏️ 🔍**

* Columns: slider removed, add columns with a plus button ([#83262](https://github.com/WordPress/gutenberg/pull/83262)); transform Columns to Row ([#81802](https://github.com/WordPress/gutenberg/pull/81802)).
* Button: link popover opens only on explicit action ([#30166](https://github.com/WordPress/gutenberg/pull/30166)).
* Video and Cover respect reduced-motion for autoplay ([#83337](https://github.com/WordPress/gutenberg/pull/83337), [#83452](https://github.com/WordPress/gutenberg/pull/83452)). Video block GIF variations removed ([#82696](https://github.com/WordPress/gutenberg/pull/82696)).
* Cover and Media & Text get a Media inspector section ([#82751](https://github.com/WordPress/gutenberg/pull/82751), [#82593](https://github.com/WordPress/gutenberg/pull/82593)); Media & Text "Add Media" in the toolbar ([#82420](https://github.com/WordPress/gutenberg/pull/82420)).
* List: Tab indents/outdents fully selected and multi-selected items ([#82460](https://github.com/WordPress/gutenberg/pull/82460), [#82411](https://github.com/WordPress/gutenberg/pull/82411)); align support ([#68002](https://github.com/WordPress/gutenberg/pull/68002)).
* Query Loop: "Keyword" filter renamed "Search terms" ([#82387](https://github.com/WordPress/gutenberg/pull/82387)); reload notice becomes a snackbar ([#82246](https://github.com/WordPress/gutenberg/pull/82246)).
* Tabs: inactive panel content findable with browser Find ([#81743](https://github.com/WordPress/gutenberg/pull/81743)).
* Playlist: bulk track metadata editing ([#81441](https://github.com/WordPress/gutenberg/pull/81441)).
* Math: inline UI improved ([#77743](https://github.com/WordPress/gutenberg/pull/77743)); LaTeX errors shown on blur ([#80500](https://github.com/WordPress/gutenberg/pull/80500)).
* Page List and TOC: one-way conversions become a confirmed "Detach" ([#80847](https://github.com/WordPress/gutenberg/pull/80847), [#80844](https://github.com/WordPress/gutenberg/pull/80844)).
* Footnote IDs get an `fn-` prefix ([#82398](https://github.com/WordPress/gutenberg/pull/82398)).
* Alignment options shown as unavailable instead of hidden ([#82600](https://github.com/WordPress/gutenberg/pull/82600)).

---

## **Editor enhancements**

### **Block editor paper cuts 🔍**

==[end user]==

* Insert blocks from the parent selector in the toolbar ([#81532](https://github.com/WordPress/gutenberg/pull/81532)); parent selector shows for blocks inside patterns ([#82912](https://github.com/WordPress/gutenberg/pull/82912)).
* Enter selects the next block ([#63484](https://github.com/WordPress/gutenberg/pull/63484)); rich text formatting across blocks ([#58913](https://github.com/WordPress/gutenberg/pull/58913)).
* Mobile: multi-selection via editableRoot ([#81542](https://github.com/WordPress/gutenberg/pull/81542), [#82816](https://github.com/WordPress/gutenberg/pull/82816)); iOS double-tap selection fix ([#81042](https://github.com/WordPress/gutenberg/pull/81042)).
* In-between inserter on wrapped lines ([#83276](https://github.com/WordPress/gutenberg/pull/83276)) and sized to adjacent blocks ([#68074](https://github.com/WordPress/gutenberg/pull/68074)).
* Escape/Enter to leave or enter the canvas ([#82314](https://github.com/WordPress/gutenberg/pull/82314)).
* Visualize non-breaking spaces ([#74040](https://github.com/WordPress/gutenberg/pull/74040)).
* **The empty-state appender is now a real "ghost" block** ([#81231](https://github.com/WordPress/gutenberg/pull/81231)). Breaks CSS and e2e selectors targeting `.block-editor-default-block-appender`.
* Links: Tracking [Block Editor Paper Cuts (#81453)](https://github.com/WordPress/gutenberg/issues/81453) · 7.1 tracking [#63255](https://github.com/WordPress/gutenberg/issues/63255)

### **Options menu, post author, slugs 🔍**

* Options menu's View group gains Appearance, Notes, and Panels submenus ([#82976](https://github.com/WordPress/gutenberg/pull/82976)).
* Post author field is searchable and queries users on the server ([#83323](https://github.com/WordPress/gutenberg/pull/83323)).
* New posts no longer publish with the `auto-draft` slug ([#83518](https://github.com/WordPress/gutenberg/pull/83518)); post slug prefers server sanitization ([#78135](https://github.com/WordPress/gutenberg/pull/78135)).
* Starter patterns modal gets category filtering ([#81396](https://github.com/WordPress/gutenberg/pull/81396)).
* Command Palette: View post command ([#66720](https://github.com/WordPress/gutenberg/pull/66720)).

### **Visual revisions polish 🔍**

==[end user] [site admin]==

* Merged after 7.1: post title diffs in revisions ([#82586](https://github.com/WordPress/gutenberg/pull/82586), [#82536](https://github.com/WordPress/gutenberg/pull/82536)); merged adjacent inline diffs ([#80579](https://github.com/WordPress/gutenberg/pull/80579)).
* 🔍 Shareable URLs ([#79934](https://github.com/WordPress/gutenberg/pull/79934)) and the code diff view ([#80314](https://github.com/WordPress/gutenberg/pull/80314)) merged August 3, in 23.8. Check whether they shipped in 7.1 or land in 7.2.
* Links: Tracking [Visual Revisions: post-7.0 polish (#79120)](https://github.com/WordPress/gutenberg/issues/79120)

### **Media editor modal 🔍**

==[end user] [site admin]==

* Restore the original uncropped image from More options ([#81805](https://github.com/WordPress/gutenberg/pull/81805)); original attachment ID tracked for edited images ([#81803](https://github.com/WordPress/gutenberg/pull/81803)); panel layout refactor ([#81840](https://github.com/WordPress/gutenberg/pull/81840)); tools lock while saving ([#82417](https://github.com/WordPress/gutenberg/pull/82417)).
* Links: Tracking [WordPress 7.2 Iteration: Media Editor Modal (#80389)](https://github.com/WordPress/gutenberg/issues/80389)

### **Images attach to the post on save 🔍**

==[plugin author] [site admin]==

* Unattached images in Image and Gallery blocks get the current post as `post_parent` after save. Skips synced patterns, template parts, autosaves; stops above 100 images. Opt out with `autoAttachMediaEnabled` (how to set it is unconfirmed).
* Link: [#81977](https://github.com/WordPress/gutenberg/pull/81977) · Related issue [#66663](https://github.com/WordPress/gutenberg/issues/66663)

---

## **Admin and workflow**

### **DataForm editor inspector 🔍**

==[plugin author] [developer] [enterprise]==

* The post/page sidebar is being rebuilt on DataForm (experiment "Editor Inspector: Use DataForm"). Keeps working: `PluginDocumentSettingPanel`, `PluginSidebar`, `PluginPostStatusInfo`, pre/post-publish panels, `removeEditorPanel`. **`PluginPostExcerpt` is not ported and may be removed.** 🔍 Confirm whether this ships on by default in 7.2.
* Links:
  * [Call for testing: DataForm editor inspector](https://make.wordpress.org/core/2026/09/17/call-for-testing-dataform-editor-inspector/)
  * [Back-compat call for testing (#82770)](https://github.com/WordPress/gutenberg/issues/82770)
  * Parent: [Consolidate Quick Edit and Editor Inspector (#76076)](https://github.com/WordPress/gutenberg/issues/76076)
  * [#82678](https://github.com/WordPress/gutenberg/pull/82678) (MediaUpload filter) · [#83133](https://github.com/WordPress/gutenberg/pull/83133) (`editor.PostFeaturedImage` filter)

### **DataViews, DataForm, Fields API 🔍**

==[plugin author] [developer]==

* Fields API: server-side registry and REST route ([#84078](https://github.com/WordPress/gutenberg/pull/84078)).
* New `time` field ([#80830](https://github.com/WordPress/gutenberg/pull/80830)); grid `aspectRatio` and `mediaFit` ([#79329](https://github.com/WordPress/gutenberg/pull/79329), [#81604](https://github.com/WordPress/gutenberg/pull/81604)); `isAny`/`isNone` on numeric fields ([#77942](https://github.com/WordPress/gutenberg/pull/77942)); `showPlaceholderIfEmpty` ([#82527](https://github.com/WordPress/gutenberg/pull/82527)); timezone in datetime control ([#82291](https://github.com/WordPress/gutenberg/pull/82291)).
* DataViews no longer uses private APIs; the RichText private export moved to the editor package (breaking) ([#81430](https://github.com/WordPress/gutenberg/pull/81430)).
* View config reference docs ([#81149](https://github.com/WordPress/gutenberg/pull/81149)) and the layered view-resolution fix ([#80832](https://github.com/WordPress/gutenberg/pull/80832)). 🔍 Both were backported to 7.1.
* Links: Tracking [DataViews, DataViewsPicker, DataForm, Fields in WordPress 7.2 (#81228)](https://github.com/WordPress/gutenberg/issues/81228) · UX: [hierarchy #80360](https://github.com/WordPress/gutenberg/issues/80360), [bulk actions #80408](https://github.com/WordPress/gutenberg/issues/80408) · DataViews as npm package decision: [#67274](https://github.com/WordPress/gutenberg/issues/67274) · 7.1 tracking [#76045](https://github.com/WordPress/gutenberg/issues/76045)

### **Extensible Site Editor (v2) 🔍**

==[plugin author] [developer]==

* Goal: replace Site Editor v1 with v2 (`admin.php?page=site-editor-v2`); 7.2 aims for feature parity. Every v2 screen now takes its view config from the server, including Identity and Navigation. Stabilizing the experiment is still an open question, so v2 may stay experimental in 7.2.
* Links: Tracking [Extensible Site Editor: 7.2 Iteration Issue (#79895)](https://github.com/WordPress/gutenberg/issues/79895) · [#82138](https://github.com/WordPress/gutenberg/pull/82138), [#82140](https://github.com/WordPress/gutenberg/pull/82140), [#82456](https://github.com/WordPress/gutenberg/pull/82456), [#82457](https://github.com/WordPress/gutenberg/pull/82457), [#82458](https://github.com/WordPress/gutenberg/pull/82458), [#82692](https://github.com/WordPress/gutenberg/pull/82692) · Quick Edit uses view config form ([#82962](https://github.com/WordPress/gutenberg/pull/82962)) · Core backport [wordpress-develop #13296](https://github.com/WordPress/wordpress-develop/pull/13296)

### **Omnibar: SVG icons replace Dashicons in the admin 🔍**

==[all]==

* Admin bar and sidebar Dashicons swapped for SVG icons via `wp_get_icon()`; patch in review. Icon choices still being settled.
* Open feedback: whether to keep the W and site name in the Toolbar.
* Links:
  * [Replacing Dashicons in the admin bar and menu](https://make.wordpress.org/core/2026/09/04/replacing-dashicons-in-the-admin-bar-and-menu/)
  * [Call for feedback: the W and the site name in the Toolbar](https://make.wordpress.org/core/2026/10/12/call-for-feedback-the-w-and-the-site-name-in-the-toolbar/)
  * Tracking: [Omnibar: WP 7.2 Iteration Issue (#82723)](https://github.com/WordPress/gutenberg/issues/82723)
  * Trac [#65089](https://core.trac.wordpress.org/ticket/65089), [#66087](https://core.trac.wordpress.org/ticket/66087) · [wordpress-develop #12270](https://github.com/WordPress/wordpress-develop/pull/12270), [#13453](https://github.com/WordPress/wordpress-develop/pull/13453)
  * Admin color: default admin theme color is Blueberry ([#83749](https://github.com/WordPress/gutenberg/pull/83749)); editors pick up the admin color scheme ([#81112](https://github.com/WordPress/gutenberg/pull/81112))

### **Error state overhaul 🔍**

* Clearer errors with a copy button; ErrorBoundary surfaces debugging details; root error boundary in the Site Editor.
* Links: [Defensive data design](https://make.wordpress.org/core/2026/08/04/defensive-data-design/) · [#76470](https://github.com/WordPress/gutenberg/pull/76470) · [#82496](https://github.com/WordPress/gutenberg/pull/82496) · [#81642](https://github.com/WordPress/gutenberg/pull/81642) · [#82486](https://github.com/WordPress/gutenberg/pull/82486)

### **Accessibility (Core) 🔍**

==[all]==

* Admin notices easier to announce and dismiss ([#50486](https://core.trac.wordpress.org/ticket/50486)); axe-core automated testing ([#66015](https://core.trac.wordpress.org/ticket/66015)); toggle to turn off metabox rearranging ([#50699](https://core.trac.wordpress.org/ticket/50699), [wordpress-develop #12627](https://github.com/WordPress/wordpress-develop/pull/12627)); remove widgets accessibility mode ([#52399](https://core.trac.wordpress.org/ticket/52399)).

### **On This Day dashboard widget 🔍**

* Roadmap retries it, but Trac #65116 is still open and milestoned 7.1, with unresolved questions (opt-in vs default, merging with Gutenberg #74936, whether it belongs in Core). Likely punt again.
* Links: [Trac #65116](https://core.trac.wordpress.org/ticket/65116) · [wordpress-develop #11630](https://github.com/WordPress/wordpress-develop/pull/11630) · [Gutenberg #74936](https://github.com/WordPress/gutenberg/issues/74936)
* Carryover: punted from 7.1.

---

## **Security**

### **Secrets API 🔍**

==[plugin author] [developer] [enterprise]==

* First-class encrypted credential store: `wp_set_secret()`, `wp_get_secret()`, `wp_delete_secret()`, `wp_import_option_as_secret()`, `WP_Secret`. WP-CLI in scope; admin UI deferred to 7.3. **7.2 vs 7.3 decision due before Beta 1.**
* Links: [Proposal: A Secrets API for WordPress 7.2](https://make.wordpress.org/core/2026/08/25/proposal-a-secrets-api-for-wordpress-7-2/) · [Trac #66187](https://core.trac.wordpress.org/ticket/66187) · [wordpress-develop #13759](https://github.com/WordPress/wordpress-develop/pull/13759) · [Feature plugin](https://github.com/ericmann/secrets-api)

### **Application password improvements 🔍**

==[site admin] [enterprise]==

* UX improvements, email notification on add, environment detection on non-HTTPS sites, safer `default_role`, SameSite cookies.
* Links: [#66009](https://core.trac.wordpress.org/ticket/66009) (couldn't be read 🔍), [#63927](https://core.trac.wordpress.org/ticket/63927), [#57388](https://core.trac.wordpress.org/ticket/57388), [#46744](https://core.trac.wordpress.org/ticket/46744), [#37000](https://core.trac.wordpress.org/ticket/37000)

### **`wp_kses()` rebuilt on the HTML API 🔍**

==[plugin author] [developer]==

* Normalized output; `script`/`style` contents stripped; some malformed SVG, MathML, and comments rejected. `wp_kses_force_legacy_parser` restores old behavior. **"7.2 or 7.3" depending on testing.**
* Links: [Progress Report: wp_kses()](https://make.wordpress.org/core/2026/10/07/progress-report-wp_kses/) · [Trac #66208](https://core.trac.wordpress.org/ticket/66208) · [wordpress-develop #13271](https://github.com/WordPress/wordpress-develop/pull/13271)

### **Sudo mode 🔍**

* Re-authentication for sensitive actions. Proposal pending; no link yet.

---

## **Developer goodies**

### **Interactivity API 🔍**

==[developer] [plugin author]==

* `data-wp-html` directive with `asDangerousHTML()` ([#83092](https://github.com/WordPress/gutenberg/pull/83092), merged). Router navigation lifecycle: `state.navigating`, `state.initiator`, `initiator` option for `navigate()`; replaces deprecated `state.navigation.hasStarted`/`hasFinished` ([#83280](https://github.com/WordPress/gutenberg/pull/83280), in 24.2). Expired deprecations removed ([#84098](https://github.com/WordPress/gutenberg/pull/84098)).
* Links: Tracking [Interactivity API for WordPress 7.2 (#83078)](https://github.com/WordPress/gutenberg/issues/83078) · [#83076](https://github.com/WordPress/gutenberg/issues/83076) · [#80960](https://github.com/WordPress/gutenberg/issues/80960)

### **Block API changes 🔍**

==[developer] [plugin author]==

* Inner block templates move into `registerBlockType()` settings; `<InnerBlocks>` `template` props deprecated ([#80027](https://github.com/WordPress/gutenberg/pull/80027)).
* PHP-only blocks: `items.enum` generates a token field ([#83394](https://github.com/WordPress/gutenberg/pull/83394)); `supports.autoRegister` in the schema ([#80173](https://github.com/WordPress/gutenberg/pull/80173)).
* `InspectorControls` `__experimentalGroup` removed ([#83171](https://github.com/WordPress/gutenberg/pull/83171)).
* Missing `blockGap` treated as unsupported ([#82401](https://github.com/WordPress/gutenberg/pull/82401)); `blockGap` normalized ([#81460](https://github.com/WordPress/gutenberg/pull/81460)).
* `@wordpress/reusable-blocks` becomes a no-op ([#79186](https://github.com/WordPress/gutenberg/pull/79186)).

### **Plugin menu items render through `@wordpress/ui` Menu 🔍**

==[plugin author]==

* `PluginMoreMenuItem`, `PluginSidebarMoreMenuItem`, `PluginPreviewMenuItem`: `as` prop deprecated and ignored; links only honor `target="_blank"`.
* Links: [#81564](https://github.com/WordPress/gutenberg/pull/81564) · [#82321](https://github.com/WordPress/gutenberg/pull/82321) · [#82319](https://github.com/WordPress/gutenberg/pull/82319) · Private Menu API deprecated ([#82947](https://github.com/WordPress/gutenberg/pull/82947))

### **`apiFetch` changes 🔍**

==[developer] [plugin author]==

* Empty 200 responses resolve to `null` (previously rejected `invalid_json`); `apiFetch.unregister()`; `defaultFetchHandler` exposed.
* Links: [#79325](https://github.com/WordPress/gutenberg/pull/79325) · [#82408](https://github.com/WordPress/gutenberg/pull/82408) · [#82553](https://github.com/WordPress/gutenberg/pull/82553)

### **Components and `@wordpress/ui` 🔍**

==[developer] [plugin author]==

* New in `@wordpress/ui`: Menu, CheckboxControl, CheckboxGroup, RadioGroup(Control), Switch(Control), SearchableSelect(Control), SearchableChipSelect(Control), Calendar/RangeCalendar, TextareaControl, Spinner, Meter, Progress, Breadcrumb.
* Deprecated in `@wordpress/components`: Badge, Divider, ResponsiveWrapper, Scrollable, ZStack, Elevation, Animate, `__experimentalSurface`.
* Public now: `withIgnoreIMEEvents` in `@wordpress/keycodes`; new `@wordpress/kebab-case` package; `@wordpress/data` `normalizeArgs` and `getResolutionArgs`.
* Links: [24.0 notes](https://make.wordpress.org/core/2026/09/16/whats-new-in-gutenberg-24-0-16-september/) · [24.1 notes](https://github.com/WordPress/gutenberg/releases/tag/v24.1.0) · [24.2 post](https://make.wordpress.org/core/2026/10/14/whats-new-in-gutenberg-24-2-14-october/) · Deprecations: [Badge #82379](https://github.com/WordPress/gutenberg/pull/82379), [Divider #83040](https://github.com/WordPress/gutenberg/pull/83040), [ResponsiveWrapper #83347](https://github.com/WordPress/gutenberg/pull/83347), [Scrollable #83273](https://github.com/WordPress/gutenberg/pull/83273), [ZStack #83344](https://github.com/WordPress/gutenberg/pull/83344), [Elevation #83269](https://github.com/WordPress/gutenberg/pull/83269), [Animate #80931](https://github.com/WordPress/gutenberg/pull/80931), [Surface #80943](https://github.com/WordPress/gutenberg/pull/80943) · [withIgnoreIMEEvents #81343](https://github.com/WordPress/gutenberg/pull/81343) · [kebab-case #81294](https://github.com/WordPress/gutenberg/pull/81294) · [Calendar #81337](https://github.com/WordPress/gutenberg/pull/81337)

### **Database: `NO_BACKSLASH_ESCAPES` off by default ✅ dev note published**

==[developer] [enterprise]==

* Link: [NO_BACKSLASH_ESCAPES SQL mode is now turned off by default in WordPress 7.2](https://make.wordpress.org/core/2026/10/09/no_backslash_escapes-sql-mode-is-now-turned-off-by-default-in-wordpress-7-2/)

### **Performance 🔍**

* Retire script/style concatenation in favor of prefetching. Trac #57548 is milestoned **Future Release**, not 7.2. Likely not in 7.2.
* Enhanced Responsive Images (feature plugin; merge not confirmed).
* Inserter opens with less main-thread blocking ([#83437](https://github.com/WordPress/gutenberg/pull/83437), [#83284](https://github.com/WordPress/gutenberg/pull/83284)); List View "Select all" on 1,000 blocks from 16.8s to 0.4s ([#81210](https://github.com/WordPress/gutenberg/pull/81210)).
* Links: [Trac #57548](https://core.trac.wordpress.org/ticket/57548) · [Enhanced Responsive Images issues](https://github.com/WordPress/performance/issues?q=is%3Aopen+label%3A%22%5BPlugin%5D+Enhanced+Responsive+Images%22) · [Enhanced Responsive Images plugin](https://wordpress.org/plugins/auto-sizes/)

### **Client-side media 🔍**

* 7.2 goals: durable upload queue, server-side fallback, video transcoding and posters, JPEG XL, animated GIF sub-sizes. None confirmed merged. Probably later.
* Links: Tracking [Client Side Media iteration for WordPress 7.2 and beyond (#80159)](https://github.com/WordPress/gutenberg/issues/80159) · [7.1 dev note](https://make.wordpress.org/core/2026/07/22/client-side-media-processing-in-wordpress-7-1/)

### **Tooling (not Core, but readers will ask) ✏️**

* Gutenberg tests use Vitest; `@wordpress/scripts` 36 drops Jest ([Make post](https://make.wordpress.org/core/2026/09/23/gutenbergs-javascript-unit-and-integration-tests-now-use-vitest/), [#82843](https://github.com/WordPress/gutenberg/pull/82843)).
* [Updating WordPress to Node.js 24 and npm 11](https://make.wordpress.org/core/2026/09/09/updating-wordpress-to-use-node-js-24-and-npm-11/).

---

## **AI (mostly in the AI plugin, not Core) 🔍**

The roadmap says this work happens in the AI plugin and may not land in 7.2.

* **Embeddings in Core:** [Trac #65638](https://core.trac.wordpress.org/ticket/65638) is open and **milestoned 7.2**. It updates the PHP AI Client to 1.4.0 and adds `wp_ai_client_embedding()` ([wordpress-develop #12530](https://github.com/WordPress/wordpress-develop/pull/12530)). Moved from 7.1 after Beta 1. Semantic search itself: [AI #962](https://github.com/WordPress/ai/issues/962).
* **Streaming responses:** [php-ai-client #100](https://github.com/WordPress/php-ai-client/issues/100).
* **Connectors:** on/off controls, performance, key handling during provider outages: [#65523](https://core.trac.wordpress.org/ticket/65523), [#65215](https://core.trac.wordpress.org/ticket/65215), [#65551](https://core.trac.wordpress.org/ticket/65551).
* **Abilities and MCP:** [AI #40](https://github.com/WordPress/ai/issues/40), [AI #1025](https://github.com/WordPress/ai/pull/1025), [MCP Adapter](https://github.com/WordPress/mcp-adapter), [#313](https://github.com/WordPress/mcp-adapter/issues/313), [#178](https://github.com/WordPress/mcp-adapter/issues/178), [AI #992](https://github.com/WordPress/ai/pull/992), [WebMCP #448](https://github.com/WordPress/ai/issues/448), [Agent identity #923](https://github.com/WordPress/ai/issues/923).
* **Guidelines and Knowledge:** moved to 7.2 after missing 7.1, but still in the experiment and framed as AI-plugin work. Likely not in Core 7.2. [#77230](https://github.com/WordPress/gutenberg/issues/77230) · [#75171](https://github.com/WordPress/gutenberg/issues/75171) · [Merge proposal: Guidelines built on Knowledge](https://make.wordpress.org/core/2026/06/22/merge-proposal-guidelines-built-on-knowledge/)
* [AI plugin](https://wordpress.org/plugins/ai/) · [AI plugin issues](https://github.com/WordPress/ai/issues)

---

## **Not in 7.2 (or very unlikely)**

* 🏈 **Real-time collaboration**: intentionally off the roadmap. Links above.
* 🏈 **React 19 in Core**: Gutenberg 24.2 turns it on by default in the plugin ([#83784](https://github.com/WordPress/gutenberg/pull/83784), [incompatible plugins #84607](https://github.com/WordPress/gutenberg/pull/84607)), but contributors on the tracking issue say it won't be part of 7.2 and will likely be 7.3. [Upgrading to React 19 (#71336)](https://github.com/WordPress/gutenberg/issues/71336). Worth a heads-up for plugin developers testing with Gutenberg.
* 🔍 **Script/style concatenation removal**: Future Release on Trac.
* 🔍 **On This Day widget**: still unresolved.
* 🔍 **Classic block deprecation**: reverted for 7.1; the follow-up post sets direction but no 7.2 target. [The Classic block stays in the inserter for WordPress 7.1](https://make.wordpress.org/core/2026/07/07/the-classic-block-stays-in-the-inserter-for-wordpress-7-1/)
* 🔍 **Suggestion mode for Notes**: exploring only.
* 🔍 **Guidelines/Knowledge in Core**: experiment only.

---

## **7.1 carryover check**

| Item (from `wp-7-1-punted-items.md`) | 7.2 status | Links |
| ----- | ----- | ----- |
| On This Day widget | On roadmap; Trac still milestoned 7.1, open | [#65116](https://core.trac.wordpress.org/ticket/65116) |
| Display inherited styles | Values shown without a flag; indicators still experimental | [#82520](https://github.com/WordPress/gutenberg/issues/82520) |
| Writing flow / drag and drop | Continued as paper cuts | [#81453](https://github.com/WordPress/gutenberg/issues/81453) |
| Real-time collaboration | 🏈 Not on 7.2 roadmap | [Post](https://make.wordpress.org/core/2026/09/18/moving-to-a-server-aware-approach-for-collaboration/) |
| Guidelines | Experiment / AI plugin | [#77230](https://github.com/WordPress/gutenberg/issues/77230) |
| Table of Contents block | On roadmap; partly done | [#42229](https://github.com/WordPress/gutenberg/issues/42229) |
| Classic block deprecation | No 7.2 target found | [Post](https://make.wordpress.org/core/2026/07/07/the-classic-block-stays-in-the-inserter-for-wordpress-7-1/) |
| React 19 | 🏈 Plugin only; Core likely 7.3 | [#71336](https://github.com/WordPress/gutenberg/issues/71336) |
| AI generation streaming | AI roadmap item | [php-ai-client #100](https://github.com/WordPress/php-ai-client/issues/100) |
| Abilities API expansion | AI plugin work | [AI #40](https://github.com/WordPress/ai/issues/40) |
| AI embeddings | Trac milestoned 7.2, open | [#65638](https://core.trac.wordpress.org/ticket/65638) |
| Unicode email addresses | 🔍 Conflict: [changeset 62482](https://core.trac.wordpress.org/changeset/62482/) committed June 10 with `@since 7.1.0` and no revert shown, but your punted list marks it ❌ and [#31992](https://core.trac.wordpress.org/ticket/31992) is still open. Check whether it shipped in 7.1. | [Call for testing](https://make.wordpress.org/core/2026/06/10/call-for-testing-unicode-email-addresses/) |

---
