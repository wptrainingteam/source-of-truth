---
title: Post editor iframe now always on
slug: post-editor-iframe-now-always-on
tags: []
---

Other editors in WordPress—the site editor, the template editor, and block, template, and device previews—have been unconditionally iframed for a long time, going back to the template editor’s introduction in 5.8. The post editor was the holdout: starting in 7.0, whether it ran isolated depended on the blocks actually present in a given post, so a post using only Block API v3+ blocks got the isolated canvas, while a post containing even one older block (API v1 or v2) dropped out of it entirely. That meant the same site, even the same author, could see the editor behave differently from post to post. [In 7.1, that condition is removed](https://github.com/WordPress/gutenberg/pull/75187): every post editor is always iframed, regardless of theme type or block API version.

For most people writing and editing content, this is good news—no more switching behavior depending on which blocks happen to be inserted. Block developers have a bit of homework, though: the iframe has its own document and window, separate from the admin page where editor scripts run, so any code that reaches for the global document or window to touch the canvas will now be looking at the wrong place. The usual fix is to get the canvas’s document from an element inside it (via ownerDocument and its defaultView) rather than the global object, and to use useRefEffect for attaching and cleaning up canvas event listeners.

Read the [dev note on the 7.1 changes](https://make.wordpress.org/core/2026/08/03/iframed-editor-changes-in-wordpress-7-1/) and the [block migration guide](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-api-versions/block-migration-for-iframe-editor-compatibility/) for more details.

Ryan Welcher published a guide and a demo plugin. [The post editor is going full iframe: what block developers need to know before WordPress 7.1](https://gutenbergtimes.com/the-post-editor-is-going-full-iframe-what-block-developers-need-to-know-before-wordpress-7-1/) with code examples and instructions how to fix things if necessary.
