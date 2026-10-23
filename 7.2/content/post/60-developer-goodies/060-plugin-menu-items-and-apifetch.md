---
title: Plugin menu items and apiFetch
tags: []
flags: [check]
---

`PluginMoreMenuItem`, `PluginSidebarMoreMenuItem`, and `PluginPreviewMenuItem` now render with the new `Menu` component. The `as` prop is deprecated and ignored ([#81564](https://github.com/WordPress/gutenberg/pull/81564), [#82321](https://github.com/WordPress/gutenberg/pull/82321)).

`apiFetch` now resolves an empty `200` response to `null` instead of rejecting with `invalid_json` ([#79325](https://github.com/WordPress/gutenberg/pull/79325)). It also adds `apiFetch.unregister()` for removing middleware ([#82408](https://github.com/WordPress/gutenberg/pull/82408)) and exposes `defaultFetchHandler` ([#82553](https://github.com/WordPress/gutenberg/pull/82553)).
