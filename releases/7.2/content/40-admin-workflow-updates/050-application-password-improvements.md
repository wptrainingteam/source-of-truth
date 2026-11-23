---
title: Application password improvements
slug: application-password-improvements
tags: [site admin, enterprise]
flags: [check]
---

WordPress now emails users when a new application password is created, so an unexpected one is easier to spot ([r63582](https://core.trac.wordpress.org/changeset/63582), [#63927](https://core.trac.wordpress.org/ticket/63927)). The email is sent in the user's locale. Developers can turn it off with the `wp_send_application_password_created_email` filter or change it with `wp_application_password_created_email`. If your site already sends its own notification, turn one of them off to avoid duplicate emails. On sites without HTTPS, WordPress also explains more clearly which environment type is required to use application passwords ([r64091](https://core.trac.wordpress.org/changeset/64091), [#57388](https://core.trac.wordpress.org/ticket/57388)).

Application password data is now unslashed before it reaches the `wp_create_application_password` and `wp_update_application_password` hooks ([r65361](https://core.trac.wordpress.org/changeset/65361)). Remove any `wp_unslash()` calls in those callbacks.

Read more: [Miscellaneous Developer Changes in WordPress 7.2](https://make.wordpress.org/core/2026/11/19/miscellaneous-developer-changes-in-wordpress-7-2/)
