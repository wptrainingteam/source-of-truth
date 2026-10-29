---
title: Robust revisions in the Site Editor
slug: robust-revisions-in-the-site-editor
tags: []
---

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/RMEFvZdNtUc?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

#### Read a short summary of styling changes thanks to a new design

[Alongside a new design showing more granular information](https://github.com/WordPress/gutenberg/issues/55647), like a more granular timestamp, a short summary of changes made in each revision is now available. Combined, this greatly simplifies understanding what’s in each revision rather than relying on spotting visual changes. 

[Here’s a demo](https://drive.google.com/file/d/1gvIMHQgtNdLzLHuPBrPbZrkHNJcvNC1G/view?usp=drive_link) of what this looks like. 

#### View all style revisions thanks to pagination

Rather than showing just the last 100 revisions, [all revisions are now available thanks to pagination](https://github.com/WordPress/gutenberg/pull/56799). This both works around a technical limitation of 100 results per REST response and helps make navigating between revisions much easier than scrolling endlessly in the sidebar. 

#### Toggle on the Style Book to get a different angle

In the same way you might be used to using the Style Book when making changes to your site in the Site Editor, [you can now do the same when looking at different revisions](https://github.com/WordPress/gutenberg/pull/56800) to see changes that might not otherwise be visible on the current template. Just as when you use the Style Book normally, you can toggle it on and off as you’d like. 

#### Rely on full revisions for everything 

While the undo and redo buttons have a role to play, having access to full revision history allows for a much greater understanding of changes, their impact, and actions one can take. While this was mentioned [in a previous post](https://make.wordpress.org/core/2023/05/22/core-editor-improvement-smoother-site-editing/), revisions for templates and template parts are finally slated for inclusion in Core for WordPress 6.5. This means out of the box folks can browse changes to templates, template parts, and styles providing a nice safety net. 

#### New functions for Core Data API [plugin author]

[Two new functions to the Core Data API](https://github.com/WordPress/gutenberg/pull/54046) have been added for fetching post revisions of post types that support revisions:

*   [getRevisions()](https://developer.wordpress.org/block-editor/reference-guides/data/data-core/#getrevisions)
*   [getRevision()](https://developer.wordpress.org/block-editor/reference-guides/data/data-core/#getrevision)

**Key Make Posts/GitHub/Trac Issue(s):** [Core Editor Improvement: Robust Revisions in the Site Editor](https://make.wordpress.org/core/2024/01/22/core-editor-improvement-robust-revisions-in-the-site-editor/) which covers most of these changes visually.
