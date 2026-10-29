---
title: Gallery and the attached images workflow in the Media Library
slug: gallery-and-the-attached-images-workflow-in-the-media-librar
tags: [end user, site admin]
---

Images you upload while writing a post have always been “attached” to that post. This specifically true for older sites, pre-Block editor. Attached images where no accessible as an cluster and need to be added the block editor canvas one at a time. WordPress 7.1 finally puts that relationship to work in the editor, via an additional filter drop-down item **Uploaded to this post** in the Media Library Inserter modal. Photos and other media you’ve uploaded stay within reach for reuse instead of disappearing into the media library. 

The Gallery block is the showcase: instead of hand-picking every image, a single **Use attached images** button populates a dynamic gallery from all media attached to the current post ([#78796](https://github.com/WordPress/gutenberg/pull/78796)). For content creators, this makes assembling image galleries faster and more flexible. It also helps reorganize image on older posts. The Source panel provides options for sorting the images. This brings the block editor handling of Galleries up to par with some features of the [ gallery ] shortcode.

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="657" height="170" data-attachment-id="46339" data-permalink="https://gutenbergtimes.com/wordpress-7-1-source-of-truth/use-attached-images-wp71/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Use-attached-images-wp71.png?fit=657%2C170&amp;ssl=1" data-orig-size="657,170" data-comments-opened="1" data-image-title="Use attached images-wp71" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Use-attached-images-wp71.png?fit=657%2C170&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Use-attached-images-wp71.png?resize=657%2C170&amp;ssl=1" alt="" class="wp-image-46339" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Use-attached-images-wp71.png?w=657&amp;ssl=1 657w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Use-attached-images-wp71.png?resize=300%2C78&amp;ssl=1 300w" sizes="auto, (max-width: 657px) 100vw, 657px"></figure>

To have entire freedom to control the Gallery block, the Detach feature comes in handy. A **Detach** button in the toolbar and in the sidebar’s **Source** panel, makes out a stand-alone Gallery without the dynamic connetion to the post’s image. Using it help user to edit/upate the gallery block. 

Below video visualizes the connection between a list of image attached to a post from the Media Library and the gallery block with the new feature. 

Tracking: [WordPress 7.1: dynamic galleries and post-attached media iteration issue](https://github.com/WordPress/gutenberg/issues/77117) (#77117)

It’s a step back toward the simplicity of dropping photos into a post and having WordPress do the arranging. It’s the first visible piece of a larger effort around [dynamic galleries and post-attached media](https://github.com/WordPress/gutenberg/issues/76955), with dynamic queries by date and eventually categories or tags ahead.

<figure class="wp-block-jetpack-videopress jetpack-videopress-player" style=""><div class="jetpack-videopress-player__wrapper"><iframe loading="lazy" title="VideoPress Video Player" aria-label="VideoPress Video Player" width="500" height="352" src="https://videopress.com/embed/AO4ZRt7G?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" frameborder="0" allowfullscreen="" data-resize-to-parent="true" allow="clipboard-write; presentation"></iframe><script src="https://v0.wordpress.com/js/next/videopress-iframe.js?m=1770107250"></script></div></figure>
