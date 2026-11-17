---
title: SVG icons replace Dashicons in the admin
slug: svg-icons-replace-dashicons-in-the-admin
tags: [all]
flags: [check, visuals]
---

The admin bar and admin menu now use SVG icons instead of the Dashicons icon font ([r64583](https://core.trac.wordpress.org/changeset/64583)), and so does the Dashboard’s **At a Glance** widget ([r64799](https://core.trac.wordpress.org/changeset/64799)). SVG icons are announced more reliably by screen readers, work with forced-colors modes, and don’t break when an icon font is blocked.

Plugins and custom post types that use a Dashicon in their menu get the matching SVG icon automatically, and Dashicons without a match keep using the font ([r64798](https://core.trac.wordpress.org/changeset/64798)). You can also pass an icon name like `core-admin/pin` to `add_menu_page()` or `register_post_type()`. Admin bar icons aren’t replaced automatically, so pass the icon name in the new `icon` argument of `WP_Admin_Bar::add_node()`. When a node has an SVG icon, its old Dashicon is hidden, so the same code works on 7.2 and earlier versions ([r65223](https://core.trac.wordpress.org/changeset/65223)). If your plugin styles icons through `::before`, check it against the new markup.

Read more: [SVG icons in the admin bar and menu in WordPress 7.2](https://make.wordpress.org/core/2026/11/05/svg-icons-in-the-admin-bar-and-menu-in-wordpress-7-2/) ([#65089](https://core.trac.wordpress.org/ticket/65089))

Tracking: [Omnibar: WP 7.2 Iteration Issue](https://github.com/WordPress/gutenberg/issues/82723) (#82723)
