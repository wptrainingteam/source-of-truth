---
title: Important Interface Changes
slug: important-interface-changes
tags: []
---

**Beta label removed from the Site Editor**

After multiple release cycles, starting with WordPress 5.9, the beta label has now been removed from the Site Editor. This means that when you navigate to Appearance > Editor, you will no longer see the “(beta)” notice. Removing the beta label was not a quick decision, only coming after multiple releases’ worth of discussion and evaluation. However, although the label is being removed, enhancements and bug fixes will continue — just as they do with other parts of WordPress. 

**Key Make Posts/GitHub/Trac Issue(s):** removing the beta label. ([39293](https://github.com/WordPress/gutenberg/issues/39293))

**Quickly identify Template Parts & Reusable Blocks with colorization [end user] [theme author]**

Template parts and reusable blocks are synced, unlike other Core blocks. This makes it crucial that you know when you’re interacting with them, and can quickly identify them during the flow of site creation. With this release, these blocks are now outlined with a different color in various parts of the interface: List View, the Block Toolbar, and the Canvas itself. 

**Visuals:** [image of a Header template part with the colorization applied](https://drive.google.com/file/d/1xIl8_33bE1gwVHm8GVYSbOtIWLx8mGfQ/view?usp=sharing).

**Key Make Posts/GitHub/Trac Issue(s):** colorize template parts and reusable blocks ([32163](https://github.com/WordPress/gutenberg/issues/32163)). 

**Organized block settings with split controls [plugin author] [end user]**

[With a growing number of design tools](https://make.wordpress.org/core/2022/09/26/core-editor-improvement-catalyst-for-creativity/) added in the last few WordPress releases, the block settings has been split into two tabs — Styles and Settings — to allow for a more intuitive and clear understanding of the options built into each block. This change will make highly configurable blocks, such as the Group block and Navigation block, easier to manage and customize. [The tabs will only render](https://github.com/WordPress/gutenberg/issues/47463) if there are settings registered as well. For example, the paragraph block doesn’t have any specific setting so all options show in the sidebar without the split tabs.

For block plugin authors, this marks a fairly substantial change to ensure the options for your block show up where you want them to. As a result, [the \_\_experimentalGroup property](https://github.com/WordPress/gutenberg/pull/47105) was stabilized on the InspectorControls slots. You can now define which InspectorControls group to render controls into via the group prop. By default, registered controls are placed under the settings tab.

In addition to stabilizing the \_\_experimentalGroup property, a new styles group was added, so styles-related controls that do not fit conceptually under the block support panels — border, color, dimensions, typography, etc. — can be included under the “Styles” tab in the block inspector:

```
<InspectorControls group="styles">

  // Add your custom styles related controls here.

</InspectorControls>
```

**Visuals:** [image of split tabs for the navigation block](https://drive.google.com/file/d/1J6_L8veX3yjK9cW250EoGs6fnqygk-li/view?usp=sharing).

**Adoption approach:** N/A. There’s no way to turn this off. 

**Key Make Posts/GitHub/Trac Issue(s):**  

*   Split block settings between styles and settings ([40204](https://github.com/WordPress/gutenberg/issues/40204)). 
*   Stabilize the split tab experiment ([47045](https://github.com/WordPress/gutenberg/pull/47045)).
*   Inspector Controls: Stabilize the experimental control groups ([47105](https://github.com/WordPress/gutenberg/pull/47105)).

**Updated block settings icon [user] [site admin]**

To make way for the block settings changes mentioned above, a new icon for the block setting sidebar has been added to prevent a “cog” from being used twice in the same interface. While a small change, it has a big impact as it touches numerous docs, training videos, and more. This is something to prepare for and to proactively update material as best as you can. 

**Visuals:** [before/after image of the block settings icon](https://drive.google.com/file/d/1cxNbeSpLZf62Jye3TSFEDEq9Kig9gb89/view?usp=share_link).

**Key Make Posts/GitHub/Trac Issue(s):** Discussion around the change in icon ([46851](https://github.com/WordPress/gutenberg/issues/46851)).

**Improved discoverability with Inserter redesign [end user]**

A new design offers a split view between categories and patterns, improving the navigation between categories and providing larger previews for patterns, resulting in better discoverability and at-a-glance context.

**Visuals:** [new inserter design showing header & footer patterns and adjusted categories video](https://drive.google.com/file/d/1eyp7EFvSStDowe7__Nj0LDLp9kHTRl9J/view?usp=sharing).

**Key Make Posts/GitHub/Trac Issue(s):** 

*   New Pattern Inserter design discussion ([41379](https://github.com/WordPress/gutenberg/issues/41379)).
*   Ensure the inserter shows pattern titles when focused on or hovering an individual pattern preview ([46419](https://github.com/WordPress/gutenberg/pull/46419)).
