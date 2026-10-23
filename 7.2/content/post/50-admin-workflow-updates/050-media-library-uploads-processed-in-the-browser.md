---
title: Media Library uploads processed in the browser
tags: [site admin, end user, enterprise]
---

Uploads from the Media Library, the **Add New Media File** screen, and the media modal in the block editor now use client-side media processing, as block editor uploads already do. In supported browsers, the original file goes up through the REST API and the browser creates the image sub-sizes, which helps on hosts with limited image processing ([#65661](https://core.trac.wordpress.org/ticket/65661)).

Some uploads stay on the classic path: audio files, JPEG and PNG files while plupload resizing is on, and uploads from the Customizer, the Site Icon picker, and the classic editor. If client-side processing is turned off, every upload works as before.
