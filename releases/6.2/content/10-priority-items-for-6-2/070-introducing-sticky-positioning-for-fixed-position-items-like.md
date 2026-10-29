---
title: "Introducing Sticky Positioning for Fixed Position Items, like Headers"
slug: introducing-sticky-positioning-for-fixed-position-items-like
tags: [end user, theme author, site admin]
---

A new Position block support adds a “Sticky” option so that a block remains within the viewport and is stuck to the top of the page when the content is scrolled instead of scrolling with the rest of the content. This is useful if you need to ensure that a root level element, such as a header or a promotion banner, remains on screen regardless of the page’s scroll position. It works in the block editor as well as in the front-end,  leading to a true WYSIWYG experience. 

This only works with blocks at the root level, where a new “sticky” option appears. To have a template part, like a header, be sticky, wrap it in a Group block, and set that Group block’s position to sticky.

**Visuals:** [using sticky positioning video](https://drive.google.com/file/d/1kZ4UaaeihAHcDjpn2cqfYhZkqv-6sg0w/view?usp=share_link).

**Adoption approach:** opt in via enabling the option. 

**Key Make Posts/GitHub/Trac Issue(s):** 

*   Add a Position block support (including sticky), decoupled from layout ([46142](https://github.com/WordPress/gutenberg/pull/46142#top)).
*   Some future follow up tasks to this initial implementation in [this issue](https://github.com/WordPress/gutenberg/issues/47043).
