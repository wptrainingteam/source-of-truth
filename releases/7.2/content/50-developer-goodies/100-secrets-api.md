---
title: Secrets API
slug: secrets-api
tags: []
flags: [check]
---

WordPress 7.2 adds a Secrets API, which gives plugins a standard, encrypted place to store credentials like API keys, with `wp_set_secret()`, `wp_get_secret()`, and `wp_delete_secret()` ([r64337](https://core.trac.wordpress.org/changeset/64337)). WP-CLI support is in scope, and an admin UI is planned for a later release.

Read more: [Proposal: A Secrets API for WordPress 7.2](https://make.wordpress.org/core/2026/08/25/proposal-a-secrets-api-for-wordpress-7-2/) ([#66187](https://core.trac.wordpress.org/ticket/66187))
