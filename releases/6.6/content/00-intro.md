I’m offering up the next edition of the Source of Truth for WordPress 6.6, set to launch July 16th, 2024. You can see all prior editions [under this tag](https://nomad.blog/tag/source-of-truth/). As always, I’d recommend staying up to date on the dev notes as those are rolling out along with [reviewing the Field Guide](https://make.wordpress.org/core/2024/06/25/wordpress-6-6-field-guide/).

As a reminder, this is not meant to replace dev notes or the release specific field guides, which serve important roles and are separate efforts. I mainly see it as for folks close to the WordPress release itself and educating others than I see it as something broadly helpful for the average WordPress user. It’s a foundational resource but, it’s so long and detailed, it needs to be repackaged to be useful in each space. Feedback is welcomed for improvements for this version and for future versions as I consider how best to share this information.

Big thank you to everyone who helped in big and small ways.

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="3840" height="2160" data-attachment-id="18210" data-permalink="https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/6-6-placeholder-highlight-grid/" data-orig-file="https://i0.wp.com/nomad.blog/wp-content/uploads/2024/06/6-6-placeholder-highlight-grid.png?fit=3840%2C2160&amp;ssl=1" data-orig-size="3840,2160" data-comments-opened="1" data-image-title="6-6-placeholder-highlight-grid" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/nomad.blog/wp-content/uploads/2024/06/6-6-placeholder-highlight-grid.png?fit=1024%2C576&amp;ssl=1" src="https://i0.wp.com/nomad.blog/wp-content/uploads/2024/06/6-6-placeholder-highlight-grid.png?resize=3840%2C2160&amp;ssl=1" alt="" class="wp-image-18210"></figure>

WordPress 6.6 is slated for release on July 16, 2024. Following the technical advancements of WordPress 6.5, this new version represents a major leap in design, improving both tooling and user experience.

Design tools take center stage, with grid layout support, section specific block styling, aspect ratio preset support, negative margins, and enhanced style variations available out of the box that allow you to mix & match color and typography options across different variations. Theme.json updates to v3 as part of changes made for theme authors to customize default font sizes and spacing, including disabling showing the default font sizes and spacing options if desired. These updates strengthen the foundation of a unified design system, offering more control and optionality.

From a user experience perspective, WordPress 6.6 introduces a unified publish flow, resulting from both technical and design efforts to create a seamless experience across editors. The start of admin redesign work initiated in 6.5 continues to evolve, with Data Views offering new layout options, a unified template part and pattern experience, and more accessible management sections. Classic themes now have a modern pattern management system, broadening exposure to WordPress’s future.

To make writing and creating with patterns and blocks easier, you can now bulk export patterns, navigate through patterns in the same category within specific contexts, swap templates and template parts in the inspector effortlessly, use starter patterns in the Site Editor, and see all blocks in the Inserter, not just the ones currently allowed.

Of note, this release includes Gutenberg 17.8 – 18.5.

**Special Anne note:** In terms of features, I am expecting the most feedback around exposing new pattern management to classic themes due to size of impact and the unified publish flow which includes changes to both the design and workflow of publishing content. 

**Table of Contents**

1.  [Important Note/Guidelines](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#important-note-guidelines)
2.  [Changelog](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#changelogoverview)
3.  [Overview](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#changelogoverview) 
    1.  [Important links:](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#important-links)
    2.  [6.6 assets:](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#6-6-assets-1)
4.  [Tags](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#tags)
5.  [Priority Items for 6.6](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#priority-items-for-6-6)
    1.  [Advancing the new Data Views in the Site Editor](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#advancing-the-new-data-views-in-the-site-editor)
    2.  [Unifying editor experiences, including publish flow and slots](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#unifying-editor-experiences-including-publish-flow-and-slots) 
        1.  [Slots available across editors](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#slots-available-across-editors)
    3.  [Create individual typography and color variations to level up design options [theme author] [end user]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#create-individual-typography-and-color-variations-to-level-up-design-options-theme-author-end-user)
    4.  [Override specific items in synced patterns while keeping stylistic control](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#override-specific-items-in-synced-patterns-while-keeping-stylistic-control) 
    5.  [Improvements to Grid Layout](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#improvements-to-grid-layout)
    6.  [Bringing a modern experience for Pattern management to Classic Themes](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#bringing-a-modern-experience-for-pattern-management-to-classic-themes) 
    7.  [Directly edit custom field values and view bindings with Custom Fields & Block Bindings API [plugin author] [developer]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#directly-edit-custom-field-values-and-view-bindings-with-custom-fields-block-bindings-api-plugin-author-developer) 
6.  [Additional Items for 6.6](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#additional-items-for-6-6)
    1.  [Add Rollbacks to auto-updates](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#add-rollbacks-to-auto-updates)
    2.  [Design tooling upgrades [theme author]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#design-tooling-upgrades-theme-author)
        1.  [Define multiple style options for sections of blocks, including all nested blocks  [theme author] [enterprise]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#define-multiple-style-options-for-sections-of-blocks-including-all-nested-blocks-theme-author-enterprise)
        2.  [Use negative margins](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#use-negative-margins)
        3.  [Set site background images in the Site Editor](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#set-site-background-images-in-the-site-editor)
        4.  [Add box shadow to Featured Image block](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#add-box-shadow-to-featured-image-block)
        5.  [Use your Featured Image in the Media and Text block](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#use-your-featured-image-in-the-media-and-text-block)
        6.  [Add ability to create/edit shadows in Styles](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#add-ability-to-create-edit-shadows-in-styles)
        7.  [Additional supports](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#additional-supports)
    3.  [Add aspect ratio presets support via theme.json [theme author]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#add-aspect-ratio-presets-support-via-theme-json-theme-author)
    4.  [Added control for default font sizes and spacing in theme.json & incrementing theme.json to v3 [theme author]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#added-control-for-default-font-sizes-and-spacing-in-theme-json-incrementing-theme-json-to-v3-theme-author)
    5.  [Inserter shows all blocks instead of the blocks allowed](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#inserter-shows-all-blocks-instead-of-the-blocks-allowed)
    6.  [Copy custom CSS between style variations when switching](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#copy-custom-css-between-style-variations-when-switching)
    7.  [Shuffle patterns in specific scenarios](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#shuffle-patterns-in-specific-scenarios)
    8.  [Bulk export your patterns](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#bulk-export-your-patterns)
    9.  [Use Starter Patterns in the Site Editor](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#use-starter-patterns-in-the-site-editor)
    10.  [Browse and switch templates and template parts in the Inspector [end user]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#browse-and-switch-templates-and-template-parts-in-the-inspector-end-user)
    11.  [Indent List block items via the tab key](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#indent-list-block-items-via-the-tab-key)
    12.  [Continued performance improvements](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#continued-performance-improvements)
    13.  [Iterating on the Interactivity API [plugin author] [developer]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#iterating-on-the-interactivity-api-plugin-author-developer) 
    14.  [Block Hooks fixes [plugin author] [developer]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#block-hooks-fixes-plugin-author-developer) 
    15.  [Updates to the HTML API [plugin author] [developer]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#updates-to-the-html-api-plugin-author-developer) 
    16.  [Introducing the Token Map [developer]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#introducing-the-token-map-developer)
    17.  [Dropping support for PHP 7.0 & 7.1](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#dropping-support-for-php-7-0-7-1)
    18.  [Changes to help prepare for React 19](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#changes-to-help-prepare-for-react-19)
    19.  [New filter to extend the list of post content blocks [plugin author] [developer]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#new-filter-to-extend-the-list-of-post-content-blocks-plugin-author-developer)
    20.  [Add ability to preview template in post editor for non administrators [site admin] [enterprise]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#add-ability-to-preview-template-in-post-editor-for-non-administrators-site-admin-enterprise)
    21.  [Placeholders updates](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#placeholders-updates)
    22.  [Refining the Font Library](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#refining-the-font-library) 
    23.  [Add support for custom ports for multisites [developer] [enterprise]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#add-support-for-custom-ports-for-multisites-developer-enterprise) 
    24.  [Introduce wp\_prime\_network\_option\_caches() to load multiple network options with a single database request [developer] [enterprise]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#introduce-wp-prime-network-option-caches-to-load-multiple-network-options-with-a-single-database-request-developer-enterprise) 
    25.  [General improvements](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#general-improvements)
7.  [Punted to a future release](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#punted-to-a-future-release)
    1.  [Zoom out to compose with patterns](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#zoom-out-to-compose-with-patterns)
    2.  [Preferred languages](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#preferred-languages)
    3.  [Server to client data sharing for Script Modules [plugin author] [theme author] [enterprise]](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#server-to-client-data-sharing-for-script-modules-plugin-author-theme-author-enterprise)
    4.  [View inherited style values](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/#view-inherited-style-values)

### Important links:

*   [Roadmap to 6.6](https://make.wordpress.org/core/2024/05/03/roadmap-to-6-6/).
*   [6.6 Development Cycle information](https://make.wordpress.org/core/6-6/).
*   [6.6 Field Guide](https://make.wordpress.org/core/2024/06/25/wordpress-6-6-field-guide/)

### 6.6 assets:

To view all assets in this document, [please review this drive folder](https://drive.google.com/drive/u/1/folders/1VhZp-yXgovLy6hubPEp9Nq1j3hohInMJ).
