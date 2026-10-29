---
title: Additional Performance improvements
slug: additional-performance-improvements
---

For the WordPress 6.8 release, several key performance improvements have been implemented in the block editor and collectively contribute to a more responsive and efficient editing experience.

*   To address performance issues in the site editor when handling navigation blocks with multiple submenu. The `isBlockVisibleInTheInserter` selector was improved to prevent unnecessary computations, resulting in a more efficient block editor experience (#[68898](https://github.com/WordPress/gutenberg/pull/68898)).
