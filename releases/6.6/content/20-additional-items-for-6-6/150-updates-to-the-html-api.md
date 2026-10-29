---
title: Updates to the HTML API
slug: updates-to-the-html-api
tags: [plugin author, developer]
---

Building on the [initial launch in 6.2](https://make.wordpress.org/core/2023/03/07/introducing-the-html-api-in-wordpress-6-2/), the HTML API gets a nice maintenance update with the following:

*   A brand new text decoder to resolve issues not fixable with html\_entity\_decode() and PHP’s built-in functions that will help ensure that the HTML API remains safe and reliable.
*   A major internal refactor of the HTML Processor which treats HTML documents in an idealized form. Instead of presenting the tags in the raw HTML text, it’s able to present every tag and every element as found in the DOM, even the ones that don’t exist in the HTML itself.

**Adoption approach:** [Read about the HTML API](https://developer.wordpress.org/news/2023/09/28/the-html-api-process-your-tags-not-your-pain/) in this initial post from 6.2 on the developer blog. 

**Key Make Posts/GitHub/Trac Issue(s):** Read [this Make Core post](https://make.wordpress.org/core/2024/06/24/updates-to-the-html-api-in-6-6/) for a full recap.
