---
title: Improved screens across WP-Admin
slug: improved-screens-across-wp-admin
tags: [all]
---

WordPress 7.0 is getting a CSS-only “coat-of-paint” visual reskin of the wp-admin, bringing the classic admin screens closer to the visual language of the block and site editors — no markup changes, no JavaScript, no functional changes, and all existing CSS class names and admin color schemes preserved. ([64308](https://core.trac.wordpress.org/ticket/64308))

*   New default color scheme: “Modern” replaces “Fresh” as the default admin color scheme (#[64546](https://core.trac.wordpress.org/ticket/64546))
*   Updated buttons and input fields: primary, secondary, and link buttons, plus text inputs, selects, checkboxes, and radio buttons, now align with the WordPress Design System (#[64547](https://core.trac.wordpress.org/ticket/64547))
*   Updated notices: info, warning, success, and error notices refreshed for clarity and consistency (#[64548](https://core.trac.wordpress.org/ticket/64548)), including on the login screen
*   Updated cards and metaboxes: dashboard widgets and metaboxes get modernized styling (#[64549](https://core.trac.wordpress.org/ticket/64549))
*   New `wp-base-styles` stylesheet handle: consolidates admin color scheme CSS custom properties into a single reusable stylesheet, available across the admin and the block editor content iframe
*   Login and registration screens: the WordPress logo updated from blue to gray to match the new design, and scheme styles now apply to login, install, database repair, and upgrade screens

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1283" height="904" data-attachment-id="44993" data-permalink="https://gutenbergtimes.com/wordpress-7-0-source-of-truth/admin-new-coat-of-paint/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Admin-new-coat-of-paint.png?fit=1283%2C904&amp;ssl=1" data-orig-size="1283,904" data-comments-opened="1" data-image-title="Admin-new-coat-of-paint" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Admin-new-coat-of-paint.png?fit=1024%2C722&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Admin-new-coat-of-paint.png?resize=1283%2C904&amp;ssl=1" alt="" class="wp-image-44993" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Admin-new-coat-of-paint.png?w=1283&amp;ssl=1 1283w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Admin-new-coat-of-paint.png?resize=300%2C211&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Admin-new-coat-of-paint.png?resize=768%2C541&amp;ssl=1 768w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Admin-new-coat-of-paint.png?resize=1024%2C722&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Admin-new-coat-of-paint.png?resize=1080%2C761&amp;ssl=1 1080w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>
