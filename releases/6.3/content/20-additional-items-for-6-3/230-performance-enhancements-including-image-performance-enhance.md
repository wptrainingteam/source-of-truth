---
title: "Performance enhancements, including image performance enhancements"
slug: performance-enhancements-including-image-performance-enhance
tags: []
---

At a high level, this release includes more than 170 performance-related updates, including adding [defer and async support to the WP Scripts API](https://core.trac.wordpress.org/ticket/12009) and [fetchpriority support for images](https://core.trac.wordpress.org/ticket/58235). Optimizations were made to [block template resolution](https://github.com/WordPress/wordpress-develop/pull/4097) (with a 15% load time reduction for block themes), [image lazy-loading](https://core.trac.wordpress.org/ticket/58211), and the [emoji loader](https://core.trac.wordpress.org/ticket/58472), all of which benefit LCP performance. Support for PHP versions [8.0](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~php8+-php81+-php82&milestone=6.3&order=priority), [8.1](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~php81&milestone=6.3&order=priority), and [8.2](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~php82&milestone=6.3&order=priority) has continued to improve. 

Specifically for images enhancements, several changes improve load time performance for content with images. This impacts the [Largest Contentful Paint](https://web.dev/lcp/) metric (aka “LCP”). At a high level, the changes are as follows summarized from [a dev note on the topic](https://make.wordpress.org/core/2023/07/13/image-performance-enhancements-in-wordpress-6-3/):

*   WordPress now automatically adds the fetchpriority attribute with a value of “high” to the image it determines most likely to be the “LCP image”, i.e. the image that is the largest content element in the viewport. The attribute tells the browser to prioritize this image, even before it has computed the layout, which typically improves LCP by 5-10%. See the [original proposal post](https://make.wordpress.org/core/2023/05/02/proposal-for-enhancing-lcp-image-performance-with-fetchpriority/) for additional context.
*   Changes have been done to improve the automatic handling of lazy-loading via the loading attribute to more reliably detect when to omit the attribute from some images. This builds on efforts starting in WordPress 5.9 with the remaining issues fixed for 6.3. 

From the same dev note, please note that a new function wp\_get\_loading\_optimization\_attributes( string $tag\_name, array $attr, string $context ) is introduced in WordPress 6.3, which returns an associative array of additional attributes and their values. This provides a central place to get HTML attributes that potentially improve the load time performance of images. For now, the function can only return a fetchpriority or loading attribute (or neither if not applicable), though this may be enhanced with other performance-related attributes in the future. With the new function being used consistently anywhere images are rendered in WordPress core, support for customizing is also improved. As a result of this work too, a few existing functions are being deprecated as part of the WordPress 6.3 release:

*   `wp_get_loading_attr_default()` is superseded by the new function and should not be used anymore. 
*   `wp_img_tag_add_loading_attr()`, as this function is superseded by a new `wp_img_tag_add_loading_optimization_attrs()`, which also encompasses the fetchpriority enhancement. 

**Adoption approach**: [Read more in this dev note on image related performance improvements](https://make.wordpress.org/core/2023/07/13/image-performance-enhancements-in-wordpress-6-3/). 

**Key Make Posts/GitHub/Trac Issue(s):** 

*   Conditionally skip lazy-loading on images before the loop in classic themes ([58211](https://core.trac.wordpress.org/ticket/58211))
*   Improve clunky logic to inject \`loading\` attribute in the `get_the_post_thumbnail()` function ([58212](https://core.trac.wordpress.org/ticket/58212))
*   Increase default for `wp_omit_loading_attr_threshold` to 3 ([58213](https://core.trac.wordpress.org/ticket/58213))
*   WordPress puts “loading=lazy” on first image on archive page – wp\_get\_loading\_attr\_default bug ([56588](https://core.trac.wordpress.org/ticket/56588))
*   Featured images within post content cause lazy-loading logic to apply incorrectly ([58089](https://core.trac.wordpress.org/ticket/58089))
*   Images before main query loop are not counted towards lazy-loading threshold ([58635](https://core.trac.wordpress.org/ticket/58635))
*   Emoji loader script causes ~100ms long task ([58472](https://core.trac.wordpress.org/ticket/58472))
*   Improve get\_block\_templates performance ([4097](https://github.com/WordPress/wordpress-develop/pull/4097))
