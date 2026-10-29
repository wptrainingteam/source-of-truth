---
title: Notes move toward a full commenting workflow
slug: notes-move-toward-a-full-commenting-workflow
tags: [end user, site admin, developer, enterprise]
---

Notes, the inline editorial comments right in the editor, continue to mature, with several additions in this release that make asynchronous collaboration richer and easier to act on without leaving WordPress.

The headline feature: [inline notes](https://github.com/WordPress/gutenberg/pull/78218). You can now attach a note to a specific text selection rather than to a whole block. Select part of a paragraph, add a note, and the highlight stays anchored to that text as you keep editing around it. A single block can carry multiple inline notes, sorted by the order they appear, and none of the highlighting shows up in the published post. Also, blocks are no longer limited to a single conversation, either — you can start [multiple note threads on the same block](https://github.com/WordPress/gutenberg/pull/75147).

The conversations themselves got more expressive, too. Notes now support [rich text formatting](https://github.com/WordPress/gutenberg/pull/78242) — bold, italic, links, and code. [@mention autocomplete](https://github.com/WordPress/gutenberg/pull/79604) makes it quick to pull a colleague into a thread. Longer notes collapse behind a [“Show more” toggle](https://github.com/WordPress/gutenberg/pull/77446), and a [“Resolved” divider](https://github.com/WordPress/gutenberg/pull/80019) in the sidebar separates finished discussions from open ones, so it’s easy to see what still needs attention.

Tracking: [Notes iteration for WordPress 7.1](https://github.com/WordPress/gutenberg/issues/76316) (#76316)

<figure class="wp-block-jetpack-videopress jetpack-videopress-player" style=""><div class="jetpack-videopress-player__wrapper"><iframe loading="lazy" title="VideoPress Video Player" aria-label="VideoPress Video Player" width="500" height="281" src="https://videopress.com/embed/v744I57m?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" frameborder="0" allowfullscreen="" data-resize-to-parent="true" allow="clipboard-write; presentation"></iframe><script src="https://v0.wordpress.com/js/next/videopress-iframe.js?m=1770107250"></script></div></figure>
