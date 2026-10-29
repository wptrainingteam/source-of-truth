---
title: Inserter shows all blocks instead of the blocks allowed
slug: inserter-shows-all-blocks-instead-of-the-blocks-allowed
tags: []
---

Previously, when selecting a block with the Inserter open, only the blocks that were allowed to be added to the selected block were shown often resulting in a confusing experience with an emptier than expected Inserter. With 6.6 when a block is selected, there’s now a list of blocks that can be inserted at the selected block, and a list with remaining blocks. This helps show both what’s allowed to be inserted within the selected block alongside the remaining blocks someone can still add. When you select a block outside of the allowed blocks, it’s inserted below the current block selection. 

**Visuals:** [demo](https://drive.google.com/file/d/10eL7-pfUwzflC4Nk3xHivUMNG8CRMF_4/view?usp=drive_link) showing before and after of 6.5.3 vs 6.6 experience with the Inserter. 
**Key Make Posts/GitHub/Trac Issue(s**): Inserter: show all blocks ([62169](https://github.com/WordPress/gutenberg/pull/62169))
