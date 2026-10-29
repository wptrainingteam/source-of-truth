---
title: Override specific items in synced patterns while keeping stylistic control
slug: override-specific-items-in-synced-patterns-while-keeping-sty
tags: []
---

Overrides in synced patterns allow you to ensure a synced layout and style across patterns while allowing each instance of the pattern to have customized content. This provides consistency in design across different pieces of content. Currently, the following blocks and block attributes can add overrides:

*   Heading block: content
*   Paragraph block: content
*   Button Block: text, url
*   Image Block: url, id, title, alt

For instance, consider a testimonial pattern. With this additional option, someone can insert this testimonial pattern into multiple posts, ensuring that the layout and styling remains the same. Meanwhile, the content, such as Name, Image, and Role, would be local to each instance allowing for individual customization. Additionally, folks would then be able to revisit and modify the design of the overall testimonial pattern without affecting the content in existing instances.

To set overrides, select a block within a synced pattern > open block settings > head to “Advanced” > select the option to “Enable Override”. From there, you’ll name a block and an override is set. If you choose to later turn off that override, you can do so using the same flow and selecting “Disable Override”. Keep in mind that when you do this, every instance that was customized of that block will be reverted back to what’s in the original synced pattern.

To make it more intuitive to work with overrides, the UX was carefully considered with the ability to see exactly which blocks are editable via a handy list in the block settings sidebar and a visual cue of a purple background that flashes when you click into a synced pattern that lights up each editable block.

Of note, synced pattern overrides are not available in themes (i.e. patterns stored in theme folders) and are intended to be user generated features as this follows the current inability for themes to provide synced patterns overall. 

**Visuals:** [demo](https://drive.google.com/file/d/1qw0wFL8BSTF6eui8xqrwUfb8JfnMrq4L/view?usp=drive_link) showing how to create an override, edit it, disabling, and resetting to original.
**Key Make Posts/GitHub/Trac Issue(s):** Follow this [iteration issue](https://github.com/WordPress/gutenberg/issues/59819#top) for more information, Adjust allow pattern overrides UX flow. ([60769](https://github.com/WordPress/gutenberg/pull/60769))
