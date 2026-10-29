---
title: "Cover Block: control video embed providers"
slug: cover-block-control-video-embed-providers
tags: [theme builder, plugin author, enterprise, developer]
---

Besides gaining the new media editor modal for background images, the Cover block addresses a request from community feedback. When the block’s “Embed video from URL” feature shipped in WordPress 7.0, site builders [asked for a way to curate or disable it](https://github.com/WordPress/gutenberg/issues/75069). WordPress 7.1 adds a new allowedVideoProviders attribute to restrict which video providers are offered, or to remove the URL-embed option entirely by allowing none ([#80092](https://github.com/WordPress/gutenberg/pull/80092)). Existing embeds keep working; only new URL input in the editor is restricted. 

The details are already reflected in the [Cover block’s documentation](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/core-blocks-media/core-block-cover/).
