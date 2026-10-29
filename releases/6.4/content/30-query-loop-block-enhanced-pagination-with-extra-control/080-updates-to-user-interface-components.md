---
title: Updates to user interface components
slug: updates-to-user-interface-components
tags: [plugin author]
---

Various changes were made to the @wordpress/components package for the WordPress 6.4 release. At a high level, this includes the following:

*   Making Popover.Slot optional as part of a developer experience improvement for building block editors with Gutenberg as a framework.
*   Rewriting Tooltip and TabPanel to leverage third-party, headless libraries. 
*   New props for the Modal component. 
*   Improving size consistency for UI components.
*   More granular control of decimal places on NumberControl-based components.
*   Rendering CircularOptionPicker as a listbox by default.
*   Adding an option for FormTokenField to create a new token when losing focus.
*   Controlling open/closed state of Dropdown and DropdownMenu.

**Key Make Posts/GitHub/Trac Issue(s):** For more information, please review [this dev note.](https://make.wordpress.org/core/2023/10/16/editor-components-updates-in-wordpress-6-4/)
