---
title: "Work faster with the Command Palette (and create your own commands)"
slug: work-faster-with-the-command-palette-and-create-your-own-com
tags: [plugin author, end user, site admin]
---

With the growing complexity and possibility of the Site Editor, a new tool was created to streamline the experience and help you get where you want to go: the Command Palette. When invoked either through a keyboard shortcut or in the interface in two places, you are presented with a list of possible actions to take, including things like:

*   Open Styles to open the Style editing interface.
*   View template parts to see a list of all template parts.
*   Add Custom CSS to directly open the CSS field in Styles.
*   Add a new page to quickly create just that – a new page. 

To access it, simply open the Site Editor and use the keyboard shortcut Cmd+k on Mac or Ctrl+k on Windows. You will also find it available when in the Site View in the sidebar by clicking on the search icon or in Edit View in the Title Bar. Here’s a list of all available commands:

*   _Edit Template_ when editing a page.
*   _Back to page_ to return to editing a page from a template.
*   _Reset template_
*   _Reset template part_
*   _Reset styles to default_
*   _Delete template_
*   _Delete template part_
*   _Toggle settings sidebar_
*   _Toggle block inspector_
*   _Toggle spotlight mode_
*   _Toggle top toolbar_
*   _Toggle code editor_
*   _Toggle list view_
*   _Toggle fullscreen mode_
*   _Open editor preferences_
*   _Open keyboard shortcuts_
*   _Open CSS_
*   _Open styles revisions_
*   _Open styles_
*   _Learn about styles_ to trigger the welcome guide for Styles
*   _View site_
*   _View templates_
*   _View template parts_
*   _Open Navigation Menus_
*   _Manage all custom patterns_

To see the most up-to-date list, [please view the files here](https://github.com/WordPress/gutenberg/tree/trunk/packages/edit-site/src/hooks/commands). Of note, there is a [current conflict as this keyboard shortcut is already in use so](https://github.com/WordPress/gutenberg/issues/51737), depending on what’s in focus, the Command Palette may not be invoked. 

For any developers, keep in mind that the [API is public](https://github.com/WordPress/gutenberg/pull/50691), so you can explore adding your own commands to the interface. See the adoption approach for more information below.

**Visuals:** [image](https://drive.google.com/file/d/1p0KOpOk8beH3Bl1fAsdGEvdy7vPtpzrb/view?usp=sharing), [video demo](https://drive.google.com/file/d/1wxcvc-3dDAFl-kyUn1MA2pDnjbOniJkG/view?usp=sharing).

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/5rzzBSm7SDQ?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

**Adoption approach:** You can add your own commands to the interface with [documentation available here](https://make.wordpress.org/core/2023/05/17/command-center-request-for-feedback/#:~:text=issues/48457.-,API,-Note%3A%20The).

**Key Make Posts/GitHub/Trac Issue(s):** Discussion on “Command Center” naming ([50925](https://github.com/WordPress/gutenberg/issues/50925)), Command Center: Quick search for jumping to other pages or templates in the editor ([48457](https://github.com/WordPress/gutenberg/issues/48457)), Mapping contextual commands ([50407](https://github.com/WordPress/gutenberg/issues/50407)), [Developer Note for 6.3](https://make.wordpress.org/core/2023/07/17/introducing-the-wordpress-command-palette-api/)
