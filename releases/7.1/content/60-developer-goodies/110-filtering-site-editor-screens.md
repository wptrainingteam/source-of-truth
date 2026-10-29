---
title: Filtering Site Editor screens
slug: filtering-site-editor-screens
tags: []
---

Plugin developers can now configure the Site Editor’s Pages, Templates, Template Parts, and Patterns screens through four new PHP filters — one per screen. Each filter adjusts the DataViews and DataForm components powering these screens: the default view (layout, sort order, visible fields), the layouts available to users, the preconfigured views in the sidebar such as “All” or “Drafts,” and the fields shown in the Quick Edit form.

This creates a single place of configuration per entity, with more screens — including the editor inspector — planned to draw from the same source in future releases ([#76544](https://github.com/WordPress/gutenberg/issues/76544)). Code examples are in the Dev Note: [Filtering Site Editor Screens in WordPress 7.1.](https://make.wordpress.org/core/2026/07/31/filtering-site-editor-screens-in-wordpress-7-1/)
