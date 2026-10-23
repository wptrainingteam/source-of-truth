---
title: Global Styles and theme.json
tags: []
---

#### Text shadow block support and presets 🔍

Text shadow, added to Global Styles in 7.1, is now a block support with a UI. Paragraph and Heading opt in through `supports.typography.textShadow`, and themes can define presets in `theme.json` under `settings.typography.textShadowPresets`. Core ships two defaults, Light and Strong ([#79584](https://github.com/WordPress/gutenberg/pull/79584)).

#### Preset slug references fixed 🔍

Since WordPress 5.8, `var:preset|…` references used the raw slug while the generated CSS custom property used a kebab-cased version, so a slug like `n27` silently pointed to the wrong variable. References are now kebab-cased to match ([#80583](https://github.com/WordPress/gutenberg/pull/80583)). Slugs that already worked are unaffected.

#### Override background-color padding 🔍

Themes can now override the padding WordPress adds to blocks that have a background color ([#82024](https://github.com/WordPress/gutenberg/pull/82024)).

#### Background-clip block support 🔍

A new background-clip block support controls how far a block's background extends, including clipping it to the block's text ([#77141](https://github.com/WordPress/gutenberg/pull/77141), [#77142](https://github.com/WordPress/gutenberg/pull/77142)).

<!-- 🔍 On hold: confirm what the UI exposes (gradient text?), which blocks opt in, and that it's in 7.2. Rewrite or remove. -->

#### Turn off the responsive and state editing UI 🔍

Two editor settings let you hide the new styling UI from users: `responsiveEditingEnabled` hides the **Responsive styles** option, and `blockStatesEditingEnabled` hides the hover, focus, and active state controls ([#80814](https://github.com/WordPress/gutenberg/pull/80814), [#80956](https://github.com/WordPress/gutenberg/pull/80956), [#81058](https://github.com/WordPress/gutenberg/pull/81058)). Both only affect the UI. Styles that are already saved keep rendering.

<!-- 🔍 On hold: the 7.1 Source of Truth already covers `responsiveEditingEnabled`. Check whether `blockStatesEditingEnabled` shipped in 7.1 too; keep only what's new in 7.2. -->
