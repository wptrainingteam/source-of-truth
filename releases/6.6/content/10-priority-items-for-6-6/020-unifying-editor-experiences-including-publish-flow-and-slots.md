---
title: "Unifying editor experiences, including publish flow and slots"
slug: unifying-editor-experiences-including-publish-flow-and-slots
tags: []
---

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/zidqPCJhze8?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

Common experiences between the two editors grows closer thanks to a technical push to share code and a design push to create a single, coherent experience across the post and site editor. This helps lay the groundwork for a future where there’s less separation between the two experiences and more of a seamless feel, including for extensibility. To get a sense of scale, at a code level in Core, this means nearly 7,000 lines of code no longer needs to be maintained. 

The more noticeable and big pieces for users will be seen in a unified publish flow and a new singular “summary” inspector panel, which will also be reused within the site editor when you are bulk editing items. The publish flow also has an updated design with a new, more prominent display for key information like title, status, and featured image. This includes moving the “move to trash” option to behind the three dot menu next to the title of the post in the inspector. For the inspector, you can expect more consistency in the information that’s displayed regardless of what you’re interacting with from a pattern to a post. 

Of note, some confusion was created when a [duplicate post/page option was added](https://github.com/WordPress/gutenberg/issues/61083). This is now only available when using the Gutenberg plugin and will not be in this release. 

#### Slots available across editors

Thanks to the technical unification, various slots are now available between the post and site editors allowing plugin authors to use the same code to load their plugins regardless of the context of the editor. The following slots are now available under the wp.editor global variable (@wordpress/editor package or wp-editor script handle):

*   [PluginDocumentSettingsPanel](https://href.li/?https://github.com/WordPress/gutenberg/pull/60961)
*   [PluginSidebarMoreMenuItem](https://href.li/?https://github.com/WordPress/gutenberg/pull/60853)
*   [PluginSidebar](https://href.li/?https://github.com/WordPress/gutenberg/pull/60815#top)
*   [PluginPostStatusInfo](https://href.li/?https://github.com/WordPress/gutenberg/pull/60814#top)
*   [PluginMoreMenuItem](https://href.li/?https://github.com/WordPress/gutenberg/pull/60778)
*   [PluginBlockSettingsMenuItem](https://href.li/?https://github.com/WordPress/gutenberg/pull/60033)
*   [PluginPostPublishPanel](https://href.li/?https://github.com/WordPress/gutenberg/pull/60344)
*   [PluginPrePublishPanel](https://href.li/?https://github.com/WordPress/gutenberg/pull/60344)

Going forward, contributors can also build editor features in a single place and have them available in both post and site editors, making it easier for folks to extend. For current plugins, this means you need to check how you’ve used these now universal slots to ensure your plugin’s extension points show up in the right places. In general, rather than targeting an editor, now you’ll want to target by post type (template, page, post). [To help mitigate any unexpected usage of these slots](https://github.com/WordPress/gutenberg/pull/62531), EditPost slots will only work on edit-post and EditSite slots will only work on edit-site.

**Visuals:** [demo](https://drive.google.com/file/d/1QDpkfl5048RXZSXB3IbSuZ6OURCnloEa/view?usp=drive_link) showing changes between 6.5.3 new post flow vs 6.6 new post flow, [demo](https://drive.google.com/file/d/1tvVwbx2SVfCyoLDNe0VLiy12qsrQC8aP/view?usp=drive_link) of integrated actions in pages and data view, [public YouTube video](https://youtu.be/zidqPCJhze8) detailing all of the changes.
**Adoption approach:** Please check how your plugins are using slotfills to ensure they show up in the right editors and [review this dev note](https://make.wordpress.org/core/2024/06/18/editor-unified-extensibility-apis-in-6-6/). [To help mitigate any unexpected usage of these slots](https://github.com/WordPress/gutenberg/pull/62531), EditPost slots will only work on edit-post and EditSite slots will only work on edit-site.
**Key Make Posts/GitHub/Trac Issue(s):** Follow this [iteration issue for aligning features](https://github.com/WordPress/gutenberg/issues/52632) and this [tracking issue for the inspector controls](https://github.com/WordPress/gutenberg/issues/59689) for more information.
