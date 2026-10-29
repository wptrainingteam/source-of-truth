---
title: Add ability to preview template in post editor for non administrators
slug: add-ability-to-preview-template-in-post-editor-for-non-admin
tags: [site admin, enterprise]
---

In WordPress 6.5 the ability to preview a template while working on a post or page was added, enabling an easy workflow to see how your content will look live on the site as well as to make any quick changes to the template directly. Previously, this option was reserved just for administrators but this release allows non-administrators to see templates while editing content. This means that folks who can only view templates are able to gain access to the preview while still being limited in their ability to edit templates directly. 

**Adoption approach:** If you want folks who aren’t administrators to have access, ensure that their role is set to allow the edit\_post capability.
**Key Make Posts/GitHub/Trac Issue(s):** Enable template preview in post editor for non administrators ([60447](https://github.com/WordPress/gutenberg/pull/60447))
