---
title: New abilities for settings, users, and content
tags: []
---

The Abilities API gains three read-only abilities that integrations and AI tools can call:

* `core/settings-get` returns site settings, narrowed by settings group, setting name, or both. It requires `manage_options`, and a setting is only included when it's registered with the new `show_in_abilities` argument of `register_setting()` ([#64605](https://core.trac.wordpress.org/ticket/64605)).
* `core/users-query` returns a page of users, filtered by IDs, slugs, usernames, roles, or whether they've published posts ([#64657](https://core.trac.wordpress.org/ticket/64657)).
* `core/content-query` returns a page of posts of one post type, filtered by IDs, slugs, status, author, or parent. Post types opt in with the new `show_in_abilities` argument of `register_post_type()`, and `post` and `page` already do ([#66268](https://core.trac.wordpress.org/ticket/66268)).

If your plugin registers settings or post types that integrations should be able to read, set `show_in_abilities` to `true`.

<!-- 🔍 core/content-query changed after Beta 1: the author filter became an `author` object (e29e51d, Oct 22), and author names now show only to users who may see them (38a613a, Oct 23). Recheck the description at RC 1. -->
