---
title: Support for Speculative Loading
slug: support-for-speculative-loading
---

Building upon the success of the [Speculative Loading plugin](https://wordpress.org/plugins/speculation-rules/), which has over 40,000 active installations, WordPress 6.8 integrates speculative loading into core. This feature utilizes the [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API) to prefetch URLs dynamically based on user interaction, aiming to improve performance metrics like Largest Contentful Paint (LCP). The current proposal has a default configuration employing conservative prefetching to ensure safety and compatibility, but feedback is requested on this. Developers have access to filters for customization, allowing adjustments to the speculative loading behavior as needed (#[62503](https://core.trac.wordpress.org/ticket/62503)). Details are laid out in the [Speculative Loading in 6.8](https://make.wordpress.org/core/2025/03/06/speculative-loading-in-6-8/) Dev Note.
