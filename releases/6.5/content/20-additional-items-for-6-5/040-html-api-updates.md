---
title: HTML API Updates
slug: html-api-updates
tags: [developer, plugin author]
---

[After launching in WordPress 6.2](https://make.wordpress.org/core/2023/03/07/introducing-the-html-api-in-wordpress-6-2/) and [receiving enhancements in WordPress 6.4](https://make.wordpress.org/core/2023/10/21/updates-to-the-html-api-in-6-4/), the HTML API has some new features to dig into for this release. This release focuses on internal enhancements to the Tag Processor and expanded support for the HTML Processor:

*   The HTML API has been updated to add support for container elements, such as article, blockquote, details, summary, and more.
*   The HTML Processor can be used on almost all input HTML from blocks, other than those creating tables and forms.

**Adoption approach:** Review [this developer blog post](https://developer.wordpress.org/news/2023/09/28/the-html-api-process-your-tags-not-your-pain/) to get started using the HTML API.

**Key Make Posts/GitHub/Trac Issue(s):** [Updates to the HTML API](https://make.wordpress.org/core/2024/03/04/updates-to-the-html-api-in-6-5/) dev note, HTML API: Plans for 6.5 ([54579](https://github.com/WordPress/gutenberg/discussions/54579))
