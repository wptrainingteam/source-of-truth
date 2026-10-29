---
title: Combine gradient and image backgrounds
slug: combine-gradient-and-image-backgrounds
tags: [end user, theme builder, site admin]
---

More blocks now support background gradients through the new background.gradient block support, which [layers a gradient on top of a background image](https://github.com/WordPress/gutenberg/pull/75859) instead of one overwriting the other — a translucent color wash over a photo, for instance, without custom CSS.

Previously, gradients lived only in the Color panel, stored as a CSS background shorthand that clashed with any image on the block. The new support adds a Gradient control to the Background panel next to the existing Image control, and the style engine combines both into a single layered background-image value on individual blocks, in Global Styles, and via theme.json. A follow-up allows [modern color functions in standalone gradients](https://github.com/WordPress/gutenberg/pull/79791), and the [text and background color controls moved](https://github.com/WordPress/gutenberg/pull/77279) to the Typography and Background panels to match.

To place the two color settings for background and gradients in the sidebar together, the controls needed to be split up from the text color. So now the color settings for text color and background colore are in two different panels.

<figure class="wp-block-gallery has-nested-images columns-default wp-block-gallery-1 is-layout-flex wp-block-gallery-is-layout-flex"><figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="273" height="335" data-attachment-id="46775" data-permalink="https://gutenbergtimes.com/wordpress-7-1-source-of-truth/screenshot-2026-08-14-at-10-28-41/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.28.41.png?fit=273%2C335&amp;ssl=1" data-orig-size="273,335" data-comments-opened="1" data-image-title="Screenshot 2026-08-14 at 10.28.41" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.28.41.png?fit=273%2C335&amp;ssl=1" data-id="46775" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.28.41.png?resize=273%2C335&amp;ssl=1" alt="" class="wp-image-46775" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.28.41.png?w=273&amp;ssl=1 273w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.28.41.png?resize=244%2C300&amp;ssl=1 244w" sizes="auto, (max-width: 273px) 100vw, 273px"></figure><figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="281" height="464" data-attachment-id="46779" data-permalink="https://gutenbergtimes.com/wordpress-7-1-source-of-truth/screenshot-2026-08-14-at-10-31-19/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.31.19.png?fit=281%2C464&amp;ssl=1" data-orig-size="281,464" data-comments-opened="1" data-image-title="Screenshot 2026-08-14 at 10.31.19" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.31.19.png?fit=281%2C464&amp;ssl=1" data-id="46779" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.31.19.png?resize=281%2C464&amp;ssl=1" alt="" class="wp-image-46779" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.31.19.png?w=281&amp;ssl=1 281w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/08/Screenshot-2026-08-14-at-10.31.19.png?resize=182%2C300&amp;ssl=1 182w" sizes="auto, (max-width: 281px) 100vw, 281px"></figure></figure>

WordPress 7.1 ships with six blocks supporting the new gradients: [Group](https://github.com/WordPress/gutenberg/pull/75859), [Verse](https://github.com/WordPress/gutenberg/pull/79391), [Accordion](https://github.com/WordPress/gutenberg/pull/79840), [Pullquote](https://github.com/WordPress/gutenberg/pull/79841), [Post Content](https://github.com/WordPress/gutenberg/pull/79842), and [Quote](https://github.com/WordPress/gutenberg/pull/79843). More will follow, with a long-term plan to migrate the older color.gradient to the new system across all blocks. There’s no built-in migration path in 7.1 yet.

For extenders, opting in follows the familiar block supports pattern. Custom blocks declare it in their block.json:

JSON"supports": {
	"background": {
		"gradient": true
	}
}

```
"supports": {
	"background": {
		"gradient": true
	}
}
```

Themes control the setting via theme.json under settings.background.gradient (it’s also included in appearanceTools), and can define gradient values in styles — at the root, per block, or in style variations:

JSON{
	"styles": {
		"background": {
			"gradient": "linear-gradient( 135deg, #000 0%, #fff 100% )"
		},
		"blocks": {
			"core/group": {
				"background": {
					"gradient": "var:preset|gradient|vivid-cyan-blue"
				}
			}
		}
	}
}

```
{
	"styles": {
		"background": {
			"gradient": "linear-gradient( 135deg, #000 0%, #fff 100% )"
		},
		"blocks": {
			"core/group": {
				"background": {
					"gradient": "var:preset|gradient|vivid-cyan-blue"
				}
			}
		}
	}
}
```

All the salient details in this Dev Note [New Block Support in WordPress 7.1: Background Gradient (background.gradient)](https://make.wordpress.org/core/2026/07/26/new-block-support-in-wordpress-7-1-background-gradient-background-gradient/)
