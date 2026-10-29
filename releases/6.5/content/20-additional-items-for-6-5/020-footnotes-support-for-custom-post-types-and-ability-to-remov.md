---
title: "Footnotes: support for custom post types and ability to remove footnotes support"
slug: footnotes-support-for-custom-post-types-and-ability-to-remov
tags: []
---

After feedback that folks [wanted to see support for custom post types](https://github.com/WordPress/gutenberg/issues/52812) for footnotes, work was done to do exactly that. Footnotes now work by default on all post types that support the editor and meet basic requirements (the post type must be public, appear in the REST API, and must support all of the following: editor, custom-fields, and revisions). To round out this work, extenders are also able to disable footnotes from any post type, including the default ones like posts and pages.  

**Adoption approach:** Here’s an example of how to remove footnotes support from pages using the following code:

```
function remove_footnotes_support_from_pages() {unregister_post_meta( 'page', 'footnotes' );}add_action( 'init', 'remove_footnotes_support_from_pages', 100 );
```

**Key Make Posts/GitHub/Trac Issue(s):** Add: Footnotes support for other CPT’s ([57353](https://github.com/WordPress/gutenberg/pull/57353))
