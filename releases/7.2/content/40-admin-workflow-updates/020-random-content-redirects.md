---
title: Random content redirects
slug: random-content-redirects
tags: [site admin, end user, developer]
flags: [check]
---

WordPress can now send visitors to a random post. Visiting `/random/` redirects to a randomly selected published post, and it also works within categories, tags, authors, and post type archives, like `/random/category/news/` ([r64402](https://core.trac.wordpress.org/changeset/64402)). You can change the `random` base on the **Settings > Permalinks** screen, and it’s translated for sites in other languages. If a post or page already uses that slug, the content takes priority.

The feature is on by default. Developers can control which post types are eligible with the new `randomable` argument in `register_post_type()`, or turn the feature off with the `wp_enable_random_content_redirect` filter. After turning it off, flush the rewrite rules.

Tracking: [Add core support for random content redirects](https://core.trac.wordpress.org/ticket/64498) (#64498)
