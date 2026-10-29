---
title: Advancing the new Data Views in the Site Editor
slug: advancing-the-new-data-views-in-the-site-editor
tags: []
---

_As a reminder, Data Views refers to an improved and reusable UI for different screens in WordPress that deal with collections of things whether that’s templates, patterns, posts, media, and more. It’s being built with extensibility in mind and is a big part of phase 3, specifically the Admin Redesign efforts. This new UI will also power other aspects of phase 3 work, including aspects like workflow improvements for assigning folks to review posts or creating custom views to streamline processes._ 

Building on an initial launch in 6.5, the new views in the Site Editor continue to be refined and advanced. This includes work to bring the various management pages forward (manage all templates, manage all template parts, manage all pages) so those options are immediately seen when visiting the respective sections, reducing the number of steps to access important information. To streamline further, all Detail pages have been removed, eliminating an interstitial step and bringing you straight into editing.

For pages, a new side by side layout has been introduced as the default experience so one can see both a list of all pages and a preview of the currently selected page. For patterns, template part management was integrated into the current overall patterns section. Interspersed within all of these larger changes are smaller enhancements in functionality and feel, including improvements to keyboard navigation, new bulk edit actions, [badges to communicate important information](https://github.com/WordPress/gutenberg/pull/61718) (like Posts page and Front page), performance improvements, and animation refinements. 

**Visuals:** [demo](https://drive.google.com/file/d/1hVfUqeVsTnvDg8AZuTo-DdK4EhpKdjhI/view?usp=drive_link) going through each section (template, patterns/template parts, pages) with simple bulk action items.
**Adoption approach:** Extensibility has been a key piece of this work baked into all of these efforts from the very beginning. For now, folks can bundle the dataviews styles in your plugin and you can even [copy/paste these  frames in the design library](https://href.li/?https://www.figma.com/design/e4tLacmlPuZV47l7901FEs/WordPress-Design-Library?node-id=66128-15838&t=gAUDrPRvOxU7E4A0-0) for quick mockups. Read through [this full June 2024 update](https://make.wordpress.org/core/2024/06/13/data-views-update-june-2024/) for more information.
**Key Make Posts/GitHub/Trac Issue(s):** Advancing site editor index views ([59659](https://github.com/WordPress/gutenberg/issues/59659))
