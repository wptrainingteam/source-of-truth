---
title: Directly edit custom field values and view bindings with Custom Fields & Block Bindings API
slug: directly-edit-custom-field-values-and-view-bindings-with-cus
tags: [plugin author, developer]
---

The Block Bindings API launched in 6.5 allows you to bind dynamic data to block attributes, solving many use cases for custom blocks and powering other features, like overrides in synced patterns. At this stage, work focused on refactoring the existing editor implementation, adding a block bindings panel to the Inspector to better surface bindings, allowing the editing of connected sources directly from the block, and updating the save flow to show changes to edited custom field values. When combined, these changes provide a more intuitive experience for end users interacting with connected blocks. Future work will focus on making the APIs public and continuing to refine the UX. 

**Visuals:** [image](https://drive.google.com/file/d/1e7hMYMHHMsCjuPPzAWsHOZcWINNCUvNA/view?usp=drive_link) of the bindings in the inspector, [various demos](https://github.com/WordPress/gutenberg/issues/60956#issuecomment-2144790954) of editing the value of a custom field

**Adoption approach:** If you haven’t yet checked out these APIs, it’s recommended to review the resources released for 6.5 including the [Block Bindings API](https://make.wordpress.org/core/2024/03/06/new-feature-the-block-bindings-api/) dev note and these paired [part 1](https://developer.wordpress.org/news/2024/02/20/introducing-block-bindings-part-1-connecting-custom-fields/) and [part 2](https://developer.wordpress.org/news/2024/03/06/introducing-block-bindings-part-2-working-with-custom-binding-sources/) of dedicated developer blog posts.
**Key Make Posts/GitHub/Trac Issue(s):** Follow this [iteration issue](https://github.com/WordPress/gutenberg/issues/60956) for more information.
