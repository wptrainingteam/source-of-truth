---
title: Polishing the Query Loop block with a focus on simplicity
slug: polishing-the-query-loop-block-with-a-focus-on-simplicity
tags: []
---

WordPress 6.7 introduces significant improvements to the Query Loop block, focusing on simplicity and clarity. One of the most notable changes is the default settings, where the block now automatically inherits the query from the template, eliminating the need for users to enable this option manually. This ensures that posts display immediately both in the editor and on the front end, streamlining the process for most users who just want to see their content without extra configuration. This also applies when adding a Query Loop block to a single post or page, where the settings will be automatically configured to work in that context.

The Post List variation has been removed from the Inserter due to its confusing settings, which often caused posts to not appear. This change improves the overall user experience. 

In terms of customization, a new toggle allows users to easily switch between default and custom queries. If opting for a custom query, another toggle lets users choose between filtering for posts, pages, or custom post types. Additionally, commonly used settings like Posts Per Page, Offset, and Max Pages to Show have been moved from the toolbar to the sidebar settings panel, consolidating all key options into one central place for easier configuration.

The update also includes several refinements, such as a quick preview when selecting the Query Loop block in the Inserter and more intuitive help text, particularly for sticky posts, which are now clearly labeled to always appear first. Pagination controls have been enhanced and moved to the Advanced section for better organization. Another new feature is the introduction of a “format” parameter, which allows users to filter content by post format, offering more flexibility in creating tailored queries. Combined, these updates make the Query Loop block both easier to use for beginners and more powerful for advanced users.

**Visuals:** [demo](https://drive.google.com/file/d/1OPLKlFAi3c9J0JNlQlOEuygVzD70pKrd/view?usp=drive_link) of some of the query loop block changes, [image](https://drive.google.com/file/d/13HAuc-2EdkQ8BYCg1NViA2NyIQmy-FA3/view?usp=drive_link) of post format support. 
**Key Make Posts/GitHub/Trac Issue(s):** [Core Editor Improvement: Simplified Query Loop block with smarter defaults & intuitive settings](https://make.wordpress.org/core/2024/09/23/core-editor-improvement-simplified-query-loop-block-with-smarter-defaults-intuitive-settings/).
