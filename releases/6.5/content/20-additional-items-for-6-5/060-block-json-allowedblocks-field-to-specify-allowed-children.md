---
title: "Block.json: allowedBlocks field to specify allowed children"
slug: block-json-allowedblocks-field-to-specify-allowed-children
tags: [plugin author, enterprise]
---

Previously, there wasn’t a way to filter the allowed blocks in an inner block area. This means that developers could not specify which blocks could be inside a parent block without editing the parent block’s edit file. This release introduces a new allowedBlocks field to block.json so you can easily include and specify allowed children for a block. 

For example, imagine you’ve just created an icon block to include in the Navigation block. Below demonstrates how you can simply allow it to be added using a filter (or any additional block): 

```
addFilter( 'blocks.registerBlockType', 'my-great-icon-block', ( settings, name ) => {  if ( name === 'core/navigation ) {    return {      ...settings,      allowedBlocks: [ ...settings.allowedBlocks ?? [], 'my-great-icon-block' ],    }  }  return settings;} );
```

This opens the door for custom mega menu building but places the responsibility in the hands of those using this feature to ensure things like accessibility. Keep in mind that this can be used with any block that accepts children too!

**Adoption approach:** used allowedBlocks within block.json as shown above. Check out [this developer news post about building a mega menu partially using this feature](https://developer.wordpress.org/news/2024/02/29/an-introduction-to-block-based-mega-menus/).

**Key Make Posts/GitHub/Trac Issue(s):** Add allowedBlocks field to block.json to specify allowed children ([58262](https://github.com/WordPress/gutenberg/pull/58262)).
