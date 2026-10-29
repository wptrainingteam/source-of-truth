---
title: Choose which blocks are prioritized within container blocks
slug: choose-which-blocks-are-prioritized-within-container-blocks
tags: [plugin author, site admin]
---

With the introduction of a new API, container-type blocks can [prioritize which nested blocks](https://github.com/WordPress/gutenberg/pull/50510) appear at the top of the Inserter as well as when using the slash inserter (/). This added control provides another way to curate the experience of those using your blocks. For example, you might have a container block for a Form with specific nested blocks that add additional functionality and make the most sense when used within the overall container. This ensures those blocks are prioritized for ease of use and discovery. 

**Adoption approach:** You can use this feature by passing an array of block or block variation names via the inserterPriority parameter of the <InnerBlocks> component. For example, you can add this: `prioritizedInserterBlocks: [ 'core/site-logo' ]` to the Group block [here](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/group/edit.js#L140).

**Key Make Posts/GitHub/Trac Issue(s):**  Add new API to allow inserter items to be prioritized ([50510](https://github.com/WordPress/gutenberg/pull/50510)), Integrate prioritizedInserterBlocks API to slash inserter ([50658](https://github.com/WordPress/gutenberg/pull/50658))
