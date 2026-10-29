---
title: "Introduce wp\\_prime\\_network\\_option\\_caches() to load multiple network options with a single database request"
slug: introduce-wp-prime-network-option-caches-to-load-multiple-ne
tags: [developer, enterprise]
---

_Summarized from the trac commit_

WordPress’s get\_network\_option function generally makes individual database requests for each network option. While some options are preloaded in wp\_load\_core\_site\_options, many still require single database calls to the network options table.

6.6 adds two new functions: wp\_prime\_network\_option\_caches and wp\_prime\_site\_option\_caches. These functions enable developers to pass an array of option names, allowing caches for these options to be primed in a single object cache or database request. If an option is not found, the notoptions cache key is refreshed, preventing unnecessary repeated requests.

The function wp\_prime\_site\_option\_caches is similar to get\_site\_option, enabling developers to retrieve network options on the current network without needing to know the current network ID. If these functions are called in a non-multisite environment, they fall back to using wp\_prime\_option\_caches.

**Key Make Posts/GitHub/Trac Issue(s):**  Introduce wp\_prime\_network\_option\_caches() to load multiple network options with a single database request ([58182](https://core.trac.wordpress.org/changeset/58182)**)**
