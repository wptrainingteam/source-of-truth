---
title: Connect block attributes and Custom Fields with help from the Block Bindings API
slug: connect-block-attributes-and-custom-fields-with-help-from-th
tags: [theme author, plugin author, enterprise]
---

In WordPress 6.5, it is finally possible to connect Core blocks like paragraphs and images to custom fields, removing the need for custom blocks in many cases when you want to use the value of a custom field. At a high level, two new projects intertwine to bring about these new features:

*   Block Bindings API: Internal API to connect block attributes and different sources, used for both Custom Fields and for the future ability to override synced pattern attributes (this feature was pushed to 6.6).
*   Using the Block Bindings API, support for the “meta\_fields” source to connect block attributes and custom fields.

The main focus for 6.5 is to enable the bindings in the server without a UI in the editor first, allowing for the ability for theme developers to create bindings in the HTML and third party sources to experiment with bindings. [More work is already planned for WordPress 6.6](https://github.com/WordPress/gutenberg/issues/53300) to expand what you can do.

#### Connect block attributes and custom fields

Folks will be able to bind them by adding a “bindings” object in the block attributes like so:

```
<p>Paragraph</p>
```

After adding something like the above, the following will occur in both the editor and frontend: 

*   In the editor: It will show the value of the custom field if a post ID exists in the context, and it will lock the appropriate controls. For example, in the case of the paragraph or heading content, they become non-editable, while in the case of the image URL, it hides the controls to replace the media.
*   In the frontend: It will get the value of the custom field, and it will replace the appropriate HTML.

Right now, for this initial version, only the following block attributes can be connected with all types of registered sources:

*   Paragraph: content.
*   Heading: content.
*   Image: URL, alt, and title.
*   Button: text, URL, linkTarget, rel.

Of note, when users do run across a block that has a connected field, they are met with a read only interface, similar to when a block is locked. 

#### Developers can add support for other dynamic data sources

This work also means theme/pattern/plugin developers can add support for other dynamic data sources. The underlying code used to connect custom fields, [the Block Bindings API](https://github.com/WordPress/gutenberg/issues/54536), has been designed to be extensible enough so it is easier to connect block bindings and other dynamic data sources. This release includes a basic public API allowing developers/plugins to register their own sources. [This is just the first step of a larger project](https://github.com/WordPress/gutenberg/issues/51373) that aims to simplify how custom fields and other dynamic data are managed in a compelling way. 

**Adoption approach:** While there are binding sources for handling post meta (custom fields), you can register [your own binding sources](https://core.trac.wordpress.org/changeset/57373) for deeper customization. Check out [this developer blog post to get started](https://developer.wordpress.org/news/2024/02/20/introducing-block-bindings-part-1-connecting-custom-fields/) along with [part 2](https://developer.wordpress.org/news/2024/03/06/introducing-block-bindings-part-2-working-with-custom-binding-sources/) on the same topic.

**Key Make Posts/GitHub/Trac Issue(s):**  

*   [Block Bindings API](https://make.wordpress.org/core/2024/03/06/new-feature-the-block-bindings-api/) dev note
*   Block Bindings: Disable editing of bound block attributes in editor UI ([58085](https://github.com/WordPress/gutenberg/pull/58085)).
*   Tracking issue: Connecting block attributes and custom fields ([53300](https://github.com/WordPress/gutenberg/issues/53300)).
