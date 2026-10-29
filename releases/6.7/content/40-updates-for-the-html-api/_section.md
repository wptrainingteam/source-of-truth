---
title: Updates for the HTML API
slug: updates-for-the-html-api
tags: [plugin author, developer]
---

The HTML Processor has a few upgrades and features:

*   Full HTML Support: HTML Processor can handle any HTML and in only the rarest situations will the HTML Processor now give up, and in none of these cases is it because the processor doesn’t know how to handle a given tag.
*   Ability to modify most text in a document: The first of a new set of modification methods has been added to the HTML API: `set_modifiable_text()`. 
*   Full parser mode: The `create_full_parser()` mode was introduced, which allows the HTML API to process entire HTML documents from start to finish, something that wasn’t possible before.
*   CSS behavior reviewed: The Tag Processor and fragment parser in the HTML Processor will assume a document is in standards mode (no-quirks mode) unless it determines otherwise. In response to this, all CSS-adjacent code has been audited and updated to ensure that the matching of things like class names behaves just as it would in a browser.

**Adoption approach:** opt in by using the HTML API
**Key Make Posts/GitHub/Trac Issue(s):** HTML API: Plans for 6.7 ([60396](https://github.com/WordPress/gutenberg/issues/60396)) 

Developer Note: [Updates to the HTML API in 6.7](https://make.wordpress.org/core/2024/10/17/updates-to-the-html-api-in-6-7/)
