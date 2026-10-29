---
title: Override styles dynamically
slug: override-styles-dynamically
tags: [plugin author, developer]
---

The [hook \`useStyleOverride\` is now available for plugin developers](https://github.com/WordPress/gutenberg/pull/63656) so that styles can be added to the canvas by blocks. This can be especially useful when packaging a component library with custom styles rather than instructing developers to enqueue a separate stylesheet in all the correct locations. 

**Adoption approach:** opt in. 
**Key Make Posts/GitHub/Trac Issue(s):** Make useStyleOverride public ([63656](https://github.com/WordPress/gutenberg/pull/63656))
