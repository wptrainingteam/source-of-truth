---
title: Layout changes
slug: layout-changes
tags: []
---

**Layout controls added to children of flex layout blocks for more design possibilities [theme author]**

With new controls come new design possibilities–a new dimensions control (width for row, height for stack) is available for children Row and Stack blocks with an option to select between fit, fill and fixed:

*   Fit (Default): Block fits to fill its needed space.
*   Fill: Block stretches to fill any available space. This requires a fixed height for the Stack block to stretch at all.
*   Fixed: When selected, a specific unit-based width/height can be set for the block.

If the fixed option is selected, an \`input\` for a dimension will be shown, where the fixed size can be set. 

**Adoption approach:**  This feature can be added to the container block in its \_\_experimentalLayout settings in block.json, like so:

```
"__experimentalLayout": {

"allowSizingOnChildren": true,

"default": {

"type": "flex"

}

}
```

You can learn more [about layout controls in this Gutenberg Times Live Q&A](https://gutenbergtimes.com/live-q-a-layout-layout-layout/).

**Key Make Posts/GitHub/Trac Issue(s):** Add Layout controls to children of Flex layout blocks ([45364](https://github.com/WordPress/gutenberg/pull/45364)).

**Add a Variation Picker to the Group Block Placeholder [end user]**

When a new Group block gets inserted into the page, it will present you with a variation picker to instantly choose which type of layout you want to use. This helps both expose the built-in options and simplifies the setup process.

**Visuals:** [image showing the new setup state for the Group block](https://drive.google.com/file/d/19Q47cuAm1qZ8Bn8Hq9G-0iqTj-9QHceN/view?usp=sharing).

**Key Make Posts/GitHub/Trac Issue(s):** use a variation picker in the Group block ([43496](https://github.com/WordPress/gutenberg/pull/43496))
