---
title: Preview Options API
slug: preview-options-api
tags: [developer, plugin author, enterprise]
---

The latest WordPress release enhances the Preview Options in the block editor, making it easier for developers to customize how content is previewed. A new API allows plugins and themes to add custom items to the preview dropdown menu, enabling users to see content in different formats or environments. This flexibility improves the editing experience while maintaining the existing structure of the Preview dropdown:

*   Introduces `PreviewDropdownMenuItem` component for adding custom items to the Preview dropdown
*   Allows plugins to add menu items with custom titles and click handlers
*   Maintains the existing Preview dropdown structure while allowing for extensibility

**Visuals:** [image](https://drive.google.com/file/d/1Axvxz-jnDHk0E341zRWF7cPelnRoLfXo/view?usp=drive_link) of an example of how a plugin could use this API. 
**Adoption approach:** opt in.
**Key Make Posts/GitHub/Trac Issue(s):** Add extensibility to PreviewOptions v2 ([64644](https://github.com/WordPress/gutenberg/pull/64644#top))

Developer Note: [Extending the Preview Dropdown Menu in WordPress 6.7](https://make.wordpress.org/core/2024/10/18/extending-the-preview-dropdown-menu-in-wordpress-6-7/)
