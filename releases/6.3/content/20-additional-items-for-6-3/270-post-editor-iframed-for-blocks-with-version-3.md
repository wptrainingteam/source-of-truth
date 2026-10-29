---
title: "Post Editor iframed for blocks with version 3+"
slug: post-editor-iframed-for-blocks-with-version-3
tags: [plugin author]
---

Building on prior work, for 6.3, the Post Editor will be iframed if all registered blocks have a Block API version 3 or higher. Adding version 3 support means that the block should work inside an iframe, though the block may still be rendered outside the iframe if not all blocks support version 3. It is worth noting that the Site Editor and Page Template Editor have always been iframed, alongside with block and pattern previews, and will continue to be iframed regardless of Block API version.

In order to make adoption easier, all assets (styles and scripts) added through the enqueue\_block\_assets PHP filter will now also be enqueued for the iframe. 

Please try to make your blocks compatible and report any bugs/issues you have. In a future version of WordPress, the editor content will load within an iframe regardless of the Block API version.

**Adoption approach:** See [this PR](https://github.com/WordPress/gutenberg/pull/48286) for more information.

**Key Make Posts/GitHub/Trac Issue(s):** For more information about why we are iframing the editor content, [see this prior Make post](https://make.wordpress.org/core/2021/06/29/blocks-in-an-iframed-template-editor/).
