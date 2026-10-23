---
title: NO_BACKSLASH_ESCAPES SQL mode turned off
tags: []
---

WordPress 7.2 turns off the `NO_BACKSLASH_ESCAPES` SQL mode by default, since it can break WordPress's escaped queries. Sites that need it can turn it back on with a filter in a `db.php` drop-in.

Read more: [NO_BACKSLASH_ESCAPES SQL mode is now turned off by default in WordPress 7.2](https://make.wordpress.org/core/2026/10/09/no_backslash_escapes-sql-mode-is-now-turned-off-by-default-in-wordpress-7-2/)
