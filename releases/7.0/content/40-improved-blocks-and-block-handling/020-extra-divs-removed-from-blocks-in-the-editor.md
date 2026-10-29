---
title: Extra divs removed from blocks in the editor
slug: extra-divs-removed-from-blocks-in-the-editor
tags: [theme builder, developer, site admin]
---

WordPress 7.0 introduced a new `HtmlRenderer` component, which renders HTML content as React elements with optional wrapper props. For theme authors, this means that several blocks will no longer have an extra wrapping `<div>` in the editor, allowing for consistent styling with the front end ([74228](https://github.com/WordPress/gutenberg/pull/74228)).

Blocks that have been fixed are:

*   [Archives](https://github.com/WordPress/gutenberg/pull/74255)
*   [Calendar](https://github.com/WordPress/gutenberg/pull/74271)
*   [Latest Comments](https://github.com/WordPress/gutenberg/pull/74277)
*   [RSS](https://github.com/WordPress/gutenberg/pull/74272)
*   [Tag Cloud](https://github.com/WordPress/gutenberg/pull/74228)
