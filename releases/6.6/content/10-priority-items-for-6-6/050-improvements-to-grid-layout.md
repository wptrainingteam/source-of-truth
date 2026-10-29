---
title: Improvements to Grid Layout
slug: improvements-to-grid-layout
tags: []
---

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/qdh1hKAuXSQ?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

Grid is a new layout variation for the Group block that allows you to display the blocks within the group as a grid, offering new flexibility and ease of use with visual resizing options. There are two options for the Grid layout:

*   “Auto” generates the grid rows and columns automatically using a minimum width for each item. 
*   “Manual” allows specifying the exact number of columns.

You can resize grid children either manually by adding a specific number of rows/columns by changing the “Column Span” and “Row Span” settings under Styles > Dimensions in the block inspector. You can also drag to resize visually by selecting each individual child block and using the drag handles to change items to your liking. As a bonus, to ensure an easy to use experience, the outlines of the visualizer will match the text color of the blocks. Of note, any block can use this new grid layout thanks to the [supports key in block.json](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/#layout). 

**Visuals:** [simple demo](https://drive.google.com/file/d/13a7nIiE-nI5yjaDylfinnkoerstnZLzz/view?usp=drive_link) of grid layout, [design forward demo](https://drive.google.com/file/d/1RPiveQB1Kz-KAoAPxMhUu77yc91F8VTz/view?usp=drive_link) of grid layout, [public YouTube video](https://youtu.be/qdh1hKAuXSQ) with grid layout included.
**Adoption approach:** any block can use this new grid layout thanks to the [supports key in block.json](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/#layout). For the Group block, this functionality is added automatically.
**Key Make Posts/GitHub/Trac Issue(s):** [Dev note](https://make.wordpress.org/core/2024/06/18/grid-layout-type/) on grid layout type, improvements to grid layout and subgrid support ([57478](https://github.com/WordPress/gutenberg/issues/57478)), [Core Editor Improvement: Upgrade your designs](https://make.wordpress.org/core/2024/05/09/core-editor-improvement-upgrade-your-designs/).
