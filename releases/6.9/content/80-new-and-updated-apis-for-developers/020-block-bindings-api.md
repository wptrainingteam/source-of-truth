---
title: Block Bindings API
slug: block-bindings-api
tags: []
---

Updates to the [Block Bindings API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-bindings/) include enabling it for a few more core blocks. The refactor of the Date block is one of those examples. ([70585](https://github.com/WordPress/gutenberg/pull/70585))

Another is enabling Image block’s caption data to be available for Synced Pattern Overrides. ([72476](https://github.com/WordPress/gutenberg/pull/72476)).  

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="845" height="263" data-attachment-id="42996" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/block-bindings-list-of-supported-blocks/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Block-bindings-list-of-supported-blocks.png?fit=845%2C263&amp;ssl=1" data-orig-size="845,263" data-comments-opened="1" data-image-title="Block-bindings-list-of-supported-blocks" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Block-bindings-list-of-supported-blocks.png?fit=845%2C263&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Block-bindings-list-of-supported-blocks.png?resize=845%2C263&amp;ssl=1" alt="" class="wp-image-42996" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Block-bindings-list-of-supported-blocks.png?w=845&amp;ssl=1 845w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Block-bindings-list-of-supported-blocks.png?resize=300%2C93&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Block-bindings-list-of-supported-blocks.png?resize=768%2C239&amp;ssl=1 768w" sizes="auto, (max-width: 845px) 100vw, 845px"><figcaption class="wp-element-caption">The list of supported block attributes by Block Bindings API.</figcaption></figure>

The function \`getFieldsList\` was available via the Gutenberg plugin and has been merged into WordPress Core now. Also, the attributes UI in the Block editor is now more flexible and handles any attributes from plugin developers. [Details will be available on the DevNote.]
More details can be found in the Dev Note: [Block Bindings improvements in WordPress 6.9](https://make.wordpress.org/core/2025/11/12/block-bindings-improvements-in-wordpress-6-9/)
