---
title: Plugin menu items and apiFetch
slug: plugin-menu-items-and-apifetch
tags: []
flags: [check]
---

The editor’s **Options** and **View** menus now use the new `Menu` component from `@wordpress/ui`. `PluginMoreMenuItem`, `PluginSidebarMoreMenuItem`, and `PluginPreviewMenuItem` keep working, and their items now appear in a **Panels** submenu of the Options menu. The `as` prop is deprecated and ignored, and styles that target `.components-menu-item__button` no longer match ([#81564](https://github.com/WordPress/gutenberg/pull/81564), [#82321](https://github.com/WordPress/gutenberg/pull/82321)).

`apiFetch` now resolves an empty `200` response to `null` instead of rejecting with `invalid_json` ([#79325](https://github.com/WordPress/gutenberg/pull/79325)). It also adds `apiFetch.unregister()` for removing middleware ([#82408](https://github.com/WordPress/gutenberg/pull/82408)) and exposes `defaultFetchHandler` ([#82553](https://github.com/WordPress/gutenberg/pull/82553)).

Read more: [Editor: The Options and View menus now use the new Menu component](https://make.wordpress.org/core/2026/11/11/editor-the-options-and-view-menus-now-use-the-new-menu-component/)
