---
title: Interactivity API
slug: interactivity-api
tags: []
---

The Interactivity API in WordPress 6.8 introduces an improved wp-each directive, making it more flexible and reliable. Previously, it could only loop through arrays or objects with a `.map` method. Now, it supports any [iterable value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#built-in_iterables), including strings, arrays, maps, sets, and [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*). Additionally, it can handle undefined or null values by subscribing to changes and updating automatically when the value becomes iterable ([67798](https://github.com/WordPress/gutenberg/pull/67798)).

The release also brings a set of best practices to WordPress, developers using the Interactivity API and creating their own store might find the Dev Note: [**Interactivity API best practices in 6.8**](https://make.wordpress.org/core/2025/03/24/interactivity-api-best-practices-in-6-8/). particularly interesting, on how to avoid deprecation warnings and future-proof your plugins.

This release also introduces the withSyncEvent action wrapper utility to streamline event handling, reducing potential performance bottlenecks (#[68097](https://github.com/WordPress/gutenberg/pull/68097)). Details can be found in above linked dev note.
