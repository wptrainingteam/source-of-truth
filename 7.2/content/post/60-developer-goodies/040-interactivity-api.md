---
title: Interactivity API
tags: []
flags: [check]
---

A new `data-wp-html` directive renders trusted HTML from the store ([#83092](https://github.com/WordPress/gutenberg/pull/83092)). On the server, wrap trusted HTML with the new `wp_interactivity_as_dangerous_html()` function, and `data-wp-html` renders it in the server-rendered page too. The HTML isn't sanitized, so only pass HTML you trust ([#66246](https://core.trac.wordpress.org/ticket/66246)). The router also exposes `state.navigating` and `state.initiator` so you can react to client-side navigations, replacing the deprecated `state.navigation.hasStarted` and `hasFinished` ([#83280](https://github.com/WordPress/gutenberg/pull/83280)).

Tracking: [Interactivity API for WordPress 7.2](https://github.com/WordPress/gutenberg/issues/83078) (#83078)
