---
title: General improvements
slug: general-improvements
tags: []
---

#### Updated order of editor actions for a clearer sidebar

The top toolbar in the editors is an important part of the publishing and saving flow, requiring careful consideration around the placement of each item. In this release, two enhancements come together to add clarity and streamline the experience of working across the editors:

*   Reorder the top bar actions to move Save/Publish buttons to the right of the Settings and Global Styles (pinned items) buttons. 
*   Swap the “Cancel” and “Publish” buttons in the pre-publish check panel, allowing users to publish without additional cursor movement.

**Visuals:** [demo](https://drive.google.com/file/d/1vLC8_X2APSpX_K1QmzFZHKLN5GMCcXY7/view?usp=drive_link) of streamlined pre-publish flow, [image](https://drive.google.com/file/d/1_UFOlzJ9cfVZ49UUZhU2nBmph8r2UF5l/view?usp=sharing) of before/after in the site editor of editor actions, [image](https://drive.google.com/file/d/1plrWkmLLV7dx7jXiGQezXHsVcAx7ROAn/view?usp=drive_link) of before/after in the post editor of editor actions.
**Key Make Posts/GitHub/Trac Issue(s):** Editor topbar: Reorder the actions on the right ([65163](https://github.com/WordPress/gutenberg/pull/65163)), Swap position of the Pre-publish checks buttons ([65317](https://github.com/WordPress/gutenberg/pull/65317#top)).

#### Opt out preference for ‘Choose a Pattern’ modal when adding a new page

Based on feedback, a new preference was added to toggle on and off “Show starter patterns” to provide the ability to control whether starter patterns appear when creating a new page. 

**Visuals:** [demo](https://drive.google.com/file/d/1VR5YRm9U4WbrLeknyjX5K5Wh0JihpnJ9/view?usp=drive_link) showing turning off this option.
**Adoption approach:** Opt in by turning preference on. 
**Key Make Posts/GitHub/Trac Issue(s):** Add opt out preference to the ‘Choose a Pattern’ modal when adding a page. ([65026](https://github.com/WordPress/gutenberg/pull/65026))

#### More robust saving

Imagine a situation where you are adding an image to your post and, before it finishes loading, you navigate away from the editor, without ever getting a warning that your image hasn’t yet been saved. In WordPress 6.7, work was done to ensure that doesn’t happen anymore with the introduction of temporary block attributes that ensure in-progress media items are eventually saved and shown:

*   Introduce “local” attributes and use it for the image block. ([63076](https://github.com/WordPress/gutenberg/pull/63076))
*   Video Block: Do not persist blob urls and fix undo. ([63238](https://github.com/WordPress/gutenberg/pull/63238))
*   Audio Block: Do not persist blob urls and fix undo. ([63257](https://github.com/WordPress/gutenberg/pull/63257))
*   File block: Do not persist blob urls and fix undo. ([63282](https://github.com/WordPress/gutenberg/pull/63282))

#### Iterating on pattern shuffling

To ensure that pattern shuffling behaves as expected and to minimize the risk of losing customizations made to patterns, several adjustments were made to limit its scope:

*   Shuffling now applies only to patterns added by the theme or the user.
*   Shuffling is only available in the zoomed-out view, and the option has been removed from the block toolbar.

**Key Make Posts/GitHub/Trac Issue(s):**  Remove the Shuffle block toolbar button [(](https://github.com/WordPress/gutenberg/pull/64571)[64954](https://github.com/WordPress/gutenberg/pull/64954)), limit pattern shuffling to theme and user patterns only ([62677](https://github.com/WordPress/gutenberg/pull/62677)).

#### Writing flow improvements 

*   Allow dropping multiple images to the image block. ([65030](https://github.com/WordPress/gutenberg/pull/65030))
*   Drag and Drop: When dragging a mix of video, audio, and image blocks, create individual blocks as appropriate. ([65144](https://github.com/WordPress/gutenberg/pull/65144))
*   Inserter: When opening the block inserter, it will now stay open when interacting with the editor canvas. This makes it easier to move around the document while adding blocks. ([63059](https://github.com/WordPress/gutenberg/pull/63059))
*   LinkControl: Refined the display of the link preview title and URL when both are same. ([61819](https://github.com/WordPress/gutenberg/pull/61819))
*   Link Editing: Automatically add tel to phone number when linking URL. ([64865](https://github.com/WordPress/gutenberg/pull/64865))
*   Page editor: Double-click to edit template part. ([65024](https://github.com/WordPress/gutenberg/pull/65024))
*   Post Title: Fix pasting in Safari. ([64671](https://github.com/WordPress/gutenberg/pull/64671))
*   Post Title: Move selection at the end after pasting over the text. ([64665](https://github.com/WordPress/gutenberg/pull/64665))
*   Restore: Move to trash button in Document settings. ([65087](https://github.com/WordPress/gutenberg/pull/65087))
*   Slash Inserter: Restrict block list to allowed blocks only. ([64413](https://github.com/WordPress/gutenberg/pull/64413))
*   Writing flow: Split heading into default block. ([61891](https://github.com/WordPress/gutenberg/pull/61891))

#### Adding block examples and previews

The following adds previews and examples to blocks so that, when searching in the Inserter, you can quickly see how each might be used:

*   Excerpt block: Add example of the block. ([63010](https://github.com/WordPress/gutenberg/pull/63010))
*   Login/out block: Add example of the block. ([62937](https://github.com/WordPress/gutenberg/pull/62937))
*   Post author blocks: Add example and preview. ([62978](https://github.com/WordPress/gutenberg/pull/62978))
*   Post content block: Add example of the block. ([62968](https://github.com/WordPress/gutenberg/pull/62968))
*   Post title: Add example of the block. ([62955](https://github.com/WordPress/gutenberg/pull/62955))
*   Post date block: Add a block example. ([63368](https://github.com/WordPress/gutenberg/pull/63368))
*   Post featured image: Add example of the block. ([63011](https://github.com/WordPress/gutenberg/pull/63011))
*   Post terms block: Add an example. ([63369](https://github.com/WordPress/gutenberg/pull/63369))
*   Query loop block and Posts list: add example ([63286](https://github.com/WordPress/gutenberg/pull/63286))

#### Site Editor focused

*   Add colors and typography to the browse styles section. ([63173](https://github.com/WordPress/gutenberg/pull/63173))
*   Allow editing of description only for custom templates. ([63664](https://github.com/WordPress/gutenberg/pull/63664))
*   Add a typesets section to Typography. ([62539](https://github.com/WordPress/gutenberg/pull/62539))
*   Apply same styles to block previews on inserter and Styles. ([63177](https://github.com/WordPress/gutenberg/pull/63177))
*   Document bar is now displayed when viewing the Style book and Style revisions ([#62669](https://github.com/WordPress/gutenberg/pull/62669))
*   Move font directory into uploads to match WP 6.5. ([60354](https://github.com/WordPress/gutenberg/pull/60354))
*   Polish create template part modal. ([63617](https://github.com/WordPress/gutenberg/pull/63617))
*   Template parts now show the content panel in the editor settings. ([#62034](https://github.com/WordPress/gutenberg/pull/62034))
*   Use four color palette colors instead of five for useStylesPreviewColors. ([64700](https://github.com/WordPress/gutenberg/pull/64700))

#### Other

*   Automatically select group variation if there is only one available. ([61871](https://github.com/WordPress/gutenberg/pull/61871))
*   Categories List block: Add dropdown for taxonomies. ([65272](https://github.com/WordPress/gutenberg/pull/65272))
*   Cover Block: Move Clear Media button from Inspector Controls to Block Controls. ([64630](https://github.com/WordPress/gutenberg/pull/64630))
*   Flex dimensions: Rename “Fill” to “Grow”. ([62779](https://github.com/WordPress/gutenberg/pull/62779))
*   Format Library: Add alt edit field to inline image ([64124](https://github.com/WordPress/gutenberg/pull/64124#top))
*   Image lightbox: Remove duplicate image when lightbox is opened. ([63381](https://github.com/WordPress/gutenberg/pull/63381))
*   Image: Adds the block controls for uploading image. ([64320](https://github.com/WordPress/gutenberg/pull/64320))
*   Improve Social Icons setup and appending. ([64877](https://github.com/WordPress/gutenberg/pull/64877))
*   Make SiteLogoReplaceFlow always available in the Site Logo block toolbar. ([63499](https://github.com/WordPress/gutenberg/pull/63499))
*   Move gallery link controls to the block toolbar. ([62762](https://github.com/WordPress/gutenberg/pull/62762))
*   Post Date & Comment Date: Add relative date format. ([62298](https://github.com/WordPress/gutenberg/pull/62298)) Both the Post Date and Comment Dates now let you [set a relative date format](https://github.com/WordPress/gutenberg/pull/62298) (e.g., 00 hours ago).
*   Table Block: Add toolbar button to add a caption. ([47984](https://github.com/WordPress/gutenberg/pull/47984))
*   Toolbar justification controls for Group and Content blocks The justification controls for the Group and Content blocks are now exposed in the block toolbar. This makes it easier to quickly update these blocks to be left or right-aligned, using a similar interface to text and button blocks. ([62924](https://github.com/WordPress/gutenberg/pull/62924))
