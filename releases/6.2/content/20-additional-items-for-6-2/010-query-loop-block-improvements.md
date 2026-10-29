---
title: Query Loop block improvements
slug: query-loop-block-improvements
tags: []
---

**Smarter suggestions for Query Loop block variations [theme author] [plugin author]**

[Block variations](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/) have been available in Gutenberg for a long time. They allow you to have  similar versions of the same block that share some common functionality. With WordPress 6.2, if you have an active variation of the Query Loop block on your site and that variation has registered some [block patterns](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/), only those patterns will be suggested in the inserter offering a more relevant experience. 

For example, you might have a Products List block that is a variation of the Query Loop block. That Products List can also have a registered block pattern. When inserting the Products List block, you will not see the default Query Loop block patterns but rather your own block pattern associated with the Products List. 

**Key Make Posts/GitHub/Trac Issue(s):**  Suggest active variation patterns for the Query Loop block ([44197](https://github.com/WordPress/gutenberg/pull/44197)).

**Improved setup experience for the Query Loop block [end user]**

When adding a new Query Loop block, selecting available patterns has been updated to a consistent interface used when selecting from patterns elsewhere in the Site Editor. This both creates a more cohesive editing experience when working with patterns in general and resolves some consistent feedback about the modal for choosing patterns not clearly showing how best to select what you want. This stands in contrast to the modal that was used previously showing a nearly full screen view that led to some confusion around how the pattern would appear and how many were available. 

**Visuals:** Query pattern setup [before video](https://drive.google.com/file/d/1GY33OTavaeDTAKh92IzVSjMcqXhPoynr/view?usp=share_link) and [after video](https://drive.google.com/file/d/1K42oVletP5zi3R-_wvTjY4-AhMFNko8b/view?usp=share_link). 

**Key Make Posts/GitHub/Trac Issue(s):** Query Loop block: improve setup state ([33202](https://github.com/WordPress/gutenberg/issues/33202)).

**New text focused Query Loop block patterns [theme author] [end user]**

To get up to speed faster with the more advanced Query Loop block, patterns have been integrated into the set up state of the block since the beginning. These patterns have been refreshed with three additional text focused options to balance out the more visual options that have been present previously: 

*   [Left aligned posts](https://wordpress.org/patterns/pattern/left-aligned-posts/)
*   [Full width posts titles with dates](https://wordpress.org/patterns/pattern/fullwidth-posts-titles-with-dates/)
*   [Full width posts with uppercase titles](https://wordpress.org/patterns/pattern/fullwidth-posts-with-uppercase-titles/)

**Key Make Posts/GitHub/Trac Issue(s):** bundle more text focused patterns ([44140](https://github.com/WordPress/gutenberg/issues/44140)). 

**_Potential breaking change_: Query Loop block color support removed [theme author]**

“Potential breaking change: The Query Loop block [no longer has color support](https://github.com/WordPress/gutenberg/pull/46147). It is now purely a settings-only block without design-related options. WordPress will introduce a wrapping Group block over its nested blocks and should migrate existing colors settings to the Group. Developers should test this to make sure that this does not negatively affect existing uses of Query Loop blocks in their themes.”  – From [“What’s new for Developers? February 2023”](https://developer.wordpress.org/news/2023/02/whats-new-for-developers-february-2023/)
