---
title: General Site Editor UX improvements
slug: general-site-editor-ux-improvements
tags: []
---

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/qKo2I5bXoX8?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

#### Show template toggle when editing pages

Thanks to work to unify the post and site editor, a new option is now available in the Page/Post editor to preview templates directly in the Page/Post Editor experience. You can toggle this template preview on and off as you’d like and, similar to the experience in the Site Editor, if you select any part of the template you’ll be presented with a snackbar notification and pathway to edit the template directly.

**Visuals:** [demo](https://drive.google.com/file/d/1qxvOM8HhJ-o2tULvRp43CWFK9y0pCsxm/view?usp=drive_link) toggling template preview on/off and [demo](https://drive.google.com/file/d/1zzbNVfKD_NJJQ4pP_d06KRA7hsOgwvun/view?usp=drive_link) with a voice over showing in both editors.

**Key Make Posts/GitHub/Trac Issue(s):** Site Editor: Add ‘Show template’ toggle when editing pages ([52674](https://github.com/WordPress/gutenberg/pull/52674)).

#### New UX for template editing in the post/page editor

Until now, when you edited templates from the Post/Page Editor, you could edit both the template and content together, without a strong distinction between the two. With this release thanks to work to unify the editors, if you go to Post/Page Editor > Templates > Edit Template, you’ll have the same editing experience as when you edit within Appearance > Editor > Pages. In this new flow, content editing is restricted, and placeholders appear for Content, Title, and other dynamic blocks. 

**Key Make Posts/GitHub/Trac Issue(s):** Site Editor: Add ‘Show template’ toggle when editing pages ([52674](https://github.com/WordPress/gutenberg/pull/52674)).

#### Templates grouped properly in the Site Editor

To help provide clarity with templates, especially as extenders are adopting the Site Editor, templates are organized between theme templates, custom templates, and templates added by plugins. 

**Visuals:** [screenshot](https://drive.google.com/file/d/1yLJB7Zokx5qtwYci_Xdziq9KXO-JuYhk/view?usp=drive_link) showing different groupings. 

**Key Make Posts/GitHub/Trac Issue(s):** Group templates in sidebar list. ([57711](https://github.com/WordPress/gutenberg/pull/57711)) 

#### See summary of styling changes when you save

Previously when saving styling changes in the Site Editor, everything was listed under one general “Custom Styles” option, making it hard to know what might be within those changes. When you save with 6.5, you’ll be met with a short and informative summary of any changes! This format also matches up with what you’ll see when looking through your style revisions, making it easy to cross compare too. 

**Visuals:** [demo](https://drive.google.com/file/d/1n5UgqxUTI9sSf4imG3pUzzka8ag083V2/view?usp=drive_link) of making styling changes and seeing summary upon saving

**Key Make Posts/GitHub/Trac Issue(s):** Site editor: add global styles changes to save flow ([57470](https://github.com/WordPress/gutenberg/pull/57470))

#### Streamlined workflow to change pattern sync status and make theme patterns your own

To help streamline changing the sync status of patterns, when duplicating a pattern, a modal is now shown that includes the ability to keep or change the sync status of the pattern you’re duplicating from. [This change addressed feedback](https://github.com/WordPress/gutenberg/issues/53320) that highlighted how cumbersome the prior process was and allows you to make theme patterns your own whereas before they were previously locked.

**Visuals:** [demo](https://drive.google.com/file/d/1McSn5_iG-RF3Ld8E_Kyt5n6o0pT3_r83/view?usp=drive_link) of changing sync status of a pattern upon duplication

**Key Make Posts/GitHub/Trac Issue(s):** Patterns: Use modal for pattern duplication flow as workaround for changing sync status ([54764](https://github.com/WordPress/gutenberg/pull/54764)).

#### Rename and delete pattern categories

Building on the ability to create and set pattern categories, the option has been added to [rename or delete pattern categories](https://github.com/WordPress/gutenberg/pull/55035) so you can keep your patterns organized exactly as you want. Of note, when deleting a pattern category, the patterns will not be deleted and will be listed as “Uncategorized” if no other pattern category exists. 

**Visuals:** [demo](https://drive.google.com/file/d/1soIHIWMfWvMt3Ryya57cZoX7TB4AH0kx/view?usp=drive_link) showing renaming and then deleting a pattern category

**Key Make Posts/GitHub/Trac Issue(s):** Add rename/delete options for pattern categories in site editor. ([55035](https://github.com/WordPress/gutenberg/pull/55035))

#### Patterns defined from the pattern directory are shown in Site Editor > Patterns

You can define patterns you want in use on your site or theme in theme.json via the patterns property. These patterns are then shown in the Inserter for folks on the site to use. For consistency and access, these same patterns will now also appear in the Patterns section in the Site Editor to help with consistency and to get a full sense of all design options on a site. 

**Adoption approach:** [add patterns via theme.json](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/#patterns)

**Key Make Posts/GitHub/Trac Issue(s):** Patterns: show theme patterns from directory in site editor ([55877](https://github.com/WordPress/gutenberg/pull/55877))

#### Media pattern category split into audio and videos 

The media pattern category has been split into separate [audio and videos categories](https://github.com/WordPress/gutenberg/pull/55236) to provide more nuanced search options for folks and better organization of featured patterns. 

**Key Make Posts/GitHub/Trac Issue(s):** Patterns: Register new media related categories ([55236](https://github.com/WordPress/gutenberg/pull/55236))

#### Command Palette: improved contextual commands and new commands

To help make the Command Palette more enjoyable and easy to use, various improvements have been made to help the Command Palette’s initial view reflect the context in which it’s being used. This means that when a block or a group of blocks are selected and you open the Command Palette, block actions will be shown immediately rather than needing to search for them. The same is true when editing patterns inside the Site Editor where new commands such as renaming and duplicating the pattern will be shown.

**Visuals:** [demo](https://drive.google.com/file/d/1KB5Ob6eS44lnAw0_cXnTrLtG6Hc-tYRo/view?usp=drive_link) of contextual block commands when selecting multiple blocks

**Key Make Posts/GitHub/Trac Issue(s):** Add duplicate pattern command, ([55292](https://github.com/WordPress/gutenberg/pull/55292)) Add rename command ([55188](https://github.com/WordPress/gutenberg/pull/55188)), Add block-specific commands as contextual suggestions ([53974](https://github.com/WordPress/gutenberg/pull/53974)) 

#### Post Featured Image: option to use first image from a post [site admin] [developer] [theme author] [enterprise]

A new attribute called useFirstImageFromPost has been introduced that, when enabled, allows the Post Featured Image block to pull the first image from a post if one exists. This is especially helpful for folks with a lot of old posts without featured images as it allows a way to easily display images in the Query Loop block without having to manually add many featured images. It also is a useful option for theme authors who might want to bake this in automatically to their theme. Currently, this isn’t visible in the UI and must be adopted via code. 

**Adoption approach:** add support for useFirstImageFromPost attribute to the post featured image block. Here’s [more information](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/) about attributes. 

**Key Make Posts/GitHub/Trac Issue(s):** Post Featured Image: Add a useFirstImageFromPost attribute ([56573](https://github.com/WordPress/gutenberg/pull/56573)) 

#### Show outlines around editable blocks to ensure folks know what’s editable 

When creating or editing pages in the Site Editor, editable blocks now have a block outline that appears when you first enter the page before slowly fading. [This is one part of a larger effort to address feedback](https://github.com/WordPress/gutenberg/issues/55025) that the current experience can be confusing to know what’s part of the template vs the page and how to ensure that what you are adding ends up where you want it to go. 

**Visuals:** [demo](https://drive.google.com/file/d/1SA4_esjaXcYJT9GJ4LZ-1Jj4u5pBuzWk/view?usp=drive_link) showing the page editing experience in the Site Editor with the outlines of editable blocks 

**Key Make Posts/GitHub/Trac Issue(s):** Flash editable block outlines instead of always showing them ([58159](https://github.com/WordPress/gutenberg/pull/58159))

#### Scrolling Top Toolbar

Leveraging web-standards scrollbar properties, the top toolbar has been updated to show a visible and compact horizontal scrollbar, making it easier to see the breadth of settings on smaller screen sizes and a nice quality of life improvement. What was once cumbersome to use is now smooth and easy. 

**Visuals:** [demo](https://drive.google.com/file/d/1On-ri1dYnmFSqrKKZzTRRKUQbgWo9xej/view?usp=drive_link) of top toolbar scrolling

**Adoption approach:** must be using the top toolbar setting.

**Key Make Posts/GitHub/Trac Issue(s)**: Apply custom scroll style to fixed header block toolbar ([57444](https://github.com/WordPress/gutenberg/pull/57444))

#### Unifying the Post Editor and Site Editor experiences

Underpinning some of the above enhancements is an editor unification project that ultimately combined the Post Editor and the Site Editor into one unified editor behind the scenes. This work is worth calling out on its own as it’s led to the following improvements: 

*   One shared preferences panel for both editors. 
*   An additional sidebar panel in the Site Editor for managing page attributes, post taxonomies, featured image panel, and discussion panel. 
*   The ability to “View Link” in the Site Editor in the same way you would in the Post Editor.
*   The ability to see revisions for pages in the Site Editor.
*   The ability to edit page slug in the Site Editor.
*   The ability to change the author in the Site Editor.

Taken together, having a shared experience across both editors, simplifies future development for admin redesign efforts and creates a common editing experience to learn.

**Key Make Posts/GitHub/Trac Issue(s):** [Unification of the site and post editors](https://make.wordpress.org/core/2024/03/05/unification-of-the-site-and-post-editors-in-6-5/) Dev note, Align page edit features in Site Editor and Post Editor ([52632](https://github.com/WordPress/gutenberg/issues/52632)) 

#### Other

Alongside these larger updates, some smaller items are worth drawing attention to as part of a continual effort to improve the site editing experience: 

*   Process embeds in patterns so that the media is embedded rather than just outputting a URL ([55979](https://github.com/WordPress/gutenberg/pull/55979)).
*   Display the theme name on the activate button when previewing a block theme ([55752](https://github.com/WordPress/gutenberg/pull/55752)).
*   Add ‘View site’ action to ‘Site updated’ snackbar to make it easy to view the front end of your site after some changes are made ([52693](https://github.com/WordPress/gutenberg/pull/52693)).
*   Fix focus loss after converting to a synced pattern ([55473](https://github.com/WordPress/gutenberg/pull/55473)).
*   Shorter screen reader announcement after changing pages ([56339](https://github.com/WordPress/gutenberg/pull/56339)).
*   Override all the labels of the pattern categories taxonomy to show “add new pattern category” instead of “add tag” when creating a pattern ([57094](https://github.com/WordPress/gutenberg/pull/57094)).
*   The Post Navigation Link block has a [new Taxonomy filter](https://github.com/WordPress/gutenberg/pull/48912) in the UI. If a taxonomy is chosen, the Next Post and Previous Post links will only link to posts that share the same term within that taxonomy.
*   Disable text selection for post content placeholder block to help communicate the placeholder state. ([58169](https://github.com/WordPress/gutenberg/pull/58169))
*   Improve the experience and availability of the “back” button ([58710](https://github.com/WordPress/gutenberg/pull/58710)) ([58528](https://github.com/WordPress/gutenberg/pull/58528))
