---
title: DataViews, DataForm, and the Fields API
tags: []
---

The Fields API gains a server-side registry and REST route ([#84078](https://github.com/WordPress/gutenberg/pull/84078)). DataViews adds a `time` field type ([#80830](https://github.com/WordPress/gutenberg/pull/80830)), `aspectRatio` and `mediaFit` options for grid previews ([#79329](https://github.com/WordPress/gutenberg/pull/79329), [#81604](https://github.com/WordPress/gutenberg/pull/81604)), and `isAny` and `isNone` filters for numeric fields ([#77942](https://github.com/WordPress/gutenberg/pull/77942)). Core actions, like setting the homepage or posts page, are now registered on the server and live in a new `@wordpress/core-actions` package ([#84660](https://github.com/WordPress/gutenberg/pull/84660), [#84643](https://github.com/WordPress/gutenberg/pull/84643)).

Tracking: [DataViews, DataViewsPicker, DataForm, Fields in WordPress 7.2](https://github.com/WordPress/gutenberg/issues/81228) (#81228)
