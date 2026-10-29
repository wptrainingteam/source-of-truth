---
title: Add allowedBlocks attribute for Group and Media & Text
slug: add-allowedblocks-attribute-for-group-and-media-text
tags: [plugin author, theme author]
---

_This is pulled from_ [_What’s New for Developers May 2023_](https://developer.wordpress.org/news/2023/05/whats-new-for-developers-may-2023/)_._

Support for an allowedBlocks attribute now allows you to limit inner blocks for both the [Group](https://github.com/WordPress/gutenberg/pull/49128) and [Media & Text](https://github.com/WordPress/gutenberg/pull/49981) blocks. With this change, you can further curate the editing experience for your users via custom implementations or patterns.

**Key Make Posts/GitHub/Trac Issue(s):**

*   Group: Add allowedBlocks attribute and pass it to innerBlockProps. ([49128](https://github.com/WordPress/gutenberg/pull/49128))
*   Media & Text: Add allowedBlocks attribute and pass it to innerBlock. ([49981](https://github.com/WordPress/gutenberg/pull/49981))
