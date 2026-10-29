---
title: Ensure all custom taxonomies/post types are available for the Navigation block
slug: ensure-all-custom-taxonomies-post-types-are-available-for-th
tags: [plugin author]
---

This fix ensures that all registered custom post types or taxonomies are automatically available as block variations of the Navigation Link block. This means you can register a custom post type, like Products, and then add a “Product Link” block to the Navigation block that is specifically preconfigured to search for Product posts.

**Key Make Posts/GitHub/Trac Issue(s):** Navigation Link block: register variations on post type / taxonomy registration ([54801](https://github.com/WordPress/gutenberg/pull/54801))  & Navigation Link Block: Variations for post types may not contain all post types ([56100](https://github.com/WordPress/gutenberg/pull/56100)).
