---
title: A closer look at performance optimizations
slug: a-closer-look-at-performance-optimizations
tags: [developers, enterprise]
---

WordPress 6.9 speeds up your site through several technical improvements. Scripts load more efficiently with priority ordering and move to footers when appropriate. Stylesheets load only when needed, particularly in classic themes, while styles for hidden blocks are omitted. The inline style limit increased to 40K. A new optimization system enables previously impossible efficiency gains. Database queries, UTF-8 processing, and cron tasks all improved. The Video block also eliminates layout shifts. Overall: more efficient performance across the board.

Details are in this Dev Note: [WordPress 6.9 Frontend Performance Field Guide](https://make.wordpress.org/core/2025/11/18/wordpress-6-9-frontend-performance-field-guide/).
