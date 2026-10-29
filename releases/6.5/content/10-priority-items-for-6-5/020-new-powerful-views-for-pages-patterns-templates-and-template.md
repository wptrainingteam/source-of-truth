---
title: "New powerful views for pages, patterns, templates, and template parts in the Site Editor"
slug: new-powerful-views-for-pages-patterns-templates-and-template
tags: []
---

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/4aLngyrXuVc?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

New, feature packed view of pages, patterns, templates, and template parts make exploring, filtering, and digging into the various pieces of site editing as easy or complex as you want it to be. The changes all come down to presentation of information and additional features to allow you to customize what you see to your liking, from different layouts to hiding/showing different fields. This feature-rich experience provides immediate value to the Site Editor and lays the groundwork for future Phase 3 work, including efforts around Workflows and Media Library. Right now, this is intentionally only available in the Site Editor to allow for iteration and exploration before considering how best to expand into other parts of the WordPress experience. 

*   Ability to display a table with specific fields, pagination, and quick actions.
*   Toggling fields and sorting and filtering data by field.
*   UI for selecting entries and performing bulk actions.
*   Support for different layouts, like classic table and grid view.
*   Support for primary filters for Pages and Patterns for ease of access around common filters. 

Here’s a brief run down of what’s expected where:

*   “Site Editor > Templates > Manage all templates”: table & grid layouts available.
*   “Site Editor > Patterns > Manage all template parts”: table & grid layouts available with bulk actions.
*   “Site Editor > Patterns”: only grid layout available with a default primary filter showing sync vs unsynced patterns. It does not currently [show synced pattern with overrides](https://github.com/WordPress/gutenberg/issues/58725). 
*   “Side Editor > Pages”: table & grid layouts available with bulk actions and default primary filters. 

Behind the scenes, a next version of the dropdown menu component is being used within this work via a private API. While extensibility isn’t possible today, everything is being done with extensibility in mind to help encourage the entire ecosystem to take advantage of what’s being created in the future. As a result, please give feedback and try out the feature with this in mind!

**Visuals:** [YouTube video](https://youtu.be/4aLngyrXuVc) going in depth with a [demo](https://drive.google.com/file/d/1XLDR2MJv9p3mGlSU6LAtNgsfDflEyCTg/view?usp=drive_link) showing the new view in place for templates 

**Key Make Posts/GitHub/Trac Issue(s):** DataViews: Improve all the table and list views in the site editor and further ([55083](https://github.com/WordPress/gutenberg/issues/55083))
