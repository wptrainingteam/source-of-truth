After quite a few rounds of sharing the [Source of Truth on my personal site](https://nomad.blog/tag/source-of-truth/), Birgit Pauli-Haack, the wonderful creator and curator of Gutenberg Times, offered up this space for me to share this resource. Going forward, we’re going to experiment with it continuing to be shared here in hopes of reaching more content creators, educators, and general WordPress enthusiasts who want to know every detail of the latest & greatest of WordPress.

As always, I’d recommend staying up to date on the dev notes as those are rolling out along with reviewing the Field Guide when it comes out.

**As a reminder, this is not meant to replace dev notes or the release-specific field guides, which serve important roles and are separate efforts.** I mainly see it as for folks close to the WordPress release itself and educating others than I see it as something broadly helpful for the average WordPress user. It’s a foundational resource but, it’s so long and detailed, it needs to be repackaged to be useful in each space. Feedback is welcomed for improvements for this version and for future versions as I consider how best to share this information.

Big thank you to everyone who helped in big and small ways.

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="588" data-attachment-id="30498" data-permalink="https://gutenbergtimes.com/6-7-source-of-truth/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?fit=3760%2C2160&amp;ssl=1" data-orig-size="3760,2160" data-comments-opened="1" data-image-title="376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?fit=1024%2C588&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?resize=1024%2C588&amp;ssl=1" alt="" class="wp-image-30498" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?resize=1024%2C588&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?resize=300%2C172&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?resize=768%2C441&amp;ssl=1 768w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?resize=1536%2C882&amp;ssl=1 1536w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?resize=2048%2C1177&amp;ssl=1 2048w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?resize=1080%2C620&amp;ssl=1 1080w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2024/10/376215782-1f8a8a02-f3fd-464d-a543-00f7a90dd1eb.png?w=3000&amp;ssl=1 3000w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

Estimated reading time

27–41 minutes

at

6,464 words

1.  [Changelog](https://gutenbergtimes.com/6-7-source-of-truth/#changelog)
2.  [Important Note/Guidelines](https://gutenbergtimes.com/6-7-source-of-truth/#important-note-guidelines)
3.  [Overview](https://gutenbergtimes.com/6-7-source-of-truth/#overview) 
    1.  [Important links:](https://gutenbergtimes.com/6-7-source-of-truth/#important-links)
    2.  [6.7 assets:](https://gutenbergtimes.com/6-7-source-of-truth/#6-7-assets) 
4.  [Tags](https://gutenbergtimes.com/6-7-source-of-truth/#tags)
5.  [Priority Items for 6.7](https://gutenbergtimes.com/6-7-source-of-truth/#priority-items-for-6-7)
    1.  [New default theme: Twenty Twenty-Five](https://gutenbergtimes.com/6-7-source-of-truth/#new-default-theme-twenty-twenty-five)
    2.  [Refining Data Views](https://gutenbergtimes.com/6-7-source-of-truth/#refining-data-views) 
        1.  [Enhancements](https://gutenbergtimes.com/6-7-source-of-truth/#enhancements)
        2.  [Expanded extensibility](https://gutenbergtimes.com/6-7-source-of-truth/#expanded-extensibility) 
    3.  [Consolidating and expanding block supports](https://gutenbergtimes.com/6-7-source-of-truth/#consolidating-and-expanding-block-supports)
    4.  [Block Bindings improvements, including UI to connect blocks and custom fields [developer] [plugin author] [enterprise]](https://gutenbergtimes.com/6-7-source-of-truth/#block-bindings-improvements-including-ui-to-connect-blocks-and-custom-fields-developer-plugin-author-enterprise)
        1.  [UI to connect blocks and custom fields](https://gutenbergtimes.com/6-7-source-of-truth/#ui-to-connect-blocks-and-custom-fields)
        2.  [New APIs to empower extenders](https://gutenbergtimes.com/6-7-source-of-truth/#new-apis-to-empower-extenders)
        3.  [UX improvements](https://gutenbergtimes.com/6-7-source-of-truth/#ux-improvements)
    5.  [Polishing the Query Loop block with a focus on simplicity](https://gutenbergtimes.com/6-7-source-of-truth/#polishing-the-query-loop-block-with-a-focus-on-simplicity)
    6.  [Zoom out to compose with patterns](https://gutenbergtimes.com/6-7-source-of-truth/#zoom-out-to-compose-with-patterns)
    7.  [Media improvements](https://gutenbergtimes.com/6-7-source-of-truth/#media-improvements)
        1.  [Support for HEIC image uploads](https://gutenbergtimes.com/6-7-source-of-truth/#support-for-heic-image-uploads)
        2.  [Auto Sizes for Lazy-loaded Images](https://gutenbergtimes.com/6-7-source-of-truth/#auto-sizes-for-lazy-loaded-images)
        3.  [Expanded and improved background image support](https://gutenbergtimes.com/6-7-source-of-truth/#expanded-and-improved-background-image-support)
    8.  [View meta boxes in the iframed Post Editor [plugin author] [enterprise]](https://gutenbergtimes.com/6-7-source-of-truth/#view-meta-boxes-in-the-iframed-post-editor-plugin-author-enterprise)
    9.  [Font management updates [end user] [theme author]](https://gutenbergtimes.com/6-7-source-of-truth/#font-management-updates-end-user-theme-author)
        1.  [Edit and apply font size presets](https://gutenbergtimes.com/6-7-source-of-truth/#edit-and-apply-font-size-presets) 
        2.  [Consistent interfaces](https://gutenbergtimes.com/6-7-source-of-truth/#consistent-interfaces)
        3.  [Font library enhancements](https://gutenbergtimes.com/6-7-source-of-truth/#font-library-enhancements)
6.  [Additional Items for 6.7](https://gutenbergtimes.com/6-7-source-of-truth/#additional-items-for-6-7)
    1.  [Template Registration API [plugin author] [theme author] [developer]](https://gutenbergtimes.com/6-7-source-of-truth/#template-registration-api-plugin-author-theme-author-developer)
    2.  [Preview Options API [developer] [plugin author] [enterprise]](https://gutenbergtimes.com/6-7-source-of-truth/#preview-options-api-developer-plugin-author-enterprise)
    3.  [Changes to Heartbeat API to lower minimum allowed time [enterprise] [plugin author]](https://gutenbergtimes.com/6-7-source-of-truth/#changes-to-heartbeat-api-to-lower-minimum-allowed-time-enterprise-plugin-author) 
    4.  [Customize heading level curation [developer]](https://gutenbergtimes.com/6-7-source-of-truth/#customize-heading-level-curation-developer)
    5.  [General improvements](https://gutenbergtimes.com/6-7-source-of-truth/#general-improvements)
        1.  [Updated order of editor actions for a clearer sidebar](https://gutenbergtimes.com/6-7-source-of-truth/#updated-order-of-editor-actions-for-a-clearer-sidebar)
        2.  [Opt out preference for ‘Choose a Pattern’ modal when adding a new page](https://gutenbergtimes.com/6-7-source-of-truth/#opt-out-preference-for-choose-a-pattern-modal-when-adding-a-new-page)
        3.  [More robust saving](https://gutenbergtimes.com/6-7-source-of-truth/#more-robust-saving)
        4.  [Iterating on pattern shuffling](https://gutenbergtimes.com/6-7-source-of-truth/#iterating-on-pattern-shuffling)
        5.  [Writing flow improvements](https://gutenbergtimes.com/6-7-source-of-truth/#writing-flow-improvements) 
        6.  [Adding block examples and previews](https://gutenbergtimes.com/6-7-source-of-truth/#adding-block-examples-and-previews)
        7.  [Site Editor focused](https://gutenbergtimes.com/6-7-source-of-truth/#site-editor-focused)
        8.  [Other](https://gutenbergtimes.com/6-7-source-of-truth/#other)
7.  [Interactivity API iteration: bug fixes, internal refactor, and new APIs [developer] [plugin author]](https://gutenbergtimes.com/6-7-source-of-truth/#interactivity-api-iteration-bug-fixes-internal-refactor-and-new-apis-developer-plugin-author)
    1.  [New APIs: getServer State & getServerContext](https://gutenbergtimes.com/6-7-source-of-truth/#new-apis-getserver-state-getservercontext)
8.  [Updates for the HTML API [plugin author] [developer]](https://gutenbergtimes.com/6-7-source-of-truth/#updates-for-the-html-api-plugin-author-developer) 
9.  [Time input as a subcomponent of TimePicker [developer] [plugin author]](https://gutenbergtimes.com/6-7-source-of-truth/#time-input-as-a-subcomponent-of-timepicker-developer-plugin-author)
10.  [Define block variations via a PHP file [developer] [plugin author]](https://gutenbergtimes.com/6-7-source-of-truth/#define-block-variations-via-a-php-file-developer-plugin-author)
11.  [Override styles dynamically [plugin author] [developer]](https://gutenbergtimes.com/6-7-source-of-truth/#override-styles-dynamically-plugin-author-developer)
12.  [Help text for RadioControl options [developer] [plugin author]](https://gutenbergtimes.com/6-7-source-of-truth/#help-text-for-radiocontrol-options-developer-plugin-author)
13.  [Clearfix for the Post Content block [theme author] [end user]](https://gutenbergtimes.com/6-7-source-of-truth/#clearfix-for-the-post-content-block-theme-author-end-user)
14.  [Continuing to improve PHP 8.x support](https://gutenbergtimes.com/6-7-source-of-truth/#continuing-to-improve-php-8-x-support)

Along with a new default theme, there are new features, like the ability to zoom out to compose content with patterns, and new APIs, like the Template Registration API. More than anything though, this release brings refinement to how everything connects together to create a more seamless WordPress experience.

Of note, this release includes Gutenberg 18.6 – 19.3 and, for the first time, I used AI to help offer rewrites to different sections. 

### Important links:

*   [Roadmap to 6.7](https://make.wordpress.org/core/2024/09/03/roadmap-to-6-7/).
*   [6.7 Development Cycle information](https://make.wordpress.org/core/6-7/).
*   [6.7 Field Guide](https://make.wordpress.org/core/2024/10/23/wordpress-6-7-field-guide/)
*   What’s new for developers: [July](https://developer.wordpress.org/news/2024/07/10/whats-new-for-developers-july-2024/), [August](https://developer.wordpress.org/news/2024/08/10/whats-new-for-developers-august-2024/), [September](https://developer.wordpress.org/news/2024/09/10/whats-new-for-developers-september-2024), [October](https://developer.wordpress.org/news/2024/10/10/whats-new-for-developers-october-2024/)

### 6.7 assets: 

To view all assets in this document, [please review this drive folder](https://drive.google.com/drive/folders/1So-c8M-H45g_zyOZ8ACefZe-F-LD-8cq?usp=sharing).
