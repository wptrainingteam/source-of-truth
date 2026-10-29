---
title: Writing flow improvements
slug: writing-flow-improvements
tags: []
---

Writing in WordPress, whether the latest post or new page, needs to be seamless and enjoyable–the tooling should aid creativity rather than get in the way. Blocks with all of their variations, design tools, and transforms should make you feel empowered. To make sure of that, some extra effort was put into making the simple act of writing better with new keyboard shortcuts, improved pasting reliability, smoother list merging, and more:

*   [List View: Allow Escape key to deselect blocks if blocks are selected](https://github.com/WordPress/gutenberg/pull/48708#top) to make it easier to purely preview your content without any block selection. 
*   [List View: Add keyboard shortcut](https://github.com/WordPress/gutenberg/pull/53559) for duplicating blocks.
*   [List Block: merge consecutive lists](https://github.com/WordPress/gutenberg/pull/52995) rather than keeping them as separate blocks.
*   [Link Control: Add “Open in new tab” control into the link preview](https://github.com/WordPress/gutenberg/pull/53566), making it easier to turn on and off that option.
*   Fix broken flows on Safari, including ArrowUp functionality in an empty paragraph ([53341](https://github.com/WordPress/gutenberg/pull/53341)) and multi-selection upon shift plus click ([53440](https://github.com/WordPress/gutenberg/pull/53440)).
*   [Avoid merging paragraphs into a Columns block](https://github.com/WordPress/gutenberg/pull/53508) when trying to delete a paragraph that’s preceded by a Columns block.
*   [Verse: enable the ability to exit the block](https://github.com/WordPress/gutenberg/pull/53332) upon hitting enter three times.

Outside of these individual changes, there’s a new toolbar experience for the Navigation, List, and Quote blocks. Each of these blocks have built-in child blocks and rather than having the toolbars for each child block visible, they are now seamlessly attached to the overall parent blocks. This both helps prevent toolbars from blocking other pieces of content, like a different list item than the one selected and provides a more organized editing experience where you always know where your tooling options are. 

**Visuals:** 

*   [Demo](https://drive.google.com/file/d/1kRERK33mHdJ8Y5R6-YI0fSMRw9l9H6iS/view?usp=drive_link) of captured toolbars with list, quote, and navigation blocks. 
*   [Demo](https://drive.google.com/file/d/1M_dfwUjWjWjPZpHtMdwCRA4LTnekwRis/view?usp=drive_link) of merging lists, duplicating blocks, and deselecting blocks.
*   [Captured toolbars screenshot](https://drive.google.com/file/d/1UAH3AHBCjGCOz9n9gvCPMArJMx_lIBpB/view?usp=drive_link).
*   [Before/after of open in new tab option in Link Preview screenshot](https://drive.google.com/file/d/18RwcHip5zVDzx7sGL1Z4Uq0Ouyrg9Hhk/view?usp=drive_link). 

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** 

*   [Core Editor Improvement: Ensuring Excellence in the Writing Experience](https://make.wordpress.org/core/2023/10/05/core-editor-improvement-ensuring-excellence-in-the-writing-experience/)
*   Tracking issue for writing experience improvements ([53305](https://github.com/WordPress/gutenberg/issues/53305)).
*   Captured toolbars for Navigation, List, and Quote blocks. ([#53699](https://github.com/WordPress/gutenberg/pull/53699), [#53697](https://github.com/WordPress/gutenberg/pull/53697)).
