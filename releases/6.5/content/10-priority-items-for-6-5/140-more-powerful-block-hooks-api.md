---
title: More powerful Block Hooks API
slug: more-powerful-block-hooks-api
tags: [plugin author]
---

As a reminder, Block Hooks is an API that allows a dynamic block to attach itself to another given block. It was first introduced in WordPress 6.4 and various improvements are in place for this next release:

*   Added ability to insert hooked blocks into layout elements that do have user modifications, removing a prior restriction to using hooked blocks in unmodified templates, parts, and patterns.
*   [Improved hooked block integration](https://github.com/WordPress/gutenberg/pull/57754) with the Navigation block, allowing you to add child blocks into navigation, like a Login/out block.
*   Fix for confusing [Block Hooks toggles behavior](https://github.com/WordPress/gutenberg/pull/57928) when a hooked block is present outside of where it’s expected.
*   Introduced a new filter called hooked\_block\_{$block\_type} that allows setting the hooked block’s attributes, or wrapping it in another block.

For this latter item, this new filter allows modifying a hooked block (in parsed block format) prior to insertion, while providing read access to its anchor block (in the same format). This makes the filter a lot more powerful for block authors as it allows you to set the hooked block’s attributes/inner blocks depending on information from the anchor block.

**Adoption approach:** opt in via blockHooks in the block.json file of your chosen dynamic block or use the hooked\_block\_types filter to add their block as a hooked block. For more information, [here are the block editor handbook instructions](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#block-hooks-optional).

**Key Make Posts/GitHub/Trac Issue(s):** [Updates to Block Hooks](https://make.wordpress.org/core/2024/03/04/updates-to-block-hooks-in-6-5/), Block Hooks Feature for 6.5 ([54904](https://github.com/WordPress/gutenberg/issues/54904))
