---
title: Loading state improvements and animations for the Site Editor
slug: loading-state-improvements-and-animations-for-the-site-edito
tags: []
---

Rather than loading the Site Editor in parts, the Site Editor is now loaded behind the scenes and displayed once it’s finished loading. While subtle to some, these improvements help make entering the Site Editor less jarring and more cohesive, showing a fully loaded state before you start interacting with your content. Alongside the improvements to the loading state, [additional animation related changes](https://github.com/WordPress/gutenberg/pull/48575) and general fixes, like [removing a screen flash upon deleting templates and template parts](https://github.com/WordPress/gutenberg/pull/48449), offer a refined, calmer workflow. 

**Visuals:** [before video](https://drive.google.com/file/d/1L2XsA76qaPtxfw_ODQFVtsANPnmuazVS/view?usp=drive_link) and [after video](https://drive.google.com/file/d/1Kqdaav5v0xQxO3bXNM9xofEXcFlMr4fy/view?usp=drive_link) with these changes. 

**Key Make Posts/GitHub/Trac Issue(s):**  

*   Fix screen flash when deleting templates in templates list. ([48449](https://github.com/WordPress/gutenberg/pull/48449))
*   Animate the site icon element between view and edit in the site editor. ([48886](https://github.com/WordPress/gutenberg/pull/48886))
*   Improve Site Editor loading experience ([50222](https://github.com/WordPress/gutenberg/pull/50222))
*   [Core Editor Improvement: Smoother Site Editing](https://make.wordpress.org/core/2023/05/22/core-editor-improvement-smoother-site-editing/)
