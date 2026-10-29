---
title: Heading Block CSS specificity fix
slug: heading-block-css-specificity-fix
tags: [all]
---

WordPress 6.9 fixes a [specificity issue with the Heading block’s](https://github.com/WordPress/gutenberg/pull/72837) background padding. Previously, padding styles applied to headings with backgrounds were affecting other blocks that use heading elements, such as the Accordion Heading block. This fix ensures that background padding is only applied to actual Heading blocks.

The CSS selector for applying padding to headings with backgrounds has been made more specific. The selector now targets `.wp-block-heading.has-background` instead of just heading element tags (h1, h2, etc) with the `.has-background` class. 

Dev note: [Heading Block CSS Specificity Fix in WordPress 6.9](https://make.wordpress.org/core/2025/11/12/heading-block-css-specificity-fix-in-wordpress-6-9/)
