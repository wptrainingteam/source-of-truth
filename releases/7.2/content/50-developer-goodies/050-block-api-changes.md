---
title: Block API changes
slug: block-api-changes
tags: []
flags: [check]
---

* Inner block templates move into `registerBlockType()` settings. The `template` and `templateInsertUpdatesSelection` props on `<InnerBlocks>` are deprecated ([#80027](https://github.com/WordPress/gutenberg/pull/80027)).
* PHP-only blocks: an attribute with `items.enum` now gets a token field in the inspector ([#83394](https://github.com/WordPress/gutenberg/pull/83394)).
* `InspectorControls`' `__experimentalGroup` prop is removed. Controls that still use it render in the default group instead, so rename it to `group` ([#83171](https://github.com/WordPress/gutenberg/pull/83171)).
* The empty-state block appender is now a real "ghost" block. CSS or tests that target `.block-editor-default-block-appender` need updating ([#81231](https://github.com/WordPress/gutenberg/pull/81231)).
* Additional CSS now applies to blocks rendered by a parent block, like a Navigation Link inside a Navigation block. Rules that were ignored before will now apply ([#82590](https://github.com/WordPress/gutenberg/pull/82590)).
* The Paragraph block supports native multi-selection on iOS and Android, so key, input, and composition events now fire on the canvas instead of the block. Plugins that add editing event handlers to Paragraph blocks through filters should test them ([#79105](https://github.com/WordPress/gutenberg/pull/79105), [#80287](https://github.com/WordPress/gutenberg/pull/80287)).
* `registry.subscribe()` with a store that isn't registered yet now waits for that store instead of listening to every store ([#83346](https://github.com/WordPress/gutenberg/pull/83346)).

Read more: [Miscellaneous Editor Changes in WordPress 7.2](https://make.wordpress.org/core/2026/11/18/miscellaneous-editor-changes-in-wordpress-7-2/)
