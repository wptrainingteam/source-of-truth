---
title: Navigation Block and Link Creation
slug: navigation-block-and-link-creation
tags: [theme builder, site admin, end user]
---

The Navigation block picks up several improvements that give site builders more freedom in what a menu can contain and where it can be edited. The Login/Logout block can now be [nested inside submenus](https://github.com/WordPress/gutenberg/pull/75497) (#75497), handy for tucking account actions into a “My Account” dropdown instead of spending a top-level slot on them. New links can be [created directly from the sidebar List View](https://github.com/WordPress/gutenberg/pull/75918) in the Site Editor (#75918), so building out a menu no longer requires clicking into each item on the canvas. And the Home Link block [gains previously missing controls](https://github.com/WordPress/gutenberg/pull/76672) (#76672), bringing it up to par with its navigation siblings.

One behavior change to note for theme builders: the Navigation block no longer force-propagates its font size down to individual menu items ([#77419](https://github.com/WordPress/gutenberg/pull/77419)). Until now, every navigation link, submenu, and page list item received the parent’s font-size markup — and because relative units multiply, nested dropdowns compounded dramatically (1.5em became 2.25em, then 3.375em).

The block now relies on standard CSS inheritance instead, which also fixes mismatched typography between the editor canvas and the front end. Most themes need no changes, but themes that target `has-{slug}-font-size` classes directly on nav items should check their menus — the [Miscellaneous Editor Changes dev note](https://make.wordpress.org/core/2026/08/04/miscellaneous-block-editor-changes-in-wordpress-7-1/) includes a filter to restore the old markup if needed.
