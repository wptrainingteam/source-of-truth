---
title: Drag & drop usability improvements
slug: drag-drop-usability-improvements
tags: []
---

Drag and drop is a basic and important aspect of creating with blocks, offering an easy way to quickly combine and add blocks as you’d like. To help make drag and drop more intuitive, a wide variety of enhancements are available in this release:

*   Allow dragging and dropping to the beginning or end of your content.
*   Improve dragging and dropping between adjacent container blocks (ex: Group and Cover blocks).
*   Allow dragging into template parts, like a site logo next to a site title, including from the Inserter or from desktop.
*   Show a visual indication when a block isn’t allowed to be dropped to help communicate where one can and can’t drag and drop.
*   Allow drag and drop to create rows and galleries. For example, placing an image next to another image will create a gallery automatically. 
*   In List View, expand any collapsed blocks if a block is dropped into it so the block that’s been dropped is visible.
*   In List View, items will now be displaced to help provide a more visual and tangible experience of dragging and dropping blocks. 
*   In List View, a drag cursor is shown for any draggable blocks.

Taken together, anyone using this next version of WordPress should find that dragging and dropping blocks to be more intuitive and powerful to use. 

**Visuals:** displacement when drag and dropping in list view [demo](https://drive.google.com/file/d/121CWH6tMau-6UN1bTqcBtkg2axDenNK7/view?usp=drive_link) & displacement, drag to start and end, drag handles, and creation of a gallery when placing an image next to another image [demo](https://drive.google.com/file/d/1fuk8DZGjbB2d2ShCELSiX20nOdG4FHnw/view?usp=drive_link). 

**Key Make Posts/GitHub/Trac Issue(s):**  

*   Block drag and drop tracking issue ([33683](https://github.com/WordPress/gutenberg/issues/33683)).
*   Drag and drop: Allow dragging to the beginning and end of a document ([56070](https://github.com/WordPress/gutenberg/pull/56070)).
*   Add drag cursor to draggable list items ([57493](https://github.com/WordPress/gutenberg/pull/57493)).
*   Allow dragging between adjacent container blocks based on a threshold ([56466](https://github.com/WordPress/gutenberg/pull/56466)).
*   Allow dragging into template parts ([56182](https://github.com/WordPress/gutenberg/issues/56182)).
*   Hide drop indicator where block isn’t allowed to drop ([56843](https://github.com/WordPress/gutenberg/pull/56843)). 
*   Allow drag and drop to create rows and galleries ([56186](https://github.com/WordPress/gutenberg/pull/56186)).
*   List View: Displace items when dragging (a bit more WYSIWYG) ([56625](https://github.com/WordPress/gutenberg/pull/56625)).
*   List view: Add drag cursor to draggable list items ([57493](https://github.com/WordPress/gutenberg/pull/57493)).
*   List View: Expand state if a block is dragged to within a collapsed block in the editor canvas [(56493](https://github.com/WordPress/gutenberg/pull/56493)).
*   Drag and drop: Allow dragging from inserter or desktop to template parts ([58589](https://github.com/WordPress/gutenberg/pull/58589)).
