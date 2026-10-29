---
title: Performance enhancements with theme.json
slug: performance-enhancements-with-theme-json
tags: []
---

6.2 marks a big performance step forward with block themes thanks in large part to adding a cache to the high-level public method that consumers use to query the settings coming from theme.json APIs (WordPress, block, theme, and user data). Specifically, WP\_Object\_Cache was added to gutenberg\_get\_global\_settings to cache the results of querying settings from theme.json. This work alone, outside of additional PRs, resulted in the following improvements:

*   23% for themes with theme.json
*   9% for themes without theme.json

[See full dataset](https://docs.google.com/spreadsheets/d/1jEUFtmkM_OyCAu2dBtylUKg1pcbkuLJNFxKDFyS80p8/edit#gid=47669135\)). Alongside this overall effort, additional caching was added elsewhere to iteratively improve performance.

**Key Make Posts/GitHub/Trac Issue(s):** 

*   [Hallway hangout with a recording and notes](https://make.wordpress.org/core/2023/02/03/hallway-hangout-performance-improvements-for-wordpress-6-2/) discussing WordPress 6.2 performance improvements. 
*   Add WP\_Object\_Cache to the gutenberg\_get\_global\_settings method ([45372](https://github.com/WordPress/gutenberg/pull/45372)). 
*   Add new method wp\_theme\_has\_theme\_json ([45168](https://github.com/WordPress/gutenberg/pull/45168), [45380](https://github.com/WordPress/gutenberg/pull/45380)).

*   wp\_theme\_has\_theme\_json: cache output ([45543](https://github.com/WordPress/gutenberg/pull/45543)).
*   wp\_get\_global\_settings: cache output ([45372](https://github.com/WordPress/gutenberg/pull/45372), [45971](https://github.com/WordPress/gutenberg/pull/45971), [45969](https://github.com/WordPress/gutenberg/pull/45969)).
*   wp\_get\_global\_stylesheet: migrate from transient to object cache ([45679](https://github.com/WordPress/gutenberg/pull/45679)).
*   wp\_get\_global\_styles\_svg\_filters : migrate from transient to object cache [47460](https://github.com/WordPress/gutenberg/pull/47460) (done in core as the function was removed from Gutenberg).
*   [Evolution of WordPress TTFB: 5.6 to 6.2](https://oandre.gal/evolution-of-wordpress-ttfb-5-6-to-6-2/) by a Core contributor working on these efforts.
