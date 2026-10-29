Welcome to the Source of Truth for WordPress 6.9!

Before you dive headfirst into all the big and small changes and pick your favorites, make sure to read these preliminary thoughts about this post and how to use it. If you have questions, leave a comment or email me at [pauli@gutenbergtimes.com](mailto:pauli@gutenbergtimes.com).

Huge Thank You to all collaborators on this post: Anne McCarthy, Sarah Norris, Ella van Durpe, Ben Dwyer, Jonathan Bossenger, Justin Tadlock, Dave Smith and a lot more. It’s takes a village…

Estimated reading time

22–33 minutes

at

5,126 words

**Table of Contents**

*   [Changelog](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#changelog)
*   [Important note/guidelines](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#important-note-guidelines)
*   [Overview](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#overview) 
    *   [Important links:](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#important-links)
    *   [Assets](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#assets) 
*   [Tags](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#tags)
*   [Command Palette everywhere [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#command-palette-everywhere-all)
*   [Block editor updates](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#block-editor-updates)
    *   [Notes [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#notes-all)
    *   [Visual Drag & Drop 🐉 💧 [end user]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#visual-drag-drop-end-user)
    *   [UI for managing allowed Blocks in Templates and Patterns.  [end user][site admin]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#ui-for-managing-allowed-blocks-in-templates-and-patterns-end-user-site-admin)
    *   [Hide and Show Blocks [end user][site admin]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#hide-and-show-blocks-end-user-site-admin)
    *   [Additional CSS control moved [end user][site admin] [theme author]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#additional-css-control-moved-end-user-site-admin-theme-author)
    *   [Copy Styles keyboard shortcut [end user][site admin]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#copy-styles-keyboard-shortcut-end-user-site-admin)
    *   [Block Style Variations in Style Book [end user][site admin] [theme author]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#block-style-variations-in-style-book-end-user-site-admin-theme-author)
    *   [The Starter Patterns modal for all post types. [theme author] [plugin author][enterprise]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#the-starter-patterns-modal-for-all-post-types-theme-author-plugin-author-enterprise)
    *   [Why iframe the Post Editor? [plugin author][enterprise]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#why-iframe-the-post-editor-plugin-author-enterprise)
    *   [Relevant bug fixes for backward compatibility checks [theme author] [plugin author][site admin]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#relevant-bug-fixes-for-backward-compatibility-checks-theme-author-plugin-author-site-admin)
*   [New Blocks [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#new-blocks-all)
    *   [Accordion Block](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#accordion-block)
    *   [Term Query Block](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#term-query-block)
    *   [Time to Read Block](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#time-to-read-block)
    *   [Math Block](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#math-block)
    *   [Comment Count and Comment Link Blocks](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#comment-count-and-comment-link-blocks)
*   [Updates to existing blocks](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#updates-to-existing-blocks)
    *   [Stretchy Text for Heading and Paragraph blocks. [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#stretchy-text-for-heading-and-paragraph-blocks-all)
    *   [Button Block [end user] [siteadmin]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#button-block-end-user-siteadmin)
    *   [Cover Block improved video handling [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#cover-block-improved-video-handling-all)
    *   [Details Block [end user][site admin][plugin author]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#details-block-end-user-site-admin-plugin-author)
    *   [Gallery Block [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#gallery-block-all)
    *   [Heading Block CSS specificity fix [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#heading-block-css-specificity-fix-all)
    *   [Navigation Block [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#navigation-block-all)
    *   [Query Loop Blocks [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#query-loop-blocks-all)
        *   [Content Block](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#content-block)
        *   [Date Block supports custom dates.](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#date-block-supports-custom-dates)
        *   [Query Title get Post Type label](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#query-title-get-post-type-label)
        *   [Query Total](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#query-total)
    *   [RSS Block [end user]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#rss-block-end-user)
    *   [Separator Block [theme author][site admin][plugin author]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#separator-block-theme-author-site-admin-plugin-author)
    *   [Social Icons Block [developers][enterprise]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#social-icons-block-developers-enterprise)
    *   [Table Block [end users][site admin]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#table-block-end-users-site-admin)
    *   [Video Block [all]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#video-block-all)
*   [Theme.json and Global Styles [developers][enterprise][site admin]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#theme-json-and-global-styles-developers-enterprise-site-admin)
    *   [Form elements in theme.json](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#form-elements-in-theme-json)
    *   [Border Radius presets supported](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#border-radius-presets-supported)
    *   [Button element inherits typography](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#button-element-inherits-typography)
*   [A closer look at performance optimizations [developers][enterprise]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#a-closer-look-at-performance-optimizations-developers-enterprise)
*   [Improved accessibility across Core and Block editor](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#improved-accessibility-across-core-and-block-editor)
*   [New and updated APIs for Developers [developers][enterprise]](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#new-and-updated-apis-for-developers-developers-enterprise)
    *   [Abilities API](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#abilities-api)
    *   [Block Bindings API](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#block-bindings-api)
    *   [DataViews and DataForm](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#dataviews-and-dataform)
    *   [Interactivity API](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#interactivity-api)
    *   [Output buffering for the rendered template](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#output-buffering-for-the-rendered-template) 
    *   [Blocks: Efficiently find and traverse blocks in a document.](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#blocks-efficiently-find-and-traverse-blocks-in-a-document) 
    *   [More Developer Notes for WordPress 6.9 release](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/#more-developer-notes-for-wordpress-6-9-release)

_Note: As always, what’s shared here is being actively pursued but doesn’t necessarily mean each will make it into the final release of WordPress 6.9._

WordPress 6.9 introduces several new features and performance enhancements.

Key new features include:

*   **Collaborative Feedback and Content Control:** Block-level Notes facilitate team feedback, allowed blocks UI, Abilities API, visual drag and drop, binding blocks to external controls.
*   **New Blocks:** Discover Accordion, Terms Query, Math, and Time to Read blocks.
*   **Typography Enhancements:** Benefit from new text-fitting typography.
*   **Dashboard-wide Command Palette:** The Command Palette will  help users streamline their workflow across WordPress Admin pages. 

Performance improvements include:

*   **Optimized Loading:** On-demand block-style loading and faster emoji detection.
*   **Efficient Scheduling:** Optimized cron execution.

Furthermore, WordPress 6.9 lays the groundwork for future AI integration with the new Abilities API, which enables secure automation through machine-readable WordPress capabilities.

[WordPress 6.9](https://make.wordpress.org/core/6-9) is set to be released on December 2, 2025. 

Of note, this release includes Gutenberg plugin versions 20.5 – 21.9.

### Important links:

*   [Roadmap to 6.9](https://make.wordpress.org/core/2025/07/28/roadmap-to-6-9/)
*   [WordPress 6.9 Development Cycle](https://make.wordpress.org/core/6-9/)
*   What’s new for developers: [June](https://developer.wordpress.org/news/2025/06/whats-new-for-developers-june-2025/), [July](https://developer.wordpress.org/news/2025/07/whats-new-for-developers-july-2025/), [August,](https://developer.wordpress.org/news/2025/08/whats-new-for-developers-august-2025/) [September](https://developer.wordpress.org/news/2025/09/whats-new-for-developers-september-2025/), [October](https://developer.wordpress.org/news/2025/10/whats-new-for-developers-october-2025/), [November](https://developer.wordpress.org/news/2025/11/whats-new-for-developers-november-2025/))
*   [6.9 Field Guide](https://make.wordpress.org/core/2025/11/25/wordpress-6-9-field-guide/)
*   [State of the Word 2025](https://wordpress.org/state-of-the-word/) will include highlights and demos of the most important features of this release. The event will be [livestreamed on YouTube](https://www.youtube.com/wordpress)
