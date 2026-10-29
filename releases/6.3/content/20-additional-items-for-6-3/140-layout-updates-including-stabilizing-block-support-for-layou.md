---
title: "Layout updates, including stabilizing block support for layout, grid layout, and more"
slug: layout-updates-including-stabilizing-block-support-for-layou
tags: [theme author, plugin author]
---

This was pulled and summarized from a [dev note of these changes](https://make.wordpress.org/core/2023/07/14/layout-updates-in-the-editor-for-wordpress-6-3/).

*   Block support for layout has now graduated from experimental to stable. Everything works the same; the only difference is that when adding block support for layout in block.json, its name is now layout instead of \_\_experimentalLayout.
*   The CSS output for the margin styles of children of constrained and flow (default) layout containers has changed. The generic rules used to have a specificity of 0,1,0 for all blocks; they have now changed to 0,0,0 for all blocks with an extra 0,2,0 rule applied only to the first and last blocks in the container.
*   A new classname is added to the inner wrapper of all blocks with layout, comprised of block classname + layout classname, e.g.: .wp-block-cover-is-layout-constrained.
*   The layout definitions object, which stores base styles for the layout block support, has been removed from the core theme.json (settings.layout.definitions) and moved into the internal layout support files. 
*   A new grid layout type is available, based on CSS Grid, and defaulting to an auto-fill approach with configurable column width. To create a block with a grid layout, the following needs to be added in the supports object of the block’s block.json.

**Adoption approach:** Please review [the dev note for more details](https://make.wordpress.org/core/2023/07/14/layout-updates-in-the-editor-for-wordpress-6-3/).

**Key Make Posts/GitHub/Trac Issue(s):** [Layout updates in the editor for 6.3](https://make.wordpress.org/core/2023/07/14/layout-updates-in-the-editor-for-wordpress-6-3/)
