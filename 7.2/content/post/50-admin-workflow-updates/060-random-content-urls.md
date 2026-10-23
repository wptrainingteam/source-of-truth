---
title: Random content URLs
tags: [site admin, theme builder, developer]
---

Visiting `/random/` on a site now redirects to a randomly chosen published post. It works for the whole site and inside category, tag, author, and post type archives, and you can rename the base in the **Random base** field on the **Permalinks** screen ([#64498](https://core.trac.wordpress.org/ticket/64498)).

Post types decide whether they take part with the new `randomable` argument of `register_post_type()`. It defaults to `true` for post types that are publicly queryable and have an archive. Posts take part; pages and attachments don't.
