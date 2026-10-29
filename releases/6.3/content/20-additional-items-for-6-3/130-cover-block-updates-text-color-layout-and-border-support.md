---
title: "Cover block updates: text color, layout, and border support"
slug: cover-block-updates-text-color-layout-and-border-support
tags: [end user, theme author]
---

The Cover block has added support for text colors, all border-related design tools, and flow layout. Adding these options to this well loved and used block will help reduce the need for custom block styling and make it simpler to customize overall. For example, just by adding text color support, it will only take quick changes to a single setting to customize the colors of all inner blocks. With layout controls, the Cover block now works the same as the Group block with its layout handling. For 6.3, it will only [support the flow layout](https://github.com/WordPress/gutenberg/pull/45326) and is set to a constrained width by default.

**Visuals:** [image of text color controls](https://drive.google.com/file/d/1ieKtIOucrZ35oVxVkSM4uLz0eGvsxysM/view?usp=sharing), [image of layout controls](https://drive.google.com/file/d/1mQlI7w4x1GVs_BNee7IjNQb8P_nnVzol/view?usp=sharing).

**Adoption approach:** Theme authors should test their themes against these changes. In the past, some have had to work around the layout limitations of the Cover block, and the block’s support of the standard layout system may override custom implementations.

**Key Make Posts/GitHub/Trac Issue(s):** 

*   Add text color controls and borders support ([41153](https://github.com/WordPress/gutenberg/pull/41153)).
*   Add text color controls ([41572](https://github.com/WordPress/gutenberg/pull/41572)).
*   Simplify cover block description. ([50355](https://github.com/WordPress/gutenberg/pull/50355)).
*   Add constrained/flow layout to Cover block ([45326](https://github.com/WordPress/gutenberg/pull/45326)).
