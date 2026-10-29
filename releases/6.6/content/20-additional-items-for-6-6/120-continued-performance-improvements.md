---
title: Continued performance improvements
slug: continued-performance-improvements
tags: []
---

As always, performance was on the mind for contributors this release cycle with a few stand out items to [bring to attention from a larger list:](https://core.trac.wordpress.org/query?status=closed&focuses=~performance&milestone=6.6&col=id&col=summary&col=status&col=focuses&col=owner&col=type&col=priority&order=priority)

*   Remove additional calls to WP\_Theme\_JSON::\_construct ([59600](https://core.trac.wordpress.org/ticket/59600)). 
*   Disable autoload for large options ([42441](https://core.trac.wordpress.org/ticket/42441)) with a [dedicated developer note](https://make.wordpress.org/core/2024/06/18/options-api-disabling-autoload-for-large-options/). 
*   Remove unnecessary polyfill dependencies ([60962](https://core.trac.wordpress.org/ticket/60962)).
*   Lazy load post embeds ([58143](https://core.trac.wordpress.org/ticket/58143)).
*   A new \`data-wp-on-async\` directive, being a performant async alternative to \`data-wp-on\` ([61885](https://github.com/WordPress/gutenberg/pull/61885))

In addition, you can expect improvement to editor performance, [with a specific shout out to a 35% reduction in template loading](https://github.com/WordPress/gutenberg/issues/60435#top).
