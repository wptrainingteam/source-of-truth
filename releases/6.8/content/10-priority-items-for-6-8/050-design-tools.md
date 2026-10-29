---
title: Design Tools
slug: design-tools
tags: [end user, theme author, site admin]
---

Design Tools offers increasingly refined tools for visual customization. When it comes to border and spacing support, the block editor itself provides granular controls within individual blocks, allowing users to define border widths, styles, colors, and radii, as well as precise padding and margin adjustments. These controls facilitate the creation of visually distinct elements and well-structured layouts. The work for WordPress [6.6](https://make.wordpress.org/core/2024/06/20/roster-of-design-tools-per-block-wordpress-6-6-edition/) and [6.7](https://make.wordpress.org/core/2024/10/17/roster-of-design-tools-per-block-wordpress-6-6-edition-2/) was continued for WordPress 6.8 to provide all design tools to all blocks, where possible. 

In this release, the following blocks received border support

*   Comments ([66354](https://github.com/WordPress/gutenberg/pull/66354)),
*   Comments Link ([68450](https://github.com/WordPress/gutenberg/pull/68450)),
*   Comments Count ([68223](https://github.com/WordPress/gutenberg/pull/68223)),
*   Latest Posts ([66353](https://github.com/WordPress/gutenberg/pull/66353)),
*   Page List, also received color and spacing support ([66385](https://github.com/WordPress/gutenberg/pull/66385)),
*   Content, also spacing support ([66366](https://github.com/WordPress/gutenberg/pull/66366)),
*   RSS, also spacing support ([66411](https://github.com/WordPress/gutenberg/pull/66411)),
*   Archives, also color support ([63400](https://github.com/WordPress/gutenberg/pull/63400)), ([68685](https://github.com/WordPress/gutenberg/pull/68685)), and
*   Query Total ([68323](https://github.com/WordPress/gutenberg/pull/68323))

Beyond those, the Category block supports color options as well ([68686](https://github.com/WordPress/gutenberg/pull/68686)).

For the Post Content block, the color support via the sidebar Design Tools has been brought up to feature parity with the options available via theme.json. Now users and designers can adjust colors for all heading levels in addition to text, background, and link ([67783](https://github.com/WordPress/gutenberg/pull/67783)).

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="626" data-attachment-id="38049" data-permalink="https://gutenbergtimes.com/source-of-truth-wordpress-6-8/image-44/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-5.png?fit=1108%2C677&amp;ssl=1" data-orig-size="1108,677" data-comments-opened="1" data-image-title="image" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-5.png?fit=1024%2C626&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-5.png?resize=1024%2C626&amp;ssl=1" alt="post content block not has additional text color options. " class="wp-image-38049" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-5.png?resize=1024%2C626&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-5.png?resize=300%2C183&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-5.png?resize=768%2C469&amp;ssl=1 768w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-5.png?resize=1080%2C660&amp;ssl=1 1080w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-5.png?w=1108&amp;ssl=1 1108w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

Another user experience improvement can be found in the list of fonts: Each font family is now previewed in the font picker dropdown and gives users a better indication as to what the font will look like ([67118](https://github.com/WordPress/gutenberg/pull/67118)).

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="512" data-attachment-id="38047" data-permalink="https://gutenbergtimes.com/source-of-truth-wordpress-6-8/image-43/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-4.png?fit=1024%2C512&amp;ssl=1" data-orig-size="1024,512" data-comments-opened="1" data-image-title="image" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-4.png?fit=1024%2C512&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-4.png?resize=1024%2C512&amp;ssl=1" alt="preview of fonts in drop down" class="wp-image-38047" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-4.png?w=1024&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-4.png?resize=300%2C150&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/03/image-4.png?resize=768%2C384&amp;ssl=1 768w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

The [Roster of design tools per block (WordPress 6.8 edition)](https://make.wordpress.org/core/?p=117323&preview=1&_ppp=6a618f26dc) gives you a complete overview of the available Design Tools per core block.
