---
title: Turn off layout controls on a per block basis via theme.json
slug: turn-off-layout-controls-on-a-per-block-basis-via-theme-json
tags: [block theme, site admin]
---

Layout controls can now be disabled on a per block basis as part of [additional efforts to curate the editing experience.](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/) To disable from theme.json the required property is allowEditing: false. This property can be added in settings.layout to disable the controls for all blocks, or in settings.blocks.[block name] to disable for specific blocks.

**Visuals:** N/A

**Adoption approach:** opt out via theme.json. For example with the Buttons block:

“settings”: {

    “blocks”: {

        “core/buttons”: {

            “layout”: false

        {

    { 

{

**Key Make Posts/GitHub/Trac Issue(s):** Allow layout controls to be disabled per block from theme.json. ([53378](https://github.com/WordPress/gutenberg/pull/53378))
