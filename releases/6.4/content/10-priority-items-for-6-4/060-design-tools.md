---
title: Design tools
slug: design-tools
tags: []
---

#### Add aspect ratio to the Image block’s placeholder [theme author]

After adding aspect ratio controls to the Featured Image block in WordPress 6.3, these same controls have been added to the Image block’s placeholder, providing more control for wireframe style patterns that provide a layout for folks to then fill in. 

**Visuals:** [demo](https://drive.google.com/file/d/1akFEaIBsb2xc2Ufzu45hznCSw12jtwSl/view?usp=drive_link) of both setting an aspect ratio on the placeholder and using it within a wireframe pattern.

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** Add aspect ratio to image placeholder ([54216](https://github.com/WordPress/gutenberg/pull/54216))

#### Set specific styling for Button and Headings in Group and Columns blocks [theme author] [site admin]

As part of a broader effort to have section specific theme.json, allowing for more fine tuned control over styling settings on a more granular level, Button and Heading element support has been added to both Group and Columns block. This starts down the path of larger section specific controlled styling by allowing you to define the styling for Buttons and Headings added within a Group or Columns block. 

**Visuals:** setting button styling for Group block [demo](https://drive.google.com/file/d/1apdep8AtIwTmidLzOIgvMK3uZ4cWe05h/view?usp=drive_link). 

**Adoption approach:** N/A tools are baked in. 

**Key Make Posts/GitHub/Trac Issue(s):** Design Tools: Add block instance elements support for buttons and headings ([53667](https://github.com/WordPress/gutenberg/pull/53667)), Columns: Adopt button and heading element colors ([54104](https://github.com/WordPress/gutenberg/pull/54104))

#### Add background images to Group blocks

Images are a powerful tool on any website for added flare and design optionality. To further how images can be used, background image support has been added to Group blocks, making this already powerful block even more so. 

**Visuals:** [demo](https://drive.google.com/file/d/1uMBVp8CiCpZ3o7RYFetr6EkJQ7eKKyJ_/view?usp=drive_link) of adding a grouping, a Heading block, and adding a background image

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** Add background image support to Group block ([53934](https://github.com/WordPress/gutenberg/pull/53934))

#### Keep alignment settings when creating synced patterns

An important bug has been addressed–when creating a synced pattern with wide, full, left, or right-aligned blocks, those layout and alignment settings will now be preserved. Previously, upon conversion to a Pattern, a full-width pattern would suddenly lose its width setting. This helps provide smooth editing and pattern creation. 

**Visuals:** [demo](https://drive.google.com/file/d/1sTinCmIZSL7btz4rwYWmc_1l-gp3hibR/view?usp=drive_link) of a synced pattern creation with full-width preserved 

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s)**: Patterns: Apply layout and alignment to synced patterns in the editor ([54416](https://github.com/WordPress/gutenberg/pull/54416))

#### Add vertical text orientation support [end user] [theme author]

Themes can now opt into a Text Orientation feature (available via a block’s Typography settings panel) that allows text to be written vertically. [This new feature is part of a larger effort](https://github.com/WordPress/gutenberg/issues/50319) to add full support of both vertically written languages and to add more decorative design options. 

**Visuals:** [image](https://drive.google.com/file/d/1P8owR6or_8DtomNr8k7hizyoN6CiiqwK/view?usp=drive_link).

**Adoption approach:** must opt in with a theme using theme.json by adding in theme.json under settings > typography writingMode: true.From there, you need to add support for specific blocks. For example, to add support for the Paragraph block, you would go to Styles > Blocks > and add the following: 

“core/paragraph”: {

“typography”: {

“writingMode”: “vertical-rl”

}

}

**Key Make Posts/GitHub/Trac Issue(s):** Add Typography: text orientation ([50822](https://github.com/WordPress/gutenberg/pull/50822)), 

#### Add buttons to the Navigation block

The common design pattern of having buttons in one’s navigation is now possible without any custom CSS or other workarounds, as buttons are now listed as part of allowed blocks in the Navigation block. This helps address some long standing limitations of the navigation block, particularly when it comes to more complex menus or mega menus.  

**Visuals:** [demo](https://drive.google.com/file/d/1VnCyVCAXhetNSzIiXuOf6TEQHb-HAzEr/view?usp=drive_link) of adding a button to a menu.

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** Navigation block: add buttons to list of allowed blocks ([53966](https://github.com/WordPress/gutenberg/pull/53966))
