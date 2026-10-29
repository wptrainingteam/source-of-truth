---
title: PHP-only block registration
slug: php-only-block-registration
tags: []
---

Developers can now create simple blocks using only PHP. This is meant for blocks that only need server-side rendering and aren’t meant to be highly interactive. When possible this feature also auto-generates sidebars for user input for suitable attributes and design tools.

To do so, call `register_block_type` with the new `autoRegister` flag. A `render_callback` function must also be provided. ([71792](https://github.com/WordPress/gutenberg/issues/71792))

Dev note with all the details. [PHP-only block registration](https://make.wordpress.org/core/2026/03/03/php-only-block-registration/)
