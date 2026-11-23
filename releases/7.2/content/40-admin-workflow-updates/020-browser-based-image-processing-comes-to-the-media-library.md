---
title: Browser-based image processing comes to the Media Library
slug: browser-based-image-processing-comes-to-the-media-library
tags: [site admin, end user, enterprise]
flags: [check, visuals]
---

Browser-based image processing, which arrived for block editor uploads in 7.1, now also covers the **Media Library** grid, the **Add New Media File** screen, and the editor’s media modal ([r64588](https://core.trac.wordpress.org/changeset/64588)). Your browser creates the image sizes instead of the server, so large uploads are far less likely to fail with timeouts or memory errors. Animated GIFs and WebPs also keep their animation in their sub-sizes now, including cropped sizes like thumbnails ([r64490](https://core.trac.wordpress.org/changeset/64490)).

It runs in Chromium-based browsers, version 137 and newer. Firefox, Safari, non-image files, the Customizer, and the classic editor keep the classic upload flow. On multisite networks with upload quotas, every generated sub-size now counts against the quota.

Developers can turn it off with the `wp_client_side_media_processing_enabled` filter, or keep sub-sizes static with the `wp_generate_animated_image_subsizes` filter. These uploads go through the REST API, so code that detects uploads with `$_POST['action']` or `DOING_AJAX` needs updating.

Read more: [Media changes in WordPress 7.2](https://make.wordpress.org/core/2026/11/17/media-changes-in-wordpress-7-2/)

Tracking: [#65661](https://core.trac.wordpress.org/ticket/65661)
