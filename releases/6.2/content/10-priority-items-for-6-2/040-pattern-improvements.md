---
title: Pattern improvements
slug: pattern-improvements
tags: []
---

**Header and Footer Patterns [end user] [site admin]**

With the Site Editor speeding up the creation process by allowing you to edit all parts of your site and patterns, new Header and Footer patterns are now bundled into Core for all to use. This helps democratize design and provide excellent out-of-the-box options for folks, regardless of what block theme they are using. The following are direct links to the new options:

Headers:

*   [Header inside full-width background image](https://wordpress.org/patterns/pattern/header-inside-full-width-background-image/)
*   [Simple header with dark background](https://wordpress.org/patterns/pattern/simple-header-with-dark-background/)
*   [Text-only header with tagline](https://wordpress.org/patterns/pattern/text-only-header-with-tagline/)
*   [Simple header with tagline](https://wordpress.org/patterns/pattern/simple-header-with-tagline/)
*   [Site title and menu button](https://wordpress.org/patterns/pattern/site-title-and-menu-button/)
*   [Header with hero image](https://wordpress.org/patterns/pattern/header-with-hero-image/)
*   [Centered header with logo](https://wordpress.org/patterns/pattern/centered-header-with-logo/)
*   [Header with large font size](https://wordpress.org/patterns/pattern/header-with-large-font-size/)
*   [Simple header](https://wordpress.org/patterns/pattern/simple-header/)

Footers:

*   [Centered footer](https://wordpress.org/patterns/pattern/centered-footer/)
*   [Footer with search, site title, and credit line](https://wordpress.org/patterns/pattern/footer-with-search-site-title-and-credit-line/)
*   [Footer with site title and credit line](https://wordpress.org/patterns/pattern/footer-with-site-title-and-credit-line/)
*   [Footer with navigation and credit line](https://wordpress.org/patterns/pattern/footer-with-navigation-and-credit-line/)
*   [Footer with background color and three columns](https://wordpress.org/patterns/pattern/footer-with-background-color-and-three-columns/)
*   [Centered footer with social links](https://wordpress.org/patterns/pattern/centered-footer-with-social-links/)
*   [Footer with credit line and navigation](https://wordpress.org/patterns/pattern/footer-with-credit-line-and-navigation/)
*   [Left-aligned footer](https://wordpress.org/patterns/pattern/left-aligned-footer/)

**Visuals:** [new inserter design showing header & footer patterns and adjusted categories video](https://drive.google.com/file/d/1eyp7EFvSStDowe7__Nj0LDLp9kHTRl9J/view?usp=sharing).

**Key Make Posts/GitHub/Trac Issue(s):** Ensure Header & Footer patterns use the Pattern Directory API ([46017](https://github.com/WordPress/gutenberg/issues/46017))

**Reorganized pattern categories [user] [theme author]**

Pattern categories have been revamped and consolidated in some cases to accommodate a growing number of patterns, including the header & footer options. This includes the following changes:

*   Query patterns were renamed to Posts for more user-friendly language.
*   Columns were merged into Text to consolidate categories. 
*   Call to Action category replaces Buttons. 
*   Banner category introduced to denote visually distinctive elements that typically help structure or contrast the contents of a page (including headings and “hero” elements).
*   Header & Footer categories were introduced. 

**Visuals:** [new inserter design showing header & footer patterns and adjusted categories video](https://drive.google.com/file/d/1eyp7EFvSStDowe7__Nj0LDLp9kHTRl9J/view?usp=sharing).

**Key Make Posts/GitHub/Trac Issue(s):** recategorizing pattern categories ([44501](https://github.com/WordPress/gutenberg/issues/44501))

**Register patterns for specific template types [theme author] [site admin]**

Developers can also now register patterns for specific template types, limiting where the patterns appear. For example, an Error 404 pattern would only make sense when used with the 404 template. This builds on the prior pattern options of registering patterns to appear for post types so, for example, [you could have specific patterns appear when creating a new post](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/#utilizing-patterns). 

**Gist example:** [404 pattern registered for the 404 template](https://gist.github.com/annezazu/99ce2f84fa033dae48eacc50a8287bae).

**Adoption approach:** opt in when registering patterns.

**Key Make Posts/GitHub/Trac Issue(s):**  Add: Template types to the patterns API ([45814](https://github.com/WordPress/gutenberg/pull/45814)).
