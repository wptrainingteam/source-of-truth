---
title: Application password improvements
slug: application-password-improvements
tags: [site admin, enterprise]
flags: [check]
---

WordPress now sends an email notification when a new application password is created, so an unexpected one is easier to spot ([r63582](https://core.trac.wordpress.org/changeset/63582), [#63927](https://core.trac.wordpress.org/ticket/63927)). On sites without HTTPS, WordPress also explains more clearly which environment type is required to use application passwords ([r64091](https://core.trac.wordpress.org/changeset/64091), [#57388](https://core.trac.wordpress.org/ticket/57388)).
