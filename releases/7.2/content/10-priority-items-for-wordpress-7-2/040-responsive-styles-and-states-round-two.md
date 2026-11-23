---
title: "Responsive styles and states, round two"
slug: responsive-styles-and-states-round-two
tags: [theme builder, plugin author, site admin]
flags: [check, visuals]
---

Responsive styles and interactive states arrived in WordPress 7.1, and 7.2 extends them. You can now set a block's position per viewport ([#83094](https://github.com/WordPress/gutenberg/pull/83094)) and add custom CSS for a specific state ([#83539](https://github.com/WordPress/gutenberg/pull/83539)). The Gallery block's columns, crop, and aspect ratio can change by screen size, too ([#82003](https://github.com/WordPress/gutenberg/pull/82003), [#82233](https://github.com/WordPress/gutenberg/pull/82233)).

Navigation Link blocks get hover, focus, and active controls in Global Styles ([#83451](https://github.com/WordPress/gutenberg/pull/83451)), so you can style menu states across your site without editing `theme.json`.

For block developers, the API behind these controls is now public ([#82741](https://github.com/WordPress/gutenberg/pull/82741)). Custom controls can read the selected state with `getSelectedBlockStyleState()` and update styles for it with `getStyleForState()` and `setStyleForState()` from `@wordpress/block-editor`. Wrap them in `InspectorControls` or `BlockControls` with `group="style-state"` so they stay visible when a state is selected. For matching media queries, use `getViewportMediaQueries()` in JavaScript or `wp_get_viewport_media_queries()` in PHP.

Read more: [API for style state-aware block styling controls](https://make.wordpress.org/core/2026/11/18/api-for-style-state-aware-block-styling-controls/)

Tracking: [Responsive style states for blocks, 7.2 tasks](https://github.com/WordPress/gutenberg/issues/80388) (#80388)
