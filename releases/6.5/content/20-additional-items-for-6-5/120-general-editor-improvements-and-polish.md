---
title: General editor improvements and polish
slug: general-editor-improvements-and-polish
tags: []
---

Improvements across the WordPress experience continue to land in each release. While each of the items below aren’t enough to highlight alone, they each play a role in making WordPress more delightful, powerful, and intuitive to use. 

While the following shows a longer list, here are a few in particular that stand out:

*   HTML in a post title is now shown, preventing any mistakes in copy/pasting titles from other sources and adding the ability to edit the HTML if you do want it when you switch into code view ([54718](https://github.com/WordPress/gutenberg/pull/54718#top)).
*   Improvements to multi selecting blocks results in a smoother and more consistent experience ([47525](https://github.com/WordPress/gutenberg/pull/47525#top)).
*   Copy and delete labels have been simplified by removing “blocks” to improve visual clarity ([57769](https://github.com/WordPress/gutenberg/pull/57769#top)).
*   Enter twice on the last button to go to the next line and make it easier to break out of editing buttons ([56134](https://github.com/WordPress/gutenberg/pull/56134)).
*   Use Escape to toggle between Select/Edit modes ([58637](https://github.com/WordPress/gutenberg/pull/58637))

General experience: 

*   Show a disabled lock button if a user cannot control lock state to help communicate visually that a block is locked ([57274](https://github.com/WordPress/gutenberg/pull/57274#top))
*   Improve dimensions design tool layout ([55060](https://github.com/WordPress/gutenberg/pull/55060)).
*   Improve pre-publish checks naming consistency. ([57019](https://github.com/WordPress/gutenberg/pull/57019))
*   Paste: Fix MS Word list paste. ([55127](https://github.com/WordPress/gutenberg/pull/55127))
*   Font size picker: Fix Reset button focus loss. ([57196](https://github.com/WordPress/gutenberg/pull/57196))
*   Reduce specificity of block style variation selectors. ([57659](https://github.com/WordPress/gutenberg/pull/57659))
*   Writing flow: Fix selecting synced pattern when arrowing through blocks and patterns ([55221](https://github.com/WordPress/gutenberg/pull/55221)).
*   Writing flow: Preserve block when merging into empty paragraph ([55134](https://github.com/WordPress/gutenberg/pull/55134)).

Block specific:

*   Audio: Hide some controls when multi-editing blocks. ([57376](https://github.com/WordPress/gutenberg/pull/57376))
*   Gallery: Hide some controls when multi-editing blocks. ([57378](https://github.com/WordPress/gutenberg/pull/57378))
*   Gallery: Update order of controls ([58407](https://github.com/WordPress/gutenberg/pull/58407))
*   Image: Fix resetting behavior for alt image text ([56809](https://github.com/WordPress/gutenberg/pull/56809#top))
*   Image: Get lightbox trigger button ref via data-wp-init. ([57089](https://github.com/WordPress/gutenberg/pull/57089))
*   Image: Hide caption control when multi-editing images. ([57357](https://github.com/WordPress/gutenberg/pull/57357))
*   List: Fix forward merging of nested list. ([55121](https://github.com/WordPress/gutenberg/pull/55121))
*   Social: Add social icon for the Gravatar service ([#56544](https://github.com/WordPress/gutenberg/pull/56544)).
*   Video: Add raw transformation from video html. ([47159](https://github.com/WordPress/gutenberg/pull/47159))
*   Video: Hide some controls when multi-editing blocks. ([57375](https://github.com/WordPress/gutenberg/pull/57375))

**Visuals:** [writing flow improvements demo](https://drive.google.com/file/d/1uCZy3LB6bt5EPvbQikS2W9tPsFB6MaTA/view?usp=drive_link)
