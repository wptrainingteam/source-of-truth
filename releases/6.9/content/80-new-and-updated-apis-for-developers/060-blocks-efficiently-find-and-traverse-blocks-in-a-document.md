---
title: "Blocks: Efficiently find and traverse blocks in a document."
slug: blocks-efficiently-find-and-traverse-blocks-in-a-document
tags: []
---

The Block Processor class is now available in WordPress 6.9 to efficiently scan through and manipulate block structure in a lazy and streaming manner. For certain workloads this should dramatically improve the performance of processing code, and even more importantly, prevent out-of-memory crashes in the worst cases. [[Core#9105](https://github.com/WordPress/wordpress-develop/pull/9105)] [(61401)](https://core.trac.wordpress.org/ticket/61401). 

It’s an more 

Do you need to do any of the following kinds of things? Check out [WP\_Block\_Processor](https://github.com/WordPress/wordpress-develop/blob/trunk/src/wp-includes/class-wp-block-processor.php)!

*   Checking if a post contains a block of a given type.
*   Counting or detecting all of the kinds of blocks present in a post.
*   Modifying a block of a given kind within a post, not touching any of the other blocks.
*   Finding the “wrapper element” surrounding the inner blocks and adding a class name to it.
*   Extract sections of a document as blocks, modify it, serialize it back, and replace the original blocks with the new HTML.

Dev Note: [Introducing the streaming block parser in WordPress 6.9](https://make.wordpress.org/core/?p=119384&preview=1&_ppp=7c4f90d12d)
