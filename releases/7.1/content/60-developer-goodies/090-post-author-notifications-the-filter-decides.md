---
title: "Post author notifications: the filter decides"
slug: post-author-notifications-the-filter-decides
tags: []
---

The `notify_post_author` filter [now has the final say](https://make.wordpress.org/core/2026/08/05/the-notify_post_author-filter-now-has-the-final-say-on-post-author-notifications/): approval status is checked before the filter runs, so it receives an accurate default and returning `true` reliably sends a notification — even for unapproved comments. Sites forcing notifications with `__return_true` should switch to a callback that checks approval, or they’ll start receiving emails for spam and moderated comments. ([#64217](https://core.trac.wordpress.org/ticket/64217)). More Details can be found in the Dev note [The notify\_post\_author filter now has the final say on post author notifications](https://make.wordpress.org/core/2026/08/05/the-notify_post_author-filter-now-has-the-final-say-on-post-author-notifications/)
