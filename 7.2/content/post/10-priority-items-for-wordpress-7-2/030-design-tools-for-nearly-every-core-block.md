---
title: Design tools for nearly every Core block
tags: [theme builder, site admin, end user]
flags: [check, visuals]
---

Across Gutenberg 24.1 and 24.2, contributors switched on existing design tools for dozens of Core blocks that didn't have them yet. There are no new controls to learn, just fewer cases where you need a wrapper Group block or custom CSS to get the look you want. Highlights include:

* **Background image, size, and gradient:** Buttons, Columns, Heading, List, Media & Text, Gallery, Tabs, and more ([#83203](https://github.com/WordPress/gutenberg/pull/83203), [#83226](https://github.com/WordPress/gutenberg/pull/83226)).
* **Shadow:** Paragraph, Heading, List, Buttons, Gallery, Quote, Video, and more ([#83926](https://github.com/WordPress/gutenberg/pull/83926), [#83045](https://github.com/WordPress/gutenberg/pull/83045)).
* **Minimum width and height:** Heading, Columns, Buttons, Embed, Gallery, and more ([#83580](https://github.com/WordPress/gutenberg/pull/83580), [#83895](https://github.com/WordPress/gutenberg/pull/83895)).
* **Link, heading, and button colors:** Accordion, Tabs, Quote, Details, Post Template ([#83390](https://github.com/WordPress/gutenberg/pull/83390), [#83371](https://github.com/WordPress/gutenberg/pull/83371)).
* **Duotone:** Gallery, Video, and Media & Text ([#83978](https://github.com/WordPress/gutenberg/pull/83978), [#83979](https://github.com/WordPress/gutenberg/pull/83979), [#83981](https://github.com/WordPress/gutenberg/pull/83981)).
* **Fit text:** Post Title, Site Title, Site Tagline, and Poetry ([#83036](https://github.com/WordPress/gutenberg/pull/83036), [#82074](https://github.com/WordPress/gutenberg/pull/82074), [#83980](https://github.com/WordPress/gutenberg/pull/83980)).

The Group block can also set separate horizontal and vertical gaps in flex and grid layouts ([#81476](https://github.com/WordPress/gutenberg/pull/81476)).

Theme builders can set all of these in `theme.json` under `styles.blocks`. If your theme styles links inside Accordion, Tabs, or Post Template with custom CSS, check for specificity conflicts with the new `has-link-color` classes. The full list is in the [Gutenberg 24.1](https://github.com/WordPress/gutenberg/releases/tag/v24.1.0) and [Gutenberg 24.2](https://make.wordpress.org/core/2026/10/14/whats-new-in-gutenberg-24-2-14-october/) changelogs.

Tracking: [Block supports and design tools](https://github.com/WordPress/gutenberg/issues/76525) (#76525)

<!-- 🔍 #76525 is still titled for 7.1; look for a 7.2 tracking issue. 🎨 Before/after of the Styles panel on a block that gained background and shadow. -->
