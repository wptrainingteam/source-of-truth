---
title: Abilities API updates
slug: abilities-api-updates
tags: []
flags: [check]
---

Abilities can now declare `required_capabilities`, a list of capabilities WordPress checks before any `permission_callback` runs. If the list covers every check, you can leave out `permission_callback`. Input is now normalized, validated, and then sanitized through a new `prepare_input()` method, and input that fails sanitization is rejected with `ability_invalid_input` (HTTP 400 over REST). Results keep empty objects as `{}` through the new `wp_prepare_json_value_for_client()`.

Callbacks that depend on the original PHP type may need updates. For example, `number` inputs now arrive as floats.

Read more: [Abilities API updates in WordPress 7.2](https://make.wordpress.org/core/2026/11/19/abilities-api-updates-in-wordpress-7-2/)

###
