---
title: REST API changes
slug: rest-api-changes
tags: []
flags: [check]
---

* **Revision meta:** Revision and autosave responses now include only revisioned meta keys, so restoring a revision in the block editor no longer overwrites other post meta. If your plugin needs meta in revisions, register it with 'revisions_enabled' => true or add it with the wp_post_revision_meta_keys filter.
* **Comments:** The `/wp/v2/comments` `status` parameter accepts several statuses at once, like `?status=approve,hold`. `$request['status']` is now always an array, including in the `rest_comment_query` filter, so update any string comparisons.
* **CORS:** The new `rest_allowed_cors_methods` filter controls the `Access-Control-Allow-Methods` header ([r64730](https://core.trac.wordpress.org/changeset/64730)). Use it instead of unhooking `rest_send_cors_headers()`.
* **Response options:** Routes can now turn off `_fields`, `_embed`, and response links ([r64689](https://core.trac.wordpress.org/changeset/64689)).

Read more: [REST API changes in WordPress 7.2](https://make.wordpress.org/core/2026/11/17/rest-api-changes-in-wordpress-7-2/)
