Welcome to the Source of Truth for WordPress 7.1!

Before you dive headfirst into all the big and small changes and pick your favorites, make sure to read these preliminary thoughts about this post and how to use it. If you have any questions, leave a comment or email me at [pauli@gutenbergtimes.com](mailto:pauli@gutenbergtimes.com).

A huge “Thank you” to Anne McCarthy, Justin Tadlock, Isabel Brison, Adam Silverstein, Ramon Dodd, Andrew Serong, Hans-Gerd Gerhards, Marin Atanasov, Krupa Nanda, Aaron Robertshaw, Ben Dwyer, Brent MacKinnon, Ashar Fuadi, and a lot more. It still takes a village. Also huge respect to the whole release squad on getting WordPress 7.1 over the finish line.

Estimated reading time

37–56 minutes

at

8,851 words

_This article is also available in German on Krautpress: [WordPress 7.1 Source of Truth – Deutsch](https://krautpress.de/2026/wordpress-7-1-source-of-truth/)_

**Table of Contents**

1.  [Changelog](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#changelog)
2.  [Important note/guidelines](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#important-note-guidelines)
3.  [Overview](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#overview)
    1.  [Resources](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#resources-help-test-wordpress-7-1-fieldguide-dev-notes-are-scheduled-to-be-published-around-rc-august-5-links-in-this-document-are-to-the-draft-versions-roadmap-to-7-1of-note-this-release-consists-of-features-from-the-gutenberg-plugin-version-22-7-23-6-here-are-the-release-posts-of-those-plugin-releases-22-7-22-8-22-9-23-0-23-1-23-2-23-3-23-4-23-5-23-6-later-gutenberg-releases-contain-bug-fixes-backported-to-wordpress-7-1-release-branches)
    2.  [Assets](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#assets) 
4.  [Tags](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#tags)
5.  [Priority Items for WordPress 7.1](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#resources-help-test-wordpress-7-1-fieldguide-dev-notes-are-scheduled-to-be-published-around-rc-august-5-links-in-this-document-are-to-the-draft-versions-roadmap-to-7-1of-note-this-release-consists-of-features-from-the-gutenberg-plugin-version-22-7-23-6-here-are-the-release-posts-of-those-plugin-releases-22-7-22-8-22-9-23-0-23-1-23-2-23-3-23-4-23-5-23-6-later-gutenberg-releases-contain-bug-fixes-backported-to-wordpress-7-1-release-branches)
    1.  [Responsive styles for blocks](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#responsive-styles-for-blocks)
        1.  [Viewport breakpoint customization](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#viewport-breakpoint-customization)
        2.  [Interactive states styling (hover, focus)](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#interactive-states-styling-hover-focus)
    2.  [Media editor modal and free-form image cropper](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#media-editor-modal-and-free-form-image-cropper)
    3.  [Client-side media processing improvements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#client-side-media-processing-improvements)
    4.  [Icons now inherit color, and the Icons API takes shape](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#icons-now-inherit-color-and-the-icons-api-takes-shape)
        1.  [For developers: Registering more collections](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#for-developers-registering-more-collections)
    5.  [Admin Bar everywhere](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#admin-bar-everywhere) 
6.  [New Blocks](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#new-blocks)
    1.  [Playlist block](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#playlist-block)
    2.  [Tabs block](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#tabs-block)
7.  [Improved Blocks and Block handling](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#improved-blocks-and-block-handling)
    1.  [Block transforms: preview first, convert faster](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#block-transforms-preview-first-convert-faster)
    2.  [Combine gradient and image backgrounds](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#combine-gradient-and-image-backgrounds)
    3.  [Cover Block: control video embed providers](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#cover-block-control-video-embed-providers)
    4.  [Gallery and the attached images workflow in the Media Library](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#gallery-attached)
    5.  [Image Block: Mark as decorative toggle](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#image-block)
    6.  [Login/out Block Improvements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#login-out-block-improvements)
    7.  [Navigation Block and Link Creation](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#navigation-block-and-link-creation)
    8.  [Search block Styling](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#search-block-styling-theme-builder-site-admin-end-user)
    9.  [Query block](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#query-block)
    10.  [General quality of life improvements.](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#general-quality-of-life-improvements) 
         1.  [Pattern editing experience improvements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#pattern-editing-experience-improvements)
         2.   [Block Width and Layout Controls](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#block-width-and-layout-controls)
         3.  [Link Control and Preview Enhancements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#link-control-and-preview-enhancements)
         4.  [Additional CSS Validation](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#additional-css-validation)
         5.  [Block Editor Attribute Handling](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#block-editor-attribute-handling)
         6.  [Image handling improved](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#image-handling-improved)
         7.  [Post Template Layout Improvements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#post-template-layout-improvements)
         8.  [Post Title Block Enhancements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#post-title-block-enhancements)
         9.  [Block Inserter Enhancements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#block-inserter-enhancements)
8.  [Editor enhancements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#editor-enhancements)
    1.  [Notes move toward a full commenting workflow](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#notes-move-toward-a-full-commenting-workflow)
    2.  [Dedicated Identity section](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#dedicated-identity-section)
    3.  [Visual revisions improvements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#visual-revisions-improvement)
    4.  [Apply Globally now with review panel](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#apply-globally-now-with-review-panel)
9.  [Admin / Workflow updates](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#admin-workflow-updates)
    1.  [Organized command palette](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#organized-command-palette)
    2.  [Change a comment’s parent from the Edit Comment screen](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#change-a-comment-s-parent-from-the-edit-comment-screen)
    3.  [See an excerpt of posts without titles](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#see-an-excerpt-of-posts-without-titles)
    4.  [Media Library: infinite scrolling is back on by default, with a per-user opt-out](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#media-library-infinite-scrolling-is-back-on-by-default-with-a-per-user-opt-out)
    5.  [Hosts can now tune speculative loading defaults](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#hosts-can-now-tune-speculative-loading-defaults)
10.  [Developer Goodies](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#developer-goodies) 
     1.  [Post editor iframe now always on](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#post-editor-iframe-now-always-on)
     2.  [Abilities API opens up its execution pipeline](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#abilities-api-opens-up-its-execution-pipeline)
     3.  [Global Styles and theme.json](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#global-styles-and-theme-json) 
         1.  [Text Shadow support for theme.json](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#text-shadow-support-for-theme-json)
         2.  [Text-Align Block Support Migration](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#text-align-block-support-migration)
         3.  [Block Visibility](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#block-visibility)
         4.  [Block Supports: CSS variables by feature selector](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#block-supports-css-variables-by-feature-selector)
         5.  [A minimum-width option for block dimensions](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#a-minimum-width-option-for-block-dimensions)
     4.  [Design System Theme Provider](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#design-system-theme-provider) 
         1.  [Admin color schemes in Site Editor](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#admin-color-schemes-in-site-editor)
     5.  [Mix static HTML with editable blocks](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#mix-static-html-with-editable-blocks)
     6.  [Block Bindings for list-items and inner blocks](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#block-bindings-for-list-items-and-inner-blocks)
     7.  [Connectors authentication improvements](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#connectors-authentication-improvements)
     8.  [Blocks package stabilizes two experimental functions](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#blocks-package-stabilizes-two-experimental-functions)
     9.  [Post author notifications: the filter decides](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#post-author-notifications-the-filter-decides)
     10.  [Accessible tooltips and toggle tips API](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#accessible-tooltips-and-toggle-tips-api)
     11.  [Filtering Site Editor screens](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#filtering-site-editor-screens)
     12.  [Post list table markup changed for accessibility](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/#post-list-table-markup-changed-for-accessibility)

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="576" data-attachment-id="46684" data-permalink="https://gutenbergtimes.com/wordpress-7-1-source-of-truth/highlight-grid-7-1/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?fit=1920%2C1080&amp;ssl=1" data-orig-size="1920,1080" data-comments-opened="1" data-image-title="Highlight-grid-7.1" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?fit=1024%2C576&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?resize=1024%2C576&amp;ssl=1" alt="" class="wp-image-46684" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?resize=1024%2C576&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?resize=300%2C169&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?resize=768%2C432&amp;ssl=1 768w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?resize=1536%2C864&amp;ssl=1 1536w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?resize=1080%2C608&amp;ssl=1 1080w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Highlight-grid-7.1.png?w=1920&amp;ssl=1 1920w" sizes="auto, (max-width: 1000px) 100vw, 1000px"><figcaption class="wp-element-caption"><em>WordPress 7.1 Highlight grid <a href="https://github.com/WordPress/gutenberg/issues/79297#issuecomment-5223798027">draft August 10, 2026</a></em></figcaption></figure>

WordPress 7.1 rounds out the block editor’s styling controls and makes working with media noticeably smoother. Long-requested features let you style how blocks look across three screen sizes and in interactive states like hover and focus — all without writing custom CSS. The admin experience becomes more personal, too, following you with your own color scheme and toolbar across every screen.

Handling images gets a considerable upgrade, too. The new media editor modal brings free-form cropping, rotation, and metadata editing into one workflow, and client-side media processing makes uploads faster and more resilient, with broader format support and better-optimized files.

The new Playlist and Tabs blocks enrich the layout options available out of the box and make for more creative information presentation. In the same realm fall the expanded Icon API with custom icon collections, dynamic galleries, and background gradients for more blocks.

The unification of WP Admin and the block editors progresses as well: the editors now respect your admin color scheme, and the admin bar stays with you on every screen — including the editors and the front end.

While real-time collaboration has been punted to a future WordPress version, the asynchronous collaboration in Notes took real steps forward with inline notes on partial text selections, @mentions, rich text formatting, and multiple notes per block.

Beyond the headliners, core blocks receive many quality-of-life improvements and bug fixes to make editing content in WordPress streamlined, consistent, and fast — and developers get an expanding set of APIs to build on.
