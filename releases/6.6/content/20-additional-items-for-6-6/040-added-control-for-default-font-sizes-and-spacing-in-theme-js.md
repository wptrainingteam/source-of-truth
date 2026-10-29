---
title: Added control for default font sizes and spacing in theme.json & incrementing theme.json to v3
slug: added-control-for-default-font-sizes-and-spacing-in-theme-js
tags: [theme author]
---

The ability to provide defaultFontSizes was added to theme.json giving themers more control over which font size options are available and providing consistency in managing presets (color, gradient, etc). Thanks to this effort, defaultFontSizes can be set to false in theme.json to disable showing the default font sizes supplied from Core too! 

For further consistency, a new defaultSpacingSizes has been added, giving control for showing default spacing sizes and preventing those defaults from being overridden. The default spacingSizes slugs are: 20, 30, 40, 50, 60, 70, and 80.

*   When defaultSpacingSizes is true it will show the default spacing sizes and prevent them from being overridden by the theme.
*   When defaultSpacingSizes is false it will hide the default spacing sizes and allow the theme to use the default slugs.

In theme.json v3, by default defaultFontSizes and defaultSpacingSizes are both set to true. This is to be consistent with how other default\* options work such as settings.color.defaultPalette.

In theme.json v2, defaultFontSizes and defaultSpacingSizes aren’t a valid key, but are treated as false where it would be used when a theme has font sizes or spacing sizes defined for backwards compatibility of generated CSS. Because the default behavior of overriding font sizes and spacing has changed, this has caused the version of theme.json to increment to version 3.

**Adoption approach:** To learn more, [explore the Theme.json v3 developer documentation](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/#typography) and the [theme.json how to guide](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/) for examples.
**Key Make Posts/GitHub/Trac Issue(s):** Add defaultFontSizes theme.json ([58409](https://github.com/WordPress/gutenberg/pull/58409)), Add defaultSpacingSize option ([61842](https://github.com/WordPress/gutenberg/pull/61842))
