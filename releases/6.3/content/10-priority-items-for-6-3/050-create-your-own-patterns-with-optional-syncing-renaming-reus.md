---
title: "Create your own patterns with optional syncing (& renaming reusable blocks)"
slug: create-your-own-patterns-with-optional-syncing-renaming-reus
tags: [theme author, end user, site admin]
---

The power of patterns continues to grow, and, with 6.3, you can now create your own with the ability to decide whether you want each instance to stay in sync with all other instances or not. Introducing the ability to create your own patterns and set sync status means that Reusable blocks as a concept are now known as Synced Patterns. These options are available whether you’re using the Site Editor or not! This is a big step forward in reducing the number of concepts folks need to keep on top of and unlocking functionality for folks to create their own patterns:

*   For any unsynced patterns, they are included in the Inserter with other patterns. Any edits to these patterns will only update for that specific instance after you insert it.
*   For any synced patterns, they will be listed under a new tab for synced patterns in the Inserter. Any edits to these patterns will update anywhere the pattern is used. 
*   Custom pattern categories are not currently possible but are being considered for a future release. [You can read more here](https://github.com/WordPress/gutenberg/pull/51144#issuecomment-1620839856). 
*   You can edit, rename, duplicate, and delete patterns all from within the Patterns section.
*   Once you’ve set the sync status, you cannot change it after the fact. You will need to duplicate the pattern and create it again to change the sync status.
*   For block themes, all patterns are listed alongside template parts in the Site Editor > Patterns section, where you can enter an isolated editing mode to make changes.
*   For classic themes, the prior reusable block management page has been reused to house patterns in a list, similar to the Posts > All Posts view. 

Nudges are baked in throughout the experience to help guide folks to change in reusable block functionality. Technically speaking, these changes are mainly UI related, with the functionality of a reusable block working the same way. For an unsynced pattern, it’s the same collection of unwrapped blocks in wp\_block CPT as a reusable block, the only difference being that the post meta entry identifies the sync type as unsynced. In terms of Template parts, keep in mind that themes can bundle “patterns” alongside “template parts,” while template parts are now just a special class of patterns for most practical purposes.

Finally, it’s worth calling out that a current restriction with reusable blocks now applies to synced patterns overall: if you apply alignment to a container block and convert it to a pattern, that alignment will be lost. This means if you set something as full width and convert it to a pattern, you’ll then need to add a Group block around the pattern after insertion to have access to change the width. You can see a [broader discussion about this problem here](https://github.com/WordPress/gutenberg/issues/8288#issuecomment-1593801093).

**Visuals:** [Pattern creation and insertion in the Site Editor demo](https://drive.google.com/file/d/1MBunSI2K6A7CsJBXZ51FLN57AG2urDcm/view?usp=drive_link).

**Key Make Posts/GitHub/Trac Issue(s):**

*   Reusable blocks: Rename to ‘Patterns’ and add the option to also add a non-synced Pattern ([51144](https://github.com/WordPress/gutenberg/pull/51144))
*   Patterns: Add renaming, duplication, and deletion options ([52270](https://github.com/WordPress/gutenberg/pull/52270))
