---
title: "Why iframe the Post Editor?"
slug: why-iframe-the-post-editor
tags: [plugin author, enterprise]
---

The process to [restructure how the WordPress post editor works](https://make.wordpress.org/core/2021/06/29/blocks-in-an-iframed-template-editor/) started a few years ago.  WordPress 6.9 begins transitioning the editor into this isolated iframe, with full completion coming in WordPress 7.0.  Think of an iframe like a sandbox—a separate container within a webpage. Currently, the editor runs in the same space as WordPress’s admin interface, causing styling conflicts. This separation prevents admin styles from interfering with content editing, making the editor preview match what readers actually see. Plugin developers need to update older blocks to work with this new setup or they might stop functioning properly. 

The Dev note [Preparing the Post Editor for Full iframe Integration](https://make.wordpress.org/core/2025/11/12/preparing-the-post-editor-for-full-iframe-integration/) has more details. And in the comments many immediate questions have been answered.
