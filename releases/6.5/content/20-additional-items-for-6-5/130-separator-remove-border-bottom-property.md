---
title: "Separator: Remove border-bottom property"
slug: separator-remove-border-bottom-property
tags: [theme author, plugin author]
---

Previously, the Separator block was using a top and bottom border of 1px to create the horizontal line. This change removes the bottom border and increases the border-top to 2px to address an occasional visual gap happening between the top and bottom border within the editing experience. Please review your theme or plugin if it sets a height on the HR tag or Separator block. 

**Key Make Posts/GitHub/Trac Issue(s):**  Separator: Remove border-bottom property ([55725](https://github.com/WordPress/gutenberg/pull/55725#event-11629659612))
