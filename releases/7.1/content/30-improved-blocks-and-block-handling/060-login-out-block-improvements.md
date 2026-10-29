---
title: Login/out Block Improvements
slug: login-out-block-improvements
tags: [theme builder, site admin, developer]
---

The Login/Logout block has an option to display a full login form instead of a simple link — but until now, that form’s submit button ignored your theme entirely, rendering with plain browser-default styles that stuck out next to every other button on the site. With a block theme active, the submit button now carries the standard button classes (wp-block-button\_\_link and wp-element-button), so it automatically picks up the button styling your theme defines in theme.json — colors, border radius, and all — with no custom CSS required. The block follows the same approach the Comments form already uses, resolving a mismatch first reported back in 2023. ([76746](https://github.com/WordPress/gutenberg/pull/76746))
