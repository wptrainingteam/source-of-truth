---
title: "Complete Site Editing: new capabilities for Navigation, Pages, Styles, and Patterns"
slug: complete-site-editing-new-capabilities-for-navigation-pages-
tags: []
---

The Site Editor offers a more cohesive and feature-complete site editing experience with the ability to create and publish pages, switch style variations, create and manage patterns, see all your menus at a glance, and more, all without leaving the Site Editor. This is thanks to four new top-level items exposed in the Site View, building on what was started in WordPress 6.2:

*   Navigation: view all your menus and edit in a dedicated mode as you see fit without needing to find your individual menu in a specific template. 
*   Pages: view pages, publish new pages, switch between editing individual pages and the template powering the same page, and see all the important details of each. 
*   Styles: use the Style Book, explore style variations, and get quick access to open all styling options. 
*   Patterns: view, manage, and create patterns and template parts. 

Each of these top-level items is visible when in the Site View (dark gray sidebar), and, as you drill down into each section, you’ll notice each has a curated view of different details. For example, when viewing individual pages, you’ll see important details in that same sidebar, like publish status ([example](https://user-images.githubusercontent.com/6458278/240810359-573a1a31-4813-4a41-9249-afa15b4d9bd6.png)).

For Navigation, this release allows you to be able to view, manage, and modify your menus without having to find them in a specific template in the site editor. If you have a single menu, you’ll see it displayed directly in the sidebar. If there are multiple menus, they will all be listed with the option to drill into each as you want. For each, you’ll be able to edit in isolation to make the changes you’d like and have those changes propagate to all the places where that menu is used. Lastly, if you’re editing a template part that contains a Navigation Menu, that menu will be displayed in the sidebar for quick editing. Here’s a rundown of what to expect depending on the complexity and count of the menus:

*   Access all your Navigation Menus from the Site View.
*   Rename, Duplicate, and Delete Navigation Menus.
*   Make simple modifications to menu items, including reordering and deleting.
*   Edit your entire Navigation Menu in focus mode and have changes propagate to all instances. Note: you cannot add/edit existing items in the Site View itself.

For Pages, this marks an introduction to true content editing in the Site Editor, including a strong distinction between editing the template and the page, while allowing you to view either as you’d like within context. Just like with the Page editor, you can set status, publish date, and password all within the Site Editor. This new feature set adds helpful interface nudges, a navigation system that allows you to go back to editing a page from editing a template, and the additional context in the block settings sidebar to provide clarity while creating. This includes listing out dynamic pages, like Search or 404, which are powered by templates, to reduce confusion. 

For Styles, you’ll be able to browse style variations, use the style book, and get easy access to open the overall Style system from within the sidebar.

For the Patterns section, all your patterns, synced or not, along with your template parts, are available to manage, edit, and create. 

**Visuals:** [Overview YouTube video](https://youtu.be/PhB7uZg8ZtU), [video of the library section](https://drive.google.com/file/d/1JRuiwmfa64P4gXWmSXG-xYXRGxwPpEeP/view?usp=sharing), [video of the pages section](https://drive.google.com/file/d/1WJWfWlg5KNlOh_sh-u_soN8rb1LNfnBQ/view?usp=sharing), [image of the pages section](https://drive.google.com/file/d/1fM5TK26gB4epiD61eTtrBu2JcvZV7Ng8/view?usp=sharing), [content vs. template split video](https://drive.google.com/file/d/1hQxriyFDvdPQGW4rXkwmHpmnOXTMivb8/view?usp=sharing), [video overview of navigation changes](https://www.youtube.com/watch?v=s1L28GuA-y0&t=1s).

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/PhB7uZg8ZtU?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

**Key Make Posts/GitHub/Trac Issue(s):**  

*   Add the pages menu to the site editor ([50463](https://github.com/WordPress/gutenberg/pull/50463))
*   Site editor sidebar: add page details ([50767](https://github.com/WordPress/gutenberg/pull/50767))
*   Navigation on browse mode ([50396](https://github.com/WordPress/gutenberg/issues/50396)) with individual issues linked within including add focus mode for Navigation Menus. ([39286](https://github.com/WordPress/gutenberg/pull/39286))
*   Try/publish in site editor ([50767](https://github.com/WordPress/gutenberg/pull/50767)).
*   Add ability to set status, publish date and password in site editor. ([51408](https://github.com/WordPress/gutenberg/pull/51408))
*   Rename Library to Patterns ([52102](https://github.com/WordPress/gutenberg/pull/52102)).
