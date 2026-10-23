---
title: Notes move into the canvas margin
tags: [end user, site admin, enterprise]
flags: [check, visuals]
---

Notes now sit in a margin beside the editor canvas instead of floating over it, so you can keep a conversation open while you change block or post settings ([#83786](https://github.com/WordPress/gutenberg/pull/83786), [#83852](https://github.com/WordPress/gutenberg/pull/83852)). On narrower screens, threads collapse to the author's avatar. A new **Notes** submenu in the **Options** menu lets you expand, minimize, or hide them ([#83768](https://github.com/WordPress/gutenberg/pull/83768)).

A few smaller changes protect your work: deleting a note offers **Undo** ([#83988](https://github.com/WordPress/gutenberg/pull/83988)), unsent notes and replies are kept when you select another block ([#84110](https://github.com/WordPress/gutenberg/pull/84110)), and people you @mention now get an email linking to the post ([#79606](https://github.com/WordPress/gutenberg/pull/79606)).

Notes also get emoji reactions, so you can acknowledge feedback without adding another reply ([#76767](https://github.com/WordPress/gutenberg/pull/76767)). The **Add note** button in the block toolbar now only adds notes ([#84635](https://github.com/WordPress/gutenberg/pull/84635)), and highlights connect more clearly to the text they're attached to ([#80578](https://github.com/WordPress/gutenberg/pull/80578)). <!-- 🔍 Merged after Gutenberg 24.2 (Oct 16–19); confirm it's in Beta 1. -->

Tracking: [Notes iteration for WordPress 7.2](https://github.com/WordPress/gutenberg/issues/80015) (#80015)

<!-- 🔍 Mention emails: Core changeset 63012 (Aug 4, @since 7.1.0) may have shipped in 7.1. Remove if so. 🎨 Short video of the margin, avatars, and Notes submenu. -->
