# Sweep log

Newest first.

## Sweep: October 23, 2026 (after Beta 1)

**Checked:** 194 refs (Status workflow, Oct 23), the [Beta 1 announcement](https://wordpress.org/news/2026/10/wordpress-7-2-beta-1-is-ready-for-download-and-testing/), the Beta 1 Gutenberg pin ([00dc70f](https://github.com/WordPress/wordpress-develop/commit/00dc70f501), 429 PRs), wordpress-develop trunk and 7.1 commits, and Gutenberg's wp/7.1 and wp/7.2 branches. Lookups failed for: none.

**Key fact:** Beta 1 pins the tip of Gutenberg's wp/7.2 branch, which is 24.3 RC1 plus four cherry-picks (#85155, #82730, #71634, #81644). So the range is 23.7–24.3, and all 26 PRs in the post with the Gutenberg 24.3 milestone are in Beta 1.

**Changed in the post:**
* Intro: Gutenberg range 23.7 – 24.2 → 23.7 – 24.3 (Beta 1 post and pin). Linked the [Help Test post](https://make.wordpress.org/test/2026/10/20/help-test-wordpress-7-2/). `sot.json` updated.
* Cleared every "confirm it's in Beta 1" note for 24.3 PRs: Notes, design tools (Post Title fit text), Global Styles elements, Navigation, writing paper cuts, media editor, smaller editor improvements (3), DataForm inspector, core actions.
* Notes: removed the @mention email clause. `wp_notify_note_mentions()` (r63012, [439615d](https://github.com/WordPress/wordpress-develop/commit/439615d)) is on the 7.1 branch, so it shipped in 7.1.
* Visual revisions: removed shareable revision URLs (#79934, cherry-picked to wp/7.1 as #81205). The code diff view (#80314) isn't in 7.1 and stays.
* Smaller editor improvements: removed the admin color scheme bullet (#81112 is on wp/7.1).
* Global Styles and theme.json: removed "Turn off the responsive and state editing UI". #80814, #80956 and #81058 are all on wp/7.1.
* Description List block: hidden (`published: false`). #81728 is still open after Beta 1 and the block isn't blessed.
* Table of Contents block: hidden. Still `"__experimental": true` on wp/7.2.
* Secrets API: "A proposed" → "A new". Committed Oct 13 ([5744bc5](https://github.com/WordPress/wordpress-develop/commit/5744bc5), Fixes #66187); `wp_set_secret()`, `wp_get_secret()` and `wp_delete_secret()` are in the commit.
* AI embeddings: bundled PHP AI Client 1.4.0 → 1.5.0 (`AiClient::VERSION` in [d6a40f4](https://github.com/WordPress/wordpress-develop/commit/d6a40f4), Fixes #65638, Oct 13). Cleared the "if it lands" note.
* SVG icons in the admin: cleared the review note. Committed Oct 19 ([5832f82](https://github.com/WordPress/wordpress-develop/commit/5832f82), #65089).
* Ipsum: committed Oct 22 ([8f7616e](https://github.com/WordPress/wordpress-develop/commit/8f7616e)), after Beta 1, so it arrives in Beta 2. Note updated; the Playground check stays.
* Admin accessibility, application passwords, `wp_kses()`: working notes now record each ticket's status (see proposals).

**Resolved questions:** Gutenberg range (23.7–24.3); Secrets API (7.2, committed Oct 13); DataForm inspector (on by default since #85081, a soft stabilization: old components stay until RC); Description List PR (#81728, still open, now a blessed-or-punt question); which 23.8 items shipped in 7.1 (shareable revision URLs, mention emails, `responsiveEditingEnabled` and `blockStatesEditingEnabled` did; the code diff view didn't). Navigation Link's new name: it was "Custom Link" in 7.1 and is "Navigation Link" in 7.2, with Custom Link as the default variation (#82375).

**Proposed:** rewrites of the admin accessibility, application password and `wp_kses()` items (PRs below).

**Not yet drafted:** seven Beta 1 features with commits that the post doesn't cover (On This Day, Media Library client-side uploads, random content redirects, Abilities API, Interactivity API `data-wp-html`, script concatenation retired, Global Styles "Customized" filter). Facts and links in `research.md`.

## **Sweep: October 19 (day before Beta 1)**

**Make Core:** No new 7.2 posts or dev notes since October 14. The only dev note is still `NO_BACKSLASH_ESCAPES`. New posts were [WP Feature Notifications weekly update](https://make.wordpress.org/core/2026/10/16/wp-feature-notifications-weekly-update-2026-10-16/) and [Call for code review help: Gutenberg wp/x.y branch workflows](https://make.wordpress.org/core/2026/10/16/call-for-code-review-help-repairing-gutenberg-github-actions-workflows-for-wp-x-y-branches/), neither of which affects the draft.

**Unchanged:**

* Secrets API: no decision posted. [wordpress-develop #13759](https://github.com/WordPress/wordpress-develop/pull/13759) is open, marked "do not merge," with no October activity. Trac #66187 and #66208 couldn't be fetched.
* Description List ([#81728](https://github.com/WordPress/gutenberg/pull/81728)): still not merged.
* Table of Contents: no stabilization commit.

**Merged to Gutenberg trunk October 16–19 (after 24.2), now in the draft with 🔍 "confirm in Beta 1":**

* Notes emoji reactions ([#76767](https://github.com/WordPress/gutenberg/pull/76767)). This was on the "not expected" list; it landed.
* Notes: Add note toolbar button is add-only ([#84635](https://github.com/WordPress/gutenberg/pull/84635)); anchor highlights ([#80578](https://github.com/WordPress/gutenberg/pull/80578)).
* **DataForm inspector stabilized** ([#85081](https://github.com/WordPress/gutenberg/pull/85081)).
* Navigation sidebar editing: edit links in a popover from List View ([#84005](https://github.com/WordPress/gutenberg/pull/84005)); inserter for empty menus ([#84003](https://github.com/WordPress/gutenberg/pull/84003)). Navigation Link "Open in new tab" from the popover ([#83506](https://github.com/WordPress/gutenberg/pull/83506)).
* Global Styles: elements listed alongside blocks ([#81645](https://github.com/WordPress/gutenberg/pull/81645)); preview selected state ([#83787](https://github.com/WordPress/gutenberg/pull/83787)).
* Post Title fit text ([#83036](https://github.com/WordPress/gutenberg/pull/83036)).
* Non-breaking spaces marked with a replace button ([#84737](https://github.com/WordPress/gutenberg/pull/84737)); drag a multi-selection from anywhere inside it ([#81602](https://github.com/WordPress/gutenberg/pull/81602)).
* Animated image sub-sizes ([#80385](https://github.com/WordPress/gutenberg/pull/80385)), from the client-side media iteration.
* Auto-attach refinements ([#84851](https://github.com/WordPress/gutenberg/pull/84851), [#84890](https://github.com/WordPress/gutenberg/pull/84890)).
* Save-failure error: copy option and show/hide details ([#82496](https://github.com/WordPress/gutenberg/pull/82496)).
* "My patterns" renamed "Site patterns" with author filter ([#84680](https://github.com/WordPress/gutenberg/pull/84680)); restoring a revision saves unsaved changes first ([#84590](https://github.com/WordPress/gutenberg/pull/84590)); backup date shown ([#84735](https://github.com/WordPress/gutenberg/pull/84735)); snackbars with actions stay longer ([#84842](https://github.com/WordPress/gutenberg/pull/84842)).
* Core actions registered on the server, new `@wordpress/core-actions` ([#84660](https://github.com/WordPress/gutenberg/pull/84660), [#84643](https://github.com/WordPress/gutenberg/pull/84643)).
* Popular icons shipped to `core-admin` ([#85072](https://github.com/WordPress/gutenberg/pull/85072)).

**Merged but not added (minor or internal):** Connectors screen preloads REST responses ([#77353](https://github.com/WordPress/gutenberg/pull/77353)); List View nesting with top-level items ([#84856](https://github.com/WordPress/gutenberg/pull/84856)); slug preview from the current title ([#84893](https://github.com/WordPress/gutenberg/pull/84893), [#84896](https://github.com/WordPress/gutenberg/pull/84896)); avatar fallbacks ([#84824](https://github.com/WordPress/gutenberg/pull/84824)); Emotion removal and TypeScript conversions.
