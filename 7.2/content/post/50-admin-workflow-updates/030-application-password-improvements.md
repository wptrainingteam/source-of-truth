---
title: Email notice for new application passwords
tags: [site admin, enterprise, plugin author]
---

Users now get an email when an application password is added to their account, so they notice one they didn't create. Plugins can change the email with the `wp_application_password_created_email` filter or turn it off with the `wp_send_application_password_created_email` filter ([#63927](https://core.trac.wordpress.org/ticket/63927)).
