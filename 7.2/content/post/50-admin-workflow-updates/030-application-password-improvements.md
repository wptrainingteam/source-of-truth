---
title: Application password improvements
tags: [site admin, enterprise]
flags: [check]
---

Application passwords get security hardening and UX refinements: an email notification when a new one is created ([#63927](https://core.trac.wordpress.org/ticket/63927)), safer handling of `default_role` values ([#46744](https://core.trac.wordpress.org/ticket/46744)), and better environment detection on sites without HTTPS ([#57388](https://core.trac.wordpress.org/ticket/57388)).

<!-- 🔍 Status Oct 23: #63927 committed (032936f, Sep 10), #57388 committed (4b2afb9, Oct 5), #46744 still has an open patch after Beta 1. #66009 (UX) couldn't be read. Rewrite proposed in a PR. -->
