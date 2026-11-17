---
title: "Media editor: restore the original image"
slug: media-editor-restore-the-original-image
tags: [end user, site admin]
flags: [check, visuals]
---

The media editor modal from 7.1 can now restore an image to its original, uncropped version from the **More options** menu ([#81805](https://github.com/WordPress/gutenberg/pull/81805)). WordPress keeps track of which original an edited image came from to make this possible ([#81803](https://github.com/WordPress/gutenberg/pull/81803)).

Images are also attached to the post when you save it. Unattached images in Image and Gallery blocks get the current post as their parent, which makes the **Uploaded to this post** filter and dynamic galleries more useful ([#81977](https://github.com/WordPress/gutenberg/pull/81977)). This is skipped on sites with attachment pages turned on, and on published posts only newly added images are attached ([#84851](https://github.com/WordPress/gutenberg/pull/84851), [#84890](https://github.com/WordPress/gutenberg/pull/84890)).

Tracking: [WordPress 7.2 Iteration: Media Editor Modal](https://github.com/WordPress/gutenberg/issues/80389) (#80389)
