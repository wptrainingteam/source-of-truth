---
title: Design tools
slug: design-tools
tags: []
---

#### Box shadow: add to block settings and add to more blocks [theme author]

Box shadow support is now available on individual blocks when box shadow support is enabled under a Shadow panel in block settings under “Border & Shadow” or just “Shadow” if only shadows are enabled, making it easier to find and use. Along with buttons, Column, Columns, and Images have box shadow support added. The shadow presets from Core are disabled by default but there are five styles you can opt into as well as the option to add your own via theme.json.

**Visuals:** [demo](https://drive.google.com/file/d/1NJ46ePbcgInsT-XQgmTxw-mBODgdLK3N/view?usp=drive_link) of setting different box shadow options for individual buttons

**Adoption approach:** Support needs to be opted into via theme.json.

```
{    "settings": {        "shadow": {"defaultPresets": true,        }   }}
```

[Here’s information](https://developer.wordpress.org/news/2023/01/12/using-the-box-shadow-feature-for-themes/) about how to add your own custom shadow styles. 

**Key Make Posts/GitHub/Trac Issue(s):** Shadow: enable shadow for more blocks ([57103](https://github.com/WordPress/gutenberg/issues/57103)), Add effects/box shadow tools to block inspector ([57654](https://github.com/WordPress/gutenberg/pull/57654)), Add shadow support for column, columns and image ([57982](https://github.com/WordPress/gutenberg/pull/57982)).

#### Group block: Adjust Background Size, set repeat options, and set focal point [theme author]

With background image options added to the Group block in WordPress 6.4, this release adds controls to the background image to adjust size, toggle repetition, and set the focal point. These options allow you to set the background image to “Cover” (default), or to “Contain”, keeping the aspect ratio intact, and when set to repeat it only repeats in one dimension. With the “Fixed” option, you can set a custom display width, and by selecting the repeat feature, the image repeats over the canvas size of the block. These controls are hidden by default but are powerful for any tinkerers, pattern creators, or designers. 

**Visuals:** [demo](https://drive.google.com/file/d/1f1cZnzH7c__placGfiBK2PiA3v6a9e7R/view?usp=sharing) of setting various sizing and repeat options.

**Key Make Posts/GitHub/Trac Issue(s):** Add backgroundSize and repeat features ([57005](https://github.com/WordPress/gutenberg/pull/57005))

#### Cover block: Set aspect ratio 

Aspect ratio support has been added to the Cover block, allowing you to go beyond minHeight support to easily set to pre-defined aspect ratios. You can control this option globally for all Cover blocks or set the control for each individual Cover block as you’d like. 

**Visuals:** [demo](https://drive.google.com/file/d/1Z-I6Y0brpAYBx-EXiPpJBgiPKiAVXDVh/view?usp=drive_link) of setting aspect ratio for cover block.

**Key Make Posts/GitHub/Trac Issue(s):** Dimensions: add aspect ratio block support ([56897](https://github.com/WordPress/gutenberg/pull/56897)) 

#### Cover block: overlay color automatically set upon adding background image

The Cover Block got a bit smarter by setting an Overlay color based on the background image that’s been added. The Overlay color is extracted from the image via code magic and can be updated afterwards to your liking.

**Visuals:** [demo](https://drive.google.com/file/d/1mwC61WV8PYpiUexpZtZSuuCdqOcLy2pl/view?usp=drive_link) showing the feature.

**Key Make Posts/GitHub/Trac Issue(s):** Set custom color when applying background image ([54054](https://github.com/WordPress/gutenberg/pull/54054))

#### Other supports

Here’s a list of more general and smaller design tools and additions that continue to unlock more possibilities:

*   Login/out: Add spacing support ([45147](https://github.com/WordPress/gutenberg/pull/45147)).
*   Quote block: Add block gap support ([56064](https://github.com/WordPress/gutenberg/pull/56064)).
*   List block: Adjust the dimensions (margin and padding) of individual list-item blocks ([55874](https://github.com/WordPress/gutenberg/pull/55874)).
*   Pullquote Block: Add padding and margin support. ([45731](https://github.com/WordPress/gutenberg/pull/45731))
