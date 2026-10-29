Building off of both the [public 6.2 Source of Truth](https://nomad.blog/2023/03/01/wordpress-6-2-source-of-truth/), [6.3 Source of Truth](https://nomad.blog/2023/07/17/wordpress-6-3-source-of-truth/), and [6.4 Source of Truth](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/), I’m offering up the next edition for WordPress 6.5, set to launch March 26th, 2024.

Compared to prior times, I waited to share this version partially due to [time off for my birthday](https://nomad.blog/2024/03/06/31/) and [some hard decisions](https://make.wordpress.org/core/2024/03/07/unblocking-wp6-5-font-library-and-synced-pattern-overrides/) in the RC phase. As always, I’d recommend staying up to date on the dev notes as those are rolling out ([tracking issue](https://github.com/WordPress/gutenberg/issues/59155), [Make Core tag](https://make.wordpress.org/core/tag/dev-notes-6-5/)) along with the eventual Field Guide.

Feedback is welcomed for improvements for this version and for future versions as I consider how best to share this information. I have had a rough start to 2024 so if there are mistakes I’d love help correcting them and to be aware of them.

[I was asked previously in WordPress slack](https://wordpress.slack.com/archives/C055Y7FKS7N/p1697224424355749) why this wasn’t done as a community driven effort and I wanted to highlight my answer here in case that question comes to mind for anyone reading this. This is not meant to replace dev notes or the release specific field guides, which serve important roles and are separate efforts. I mainly see it as for folks close to the WordPress release itself and educating others than I see it as something broadly helpful for the average WordPress user. It’s a foundational resource but, it’s so long and detailed, it needs to be repackaged to be useful in each space.

Big thank you to everyone who helped along the way, from quick answers to technical questions to adding in detailed information around some of these changes.

WordPress 6.5, set to be released on [April 2nd, 2024 following a 1 week delay](https://make.wordpress.org/core/2024/03/25/wordpress-6-5-release-delayed-1-week/), brings a ton to the table, including:

*   An early look at aspects of phase 3: Admin Redesign with data views in the Site Editor.
*   Exciting technical breakthroughs for developers with new APIs.
*   Brand new features like the Font Library.
*   Load of polish in the form of both smaller, powerful enhancements to current features and a dedicated focus on usability in key areas, like link editing, drag & drop, revisions, and performance. 

For developers in particular, this release sets an exciting stage for features you’re going to hear a lot more about in future versions of WordPress: Block Bindings API, Custom Fields, Data Views package, Interactivity API, improved Block Hooks, and more. As is the WordPress way, these advanced tools are being rolled out in early stages in order to get feedback and shape the future. Get involved! Use what’s in place and share where you want to see these go. Embrace these new, advanced tools in WordPress 6.5, knowing that they are designed to evolve and expand in capabilities in the releases to come.

Of note, this release includes Gutenberg 16.8 to 17.7. 

**Table of Contents**

1.  [Important Note/Guidelines](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#important-note-guidelines)
2.  [Changelog](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#changelogoverview)
3.  [Overview](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#changelogoverview) 
    1.  [Important links:](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#important-links)
    2.  [6.5 assets:](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#6-5-assets)
4.  [Tags](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#tags)
5.  [Priority Items for 6.5](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#priority-items-for-6-5)
    1.  [Manage fonts with the Font Library & add your own collection](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#manage-fonts-with-the-font-library-add-your-own-collection) 
    2.  [New powerful views for pages, patterns, templates, and template parts in the Site Editor](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#new-powerful-views-for-pages-patterns-templates-and-template-parts-in-the-site-editor)
    3.  [Enable appearance tools for Classic Themes, unlocking more creative control [theme author] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#enable-appearance-tools-for-classic-themes-unlocking-more-creative-control-theme-author-enterprise)
    4.  [Robust revisions in the Site Editor](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#robust-revisions-in-the-site-editor)
        1.  [Read a short summary of styling changes thanks to a new design](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#read-a-short-summary-of-styling-changes-thanks-to-a-new-design)
        2.  [View all style revisions thanks to pagination](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#view-all-style-revisions-thanks-to-pagination)
        3.  [Toggle on the Style Book to get a different angle](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#toggle-on-the-style-book-to-get-a-different-angle)
        4.  [Rely on full revisions for everything](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#rely-on-full-revisions-for-everything) 
        5.  [New functions for Core Data API [plugin author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#new-functions-for-core-data-api-plugin-author)
    5.  [Connect block attributes and Custom Fields with help from the Block Bindings API [theme author] [plugin author] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#connect-block-attributes-and-custom-fields-with-help-from-the-block-bindings-api-theme-author-plugin-author-enterprise)
        1.  [Connect block attributes and custom fields](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#connect-block-attributes-and-custom-fields)
        2.  [Developers can add support for other dynamic data sources](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#developers-can-add-support-for-other-dynamic-data-sources)
    6.  [More intuitive link editing experience](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#more-intuitive-link-editing-experience)
    7.  [Drag & drop usability improvements](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#drag-drop-usability-improvements)
    8.  [Design tools](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#design-tools)
        1.  [Box shadow: add to block settings and add to more blocks [theme author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#box-shadow-add-to-block-settings-and-add-to-more-blocks-theme-author)
        2.  [Group block: Adjust Background Size, set repeat options, and set focal point [theme author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#group-block-adjust-background-size-set-repeat-options-and-set-focal-point-theme-author)
        3.  [Cover block: Set aspect ratio](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#cover-block-set-aspect-ratio) 
        4.  [Cover block: overlay color automatically set upon adding background image](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#cover-block-overlay-color-automatically-set-upon-adding-background-image)
        5.  [Other supports](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#other-supports)
    9.  [New Lightbox UX that aligns with overall image linking](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#new-lightbox-ux-that-aligns-with-overall-image-linking)
    10.  [General Site Editor UX improvements](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#general-site-editor-ux-improvements)
         1.  [Show template toggle when editing pages](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#show-template-toggle-when-editing-pages)
         2.  [New UX for template editing in the post/page editor](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#new-ux-for-template-editing-in-the-post-page-editor)
         3.  [Templates grouped properly in the Site Editor](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#templates-grouped-properly-in-the-site-editor)
         4.  [See summary of styling changes when you save](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#see-summary-of-styling-changes-when-you-save)
         5.  [Streamlined workflow to change pattern sync status and make theme patterns your own](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#streamlined-workflow-to-change-pattern-sync-status-and-make-theme-patterns-your-own)
         6.  [Rename and delete pattern categories](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#rename-and-delete-pattern-categories)
         7.  [Patterns defined from the pattern directory are shown in Site Editor > Patterns](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#patterns-defined-from-the-pattern-directory-are-shown-in-site-editor-patterns)
         8.  [Media pattern category split into audio and videos](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#media-pattern-category-split-into-audio-and-videos) 
         9.  [Command Palette: improved contextual commands and new commands](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#command-palette-improved-contextual-commands-and-new-commands)
         10.  [Post Featured Image: option to use first image from a post [site admin] [developer] [theme author] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#post-featured-image-option-to-use-first-image-from-a-post-site-admin-developer-theme-author-enterprise)
         11.  [Show outlines around editable blocks to ensure folks know what’s editable](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#show-outlines-around-editable-blocks-to-ensure-folks-know-what-s-editable) 
         12.  [Scrolling Top Toolbar](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#scrolling-top-toolbar)
         13.  [Unifying the Post Editor and Site Editor experiences](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#unifying-the-post-editor-and-site-editor-experiences)
         14.  [Other](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#other)
    11.  [Performance improvements](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#performance-improvements)
         1.  [Introducing a more performant localization library](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#introducing-a-more-performant-localization-library)
         2.  [5x faster typing processing, 2x faster editor loading, 60% reduction in pattern loading](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#5x-faster-typing-processing-2x-faster-editor-loading-60-reduction-in-pattern-loading)
         3.  [Improvements for registering block variations with callbacks](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#improvements-for-registering-block-variations-with-callbacks)
         4.  [Support for AVIF image format](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#support-for-avif-image-format) 
    12.  [Introducing Interactions powered by the Interactivity API [plugin author] [theme author] [developer] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#introducing-interactions-powered-by-the-interactivity-api-plugin-author-theme-author-developer-enterprise)
    13.  [Plugin dependencies [plugin author] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#plugin-dependencies-plugin-author-enterprise)
    14.  [More powerful Block Hooks API [plugin author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#more-powerful-block-hooks-api-plugin-author)
    15.  [Pattern management in Classic Themes](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#pattern-management-in-classic-themes)
         1.  [New Appearance > Patterns link for easier access](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#new-appearance-patterns-link-for-easier-access) 
         2.  [Paving a future path for access to the Site Editor pattern experience](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#paving-a-future-path-for-access-to-the-site-editor-pattern-experience)
6.  [Additional Items for 6.5](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#additional-items-for-6-5)
    1.  [New UX for editing synced patterns](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#new-ux-for-editing-synced-patterns)
    2.  [Footnotes: support for custom post types and ability to remove footnotes support](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#footnotes-support-for-custom-post-types-and-ability-to-remove-footnotes-support)
    3.  [Script Modules API [plugin author] [theme author] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#script-modules-api-plugin-author-theme-author-enterprise)
    4.  [HTML API Updates [developer] [plugin author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#html-api-updates-developer-plugin-author)
    5.  [Create Block package introduces transformer property [plugin author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#create-block-package-introduces-transformer-property-plugin-author)
    6.  [Block.json: allowedBlocks field to specify allowed children [plugin author] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#block-json-allowedblocks-field-to-specify-allowed-children-plugin-author-enterprise)
    7.  [Set site icon in General settings](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#set-site-icon-in-general-settings)
    8.  [View stylesheet support for block.json [plugin author] [developer] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#view-stylesheet-support-for-block-json-plugin-author-developer-enterprise)
    9.  [Updated preferences panel](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#updated-preferences-panel)
    10.  [List View improvements](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#list-view-improvements) 
         1.  [Rename (almost) all blocks from the editor [theme author] [end user] [site admin] [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#rename-almost-all-blocks-from-the-editor-theme-author-end-user-site-admin-enterprise)
         2.  [Right click to open up your block setting’s menu](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#right-click-to-open-up-your-block-setting-s-menu)
         3.  [Enjoy new keyboard shortcuts](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#enjoy-new-keyboard-shortcuts)
    11.  [Scrolling top toolbar for the Distraction-Free Mode](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#scrolling-top-toolbar-for-the-distraction-free-mode)
    12.  [General editor improvements and polish](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#general-editor-improvements-and-polish)
    13.  [Separator: Remove border-bottom property [theme author] [plugin author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#separator-remove-border-bottom-property-theme-author-plugin-author)
    14.  [Gallery block: Random order setting](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#gallery-block-random-order-setting)
    15.  [Gallery block: Styled scrollbars for captions [end user] [theme author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#gallery-block-styled-scrollbars-for-captions-end-user-theme-author)
    16.  [Aspect ratios removed [theme author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#aspect-ratios-removed-theme-author)
    17.  [Raising the minimum version of MySQL](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#raising-the-minimum-version-of-mysql)
    18.  [Theme.json changes  [theme author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#theme-json-changes-theme-author)
         1.  [Disallow custom content size controls [enterprise]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#disallow-custom-content-size-controls-enterprise)
         2.  [CSS Level 4 viewport-relative units support](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#css-level-4-viewport-relative-units-support)
    19.  [Ensure all custom taxonomies/post types are available for the Navigation block [plugin author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#ensure-all-custom-taxonomies-post-types-are-available-for-the-navigation-block-plugin-author)
    20.  [Changing the order of block global styles [theme author] [plugin author]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#changing-the-order-of-block-global-styles-theme-author-plugin-author)
    21.  [Taxonomy terms updated across REST API [plugin author] [developer]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#taxonomy-terms-updated-across-rest-api-plugin-author-developer)
    22.  [New hook to change the subject line of an email [developer]](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#new-hook-to-change-the-subject-line-of-an-email-developer) 
    23.  [Support for AVIF image format](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#support-for-avif-image-format) 
7.  [Punted to a future release](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#punted-to-a-future-release)
    1.  [Override content in a synced pattern](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#override-content-in-a-synced-pattern) 
    2.  [Customize the Navigation block mobile overlay](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#customize-the-navigation-block-mobile-overlay)
    3.  [New theme.json tools: Style Sections & Color Sections](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#new-theme-json-tools-style-sections-color-sections)
    4.  [PHP compatibility work](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#php-compatibility-work) 
    5.  [Rollbacks (for failures) during automatic updates](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/#rollbacks-for-failures-during-automatic-updates)

### Important links:

*   [Roadmap to 6.5](https://make.wordpress.org/core/2023/12/07/roadmap-to-6-5/).
*   [6.5 Development Cycle information](https://make.wordpress.org/core/6-5/).
*   [6.5 dev notes tag on Make Core](https://make.wordpress.org/core/tag/dev-notes-6-5/). 
*   [Upcoming 6.5 dev notes](https://github.com/orgs/WordPress/projects/154/views/1?query=is%3Aopen+sort%3Aupdated-desc) (if you want to get a sneak peek). 

As the release cycle continues, please keep in mind that various dev notes will be shared on Make Core along with an overall Field Guide as is standard across each release cycle. These items are not yet ready at the time of initially publishing this in line with beta 1 but will be updated over time. 

### 6.5 assets:

To view all assets in this document, [please review this drive folder](https://drive.google.com/drive/u/1/folders/1Xl5KT_RbsfDk39iZ2tCOAH8MzDiw4wNQ).
