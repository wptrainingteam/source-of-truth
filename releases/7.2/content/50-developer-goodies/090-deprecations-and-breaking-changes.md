---
title: Deprecations and breaking changes
slug: deprecations-and-breaking-changes
tags: []
flags: [check]
---

Test your plugins and themes against these before 7.2 is released:

* **Icons are stroke-based.** Core icons were redrawn as strokes, so setting `fill` no longer recolors them. Use CSS `color` instead ([#78812](https://github.com/WordPress/gutenberg/pull/78812), [#82754](https://github.com/WordPress/gutenberg/pull/82754)).
* **Deprecated components:** Animate ([#80931](https://github.com/WordPress/gutenberg/pull/80931)), Divider ([#83040](https://github.com/WordPress/gutenberg/pull/83040)), Elevation ([#83269](https://github.com/WordPress/gutenberg/pull/83269)), ResponsiveWrapper ([#83347](https://github.com/WordPress/gutenberg/pull/83347)), Scrollable ([#83273](https://github.com/WordPress/gutenberg/pull/83273)), `__experimentalSurface` ([#80943](https://github.com/WordPress/gutenberg/pull/80943)), Tip, and ZStack ([#83344](https://github.com/WordPress/gutenberg/pull/83344)) are deprecated and scheduled for removal in WordPress 7.4. `__experimentalView` now ignores its `css` prop, and the color pickers’ `asButtons` prop is replaced by `presentation`. The private Menu API is also deprecated in favor of the `@wordpress/ui` Menu ([#82947](https://github.com/WordPress/gutenberg/pull/82947)). See [Editor components updates in WordPress 7.2](https://make.wordpress.org/core/2026/11/10/editor-components-updates-in-wordpress-7-2/).
* **`@wordpress/reusable-blocks`** is now a no-op package ([#79186](https://github.com/WordPress/gutenberg/pull/79186)).
* **DataViews:** The RichText control moved from DataViews’ private exports to the editor package ([#81430](https://github.com/WordPress/gutenberg/pull/81430)).
* **Footnotes:** Footnote IDs now start with an `fn-` prefix. Update any CSS or links that target the old IDs ([#82398](https://github.com/WordPress/gutenberg/pull/82398)).
* **Block gap:** A block that doesn’t declare `blockGap` support is now treated as not supporting it ([#82401](https://github.com/WordPress/gutenberg/pull/82401)).
* **Cross-origin isolation:** The editor no longer adds `crossorigin` attributes to scripts, styles, audio, and video, which caused fatal errors on Chromium 137+ and broke media served from CDNs. `wp_start_cross_origin_isolation_output_buffer()` and `wp_add_crossorigin_attributes()` are deprecated, and the header is now sent by the new `wp_send_document_isolation_policy_header()` ([r64489](https://core.trac.wordpress.org/changeset/64489)).
* **CSS module class names:** Plugins that bundle their own copy of `@wordpress/ui`, `@wordpress/dataviews`, `@wordpress/admin-ui`, `@wordpress/grid`, or `@wordpress/components` could have their styles collide with the copy WordPress loads. Update to the fixed versions (for example, `@wordpress/ui` 0.26.0 or `@wordpress/components` 44.0.0) and release before 7.2. If you build your own CSS modules with `@wordpress/build`, update it to 0.27.0 and rebuild. Plugins that load the `wp-components` script aren’t affected. See [Update bundled @wordpress/\* packages and @wordpress/build](https://make.wordpress.org/core/2026/11/16/update-bundled-wordpress-packages-and-wordpress-build-to-fix-css-module-class-name-collisions/).
