---
title: Upgraded tooling for smoother workflows
slug: upgraded-tooling-for-smoother-workflows
tags: []
---

#### Rename Group blocks for improved organization [site admin] [end user]

As the Site Editor and what’s possible within continues to evolve, the tooling to organize and supercharge the experience needs to keep pace. The ability to rename Group blocks, a commonplace block in the site editing experience, is an effort to do exactly that. When renamed, the new name will appear in List View, allowing you to easily distinguish between different parts of your content. Rename (or don’t) as you’d like and as you see fit. Of note, this can be especially helpful with patterns that might use Group blocks!

**Visuals:** [demo](https://drive.google.com/file/d/1mzjkXwtPyuGDCbfeurhSyDGP5DP747rD/view?usp=drive_link) showing renaming and reverting rename.

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** Rename Group blocks in the Editor via Modal ([53735](https://github.com/WordPress/gutenberg/pull/53735)). 

#### See image and gallery thumbnails in List View for quick skimming

When working with images in your content, whether in a new post or a template, it’s now easy to see at a glance where each image is directly in List View. The previews are shown for both Galleries and Image blocks, with [plans for future releases to add additional previews to other image related blocks](https://github.com/WordPress/gutenberg/issues/53684).

**Visuals:** [demo](https://drive.google.com/file/d/1K_NSh2PAZ-PMG2FNdvPcYtaUKHor5JZJ/view?usp=drive_link) showing both galleries and individual images. 

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** [List View: Add media previews to list view for gallery and image blocks](https://github.com/WordPress/gutenberg/pull/53381#top)

#### Advancing the Command Palette

The Command Palette has evolved in a few ways since its initial release in WordPress 6.3:

*   Refreshed design. 
*   New commands, including block-specific actions. [See a full list here](https://make.wordpress.org/core/2023/09/12/core-editor-improvement-commanding-the-command-palette/). 
*   Better contextuality when invoking the Command Palette.

For example, with the recent updates, you can take block-specific actions, like grouping and ungrouping, and trust that what’s visible as an option [matches the actions available](https://github.com/WordPress/gutenberg/issues/53921#issuecomment-1695630329). Further, for the various reset, delete, and edit commands related to templates, [the name of the template has been added](https://github.com/WordPress/gutenberg/pull/52989) to ensure you’re taking the actions you want on the exact item you want. 

**Visuals:** [before and after design visual](https://drive.google.com/file/d/1uG2vsda_wPE1JbRfOGLcnGKJBzfMONH1/view?usp=drive_link), [demo of new commands](https://drive.google.com/file/d/1LlVdbXsolSz7_cLJZ6qqAe5zr3LklP_j/view?usp=drive_link).

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** [Core Editor Improvement: Commanding the Command Palette](https://make.wordpress.org/core/2023/09/12/core-editor-improvement-commanding-the-command-palette/)

#### Add categories to Patterns and add them anywhere with ease 

Patterns can now be organized with categories as part of the creation flow. Those categories are then available to sort by both in the overall Patterns section and the Insertion flow, simplifying the process of finding and adding patterns. In the Inserter specifically, a more advanced filtering option is available to better accommodate the more contained searching experience allowing you to sort by theme created vs user created patterns along with synced vs unsynced. 

If you need to edit any categories, you can do so in the sidebar settings when editing an individual pattern. To provide a more unified experience, all patterns, whether synced or unsynced, are listed in the same pattern section rather than having synced patterns separated out into their own tab. Finally, to ensure solid performance, pagination has been added when viewing patterns both in the Inserter and Patterns section of the Site Editor. 

**Visuals:** [create new pattern and add category demo](https://drive.google.com/file/d/1KG1AJJu8CEq3MpK027pyqxcY1Fkcc8vx/view?usp=drive_link), [import > filter > inserter pattern demo](https://drive.google.com/file/d/1qgp1Z0N3jlhUb_J5zMxCAJP6-Pato-8j/view?usp=drive_link). 

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** 

*   Patterns: add categories to user created patterns ([53164](https://github.com/WordPress/gutenberg/issues/53164)).
*   Add synced patterns to the Patterns tab in the Inserter and add pagination ([54007](https://github.com/WordPress/gutenberg/pull/54007)).  
*   Patterns: Add editing of pattern categories to site editor ([54640](https://github.com/WordPress/gutenberg/pull/54640#top)).
*   Patterns: Add My patterns back to post editor inserter categories ([54767](https://github.com/WordPress/gutenberg/pull/54767)).
*   De-emphasize pattern filters in Inserter ([54681](https://github.com/WordPress/gutenberg/pull/54681)).

#### Import/export patterns as JSON files

To ensure prior compatibility with Reusable blocks, patterns can now be imported and exported as JSON files, allowing an easy pathway to move custom patterns across sites. 

**Visuals:** [demo](https://drive.google.com/file/d/10gHUINBmg5XrZOi6J78O9pv8E2s_-5Af/view?usp=drive_link) showing an export and import process.

**Adoption approach:** N/A

**Key Make Posts/GitHub/Trac Issue(s):** Patterns: allow import/export as JSON files ([54337](https://github.com/WordPress/gutenberg/pull/54337))
