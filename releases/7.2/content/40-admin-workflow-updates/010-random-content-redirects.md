---
title: Random content redirects
slug: random-content-redirects
tags: [site admin, end user, developer]
flags: [check]
---

WordPress can now send visitors to a random post. Visiting `/random/` redirects to a randomly selected published post, and it also works within categories, tags, authors, and post types, like `/random/category/news/` ([r64402](https://core.trac.wordpress.org/changeset/64402)). It needs pretty permalinks. You can change the `random` base on the **Settings > Permalinks** screen, and it’s translated for sites in other languages. If a page already uses that slug, the page takes priority.

The feature is on by default. Post types are eligible when they’re publicly queryable and have an archive, and developers can change that with the new `randomable` argument in `register_post_type()`. Turn the feature off with the `wp_enable_random_content_redirect` filter, or check `wp_is_random_content_query()` in a `pre_get_posts` callback to change only random requests. The redirect is sent on `template_redirect`, so plugins that lock down a site still apply ([r65515](https://core.trac.wordpress.org/changeset/65515)).

Read more: [Your Content Is Going To Get More Random!](https://make.wordpress.org/core/2026/11/05/your-content-is-going-to-get-more-random/)

Tracking: [Add core support for random content redirects](https://core.trac.wordpress.org/ticket/64498) (#64498)
