---
title: "Icons now inherit color, and the Icons API takes shape"
slug: icons-now-inherit-color-and-the-icons-api-takes-shape
tags: [theme builder, plugin author, developer, enterprise]
---

WordPress 7.0 shipped a built-in set of SVG icons for the block editor and the Icon block. With WordPress 7.1, this grows into a proper, public API: plugins and themes can register their own icons, group them into collections, render them on the server, and read them over the REST API.

For content creators, the most visible change is the Icon block’s picker: it now [groups icons by collection](https://github.com/WordPress/gutenberg/pull/79681), with a tab per collection plus an “All” tab, and your search query carries over as you switch tabs. Custom icons from plugins and themes appear right alongside the core set. The block itself picked up several refinements: it [inserts a default icon](https://github.com/WordPress/gutenberg/pull/79111) so you’re never staring at an empty placeholder, offers [flip and rotate controls](https://github.com/WordPress/gutenberg/pull/77017) [in the toolbar](https://github.com/WordPress/gutenberg/pull/79192), and shows [text and background color controls by default](https://github.com/WordPress/gutenberg/pull/80251).

#### For developers: Registering more collections

For developers, the pieces come together on the PHP side: register a collection with wp\_register\_icon\_collection(), add icons with `wp_register_icon()` — from an inline SVG string or an .svg file — and [print any registered icon](https://github.com/WordPress/gutenberg/pull/78332) with wp\_get\_icon(), including size, CSS class, and an accessible label. Icon names get [strict validation](https://github.com/WordPress/gutenberg/pull/76079), the [registry’s register method is now public](https://github.com/WordPress/gutenberg/pull/80139), and REST API endpoints expose collections and icons to your own code. A dev note with full code examples is on its way to the Make Core blog.

One breaking change to flag: all 330 icons in @wordpress/icons v15 now declare [`fill="currentColor"`](https://github.com/WordPress/gutenberg/pull/79320), so icons inherit the surrounding text color by default. If you’ve been tinting icons with the CSS fill property, switch to color — it’s more reliable, since an icon may use fill, stroke, or both internally. If you register your own icons, add fill=”currentColor” to their <svg> element to get the same behavior.

The Dev Note [Registering and rendering SVG icons in WordPress 7.1](https://make.wordpress.org/core/2026/07/24/registering-and-rendering-svg-icons-in-wordpress-7-1/) holds all the details. 

Tracking: [SVG Icon API: Iteration for WordPress 7.1](https://github.com/WordPress/gutenberg/issues/75715) (#75715)

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="616" data-attachment-id="46329" data-permalink="https://gutenbergtimes.com/wordpress-7-1-source-of-truth/icons-block/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/icons-block.png?fit=1395%2C839&amp;ssl=1" data-orig-size="1395,839" data-comments-opened="1" data-image-title="icons-block" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/icons-block.png?fit=1024%2C616&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/icons-block.png?resize=1024%2C616&amp;ssl=1" alt="" class="wp-image-46329" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/icons-block.png?resize=1024%2C616&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/icons-block.png?resize=300%2C180&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/icons-block.png?resize=767%2C461&amp;ssl=1 767w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/icons-block.png?resize=1080%2C650&amp;ssl=1 1080w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/icons-block.png?w=1395&amp;ssl=1 1395w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>
