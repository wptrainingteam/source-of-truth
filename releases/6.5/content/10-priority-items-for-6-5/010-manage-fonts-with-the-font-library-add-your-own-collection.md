---
title: Manage fonts with the Font Library & add your own collection
slug: manage-fonts-with-the-font-library-add-your-own-collection
tags: []
---

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/Pnx_nkB-O2E?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

The Font Library makes it easy for anyone to install, remove, and activate fonts across your site. It’s available globally similar to the Media Library. Any installed font, whether installed by a user or a theme, can then be selected across the editing experience. When fonts are installed, they are stored in wp-content/uploads/fonts ([this can be changed](https://github.com/WordPress/gutenberg/issues/55063)).

As part of this new experience, Google Fonts is automatically included for folks to use, along with the option to upload fonts manually. The Font Library is accessible directly for Block Themes via the Site Editor. This new ability unlocks a powerful and expansive way to control a foundational piece of your site’s design without needing to touch any code. 

For anyone looking to add their own font collection, extenders can use the same approach for adding Google Fonts. Each font collection will then be displayed as a new tab in the font library modal, [as shown in this screenshot with Google Fonts](https://drive.google.com/file/d/1s7YTUzet_ZnpWuWkRxlTOXv2brHzRX_M/view?usp=drive_link). To provide a font collection, you can do so via PHP by calling the wp\_register\_font\_collection () function with your configuration as a parameter or with PHP and a JSON file. A Font Collection can be disabled by using the wp\_unregister\_font\_collection function. [Read more in these in progress docs](https://github.com/WordPress/gutenberg/pull/54477/) or in [the original proposal for examples](https://github.com/WordPress/gutenberg/issues/57980). 

**Visuals:** [YouTube video covering the feature](https://youtu.be/Pnx_nkB-O2E), [install and apply fonts demo](https://drive.google.com/file/d/1eT6UjiIfXvl0_wzYvUfIYfzufFHaWPA3/view?usp=drive_link).

**Adoption approach:** 

*   To disable the font library UI, [please use the PHP filter outlined in this PR](https://github.com/WordPress/gutenberg/pull/57818). 
*   For anyone looking to extend and add their own font collection or remove a font collection, [please follow these work in progress docs](https://github.com/WordPress/gutenberg/pull/54477/). 
*   To change where fonts are uploaded, [please follow the instructions outlined in this PR](https://github.com/WordPress/gutenberg/pull/57697). 

**Key Make Posts/GitHub/Trac Issue(s)**: [Unblocking 6.5 Make Core post](https://make.wordpress.org/core/2024/03/07/unblocking-wp6-5-font-library-and-synced-pattern-overrides/) with reference to the Font Library feature, [Font Library: WordPress 6.5 Required Tasks](https://github.com/WordPress/gutenberg/issues/55277#top), [Font Library. Stage 1: Manage fonts and Local fonts upload](https://github.com/WordPress/gutenberg/issues/52698), [Font Library. Stage 2: Fonts Library extensions](https://github.com/WordPress/gutenberg/issues/53307), [Font Library](https://github.com/WordPress/gutenberg/issues/54169). Font Library: Unregister font collection. ([54701](https://github.com/WordPress/gutenberg/pull/54701))
