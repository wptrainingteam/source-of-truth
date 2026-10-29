---
title: Pattern Overrides for custom blocks
slug: pattern-overrides-for-custom-blocks
tags: []
---

Since WordPress 6.5, [Pattern Overrides](https://developer.wordpress.org/news/2024/06/an-introduction-to-overrides-in-synced-patterns/) let you create synced patterns where the layout stays consistent but specific content can change per instance. The catch? Only four core blocks supported it: Heading, Paragraph, Button, and Image.

Not anymore. Any block attribute that supports Block Bindings now supports Pattern Overrides by default. Block authors can opt in through the server-side [`block_bindings_supported_attributes`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-bindings/#extending-supported-attributes) filter. This closes [a long-requested enhancement](https://github.com/WordPress/gutenberg/issues/64870) and opens up synced patterns to custom blocks ([73889](https://github.com/WordPress/gutenberg/pull/73889)).

<figure class="wp-block-jetpack-videopress jetpack-videopress-player" style=""><div class="jetpack-videopress-player__wrapper"><iframe loading="lazy" title="VideoPress Video Player" aria-label="VideoPress Video Player" width="500" height="340" src="https://videopress.com/embed/oszbVuih?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" frameborder="0" allowfullscreen="" data-resize-to-parent="true" allow="clipboard-write; presentation"></iframe><script src="https://v0.wordpress.com/js/next/videopress-iframe.js?m=1770107250"></script></div></figure>
