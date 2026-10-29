---
title: Block API changes
slug: block-api-changes
tags: []
flags: [check]
---

* Inner block templates move into `registerBlockType()` settings. The `template` and `templateInsertUpdatesSelection` props on `<InnerBlocks>` are deprecated ([#80027](https://github.com/WordPress/gutenberg/pull/80027)).
* PHP-only blocks: an attribute with `items.enum` now gets a token field in the inspector ([#83394](https://github.com/WordPress/gutenberg/pull/83394)).
* `InspectorControls`' `__experimentalGroup` prop is removed; use `group` ([#83171](https://github.com/WordPress/gutenberg/pull/83171)).
* The empty-state block appender is now a real "ghost" block. CSS or tests that target `.block-editor-default-block-appender` need updating ([#81231](https://github.com/WordPress/gutenberg/pull/81231)).
