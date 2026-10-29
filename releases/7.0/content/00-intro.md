Welcome to the Source of Truth for WordPress 7.0!

Before you dive headfirst into all the big and small changes and pick your favorites, make sure to read these preliminary thoughts about this post and how to use it. If you have questions, leave a comment or email me at [pauli@gutenbergtimes.com](mailto:pauli@gutenbergtimes.com).

Huge Thank You to all collaborators on this post: Anne McCarthy, Sarah Norris, Ella van Durpe, Maggie Cabrera, Ben Dwyer, Jonathan Bossenger, Justin Tadlock, Dave Smith, Courtney Robertson and a lot more. It’s takes a village…

Estimated reading time

19–29 minutes

at

4,552 words

**Table of Contents**

1.  [Changelog](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#changelog)
2.  [Important note/guidelines](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#important-note-guidelines)
3.  [Overview](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#overview) 
    1.  [Important links:](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#important-links)
    2.  [Assets](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#assets) 
4.  [Tags](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#tags)
5.  [Priority items for WordPress 7.0](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#priority-items-for-wordpress-7-0) 
    1.  [Visual Revisions [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#visual-revisions-all)
    2.  [Navigation Overlays and more [theme builder][plugin author] [site admin]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#navigation-overlays-and-more-theme-builder-plugin-author-site-admin)
    3.  [Treating patterns like a single block [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#treating-patterns-like-a-single-block-all)
    4.  [AI in WordPress [enterprise][developers][site admin]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#ai-in-wordpress-enterprise-developers-site-admin)
6.  [New Blocks](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#new-blocks)
    1.  [Breadcrumbs Block [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#breadcrumbs-block-all)
    2.  [Icon Block [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#icon-block-all)
7.  [Block Editor enhancements](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#block-editor-enhancements)
    1.  [Custom CSS for Individual Blocks [enduser][site admin] [theme builder]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#custom-css-for-individual-blocks-enduser-site-admin-theme-builder)
    2.  [Control viewport-based block visibility [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#control-viewport-based-block-visibility-all)
    3.  [Anchor support for dynamic blocks [developer][plugin author]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#anchor-support-for-dynamic-blocks-developer-plugin-author)
    4.  [Paste color values in the color picker [end user][theme builder] [site admin]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#paste-color-values-in-the-color-picker-end-user-theme-builder-site-admin)
    5.  [Dimension support for width and height [theme builder][site admin]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#dimension-support-for-width-and-height-theme-builder-site-admin)
    6.  [Email notifications for Notes [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#email-notifications-for-notes-all)
    7.  [Block Attributions Groups in the sidebar [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#block-attributions-groups-in-the-sidebar-all)
    8.  [Link Control validation [end user] [site admin]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#link-control-validation-end-user-site-admin)
8.  [Improved Blocks and Block handling](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#improved-blocks-and-block-handling)
    1.  [Pseudo Styles for Button Blocks [theme builder][site admin]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#pseudo-styles-for-button-blocks-theme-builder-site-admin)
    2.  [Extra divs removed from blocks in the editor [theme builder][developer][site admin]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#extra-divs-removed-from-blocks-in-the-editor-theme-builder-developer-site-admin)
    3.  [Universal Text Alignment [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#universal-text-alignment-all)
    4.  [Cover Block Video Embeds [site admin][end user]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#cover-block-video-embeds-site-admin-end-user)
    5.  [Gallery Block](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#gallery-block) 
    6.  [Responsive Grid Block [site admin][end user][theme builder]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#responsive-grid-block-site-admin-end-user-theme-builder)
    7.  [Heading block variations [site admin][end user]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#heading-block-variations-site-admin-end-user)
    8.  [HTML Block Enhancement [site admin] [themebuilder] [end user]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#html-block-enhancement-site-admin-themebuilder-end-user)
    9.  [Image block inline editing and controls [site admin][end user]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#image-block-inline-editing-and-controls-site-admin-end-user)
    10.  [Math Block Improvements [end users][site admin]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#math-block-improvements-end-users-site-admin)
    11.  [Paragraph [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#paragraph-all)
    12.  [Query Loop Enhancements [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#query-loop-enhancements-all)
    13.  [Verse Block, renamed to Poetry [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#verse-block-renamed-to-poetry-all)
9.  [Admin / Workflow updates](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#admin-workflow-updates) 
    1.  [Manage fonts for all themes in a dedicated page [site admin][theme builder] [enterprise]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#manage-fonts-for-all-themes-in-a-dedicated-page-site-admin-theme-builder-enterprise)
    2.  [Command Palette in Adminbar [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#command-palette-in-adminbar-all)
    3.  [View Transitions  [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#view-transitions-all)
    4.  [Improved screens across WP-Admin  [all]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#improved-screens-across-wp-admin-all)
10.  [Developer Goodies [developer][enterprise]](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#developer-goodies-developer-enterprise)
     1.  [PHP-only block registration](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#php-only-block-registration)
     2.  [Pattern Overrides for custom blocks](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#pattern-overrides-for-custom-blocks)
     3.  [DataViews, Data Form components and Fields API](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#dataviews-data-form-components-and-fields-api) 
     4.  [UI Primitives and Components](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/#ui-primitives-and-components)

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1200" height="690" data-attachment-id="45639" data-permalink="https://gutenbergtimes.com/wordpress-7-0-source-of-truth/wordpress-7-0-highlightgrid/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/04/WordPress-7.0-highlightgrid.jpg?fit=1200%2C690&amp;ssl=1" data-orig-size="1200,690" data-comments-opened="1" data-image-title="WordPress-7.0-highlightgrid" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/04/WordPress-7.0-highlightgrid.jpg?fit=1024%2C589&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/04/WordPress-7.0-highlightgrid.jpg?resize=1200%2C690&amp;ssl=1" alt="WordPress 7.0 highlight grid, status May 12, 2026" class="wp-image-45639" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/04/WordPress-7.0-highlightgrid.jpg?w=1200&amp;ssl=1 1200w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/04/WordPress-7.0-highlightgrid.jpg?resize=1024%2C589&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/04/WordPress-7.0-highlightgrid.jpg?resize=300%2C173&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/04/WordPress-7.0-highlightgrid.jpg?resize=767%2C441&amp;ssl=1 767w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/04/WordPress-7.0-highlightgrid.jpg?resize=1080%2C621&amp;ssl=1 1080w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

_Note: As always, what’s shared here is being actively pursued but doesn’t necessarily mean each will make it into the final release of WordPress 7.0._

WordPress 7.0 introduces several new features and performance enhancements.

Key new features include:

*   **Visual revisions:** A new revisions screen inside the block editor gives a visual preview of the changes with an easy-to-understand color-coded system.
*   **Navigation overlays:** Customizable mobile menus for more flexible styling.
*   **Content focused pattern editing:** Pattern editing now prioritizes the content editing experience with more available options when needed.
*   **AI Foundation in WordPress:** User can connect their site to an AI agent of choice to use the AI experiments plugin. Plugin developers can use the Connectors API to register connections to external services.

Furthermore, WordPress 7.0, entails:

*   **Two new blocks:** the Icon block and the Breadcrumbs block.
*   **Viewport-based block show/hide:** Block visibility extended to customize display according to screen-sizes.
*   **Gallery lightbox navigation:** improved browsing through images placed in a gallery.
*   **Font management** for all themes: The screen to upload and manage fonts is now available in the **Appearance** menu for classic and block themes.

Many more quality of life changes for workflow and design tools made it into this release. You’ll find the complete list below.

[WordPress 7.0](https://make.wordpress.org/core/7-0/) is set to be released on April 9, 2026 at [Contributor Day of WordCamp Asia](https://asia.wordcamp.org/2026/wordpress-7-0-release-on-contributor-day/).
The new release date will be announced no later than April 22. (see [Ventura’s announcement](https://make.wordpress.org/core/2026/03/31/extending-the-7-0-cycle/)) is May 20, 2026

[WordPress 7.0 “Armstrong”](https://wordpress.org/news/2026/05/wordpress-7-0-armstrong/)

Of note, this release consists of features from the Gutenberg plugin version 22.0 – 22.6. Here are the release posts of those plugin releases: [22.0](https://make.wordpress.org/core/2025/11/05/whats-new-in-gutenberg-22-0-05-november/) |  [22.1](https://make.wordpress.org/core/2025/11/20/whats-new-in-gutenberg-22-1-18-november-2025/) |  [22.2](https://make.wordpress.org/core/2025/12/03/whats-new-in-gutenberg-22-2-dec3/) | [22.3](https://make.wordpress.org/core/2025/12/17/gutenberg-22-3-december-17/) | [22.4](https://make.wordpress.org/core/2026/01/22/whats-new-in-gutenberg-22-4-20-january/) | [22.5](https://make.wordpress.org/core/2026/02/04/whats-new-in-gutenberg-22-5-04-february/) | [22.6](https://make.wordpress.org/core/2026/02/25/whats-new-in-gutenberg-22-6-25-february/). Later Gutenberg releases contain bug fixes, backported to WordPress 7.0. release branches.

### Important links:

*   [Planning for 7.0](https://make.wordpress.org/core/2025/12/11/planning-for-7-0/) + [update on Beta 1](https://make.wordpress.org/core/2025/12/11/planning-for-7-0/#comment-48392)
*   [WordPress 7.0 Development Cycle](https://make.wordpress.org/core/7-0/)
*   **What’s new for developers:** [December](https://developer.wordpress.org/news/2025/12/whats-new-for-developers-december-2025/), [January](https://developer.wordpress.org/news/2026/01/whats-new-for-developers-january-2026/), [February](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/), [March](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/), [April](https://developer.wordpress.org/news/2026/04/whats-new-for-developers-april-2026/), and [May](https://developer.wordpress.org/news/2026/05/whats-new-for-developers-may-2026/)
*   [WordPress 7.0 Field Guide](https://make.wordpress.org/core/2026/05/14/wordpress-7-0-field-guide/)
