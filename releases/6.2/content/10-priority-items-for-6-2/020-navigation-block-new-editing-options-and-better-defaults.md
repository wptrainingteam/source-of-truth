---
title: "Navigation Block: New Editing Options and Better Defaults"
slug: navigation-block-new-editing-options-and-better-defaults
tags: []
---

6.2 adds a new, editable view to the block settings sidebar for menu management. This works similarly to the List View but is isolated to the current menu you are editing. This option is offered in addition to the current editing experience introduced in WordPress 5.9, and represents a middle ground between the prior experience and the new block editing paradigm. 

More technically, the Navigation block also includes the ability to restrict editing the content on its inner blocks (links and submenus). This helps folks like site admins or agencies further tailor the experience, especially if you’re taking advantage of the ability to use [block template parts in classic themes](https://make.wordpress.org/themes/2022/09/12/testing-and-feedback-for-using-block-based-template-parts-in-classic-themes/). 

Finally, this release continues to improve the inner workings of the Navigation block, including adding a location fallback for classic menus so that the most recently created classic menu is used by default. (If there is a menu named “primary” or has a primary location, that menu still takes precedence). Separately, when the Page List block is used, a simplified option guides you through the process to edit each item directly as you desire. 

Taken together, all of these make working with this critical site-building block a cleaner, more intuitive experience. 

**Visuals:** 

*   [Overview of editable list view experience video](https://drive.google.com/file/d/1WuL_83ElzlYrV0yuSRFOs-moubP3EhnM/view?usp=sharing). 
*   [Locking the Navigation block video](https://drive.google.com/file/d/1rynoVoqxLU3XpPWaWP5HPaX2KZWyPguw/view?usp=sharing).
*   [Page List block: simplified option to edit links video](https://drive.google.com/file/d/1lHcKAynjdfLpGLvqZrgK5Ne7NPcUFJLJ/view?usp=sharing). 
*   [YouTube video](https://www.youtube.com/watch?v=VAxn8AhFcLs) from Core Contributor and navigation block project member about what’s to come in 6.2 for the Navigation block. 

**Key Make Posts/GitHub/Trac Issue(s):** 

*   Make the OffCanvasEditor the default experience ([46938](https://github.com/WordPress/gutenberg/issues/46938)).
*   Clarify the explanation of how ‘Convert to Links’ works in Page List block ([45394](https://github.com/WordPress/gutenberg/pull/45394)).
*   Adds content locking/content only editing to nav block ([44739](https://github.com/WordPress/gutenberg/pull/44739)).
*   Various fallback improvements ([45976](https://github.com/WordPress/gutenberg/pull/45976)) ([46286](https://github.com/WordPress/gutenberg/pull/46286)).
*   Add an “open list view” option ([46335](https://github.com/WordPress/gutenberg/pull/46335)).
*   Update and add the convert panel to the block settings sidebar ([46352](https://github.com/WordPress/gutenberg/pull/46352)).
