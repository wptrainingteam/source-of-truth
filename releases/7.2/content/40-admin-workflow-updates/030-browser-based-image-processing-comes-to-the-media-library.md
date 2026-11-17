---
title: Browser-based image processing comes to the Media Library
slug: browser-based-image-processing-comes-to-the-media-library
tags: [site admin, end user, enterprise]
flags: [check, visuals]
---

Browser-based image processing, which arrived for block editor uploads in 7.1, now also covers the **Media Library** grid, the **Add New Media File** screen, and the editor’s media modal ([r64588](https://core.trac.wordpress.org/changeset/64588)). Your browser creates the image sizes instead of the server, so large uploads are far less likely to fail with timeouts or memory errors. Animated images also keep their animation in their sub-sizes now ([r64490](https://core.trac.wordpress.org/changeset/64490)).

It runs in supported browsers only. Other browsers, audio files, and the Customizer and classic editor keep the classic upload flow. Developers can turn it off with the `wp_client_side_media_processing_enabled` filter.

Tracking: [#65661](https://core.trac.wordpress.org/ticket/65661)
