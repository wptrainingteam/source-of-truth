---
title: Hosts can now tune speculative loading defaults
slug: hosts-can-now-tune-speculative-loading-defaults
tags: []
---

Since WordPress 6.8, [speculative loading](https://make.wordpress.org/core/2025/03/06/speculative-loading-in-6-8/) lets browsers prefetch or prerender pages a visitor is likely to open next, making navigation feel near-instant. WordPress ships with deliberately cautious defaults — and until now, changing them required an mu-plugin. With WordPress 7.1, hosting providers and site owners can adjust the default mode and eagerness through environment variables or wp-config.php constants. A well-configured host with page and object caching in place can opt its sites into more aggressive speculation and pass the speed gains on to visitors. The real-world data hosts gather this way will also help inform whether core changes the defaults for everyone in a future release. The technical details are available in the core ticket ([#65624](https://core.trac.wordpress.org/ticket/65624)).
