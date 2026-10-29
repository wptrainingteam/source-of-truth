---
title: Accessible tooltips and toggle tips API
slug: accessible-tooltips-and-toggle-tips-api
tags: []
---

WordPress adds a core mechanism for accessible tooltips ([51006](https://core.trac.wordpress.org/ticket/51006)), offering an alternative to the title attribute, which is not available to keyboard and touch users. Two new functions cover different use cases: wp\_get\_tooltip() exposes an accessible name when a control has focus or hover, such as for icon-only buttons, and wp\_get\_toggletip() implements a popover disclosure with extended help information that stays open until dismissed. Both generate accessible markup that avoids excess verbosity for screen readers and follows best practices for voice command users.

The first toggle tip in core explains the “Remember Me” option on the login screen ([55343](https://core.trac.wordpress.org/ticket/55343)). Plugin developers can use the functions for their own settings screens and metaboxes. ([62741](https://core.trac.wordpress.org/changeset/62741)).

Dev Note is now available with the details: [Introducing name and informational tool tips in WordPress 7.1](https://make.wordpress.org/core/2026/08/03/introducing-name-and-informational-tool-tips-in-wordpress-7-1/)

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="742" height="494" data-attachment-id="46367" data-permalink="https://gutenbergtimes.com/tooltip-api-wp-7-1-2/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Tooltip-API-wp-7-1-edited.png?fit=742%2C494&amp;ssl=1" data-orig-size="742,494" data-comments-opened="1" data-image-title="Tooltip-API-wp-7-1" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Tooltip-API-wp-7-1-edited.png?fit=742%2C494&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Tooltip-API-wp-7-1-edited.png?resize=742%2C494&amp;ssl=1" alt="" class="wp-image-46367" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Tooltip-API-wp-7-1-edited.png?w=742&amp;ssl=1 742w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Tooltip-API-wp-7-1-edited.png?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Tooltip-API-wp-7-1-edited.png?resize=600%2C400&amp;ssl=1 600w" sizes="auto, (max-width: 742px) 100vw, 742px"></figure>
