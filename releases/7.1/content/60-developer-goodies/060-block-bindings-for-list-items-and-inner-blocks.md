---
title: Block Bindings for list-items and inner blocks
slug: block-bindings-for-list-items-and-inner-blocks
tags: []
---

The List Item block has gained Block Bindings support. A List Item’s content can now be connected to a data source—a custom field, a pattern override, or another registered source—so individual entries in a list can be populated dynamically rather than typed in by hand. The change [registers content as a bindable attribute](https://github.com/WordPress/gutenberg/pull/78947) for core/list-item.

[A related fix rounds out the feature](https://github.com/WordPress/gutenberg/pull/79346): previously, if a bound List Item also contained a nested sub-list, that nested list was dropped when the binding was rendered. Now a List Item can carry a bound value and a nested list beneath it at the same time. In practice, this means multi-level lists—say, a team member’s name pulled from a custom field, with a nested list of their current projects underneath—can now be fully dynamic without losing structure.

Tracking: [Block Bindings in WordPress 7.1](https://github.com/WordPress/gutenberg/issues/77199) (#77199)
