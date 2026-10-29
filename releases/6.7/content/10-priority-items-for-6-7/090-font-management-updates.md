---
title: Font management updates
slug: font-management-updates
tags: [end user, theme author]
---

#### Edit and apply font size presets 

An enhanced Styles interface allows for greater flexibility when creating, editing, removing, and applying font size presets. Users can now easily modify the presets provided by a theme or create their own custom options. A key feature is the ability to toggle fluid typography, which enables responsive font scaling, with the option to set custom fluid values for finer control over responsiveness. Of note, individual font sizes may opt out of fluid typography if it is turned on globally. Individual font size presets can opt in to fluid typography if it is not turned on globally, creating more possibilities. 

#### Consistent interfaces

In addition to these font-related enhancements, the Styles interface has been upgraded to offer more intuitive control over font size presets. These presets, along with color presets, are now available for selection from the Styles sidebar under the “Browse styles” option, aligning with the left sidebar Styles menu. This change creates a more streamlined and consistent user experience, making navigating and applying global styles across the site easier and making   the fonts management modal dialog more discoverable. ([62129](https://github.com/WordPress/gutenberg/pull/62129))

#### Font library enhancements

Fonts are now grouped by source ([63211](https://github.com/WordPress/gutenberg/pull/63211)) helping users understand at a glance where each font comes from. A new “Select All” option ([63531](https://github.com/WordPress/gutenberg/pull/63531)) allows for quick activation or deactivation of all fonts at once, streamlining font management. When no fonts are installed, a message now displays in the library tab ([63740](https://github.com/WordPress/gutenberg/pull/63740)), improving user awareness. Additionally, enhancements have been made to the “No fonts installed” state ([63533](https://github.com/WordPress/gutenberg/pull/63533)), clarifying situations when fonts are installed but not yet activated.

**Visuals:** [demo](https://drive.google.com/file/d/1yOpfEc9fVustc7swG5CXTm6ivGeLBFl9/view?usp=drive_link) showing editing font preset, creating a font preset, and font library improvements.
**Key Make Posts/GitHub/Trac Issue(s):** [Core Editor Improvement post dedicated to these changes](https://make.wordpress.org/core/2024/10/08/core-editor-improvement-new-features-and-flows-for-font-management/), efforts done across a number of PRs including add font size presets UI ([63057](https://github.com/WordPress/gutenberg/pull/63057)), Font Library: group fonts by source ([63211](https://github.com/WordPress/gutenberg/pull/63211#top)), and fluid typography: allow individual preset overrides ([64790](https://github.com/WordPress/gutenberg/pull/64790)).

Developer Notes excerpt: [New Font Size Presets UI](https://make.wordpress.org/core/2024/10/20/miscellaneous-block-editor-changes-in-wordpress-6-7/#new-font-size-presets-ui)
