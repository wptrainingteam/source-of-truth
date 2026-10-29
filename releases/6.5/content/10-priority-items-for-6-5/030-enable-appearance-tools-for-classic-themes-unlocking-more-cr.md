---
title: "Enable appearance tools for Classic Themes, unlocking more creative control"
slug: enable-appearance-tools-for-classic-themes-unlocking-more-cr
tags: [theme author, enterprise]
---

Over many of the more recent WordPress releases, an increasing number of design tools were added that, until now, Classic Themes couldn’t opt into. For example, adding a simple border to a Group block requires support for Appearance Tools. This new option means Classic Themes can add access to these tools safely, without breakage, unlocking more design options for more sites in a big way. These options include border color, radius and width, link color, margin, padding, line height, and more. To see a full list of what design options are added, check [out this list](https://github.com/WordPress/wordpress-develop/blob/trunk/src/wp-includes/class-wp-theme-json.php#L576). 

Note that default [classic themes have not yet added support for this](https://github.com/WordPress/wordpress-develop/pull/3176) due to concerns around layout changes.

**Adoption approach:** 

*   Classic themes can opt in via functions.php with add\_theme\_support( ‘appearance-tools’ ); 
*   For those using a theme.json file, you can opt in by setting appearanceTools to true.

**Key Make Posts/GitHub/Trac Issue(s):** Enable appearance tools via theme\_support ([43337](https://github.com/WordPress/gutenberg/pull/43337#top))
