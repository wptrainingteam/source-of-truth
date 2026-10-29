---
title: View meta boxes in the iframed Post Editor
slug: view-meta-boxes-in-the-iframed-post-editor
tags: [plugin author, enterprise]
---

Previously, after an effort to [iframe the post editor](https://github.com/WordPress/gutenberg/issues/33346), metaboxes prevented the editor content from loading in an iframe, causing a fair amount of disruption and workarounds. To resolve this and ensure that both metaboxes and canvas content is visible when working on content, a split view option has been added to allow you to access both while editing when the editor is iframed. This change will provide a consistent WYSIWYG experience between the Editor and frontend views.

*   The editor running as an iframe will affect many plugin developers and may force you to modify your code (see [this comment](https://github.com/WordPress/gutenberg/pull/64351#issuecomment-2326301103)). Expect a dev note on this topic. Ideally, if you are building a plugin that extends the editor with custom data input, you would transition to one of the available [SlotFills](https://href.li/?https://developer.wordpress.org/block-editor/reference-guides/slotfills/) in the interface, creating a more integrated user experience.
*   This work makes the post editor canvas work as an iframe when there is a meta box.
*   The meta box area is resizable, and its height is saved as a user preference. If the browser height is low, the meta box switches to a toggleable details element.

For enterprise folks who often use plugins that add metaboxes, this is also a change to be aware of and plan for. 

**Visuals:** [demo](https://drive.google.com/file/d/1Sfa0pPnlOJ8_7sxUhrctSnayHgLYfugh/view?usp=drive_link) showing before and after this work with the Yoast plugin as an example. 
**Adoption approach:** Plugin developers may have to alter their code. Expect a dev note on this topic. [Here’s an example](https://github.com/Yoast/wordpress-seo/issues/21602) from Yoast around adjustments that had to be made.
**Key Make Posts/GitHub/Trac Issue(s):**  Try split content view with open metaboxes ([64351](https://github.com/WordPress/gutenberg/pull/64351))

Developer Note: [Post Editor iframing with meta boxes in WordPress 6.7](https://make.wordpress.org/core/2024/10/18/post-editor-iframing-with-meta-boxes-in-wordpress-6-7/)
