---
title: "Duotone updates, including global control within Styles and controls in block sidebar"
slug: duotone-updates-including-global-control-within-styles-and-c
tags: [end user, theme author]
---

Previously, you could only set a duotone filter globally by manually making changes within the theme.json file. Now, you can use the Styles interface to control blocks that support this feature, giving design control over every instance. When editing individual blocks, Duotone controls will be listed in the block sidebar settings, along with the block toolbar, to better surface the options available. 

Duotone presets are now stored as slug values, instead of hard-coded color values (i.e. [#FFFFFF](https://make.wordpress.org/core/tag/ffffff/)). The result is that using the preset means that Duotone options are no longer locked to a specific theme or theme variation. If you apply a Duotone option and then later change a theme to another that uses the same slug value, the new theme’s Duotone will now take effect. 

Finally, Duotone styles are now generated using the [WordPress Style Engine](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-style-engine/), meaning that CSS is generated as part of the block supports CSS — rather than inline. 

**Visuals:** [image of Duotone Styles interface](https://drive.google.com/file/d/1uy7CxgzfLew5XJbAWYifsGxeQvgP2kdB/view?usp=sharing)

**Key Make Posts/GitHub/Trac Issue(s):** Add Global Styles controls for blocks that support duotone ([48255](https://github.com/WordPress/gutenberg/pull/48255)), Use Duotone presets in block duotone attributes ([48318](https://github.com/WordPress/gutenberg/pull/48318)), Use the style engine to generate CSS for Duotone ([48281](https://github.com/WordPress/gutenberg/pull/48281)), Duotone controls in the block sidebar ([49838](https://href.li/?https://github.com/WordPress/gutenberg/pull/49838))
