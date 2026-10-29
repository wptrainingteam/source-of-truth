---
title: Manage fonts for all themes in a dedicated page
slug: manage-fonts-for-all-themes-in-a-dedicated-page
tags: [site admin, theme builder, enterprise]
---

A dedicated Fonts page is now available under the Appearance menu for all themes. Until now, font management has lived deep inside Global Styles, requiring navigation through several panels to install or preview a font. This new standalone page lets block theme users browse, install, and manage their typography collection in one dedicated space. 

Under the hood, this page is built on a new routing infrastructure for the Site Editor, designed to improve navigation and support new top-level pages in wp-admin. View transitions are now wired into this routing layer, providing early zoom/slide animations when navigating between pages ([73630](https://github.com/WordPress/gutenberg/pull/73630), [73876](https://github.com/WordPress/gutenberg/pull/73876), [73586](https://github.com/WordPress/gutenberg/pull/73586)).

The Font Library and Global Styles also work with classic themes ([#73971](https://github.com/WordPress/gutenberg/pull/73971), [#73876](https://github.com/WordPress/gutenberg/pull/73876)). Like the Media Library, you can access the Font Library as a modal or through a dedicated admin section—regardless of your theme type.
