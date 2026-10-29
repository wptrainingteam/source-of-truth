---
title: Style improvements and features
slug: style-improvements-and-features
tags: []
---

For an overview of how these various improvements relate to each other, [please review this Core Editor Improvement post](https://make.wordpress.org/core/2023/02/01/core-editor-improvement-strengthening-style-options/). 

**See an inline preview when making changes to blocks globally [end user] [theme author]**

When using the Styles interface in the Site Editor, you have access to customize individual blocks globally. Prior to this release, if a block you were editing wasn’t visible in the template you were in, you couldn’t get a clear sense of how the changes were impacting that block without looking elsewhere. This new option allows an inline preview as you edit, ensuring you’re able to see the impact of those changes without needing to leave the interface. This is especially useful for block themers and users alike. 

**Visuals:** [inline preview in use video](https://drive.google.com/file/d/1EVFrCnz8tGPLlpQKtbIC-BJyN08IRPMm/view?usp=share_link)

**Adoption approach:** only available with block themes

**Key Make Posts/GitHub/Trac Issue(s):** display inline preview on per-block settings ([42919](https://github.com/WordPress/gutenberg/issues/42919)). 

**Rely on a zoomed out view when selecting a style variation [end user]**

When switching between style variations bundled with a block theme, the interface of the Site Editor shifts, allowing for a more holistic view of the template at hand. While it doesn’t show the entire site, it does allow you to get a better look at how your changes will impact things more broadly. (Previously, you only were able to see part of the template, making it harder to see the full impact of a style variation selection.)

**Visuals:** [change in view when selecting a style variation video](https://drive.google.com/file/d/1FPB6S2Q9zuQSvaeSoWvyCbyd0ccDtIQy/view?usp=share_link). 

**Adoption approach:** only available with block themes

**Key Make Posts/GitHub/Trac Issue(s):** invoke zoomed-out view when selecting a style variation ([44987](https://github.com/WordPress/gutenberg/pull/44987)).  

**Style an individual block and apply it to all instances [end user] [theme author]**

When creating a design or customizing individual blocks, there are moments when you want to apply what you just created to all instances of that same block. A new option in the Site Editor in the individual block settings allows you to do exactly that, saving time and ensuring consistency when you want it. 

This option is intentionally more hidden and you can find it in the Settings tab under Advanced.

**Visuals:** [applying navigation block changes globally video](https://drive.google.com/file/d/1ZRf_ObfWjIZdcwo3VnyRQqGkPmdNOQyg/view?usp=share_link). 

**Adoption approach:** only available with block themes or themes using the Site Editor. 

**Key Make Posts/GitHub/Trac Issue(s):** Add option to apply local changes to a block to your entire site ([44361](https://github.com/WordPress/gutenberg/issues/44361)) with updated phrasing ([46965](https://github.com/WordPress/gutenberg/pull/46965)). 

**Use the Style Book to see your changes as you style your site [end user] [theme author]**

When making changes to the Styles of your site, whether changing to a different style variation or tweaking an individual block, it’s imperative to see the cascading impact. With the addition of the Style Book, a view that you can toggle on and off as you’d like, you can see all of your blocks on your site as you make changes. Prior to this release, if a block wasn’t visible in the template you were editing, you weren’t able to see how your changes might land. Style Book takes a big step forward in offering an intuitive way to globally make changes to your site. 

There are a few limitations/refinements planned for the future that didn’t make it into this release:

*   [Allow the possibility to show multiple variations of the same block](https://github.com/WordPress/gutenberg/issues/47443).
*   [Figure out a better way to show plugin tabs for third party blocks](https://github.com/WordPress/gutenberg/issues/47871). 

**Visuals:** [exploring the Style Book video](https://drive.google.com/file/d/1qRIs_i68znOCGuEHLRkMFrlZ3OTqrlhw/view?usp=share_link) 

**Adoption approach:** only available with block themes. This feature automatically works with third party blocks so no additional extension is required.

**Key Make Posts/GitHub/Trac Issue(s):** Offer a way to view a document containing all blocks and styles ([44420](https://github.com/WordPress/gutenberg/issues/44420)). 

**Copy/paste block styles [end user] [theme author]**

[With a growing number of design tools](https://make.wordpress.org/core/2022/09/26/core-editor-improvement-catalyst-for-creativity/) in each WordPress release, designs can have deeper personalization and flairA new option has been added to allow you to copy and paste block styles, making it easy to reuse designs you’ve created.

**Visuals:** copy/paste styles videos: [option 1](https://drive.google.com/file/d/1vTB9dLdGXK9ml8-YJXYPYFoyhlWV3guG/view?usp=share_link) and [option 2](https://drive.google.com/file/d/1z7FMpxxdfowIoc4PTZDxjmMXzyppsJUk/view?usp=share_link). 

**Key Make Posts/GitHub/Trac Issue(s):** Make it easy to copy and paste styles ([44418](https://github.com/WordPress/gutenberg/issues/44418)). 

**Use Custom CSS globally or on a per block basis [theme author] [end user]**

As part of the effort to create feature parity with the Customizer, Custom CSS—both on a global and per block basis—has been added to the Site Editor. Users and designers alike can quickly make CSS changes that won’t be overwritten by a theme update. 

The Custom CSS options are baked into Global Styles, selectable from the three dot menu for global changes, and placed as a top-level option for each individual block. Once Custom CSS has been added globally, it appears as an additional field in the top-level Styles interface. This ensures that it’s an available option without emphasizing it unnecessarily (such as when simpler alternatives exist); ideally, theme authors and end users should first try to add styling with the standard global and block design tools.

In the future, this feature will be built upon in a few additional ways: 

*   [Add inline code completion and linting to input box similar to customizer](https://github.com/WordPress/gutenberg/issues/47945).
*   [Provide list of blocks that have had custom CSS applied at the block level](https://github.com/WordPress/gutenberg/issues/47946).
*   [Look at options for highlighting and testing critical multi-site admin permissions issue](https://github.com/WordPress/gutenberg/issues/47718#top).

On a more technical note, for any hybrid themes, CSS added in the Site Editor will override CSS added in the Customizer. Specifically, CSS added in the Site Editor will be outputted after Style options and after any Customizer custom CSS.

Finally, these CSS options do not work or cover adding CSS in the post editor. You can see a [greater discussion around this here](https://github.com/WordPress/gutenberg/issues/30142#issuecomment-1409980503). 

**Visuals:** [video exploring where each CSS option is and how it’s displayed](https://drive.google.com/file/d/1ZBbtyIw6fHHdZrTgSnONJEefasn_N75z/view?usp=sharing).

**Adoption approach:** only available with block themes and [for users with edit-css permissions](https://github.com/WordPress/gutenberg/pull/47714) (important for multisite)

**Key Make Posts/GitHub/Trac Issue(s):**

*   Global Custom CSS in the Site Editor ([30142](https://github.com/WordPress/gutenberg/issues/30142)). 
*   Custom CSS on a per block basis ([44412](https://github.com/WordPress/gutenberg/issues/44412)). 
*   Move additional CSS input in Styles interface ([47266](https://github.com/WordPress/gutenberg/issues/47266)). 
*   Move custom CSS to ellipsis menu if no custom CSS present yet. ([47371](https://github.com/WordPress/gutenberg/pull/47371))
*   Move custom css to its own inline style generation method and combine with customizer CSS. ([47396](https://github.com/WordPress/gutenberg/pull/47396))
*   Add a CSS style to theme.json to allow the setting of custom CSS strings. ([46255](https://github.com/WordPress/gutenberg/pull/46255))
*   Add validation message to custom CSS input. ([47132](https://github.com/WordPress/gutenberg/pull/47132))

**Editing block style variations [theme author] [end user]**

For blocks with style variations, you can edit those variations directly in the Site Editor’s Styles interface by going to Styles > Blocks, and picking a block with a variation. This includes core blocks like the Button, Image, and Site Logo blocks. For blocks without variations, there is not an option to create one just yet. 

**Visuals:** [editing a block variation video](https://drive.google.com/file/d/1ahRtNrfJqpzFOjo7enk1_TaYDUBvTe2g/view?usp=share_link).

**Adoption approach:** only available with block themes and blocks with variations.

**Key Make Posts/GitHub/Trac Issue(s):** Edit block style variations from Styles ([46343](https://github.com/WordPress/gutenberg/pull/46343)

**Improved tools panels for the Styles typography controls [theme author] [end user]**

To provide another layer of consistency, the tools panel that’s currently in use in the block settings interface has been brought to the overall Styles experience when interacting with typography controls. For context, the tools panel offers a streamlined experience when it comes to tweaking design tools with easy to access reset options and the ability to quick add or remove visible controls. 

**Visuals:** [using the tools panel within the Styles typography controls video.](https://drive.google.com/file/d/1BxFE1I4rTIj6a9FICE7EeaB_1ukDn-Nj/view?usp=share_link)

**Adoption approach:** only available with block themes

**Key Make Posts/GitHub/Trac Issue(s):** use tools panel in Styles for typography controls ([44180](https://github.com/WordPress/gutenberg/pull/44180)).
