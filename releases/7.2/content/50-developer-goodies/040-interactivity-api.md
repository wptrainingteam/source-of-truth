---
title: Interactivity API
slug: interactivity-api
tags: []
flags: [check]
---

A new `data-wp-html` directive renders trusted HTML from the store ([#83092](https://github.com/WordPress/gutenberg/pull/83092)). It only renders values wrapped in `asDangerousHTML()`, or `wp_interactivity_as_dangerous_html()` on the server. Neither function sanitizes anything, so never pass it untrusted input.

The router also exposes `state.navigating` and `state.initiator` so you can react to client-side navigations, replacing the deprecated `state.navigation.hasStarted` and `hasFinished` ([#83280](https://github.com/WordPress/gutenberg/pull/83280)).

Deprecated behaviors that reached their removal date are gone ([#84098](https://github.com/WordPress/gutenberg/pull/84098)): unique IDs with two hyphens (`--id`), negating a function like `!actions.isEmpty`, and `data-wp-ignore`.

Read more: [Changes to the Interactivity API in WordPress 7.2](https://make.wordpress.org/core/2026/11/17/changes-to-the-interactivity-api-in-wordpress-7-2/)

Tracking: [Interactivity API for WordPress 7.2](https://github.com/WordPress/gutenberg/issues/83078) (#83078)
