---
title: Deprecations and breaking changes
tags: []
flags: [check]
---

Test your plugins and themes against these before 7.2 is released:

* **Icons are stroke-based.** Core icons were redrawn as strokes, so setting `fill` no longer recolors them. Use CSS `color` instead ([#78812](https://github.com/WordPress/gutenberg/pull/78812), [#82754](https://github.com/WordPress/gutenberg/pull/82754)).
* **Deprecated components:** Badge ([#82379](https://github.com/WordPress/gutenberg/pull/82379)), Divider ([#83040](https://github.com/WordPress/gutenberg/pull/83040)), ResponsiveWrapper ([#83347](https://github.com/WordPress/gutenberg/pull/83347)), Scrollable ([#83273](https://github.com/WordPress/gutenberg/pull/83273)), ZStack ([#83344](https://github.com/WordPress/gutenberg/pull/83344)), Elevation ([#83269](https://github.com/WordPress/gutenberg/pull/83269)), Animate ([#80931](https://github.com/WordPress/gutenberg/pull/80931)), and `__experimentalSurface` ([#80943](https://github.com/WordPress/gutenberg/pull/80943)). The private Menu API is also deprecated in favor of the `@wordpress/ui` Menu ([#82947](https://github.com/WordPress/gutenberg/pull/82947)).
* **Interactivity API:** Deprecated behaviors that reached their removal date are gone ([#84098](https://github.com/WordPress/gutenberg/pull/84098)).
* **`@wordpress/reusable-blocks`** is now a no-op package ([#79186](https://github.com/WordPress/gutenberg/pull/79186)).
* **DataViews:** The RichText control moved from DataViews' private exports to the editor package ([#81430](https://github.com/WordPress/gutenberg/pull/81430)).
* **Footnotes:** Footnote IDs now start with an `fn-` prefix. Update any CSS or links that target the old IDs ([#82398](https://github.com/WordPress/gutenberg/pull/82398)).
* **Block gap:** A block that doesn't declare `blockGap` support is now treated as not supporting it ([#82401](https://github.com/WordPress/gutenberg/pull/82401)).

<!-- 🔍 Confirm each item is in the 7.2 package update and check for dev notes to link. -->
