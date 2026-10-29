---
title: Refining Data Views
slug: refining-data-views
tags: []
---

Following the launch of Data Views in 6.5 and advancements in 6.6, this release is focused on refining the experience with a few new features planned. The aim is to make these views more flexible for customization and more functional to use. 

#### Enhancements

*   [Ability to set the density of information in the grid layout](https://github.com/WordPress/gutenberg/issues/60630).
*   [Option to hide/show the filters in the user interface](https://href.li/?https://github.com/WordPress/gutenberg/pull/63203) to add more optionality and reduce clutter.
*   [Ability to customize the column order in table views](https://github.com/WordPress/gutenberg/pull/63416) with the [move left/right controls always available](https://github.com/WordPress/gutenberg/pull/64646), including in the [new view configuration UI to manage order across all columns](https://github.com/WordPress/gutenberg/pull/64381). 
*   [Make the Grid layout aspect ratio user configurable](https://github.com/WordPress/gutenberg/pull/63487).
*   [Graduate data view options out of a menu to allow more design expression](https://github.com/WordPress/gutenberg/pull/64175#top).
*   [See author’s avatar next to publication status in Pages](https://github.com/WordPress/gutenberg/pull/63309).
*   Mobile responsiveness improvements, including fixes like [moving the filtering UI into a toggle-able panel to improve experience on narrow viewports/containers](https://github.com/WordPress/gutenberg/pull/63203), [make SiteHub available for Pages, Patterns, and Templates in mobile viewports](https://github.com/WordPress/gutenberg/pull/63118), and [ensure Patterns and Templates can be edited](https://github.com/WordPress/gutenberg/pull/63002).
*   [De-emphasise bulk actions on Grid layout](https://github.com/WordPress/gutenberg/pull/64209) after feedback that always being able to see the bulk select option proved to be confusing.
*   [Move bulk actions menu to the Footer](https://github.com/WordPress/gutenberg/pull/64268), consolidate with the floating toolbar and total items display, to provide an easier to access pathway. 
*   [Show item count for each item in the sidebar](https://github.com/WordPress/gutenberg/pull/65223) for access to quick information. 
*   [Improved UX of views for Pages](https://github.com/WordPress/gutenberg/pull/65295) with filtered views, like Published and Drafts, that only shows additional filters and hides the “status” filter to prevent ending up in a confusing state.  

#### Expanded extensibility 

As part of enhancing Data Views extensibility and supporting the [Admin Redesign](https://make.wordpress.org/core/2023/07/12/admin-design/) efforts, an API was introduced to register and unregister dataview actions. The existing post actions were also moved to globally registered actions and typed actions (see examples in `packages/editor/src/dataviews/actions`). This enables third-party developers to manage actions as needed. This includes a way to register and unregister core actions around [trashing](https://github.com/WordPress/gutenberg/pull/64087), [permanently deleting](https://github.com/WordPress/gutenberg/pull/64088), and [restoring](https://github.com/WordPress/gutenberg/pull/64134) posts. In staying with the idea, users of the component can also unregister actions to duplicate [posts](https://github.com/WordPress/gutenberg/pull/64441), [patterns](https://github.com/WordPress/gutenberg/pull/64373), or [template parts](https://github.com/WordPress/gutenberg/pull/64388). 

Developers can also remove the actions to view [posts](https://github.com/WordPress/gutenberg/pull/64467) and [post revisions](https://github.com/WordPress/gutenberg/pull/64464) or prevent users from [renaming a post](https://github.com/WordPress/gutenberg/pull/64366) or [reordering pages.](https://github.com/WordPress/gutenberg/pull/64199) These actions appear in both the Site Editor views and the sidebar in the Post or Site Editor.

**Visuals:** [demo](https://drive.google.com/file/d/1q3_IyMrAtXe6s1gDc5kSr9qmt484GNNa/view?usp=drive_link) changing grid density, [image](https://drive.google.com/file/d/1B7DeTe6eXG6LCub2dKLLwPFE47TCmXck/view?usp=drive_link) of show/hide filters option.
**Adoption approach:** updated by default if using a block theme and opt in for extending with two guides to help [Using Data Views to display and interact with data in plugins](https://developer.wordpress.org/news/2024/08/27/using-data-views-to-display-and-interact-with-data-in-plugins/) & [Actions from Data Views: Adding images to the Media Library](https://developer.wordpress.org/news/2024/09/23/actions-from-data-views-adding-images-to-the-media-library/)
**Key Make Posts/GitHub/Trac Issue(s):** _Follow_ [_this tracking issue_](https://github.com/WordPress/gutenberg/issues/63128) _for more information._
