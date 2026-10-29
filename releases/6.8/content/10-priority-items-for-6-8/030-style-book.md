---
title: Style Book
slug: style-book
tags: [theme author, site admin]
---

The Style Book provides a comprehensive overview of your site’s colors, typography, and block styles in an organized layout. Each block example and style group is labeled, making it easy to preview and understand your theme’s current design settings.  

> Think of it as if your theme threw a party, and all the design elements showed up wearing name tags. 😀
>
> _Ramon Dodd, release lead of [Gutenberg 19.9](https://make.wordpress.org/core/2024/12/18/whats-new-in-gutenberg-19-9-19-december/)_ 

The Style Book can be accessed in two ways. The first option is via the Styles menu item in the left sidebar. The second option is available when editing theme elements via the right Styles sidebar. This was already available in WordPress 6.7. 

With WordPress 6.8, opening the Style Book from the left sidebar **Styles** menu shows subsets of blocks and makes them available for site wide editing. 

When you click on **Typography** you can preview all text-related blocks, and adjust options and settings. You can preview and modify specific blocks via the **Blocks** option. 

The Style Book also received some performance improvements to ensure a more fluid user experience. 

*   Give the Style Book its own route so it can be linked to directly ([67811](https://github.com/WordPress/gutenberg/pull/67811)).
*   Scroll to top at the styles root ([67605](https://github.com/WordPress/gutenberg/pull/67605)).
*   Try splitting the Style Book into sections ([68071](https://github.com/WordPress/gutenberg/pull/68071)).

<figure class="wp-block-jetpack-videopress jetpack-videopress-player" style=""><div class="jetpack-videopress-player__wrapper"><iframe loading="lazy" title="VideoPress Video Player" aria-label="VideoPress Video Player" width="500" height="288" src="https://videopress.com/embed/Bx4txWcn?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" frameborder="0" allowfullscreen="" data-resize-to-parent="true" allow="clipboard-write; presentation"></iframe><script src="https://v0.wordpress.com/js/next/videopress-iframe.js?m=1770107250"></script></div></figure>

For classic themes that support the Style Book, site patterns have been relocated to **Appearance > Design > Patterns**, consolidating all design-related functionality from the Site Editor into one place. Previously, patterns were listed under **Appearance > Patterns**.

Support is available for classic themes that either support editor styles via add\_theme\_support( ‘editor-styles’ ) or have a theme.json file ([66851)](https://github.com/WordPress/gutenberg/pull/66851).
