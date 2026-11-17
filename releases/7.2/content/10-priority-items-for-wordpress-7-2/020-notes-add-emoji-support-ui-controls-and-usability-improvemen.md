---
title: "Notes add emoji support, UI controls, and usability improvements"
slug: notes-add-emoji-support-ui-controls-and-usability-improvemen
tags: [end user, site admin, enterprise]
flags: [check, visuals]
---

Notes now sit in a margin beside the editor canvas instead of floating over it, so you can keep a conversation open while you change block or post settings ([#83786](https://github.com/WordPress/gutenberg/pull/83786), [#83852](https://github.com/WordPress/gutenberg/pull/83852)). On narrower screens, threads collapse to the author’s avatar. A new **Notes** submenu in the **Options** menu lets you expand, minimize, or hide them ([#83768](https://github.com/WordPress/gutenberg/pull/83768)).

Notes also get emoji reactions, so you can acknowledge feedback without adding another reply. Rather than the full emoji set, reactions come from a small, fixed set: 👍 ➕ ❤️ 🎉 😄 👀 🚀 ([#76767](https://github.com/WordPress/gutenberg/pull/76767), [#85565](https://github.com/WordPress/gutenberg/pull/85565)).

After you add a note to a post, a **Note** icon appears in the block toolbar, making it quicker to leave notes on other blocks as you work through the post. The icon only shows up once a post has a note, so people writing solo keep a focused toolbar ([#84635](https://github.com/WordPress/gutenberg/pull/84635)). Highlights also connect more clearly to the text they’re attached to ([#80578](https://github.com/WordPress/gutenberg/pull/80578)).

A few smaller changes protect your work: deleting a note offers Undo ([#83988](https://github.com/WordPress/gutenberg/pull/83988)), and unsent notes and replies are kept when you select another block ([#84110](https://github.com/WordPress/gutenberg/pull/84110)).

Tracking: [Notes iteration for WordPress 7.2](https://github.com/WordPress/gutenberg/issues/80015) (#80015)
