---
title: New and updated functions and filters
slug: new-and-updated-functions-and-filters
tags: []
---

The new filter `should load block assets` provides a way for classic themes to use \`wp-block-library\` even when loading block assets only for blocks that actually render on a page. ([61965](https://core.trac.wordpress.org/ticket/61965)). The dev note: [New filter `should_ load_block_ assets_on_demand` in 6.8](https://make.wordpress.org/core/2025/03/24/new-filter-should_load_block_assets_on_demand-in-6-8/) has the details.

WordPress 6.8 introduces a new function `wp_register_block_ types_from_ metadata_collection()`, which allows plugins to register multiple block types with a single function call. ([62267](https://core.trac.wordpress.org/ticket/62267)) See also Dev Note [More efficient block type registration in 6.8](https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/)

The block registration API now enforces the `blockType.parent` setting to be an `array`. The editor will now display a warning if it’s a different type, such as a \`string\`. [(66250](https://github.com/WordPress/gutenberg/pull/66250)).

Also consult the post [Updates to user-interface components in WordPress 6.8](https://make.wordpress.org/core/2025/03/25/updates-to-user-interface-components-in-wordpress-6-8/)
