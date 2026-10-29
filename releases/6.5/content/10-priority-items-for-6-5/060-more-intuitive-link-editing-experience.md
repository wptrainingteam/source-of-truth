---
title: More intuitive link editing experience
slug: more-intuitive-link-editing-experience
tags: []
---

Adding and editing links needs to be both simple and powerful, ensuring you can do exactly what you want. A specific focus on link editing has led to a big step forward in this release including the following improvements:

*   A new UX means that the link UI is only shown when you explicitly click on a linked item, preventing the link UI from opening unnecessarily and thereby improving the experience for users of assistive technologies.
*   After adding a link, the modal remains open for any additional changes you want to make, like opening a link in a new tab, instead of closing out and requiring you to re-open the link editing UI. 
*   New Block and Home icons are added next to results related to the home and front pages respectively to make finding what you’re looking for quicker. 
*   A copy link button has been added to the link UI so you can easily snag whatever has been linked.
*   Suggestions to link to pages are shown when adding a new link in the link UI to make it faster to add links to items throughout your site. 
*   The link preview, what’s shown after adding a link, has been improved with a reduced view of the preview and a focus instead on the primary actions of editing and unlinking (and copying the link).
*   A new “Add Block” control has been included in the Link UI when adding links in the Navigation block, greatly improving both discoverability and usability for adding additional blocks to one’s menu.

All of these changes combined make for a tighter, clearer, and more robust link editing experience. 

**Visuals:** [demo](https://drive.google.com/file/d/10dcfu77MUnXCaIto84nBAh8VBdwBf5AF/view?usp=drive_link) showing copy link, suggested pages, better link preview, and new UX for invoking link UI.

**Key Make Posts/GitHub/Trac Issue(s):**

*   Add a blog icon to the blog home page in LinkControl search results ([55610](https://github.com/WordPress/gutenberg/pull/55610)).
*   Add a home icon to the front page in LinkControl results ([55606](https://github.com/WordPress/gutenberg/pull/55606)).
*   Add “copy link” action to link preview ([53655](https://github.com/WordPress/gutenberg/issues/53655)).
*   Keep Link UI open upon initial link creation when used in RichText ([57726](https://github.com/WordPress/gutenberg/pull/57726)).
*   Improve LinkControl preview ([57775](https://github.com/WordPress/gutenberg/pull/57775)).
*   Show initial suggestions in rich text Link UI ([57743](https://github.com/WordPress/gutenberg/pull/57743)).
*   Implement new UX for invoking rich text link UI ([57986](https://github.com/WordPress/gutenberg/pull/57986)). 
*   Add block UI for navigation LinkControl ([57756](https://github.com/WordPress/gutenberg/pull/57756)).
