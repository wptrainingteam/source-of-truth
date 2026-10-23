---
title: Global Styles: form elements, duotone palettes, and more
tags: [site admin, theme builder, end user]
flags: [check, visuals]
---

Global Styles can now style more of the elements that make up your site. Citations, text inputs, and select dropdowns get typography and color controls ([#80852](https://github.com/WordPress/gutenberg/pull/80852)), and themes can style `<label>` elements through `theme.json` ([#81160](https://github.com/WordPress/gutenberg/pull/81160)). Search, comment, and plugin forms can now match the rest of your design without custom CSS.

You can also create your own duotone palettes in a new **Duotone** tab instead of relying only on the theme's ([#81605](https://github.com/WordPress/gutenberg/pull/81605)). Elements like links, buttons, and headings are now listed alongside blocks in Global Styles ([#81645](https://github.com/WordPress/gutenberg/pull/81645)), and element screens preview the state you're styling, such as hover ([#83787](https://github.com/WordPress/gutenberg/pull/83787)).

When you're tracking down a stray style, Global Styles also lets you filter the list to show only blocks that have custom styles ([#81373](https://github.com/WordPress/gutenberg/pull/81373)).

In the block inspector, controls now show the values a block inherits from Global Styles instead of appearing empty, so you can see what you're overriding before you change anything ([#82840](https://github.com/WordPress/gutenberg/pull/82840)).

Tracking: [Form elements in Global Styles](https://github.com/WordPress/gutenberg/issues/34198) (#34198) and [Display inherited Global Styles and local overrides](https://github.com/WordPress/gutenberg/issues/82520) (#82520)

<!-- 🔍 Confirm #34198 is the right tracking link (the fetched page looked like a separate 7.2 iteration issue citing it). Confirm inherited values show by default in 7.2 (indicators stay behind the experiment). 🎨 Screenshot of the custom-styles filter and the Duotone tab. -->
