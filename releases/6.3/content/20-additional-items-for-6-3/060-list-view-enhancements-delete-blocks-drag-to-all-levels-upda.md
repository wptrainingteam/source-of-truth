---
title: "List View enhancements: delete blocks, drag to all levels, updated drop indicator, and more"
slug: list-view-enhancements-delete-blocks-drag-to-all-levels-upda
tags: [end user]
---

[List View](https://wordpress.org/documentation/article/list-view/) continues to be a powerful tool for navigating complex content, and this release brings some necessary polish to the experience. To make the improvements easier to get a sense of at a glance, they have been marked as UX, Bug Fix, and Feature. 

*   [UX] Blocks being dragged are now still visible as they are being dragged to better indicate what’s being acted upon. 
*   [UX] Update drop indicator line to be thicker and with a white border to make it easier to see and use. 
*   [Bug Fix] Allow drag and drop into collapsed container blocks.
*   [Bug Fix] Allow blocks to be dragged into empty Group blocks. 
*   [Bug Fix] Update drop indicator to support RTL languages. 
*   [Bug Fix] Drag to every layer of content.
*   [Bug Fix] Refactor to improve accessibility for assistive technologies. 
*   [Feature] Delete blocks using your keyboard while selecting in List View. 

**Visuals:** [quick demos of a few new changes](https://drive.google.com/file/d/1x82heaBWQdsvOH465BcH1N5t8CYfIFI-/view?usp=drive_link)

**Key Make Posts/GitHub/Trac Issue(s):**

*   List View: Try showing blocks that are dragged (no longer hide them) [(51724](https://github.com/WordPress/gutenberg/pull/51724))
*   List View: Update drop indicator line positioning to support rtl languages [(51284)](https://github.com/WordPress/gutenberg/pull/51284)
*   List View: Allow deleting blocks using keyboard [(50422)](https://github.com/WordPress/gutenberg/pull/50422)
*   Group Block: Allow blocks to be dragged onto it in its placeholder state [(49361)](https://github.com/WordPress/gutenberg/pull/49361)
*   List View: Append when dragging into collapsed blocks [(50936)](https://github.com/WordPress/gutenberg/pull/50936)
*   List View: Allow dragging outside the immediate area by passing down a dropZoneElement [(50726)](https://github.com/WordPress/gutenberg/pull/50726)
*   List View: Allow dragging to all levels of the block hierarchy [(49742)](https://github.com/WordPress/gutenberg/pull/49742)
*   List View / Block Draggable: Fix scroll to top issue when dragging the second last block in the list [(50119)](https://github.com/WordPress/gutenberg/pull/50119)
*   List View: Update drop indicator width to be aware of scroll containers [(49786)](https://github.com/WordPress/gutenberg/pull/49786)
*   List View: Update drop indicator line to be 4px high with a white border [(49462)](https://github.com/WordPress/gutenberg/pull/49462)
*   List View: Allow dragging underneath collapsed non-empty container blocks [(49390)](https://github.com/WordPress/gutenberg/pull/49390)
*   Group Block: Allow blocks to be dragged onto it in its placeholder state [(49361)](https://github.com/WordPress/gutenberg/pull/49361)
*   Refactor ARIA attributes to improve accessibility for assistive technologies. ([48461](https://github.com/WordPress/gutenberg/pull/48461))
