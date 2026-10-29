---
title: Changing the order of block global styles
slug: changing-the-order-of-block-global-styles
tags: [theme author, plugin author]
---

As part of setting the stage for [future work with section styling and colorways](https://github.com/WordPress/gutenberg/issues/57537), work was done so that the block global styles load after the base global styles. The order of loading is now:

*   Block library styles
*   Base global styles (element styles, etc)
*   Block-specific global styles

This order should be the same regardless of whether `should_load_separate_core_block_assets` is true or false.

**Key Make Posts/GitHub/Trac Issue(s):** Always output core block global styles after base global styles ([6010](https://github.com/WordPress/wordpress-develop/pull/6010))
