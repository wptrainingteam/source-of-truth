---
title: Global Styles and theme.json
slug: global-styles-and-theme-json
tags: []
---

#### Text Shadow support for theme.json

Theme authors can now define [text shadows directly in theme.json](https://github.com/WordPress/gutenberg/pull/73320) via a new textShadow property under styles.typography. It works everywhere you’d expect: at the root level, per-block (say, a shadow on paragraphs only), via style variations, and on elements — including pseudo-selectors like a link’s :hover state. Any valid CSS text-shadow value is accepted, including stacked multi-shadow definitions. Block placeholder text in the editor resets the shadow so it stays readable regardless of what the theme sets.

JSON"styles": {
		"typography": {
			"textShadow": "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;"
		},
		"blocks": {
			"core/paragraph": {
				"typography": {
					"textShadow": "1px 1px 2px red, 0 0 1em red, 0 0 0.2em red;"
				}
			}
		},
		"elements": {
			"link": {
				":hover": {
					"typography": {
						"textShadow": "none"

```
"styles": {
		"typography": {
			"textShadow": "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;"
		},
		"blocks": {
			"core/paragraph": {
				"typography": {
					"textShadow": "1px 1px 2px red, 0 0 1em red, 0 0 0.2em red;"
				}
			}
		},
		"elements": {
			"link": {
				":hover": {
					"typography": {
						"textShadow": "none"
```

More details in the Dev Note: [Text Shadow Support in Global Styles](https://make.wordpress.org/core/2026/07/23/text-shadow-support-in-global-styles/)

#### Text-Align Block Support Migration

Nine more core blocks (Post Date, Post Excerpt, Post Navigation Link, Post Title, Query Title, Site Tagline, Site Title, Pullquote and Term Name) now use WordPress’s standardized [text-align system](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/#align). As part of a larger [migration effort](https://github.com/WordPress/gutenberg/issues/60763) this update ensures consistent alignment controls across the editor and makes these blocks behave predictably alongside newer blocks. 

WordPress EndUser are not supposed to see any changes and existing blocks continue to work. Theme designers are now able to style any of these blocks text align via theme.json property. The code example shows how to set the center as the site-wide TextAlign default. And \`”textAlign”: false\` disables the feature for this block 

JSON{
	"version": 3,
	"styles": {
		"blocks": {
			"core/pullquote": {
				"typography": {
					"textAlign": "center"
				}
			}
		}
	}
}

```
{
	"version": 3,
	"styles": {
		"blocks": {
			"core/pullquote": {
				"typography": {
					"textAlign": "center"
				}
			}
		}
	}
}

```

#### Block Visibility

Adds `settings.blockVisibility.allowEditing` to theme.json, allowing themes to disable the block visibility feature entirely.

JSON{
  "settings": {
    "blockVisibility": {
      "allowEditing": false
    }
  }
}

```
{
  "settings": {
    "blockVisibility": {
      "allowEditing": false
    }
  }
}
```

When set to false, the toolbar button and block options menu item are hidden. In this regard, it makes this block support consistent with color, typography etc.

blockVisibility.allowEditing follows the layout flag. The reason is the two-fold nature of blockVisibility at the block supports level: a bool means don’t render the block at all, but viewport settings allow users to control visibility per viewport.

The object shape also leaves the door open to extending block visibility to triggers, not only blockVisibility.viewports but others like post type or whatever. ([76559](https://github.com/WordPress/gutenberg/pull/76559)).

#### Block Supports: CSS variables by feature selector

Block Supports [now generates CSS custom properties](https://github.com/WordPress/gutenberg/pull/75226) based on a block’s feature-specific selectors, not just its root selector. Some blocks—the Button block is the example given—define their outer wrapper and an inner styling target as different elements, and previously there was no way to output a preset variable (like a dimension size) onto that inner element specifically. Theme and plugin authors building design systems now have a way to target the right element per feature, without needing custom CSS to work around the mismatch.

#### A minimum-width option for block dimensions

Blocks already supported height, minHeight, and width. What was missing was a way to stop something from shrinking too far—so a layout element wouldn’t collapse into an unusable sliver on a narrow screen. [Minimum-width closes that gap](https://github.com/WordPress/gutenberg/pull/76949), mirroring how minimum-height already works.

It’s opt-in at the block level: the control stays hidden in the inspector until a block explicitly enables it, though it shows by default in the global styles panel. Theme-defined dimension presets carry over automatically, so existing spacing scales just work. The Group block is the first to adopt it.

You’ll find more details in the Dev Note [New Block Support in WordPress 7.1: Minimum Width](https://make.wordpress.org/core/2026/07/26/new-block-support-in-wordpress-7-1-minimum-width/)
