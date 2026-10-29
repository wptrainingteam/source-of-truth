Building off of both the [public 6.2 Source of Truth](https://nomad.blog/2023/03/01/wordpress-6-2-source-of-truth/) and [6.3 Source of Truth](https://nomad.blog/2023/07/17/wordpress-6-3-source-of-truth/), I’m offering up the next edition for WordPress 6.4, set to launch November 7th, 2023. **This is an early look — come back on October 24th, 2023 if you want a confirmed finalized version.** I like to share early and often both to find areas of improvement, get feedback, and put power in the hands of those involved in helping get the wider WordPress community up to speed on what’s coming. In particular, I’d recommend staying up to date on the [dev notes](https://github.com/WordPress/performance/issues/840) as those will soon be coming out in line with RC1.

Feedback is welcomed for improvements for future versions as I consider how best to share this information. Keep in mind that this is not meant to replace dev notes or the release specific field guides which serve important roles and are separate efforts.

Big thank you to everyone who helped, whether through writing detailed PR descriptions or creating release related assets.

**Important Note/Guidelines**

_This is a more public document so please be mindful of the fact that a wider audience than you might think can participate in what’s shared here 🙂_ 

**Please do not copy and paste what is in this document** since this is public. This should be used to inspire your own content and to ensure that you have the best information about this release. If you do copy and paste, keep in mind that others might do the same, opening the door for some awkwardness around duplicated content out on the web. 

*   If there are drastic changes, this document will be updated and it will be noted in a changelog.
*   Each item has been tagged using best guesses with different high level labels so that you can more readily see at a glance who is likely to be most impacted.
*   Each item has a high level description, visuals (if relevant), adoption strategy (if relevant), and key resources if you want to learn more.

WordPress 6.4 is set to be released on November 7, 2023 and is being led by an [underrepresented gender release squad](https://make.wordpress.org/core/2023/06/05/wordpress-6-4-development-cycle/). This release brings a sharp focus to enhancing items across the WordPress experience, from the details of writing a new post to managing patterns across your site. Amongst these efforts, new features have been added, namely lightbox functionality and a new default theme, along with gaps filled in current functionality with more design tools and workflow upgrades. Alongside these more visual changes, various more technical upgrades are also something to look forward to with the introduction of Block Hooks, the ability to configure your own fluid typography controls, and the option to turn off layout controls on a per block basis.

**Table of Contents**

1.  [Overview](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#overview) 
    1.  [Important links:](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#important-links)
    2.  [6.4 assets:](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#6-4-assets)
2.  [Tags](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#tags)
3.  [Priority Items for 6.4](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#priority-items-for-6-4)
    1.  [Twenty Twenty-Four default theme](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#twenty-twenty-four-default-theme)
    2.  [Enable lightbox functionality for your images](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#enable-lightbox-functionality-for-your-images)
    3.  [Upgraded tooling for smoother workflows](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#upgraded-tooling-for-smoother-workflows)
        1.  [Rename Group blocks for improved organization [site admin] [end user]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#rename-group-blocks-for-improved-organization-site-admin-end-user)
        2.  [See image and gallery thumbnails in List View for quick skimming](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#see-image-and-gallery-thumbnails-in-list-view-for-quick-skimming)
        3.  [Advancing the Command Palette](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#advancing-the-command-palette)
        4.  [Add categories to Patterns and add them anywhere with ease](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#add-categories-to-patterns-and-add-them-anywhere-with-ease) 
        5.  [Import/export patterns as JSON files](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#import-export-patterns-as-json-files)
    4.  [Introducing Block Hooks [plugin author]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#introducing-block-hooks-plugin-author)
    5.  [Writing flow improvements](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#writing-flow-improvements)
    6.  [Design tools](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#design-tools)
        1.  [Add aspect ratio to the Image block’s placeholder [theme author]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#add-aspect-ratio-to-the-image-block-s-placeholder-theme-author)
        2.  [Set specific styling for Button and Headings in Group and Columns blocks [theme author] [site admin]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#set-specific-styling-for-button-and-headings-in-group-and-columns-blocks-theme-author-site-admin)
        3.  [Add background images to Group blocks](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#add-background-images-to-group-blocks)
        4.  [Keep alignment settings when creating synced patterns](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#keep-alignment-settings-when-creating-synced-patterns)
        5.  [Add vertical text orientation support [end user] [theme author]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#add-vertical-text-orientation-support-end-user-theme-author)
        6.  [Add buttons to the Navigation block](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#add-buttons-to-the-navigation-block)
4.  [Additional Items for 6.4](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#additional-items-for-6-4)
    1.  [General improvements and polish](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#general-improvements-and-polish)
    2.  [Turn off layout controls on a per block basis via theme.json [block theme] [site admin]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#turn-off-layout-controls-on-a-per-block-basis-via-theme-json-block-theme-site-admin) 
    3.  [Query loop block: enhanced pagination with extra control [site admin] [end user]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#query-loop-block-enhanced-pagination-with-extra-control-site-admin-end-user)
    4.  [New Progress Bar Component [plugin author]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#new-progress-bar-component-plugin-author)
    5.  [Configure your own fluid typography min and max viewport width [theme author]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#configure-your-own-fluid-typography-min-and-max-viewport-width-theme-author) 
    6.  [Add ability to prevent editing blocks using useBlockEditingMode() [plugin author]](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#add-ability-to-prevent-editing-blocks-using-useblockeditingmode-plugin-author)
    7.  [Use the ‘nofollow’ setting when adding links](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#use-the-nofollow-setting-when-adding-links) 
    8.  [Performance improvements](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#performance-improvements)
    9.  [Technical note on PHP 8 Compatibility](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#technical-note-on-php-8-compatibility) 
5.  [Pushed to 6.5](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#pushed-to-6-5)
    1.  [Introducing the Table of Contents block](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#introducing-the-table-of-contents-block)
    2.  [Bring post formats to block themes](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#bring-post-formats-to-block-themes)
    3.  [Public Interactivity API](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#public-interactivity-api) 
    4.  [Introducing the Time to Read block](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#introducing-the-time-to-read-block)
    5.  [Introducing the Scrolling Marquee Block](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#introducing-the-scrolling-marquee-block) 
    6.  [Revisions for templates and template parts](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#revisions-for-templates-and-template-parts)
    7.  [Rollbacks (for failures) during automatic updates](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#rollbacks-for-failures-during-automatic-updates)
    8.  [Improved pattern experience in non-block themesAdoption approach: N/A.](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#improved-pattern-experience-in-non-block-themesadoption-approach-n-a)
    9.  [Manage fonts with the Font Library & add your own collection](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/#manage-fonts-with-the-font-library-add-your-own-collection)

Of note, compared to more recent releases, this was a much shorter release cycle with only five Gutenberg versions making it into 6.4 compared to the usual 9-10. 

### Important links:

*   [Roadmap to 6.4](https://make.wordpress.org/core/2023/08/22/roadmap-to-6-4/).
*   [6.4 Development Cycle information](https://make.wordpress.org/core/2023/06/05/wordpress-6-4-development-cycle/).
*   [6.4 dev notes tag on Make Core](https://make.wordpress.org/core/tag/dev-notes-6-4/).

As the release cycle continues, please keep in mind that various dev notes will be shared on Make Core along with an overall Field Guide as is standard across each release cycle. These items are not yet ready at the time of initially publishing this in line with beta 1 but will be updated over time. 

### 6.4 assets:

To view all assets in this document, [please review this drive folder](https://drive.google.com/drive/u/1/folders/1n337UB8A6zaRmvx8ZJg1pHS_inpDOdx-).
