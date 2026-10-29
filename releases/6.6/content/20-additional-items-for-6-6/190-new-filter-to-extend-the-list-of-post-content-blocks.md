---
title: New filter to extend the list of post content blocks
slug: new-filter-to-extend-the-list-of-post-content-blocks
tags: [plugin author, developer]
---

[When a template is locked](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-templates/#locking), the template is rendered but all the blocks, except post content blocks, that are within the template have their block editing mode set to disabled. Previously, if you created a custom block that reads / writes data to the post object, your block wasn’t able to be edited directly as the list of allowed blocks was hardcoded. A new filter is now available so you can extend the list of post content blocks to include a custom or third party block that you want folks to be able to edit directly when a template is locked. This is particularly helpful for an agency or enterprise environment that needs to lock templates and selectively allow control over what’s editable. Any block that saves data to a post should be added to this list.

**Adoption approach:** [review the block filters documentation](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-postcontentblocktypes) for an example and more information.
**Key Make Posts/GitHub/Trac Issue(s):** Add filter to allow extending the list of post content blocks ([60068](https://github.com/WordPress/gutenberg/pull/60068))
