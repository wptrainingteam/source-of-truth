---
title: Navigation Overlays and more
slug: navigation-overlays-and-more
tags: [theme builder, plugin author, site admin]
---

Navigation blocks now have customizable overlays and give user full control over mobile hamburger menus. A prominent **Create overlay** button in the side bar guides you through the setup, providing a selection of patterns to achieve various designs for your overlay. WordPress 7.0 comes with multiple built-in patterns including centered navigation, accent backgrounds, and black backgrounds. New blocks default to “always” showing overlays. The Navigation block sidebar section also shows a preview of the selected overlay template parts. You can also access the list of Navigation Overlays via **Appearance > Editor > Patterns > Template Parts.**

*   On GitHub you’ll find a list of all the [Navigation Overlay enhancements](https://github.com/WordPress/gutenberg/issues?q=state%3Aclosed%20label%3A%22%5BFeature%5D%20Navigation%20Overlays%22%20label%3A%22%5BType%5D%20Enhancement%22).
*   The dev note [Customizable Navigation Overlays in WordPress 7.0](https://make.wordpress.org/core/2026/03/04/customisable-navigation-overlays-in-wordpress-7-0/) has everything you need to know.

<figure class="wp-block-image aligncenter size-full is-resized" id="block-697b3ef0-955a-4413-82a1-bf3bb5f25f68"><img data-recalc-dims="1" loading="lazy" decoding="async" width="589" height="607" data-attachment-id="45002" data-permalink="https://gutenbergtimes.com/wordpress-7-0-source-of-truth/create-overlay/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Create-Overlay.png?fit=589%2C607&amp;ssl=1" data-orig-size="589,607" data-comments-opened="1" data-image-title="Create-Overlay" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Create-Overlay.png?fit=589%2C607&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Create-Overlay.png?resize=589%2C607&amp;ssl=1" alt="" class="wp-image-45002" style="aspect-ratio:0.9703564427731328;width:541px;height:auto" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Create-Overlay.png?w=589&amp;ssl=1 589w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Create-Overlay.png?resize=291%2C300&amp;ssl=1 291w" sizes="auto, (max-width: 589px) 100vw, 589px"></figure>

To make it easier for users to create custom overlays for their mobile navigation, four new patterns are now available for the navigation overlay template parts:

*   [Overlay with black background](https://github.com/WordPress/gutenberg/pull/74847)
*   [Overlay with accent background](https://github.com/WordPress/gutenberg/pull/74849)
*   [Centered navigation with info](https://github.com/WordPress/gutenberg/pull/74862)
*   [Centered navigation](https://github.com/WordPress/gutenberg/pull/74861)

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="681" height="1023" data-attachment-id="45003" data-permalink="https://gutenbergtimes.com/wordpress-7-0-source-of-truth/navigation-overlay-patterns/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/navigation-overlay-patterns.png?fit=681%2C1023&amp;ssl=1" data-orig-size="681,1023" data-comments-opened="1" data-image-title="navigation-overlay-patterns" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/navigation-overlay-patterns.png?fit=681%2C1023&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/navigation-overlay-patterns.png?resize=681%2C1023&amp;ssl=1" alt="" class="wp-image-45003" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/navigation-overlay-patterns.png?w=681&amp;ssl=1 681w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/navigation-overlay-patterns.png?resize=200%2C300&amp;ssl=1 200w" sizes="auto, (max-width: 681px) 100vw, 681px"></figure>

*   **Submenus: Always visible option**: Users can now add navigation blocks to their overlays and toggle if they’d like to have the submenus always visible or not. ([74653](https://github.com/WordPress/gutenberg/pull/74653))
*   **Page Creation in Navigation**: Create pages directly from the Navigation block with helpful Snackbar notices and improved parent page search using relevance matching [(72627](https://github.com/WordPress/gutenberg/pull/72627), [73836](https://github.com/WordPress/gutenberg/pull/73836)).
