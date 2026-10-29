---
title: "Gallery block: Styled scrollbars for captions"
slug: gallery-block-styled-scrollbars-for-captions
tags: [end user, theme author]
---

Transparently styled scrollbars have been added to Image blocks nested inside of Gallery blocks, addressing a longstanding design issue with long captions that didn’t fit well into the small space allotted to them. This change adds new CSS with high specificity, targeting .wp-block-gallery.has-nested-images figure.wp-block-image figcaption. If you’ve added custom scrollbar handling in your themes, be sure to test that this new code does not break your custom styles.

**Visuals:** [demo](https://drive.google.com/file/d/1ltmAVeK59C84Sk1xvZa0ydam2pkP6VPh/view?usp=drive_link) showing a long caption and styled scrollbars in use

**Key Make Posts/GitHub/Trac Issue(s):** Gallery block: add styled scrollbars ([56252](https://github.com/WordPress/gutenberg/pull/56252))
