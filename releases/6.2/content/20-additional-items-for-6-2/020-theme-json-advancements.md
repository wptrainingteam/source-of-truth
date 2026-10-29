---
title: Theme.json advancements
slug: theme-json-advancements
tags: []
---

**Use four shadow presets or define your own with theme.json [theme author] [end user]**

While using a block theme, there are now four shadow presets folks can choose from by default, with the option for new and custom to be defined from the theme via theme.json. This system works similarly to colors, gradients, and other opt-in design tools. The following come by default for folks to use:

*   Natural
*   Crisp
*   Sharp
*   Soft

**Visuals:** [focused video showing shadow preset options](https://drive.google.com/file/d/1SB9h-WcPqEJstj3JyKIW1qjG94bYVHK3/view?usp=sharing) & [longer video showing a more comprehensive flow of finding and using the options](https://drive.google.com/file/d/1K4H9Ah6io-vHLxdATwFHaLJutOQSvjtf/view?usp=share_link).

**Adoption approach:** Opt in with [developer documentation](https://developer.wordpress.org/news/2023/01/using-the-box-shadow-feature-for-themes/) to learn more. 

**Key Make Posts/GitHub/Trac Issue(s):** 

*   Add shadow presets support for theme.json ([46813](https://github.com/WordPress/gutenberg/pull/46813))
*   [Developer documentation](https://developer.wordpress.org/news/2023/01/using-the-box-shadow-feature-for-themes/) explaining how to use the feature for themes. 
*   Add shadow presets and UI tools to Styles ([46502](https://github.com/WordPress/gutenberg/pull/46502)). 

**Allow object type for theme.json schema [theme author]**

This release includes support for objects, in addition to strings, for style properties in theme.json. This allows you to do things like the following, making it easier to have a cohesive design system with a set of values:

```
"elements": {

"button": {

"color": {

"background": {

"ref": "styles.color.text"

},

"text": {

"ref": "styles.color.background"

}

}

}

}
```

**Key Make Posts/GitHub/Trac Issue(s):** Allow object type on style properties. ([45897](https://github.com/WordPress/gutenberg/pull/45897))

**Add configurable settings for minimum font size to theme.json [theme author]**

“Following on from the fluid typography settings that were introduced in [WordPress 6.1](https://make.wordpress.org/core/2022/10/03/fluid-font-sizes-in-wordpress-6-1/), WordPress 6.1.1 introduced a hard-coded minimum for the fluid typography rules of 14px, to ensure that the generated typography rules would not result in font sizes that were too smaller for readability in narrower viewports.

In WordPress 6.2, themes can define their own minimum font size for fluid typography rules. Depending on the theme’s requirements, sometimes the desired minimum font size value might be greater or less than the provided default of 14px. When used, the minimum font size will result in any font-sizes used that are equal to or less than the minimum being output directly as that font size. For font sizes larger than the minimum font size, the minimum font size will be used as the floor of the fluid typography calculated rule.” – [excerpt from a dev note draft](https://github.com/WordPress/gutenberg/pull/42489#issuecomment-1425032620)

**Adoption approach:** opt in, both for fluid typography and configurable settings. [More information here for adoption steps](https://github.com/WordPress/gutenberg/pull/42489#issuecomment-1425032620).

**Key Make Posts/GitHub/Trac Issue(s):** add configurable settings for minimum font size to theme.json ([42489](https://github.com/WordPress/gutenberg/pull/42489)).
