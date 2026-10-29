---
title: Theme.json changes
slug: theme-json-changes
tags: [theme author]
---

#### Disallow custom content size controls [enterprise]

This release introduces a new theme.json layout setting for disabling custom content and wide sizes in the UI, globally or at a per-block level. This will give you more control over what your users or clients can do with design tools.

**Adoption approach:**The new layout.allowCustomContentAndWideSize setting can set globally or at the block level:

```
{"$schema": "https://schemas.wp.org/trunk/theme.json","version": 2,"settings": {"layout": {"allowCustomContentAndWideSize": false}}}
```

**Key Make Posts/GitHub/Trac Issue(s):**  Add setting to disable custom content size controls ([56236](https://github.com/WordPress/gutenberg/pull/56236))

#### CSS Level 4 viewport-relative units support

While not exposed by default, [support for viewport-relative CSS units](https://github.com/WordPress/gutenberg/pull/54415) has been added and can be enabled via the [settings.spacing.units property](https://developer.wordpress.org/themes/global-settings-and-styles/settings/spacing/#defining-allowed-spacing-units) in theme.json. Container-query units are still unsupported, despite nearly as much [browser support](https://caniuse.com/css-container-query-units) (though they can be used when manually defining spacing and font-size presets).

**Adoption approach:** edit theme.json file to add in settings.spacing.units support for the unit you want.

**Key Make Posts/GitHub/Trac Issue(s):** Allow using CSS level 4 viewport-relative units ([54415](https://github.com/WordPress/gutenberg/pull/54415))
