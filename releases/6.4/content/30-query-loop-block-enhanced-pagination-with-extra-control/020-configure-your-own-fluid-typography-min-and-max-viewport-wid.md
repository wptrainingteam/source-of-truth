---
title: Configure your own fluid typography min and max viewport width
slug: configure-your-own-fluid-typography-min-and-max-viewport-wid
tags: [theme author]
---

After fluid typography was introduced in WordPress 6.1, extenders expressed wanting more control over the inner workings of this feature. To provide that, you can now set your own min and max viewport width values to the  typography.fluid theme.json schema. For context, the min and max viewport widths define the boundaries for when font size clamp values will stop being “fluid”. For example, consider the following theme.json settings:

“typography”: {

“fluid”: {

“maxViewportWidth”: “800px”,

“minViewportWidth”: “600px”

},

                  }

In this example, between the browser widths of 600px and 800px a font size will be fluid. If the browser width is narrower or wider, the font size will no longer shrink or grow.

**Adoption approach:** opt in by setting your own default sizes. 

**Key Make Posts/GitHub/Trac Issue(s):**  Fluid Typography: Added ability for theme developers to configure their own default min and max viewport widths for calculating fluid font sizes ([53081](https://github.com/WordPress/gutenberg/pull/53081))
