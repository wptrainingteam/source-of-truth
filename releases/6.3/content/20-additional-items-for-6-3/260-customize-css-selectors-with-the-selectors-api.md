---
title: Customize CSS selectors with the Selectors API
slug: customize-css-selectors-with-the-selectors-api
tags: [plugin author]
---

_This is pulled from_ [_What’s New for Developers May 2023_](https://developer.wordpress.org/news/2023/05/whats-new-for-developers-may-2023/)_._

The [Selectors API](https://github.com/WordPress/gutenberg/pull/46496) allows you to customize the CSS selectors used when your block styles are generated. This change means fewer workarounds and more fine-grained control over your block. You can now define your block’s selectors in block.json by setting the selectors object. By default, the root selector is your block’s generated class. You can target the root, specific features (e.g., color), and even sub-features (e.g., typography > text-decoration). Here is a block.json example of using the Selectors API:

```
{

"selectors": {

"root": ".your-block-selector",

"color": ".your-block-selector > div",

"typography": {

"root": ".your-block-selector h2",

"text-decoration": ".your-block-selector h2 span"

}

}

}
```

Defining custom selectors allows WordPress to automatically generate the appropriate CSS for the block, as shown below:

```
.your-block-selector > div {

color: var( --wp--preset--color--contrast );

background: var( --wp--preset--color--base );

}

.your-block-selector h2 {

font-family: var( --wp--preset--font-family--primary );

}

.your-block-selector h2 span {

text-decoration: underline;

}
```

**Adoption approach:** For a full overview, visit the [Selectors API documentation](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-selectors/) in the Block Editor Handbook.

**Key Make Posts/GitHub/Trac Issue(s):** Block.json: Refactor and stabilize selectors API ([46496](https://github.com/WordPress/gutenberg/pull/46496)), [What’s New for Developers May 2023](https://developer.wordpress.org/news/2023/05/whats-new-for-developers-may-2023/)
