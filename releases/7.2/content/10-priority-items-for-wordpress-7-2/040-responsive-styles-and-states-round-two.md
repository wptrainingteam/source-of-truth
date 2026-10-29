---
title: "Responsive styles and states, round two"
slug: responsive-styles-and-states-round-two
tags: [theme builder, plugin author, site admin]
flags: [check, visuals]
---

Responsive styles and interactive states arrived in WordPress 7.1, and 7.2 extends them. You can now set a block's position per viewport ([#83094](https://github.com/WordPress/gutenberg/pull/83094)) and add custom CSS for a specific state ([#83539](https://github.com/WordPress/gutenberg/pull/83539)). The Gallery block's columns, crop, and aspect ratio can change by screen size, too ([#82003](https://github.com/WordPress/gutenberg/pull/82003), [#82233](https://github.com/WordPress/gutenberg/pull/82233)).

Navigation Link blocks get hover, focus, and active controls in Global Styles ([#83451](https://github.com/WordPress/gutenberg/pull/83451)), so you can style menu states across your site without editing `theme.json`.

For block developers, the viewport API is now public. Custom blocks can use `getStyleForState()` and `setStyleForState()` from `@wordpress/block-editor` to make their own controls work per viewport ([#82741](https://github.com/WordPress/gutenberg/pull/82741)).

Tracking: [Responsive style states for blocks, 7.2 tasks](https://github.com/WordPress/gutenberg/issues/80388) (#80388)
