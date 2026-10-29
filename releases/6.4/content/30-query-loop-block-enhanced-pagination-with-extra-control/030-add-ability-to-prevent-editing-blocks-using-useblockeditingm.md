---
title: "Add ability to prevent editing blocks using useBlockEditingMode()"
slug: add-ability-to-prevent-editing-blocks-using-useblockeditingm
tags: [plugin author]
---

A previously private API used to power the page editing experience in the Site Editor is now public after requests for use from extenders. At the simplest, this new API lets you restrict the editing UI of a block and its children, including letting you disable the entire editor except for certain blocks. A new hook is available called useBlockEditingMode( clientId, mode ):

function PostTitleEdit( { clientId } ) {

useBlockEditingMode( clientId, ‘disabled’ );

return (

…

);

}

A block can call this in its edit function with the mode set to one of the three options:

*   ‘disabled’ – This prevents editing the block entirely. The block cannot be selected or interacted with. It uses the same pointer-events: disabled mechanism that is used when templateLock is set to ‘contentOnly’.
*   ‘contentOnly’ – This allows editing the block but removes most UI shown in the block toolbar so that only content related buttons (e.g. formatting) are shown. The block cannot be moved, deleted, etc. It’s similar to the treatment received by a content block when templateLock is set to ‘contentOnly’.
*   ‘default’ – Default. Block is fully editable, moveable, removable, etc.

**Adoption approach:** opt in via using useBlockEditingMode()

**Key Make Posts/GitHub/Trac Issue(s):** make useBlockEditingMode() public ([52094](https://github.com/WordPress/gutenberg/pull/52094))
