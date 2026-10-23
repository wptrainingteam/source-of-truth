---
title: SVG icons replace Dashicons in the admin
tags: [all]
flags: [visuals]
---

The admin bar and admin menu are switching from the Dashicons icon font to SVG icons rendered with `wp_get_icon()`, the icon API added in 7.1. SVG icons are announced more reliably by screen readers, work with forced-colors modes, and don't break when an icon font is blocked. If your plugin styles its admin menu icon, check it against the new markup.

Read more: [Replacing Dashicons in the admin bar and menu](https://make.wordpress.org/core/2026/09/04/replacing-dashicons-in-the-admin-bar-and-menu/) ([#65089](https://core.trac.wordpress.org/ticket/65089))

Tracking: [Omnibar: WP 7.2 Iteration Issue](https://github.com/WordPress/gutenberg/issues/82723) (#82723)
