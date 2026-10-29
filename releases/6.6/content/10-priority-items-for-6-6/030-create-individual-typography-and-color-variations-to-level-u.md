---
title: Create individual typography and color variations to level up design options
slug: create-individual-typography-and-color-variations-to-level-u
tags: [theme author, end user]
---

Theme style variations allow you to change the look and feel of your site, all while using the same theme. To build on the design possibilities of a block theme with style variations, 6.6 adds the ability to target color or font only variations and offers them as presets, separate from overall style variations. Whereas style variations can change virtually anything, these new color and typography presets offer more contained changes, making it simple to offer broader color options or typography options out of the box. Theme authors will need to target this new option specifically by creating color or typography only variations without creating wholesale new style variations. For any style variations that only contain color and typography only changes, these will now automatically appear in this separate preset flow.

_Note: changes were made to this feature after beta 1 in_ [_light of this discussion_](https://github.com/WordPress/gutenberg/issues/62285)_._

**Visuals:** [demo](https://drive.google.com/file/d/18tyqv2FsVLXDjtjfBA-46EkWBurf8fET/view?usp=drive_link) selecting between offered color and typography presets

**Adoption approach:** block themers will need to create color or typography only variations that target only the specific respective properties. For an example, check out the [Onyx variation in Twenty Twenty-Four](https://github.com/WordPress/twentytwentyfour/blob/trunk/styles/onyx.json) which offers a color palette variation with no other changes. [An issue is already open](https://github.com/WordPress/create-block-theme/issues/668) to add this as an option to the Create Block Theme plugin.
**Key Make Posts/GitHub/Trac Issue(s):** [Color & Typography Variations for WP 6.6](https://github.com/WordPress/gutenberg/issues/61215#top), [Core Editor Improvement: Upgrade your designs](https://make.wordpress.org/core/2024/05/09/core-editor-improvement-upgrade-your-designs/)
