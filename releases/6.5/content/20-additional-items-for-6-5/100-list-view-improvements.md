---
title: List View improvements
slug: list-view-improvements
tags: []
---

#### Rename (almost) all blocks from the editor [theme author] [end user] [site admin] [enterprise]

Building on renaming group blocks in List View introduced in WordPress 6.4, you can now rename nearly every block, giving an opportunity for both better organization and personalization. For end users, it helps you see at a glance how you might have structured your content. For theme authors, it can help you offer a more intuitive experience of your theme and patterns within for anyone using your theme. 

Of note, there are a few blocks that cannot be renamed intentionally:

*   core/block
*   core/template-part
*   core/pattern
*   core/navigation
*   core/navigation-link

Whilst this feature is enabled by default, 3rd party extenders can disable support for their blocks by updating their block.json file as follows:

```
// block.json{"supports": {"renaming": false // disables ability to rename block via the Editor UI},}
```

**Visuals:** [demo](https://drive.google.com/file/d/1M85TF3RtbtumMPFNN94wDE1hJsLsDxGm/view?usp=drive_link) of renaming various blocks. 

**Key Make Posts/GitHub/Trac Issue(s):** Enable Block Renaming support for (almost) all blocks ([54426](https://github.com/WordPress/gutenberg/pull/54426))

#### Right click to open up your block setting’s menu

A right click on List View opens up that block’s settings menu and gives fast access for making changes. As part of adding this feature, an editor setting has been added to Preferences so that you can disable the option if it doesn’t work with your workflow. 

**Visuals:** right click to show block settings [visual](https://drive.google.com/file/d/1zVCqL6Z2abA0gmhIYRT1JUYV3TB4VxHw/view?usp=drive_link). 

**Adoption approach:** disable in Preferences if you want to turn it off. 

**Key Make Posts/GitHub/Trac Issue(s):** List View: Allow right-click to open block settings dropdown, add editor setting [(50273](https://github.com/WordPress/gutenberg/pull/50273))

#### Enjoy new keyboard shortcuts

New keyboard shortcuts are available to bring some quality of life improvements to List View:

*   Copy, paste, and cut blocks using the keyboard shortcuts you’re used to when selecting blocks in List View (CMD+C and CMD+X to copy and cut blocks, and CMD+V to paste blocks).
*   Select all blocks within List View using CMD+A on Mac or CTRL+A on Windows.

**Key Make Posts/GitHub/Trac Issue(s):** List View: Add keyboard shortcut to select all blocks ([54899](https://github.com/WordPress/gutenberg/pull/54899)), List View: Add keyboard clipboard events for cut, copy, paste [(57838](https://github.com/WordPress/gutenberg/pull/57838)**)**
