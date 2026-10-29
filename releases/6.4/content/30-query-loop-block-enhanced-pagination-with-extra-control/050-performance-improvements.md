---
title: Performance improvements
slug: performance-improvements
tags: []
---

Overall, 6.4 includes various performance-related updates across a wide range of focuses, some big and some small. Noteworthy call outs include: [improvements to template loading performance](https://core.trac.wordpress.org/query?focuses=~performance&component=Themes&milestone=6.4) for Block Themes and Classic Themes, [usage of the new script loading strategies “defer” and “async”](https://core.trac.wordpress.org/query?focuses=~javascript+performance&milestone=6.4) in core, blocks, and themes, additional enhancements to [optimize image loading performance](https://core.trac.wordpress.org/query?focuses=~performance&component=Media&milestone=6.4&order=priority), and new functions to optimize the use of [autoloaded options](https://core.trac.wordpress.org/query?focuses=~performance&component=Options%2C+Meta+APIs&component=Database&milestone=6.4). Here are a few more to dig into: 

*   Bundled Theme: Implement the\_header\_image\_tag function for enhanced compatibility for older core themes ([58675](https://core.trac.wordpress.org/ticket/58675))
*   Bundled Theme: Add missing dimension attributes to images in Twenty Twenty-Two patterns ([59256](https://core.trac.wordpress.org/ticket/59256)).
*   Bundled Theme: Incorporate script loading strategies in bundled themes ([59316](https://core.trac.wordpress.org/ticket/59316)).
*   Comments: Delay loading comment-reply script with async loading strategy ([58870](https://core.trac.wordpress.org/ticket/58870)).
*   Editor: Introduce get\_block\_asset\_url Utility Function ([58525](https://core.trac.wordpress.org/ticket/58525)).
*   General: Update wp\_register\_script() calls in core to use new function signature ([58634](https://core.trac.wordpress.org/ticket/58634)). 
*   Media: Enhance wp\_get\_loading\_optimization\_attributes() to support arbitrary context values ([58894](https://core.trac.wordpress.org/ticket/58894)).
*   Media: Introduce filters to customize the results from wp\_get\_loading\_optimization\_attributes() ([58893](https://core.trac.wordpress.org/ticket/58893)).
*   Options, Meta APIs: Introduce prime\_options() to load multiple options with a single database request ([58962](https://core.trac.wordpress.org/ticket/58962)).
*   Options, Meta APIs: Introduce wp\_set\_option\_autoload\_values() ([58964](https://core.trac.wordpress.org/ticket/58964)).
*   Options, Meta APIs: Optimize get\_option by relocating notoptions cache lookup ([58277](https://core.trac.wordpress.org/ticket/58277)).
*   Plugins: Move the load of \`array\_keys\` to a different level in the \`WP\_Hook\` class ([58458](https://core.trac.wordpress.org/ticket/58458)).
*   Posts, Post Types: Avoid unnecessarily parsing blocks twice in wp\_trim\_excerpt(). ([58682](https://core.trac.wordpress.org/ticket/58682)).
*   Query: Use split queries in WP\_Query if persistent object caching is enabled ([57296](https://core.trac.wordpress.org/ticket/57296)).
*   REST API: Avoid unnecessarily preparing item links REST API index ([57902](https://core.trac.wordpress.org/ticket/57902)).
*   Taxonomy: Introduce ‘cache\_results’ parameter to WP\_Term\_Query for bypassing query caching ([52710](https://core.trac.wordpress.org/ticket/52710)).
*   Themes: Remove unnecessary check if file exists in the theme functions ([59279](https://core.trac.wordpress.org/ticket/59279)). 
*   Themes: Improve performance of get\_block\_theme\_folders function ([58319](https://core.trac.wordpress.org/ticket/58319))

For a full list from trac, [please view this trac query.](https://core.trac.wordpress.org/query?status=closed&focuses=~performance&milestone=6.4&col=id&col=summary&col=status&col=focuses&col=owner&col=type&col=priority&order=priority)

**Key Make Posts/GitHub/Trac Issue(s):** [Improvements to Template Loading in WordPress 6.4](https://make.wordpress.org/core/2023/10/17/improvements-to-template-loading-in-wordpress-6-4/), [Improvements to Object Caching in WordPress 6.4](https://make.wordpress.org/core/2023/10/17/improvements-to-object-caching-in-wordpress-6-4/).
