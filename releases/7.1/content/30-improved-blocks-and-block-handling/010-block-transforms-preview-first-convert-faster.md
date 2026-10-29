---
title: "Block transforms: preview first, convert faster"
slug: block-transforms-preview-first-convert-faster
tags: [end user, site admin]
---

Switching a block’s look or type is now much easier to evaluate before you commit. When you open the block switcher in the toolbar, the style options a theme provides — say, a Button’s “Outline” style — show live previews on hover, so you see exactly how your block will look with the style applied. ([75889](https://github.com/WordPress/gutenberg/pull/75889)) The same previews in the inspector’s Styles panel now match the toolbar presentation, so it no longer matters where you make the switch. ([75989](https://github.com/WordPress/gutenberg/pull/75989)) A small polish fix also centers the Navigation block’s preview in its preview pane. ([75741](https://github.com/WordPress/gutenberg/pull/75741))

Transforms got more capable, too: a block can now transform directly into a variation of another block. Instead of converting to a Group and then picking Row afterwards, the transform menu offers Row or Stack as direct targets — one step instead of two. ([78713](https://github.com/WordPress/gutenberg/pull/78713))

The same “one step instead of two” thinking extends to legacy content. Pasting or converting an shortcode now creates a proper Embed block instead of leaving raw shortcode text behind, so embeds from YouTube and other services display correctly right away ([77937](https://github.com/WordPress/gutenberg/pull/77937))— and if you change your mind, undo restores a paragraph with the URL rather than deleting it. ([77551).](https://github.com/WordPress/gutenberg/pull/77551)

The Shortcode block joins in as well: when its content matches a registered shortcode, it now offers block-specific transforms to convert it into the equivalent block. [(77944](https://github.com/WordPress/gutenberg/pull/77944))

For anyone maintaining a site with years of shortcode-based posts, that removes a tedious cleanup step on the way to block-based editing.
