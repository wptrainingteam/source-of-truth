---
title: Border Radius presets supported
slug: border-radius-presets-supported
tags: []
---

It’s now possible to define border radius presets in the \`theme.json\` for your theme. The user experience changes slightly with the numbers of presets: up until eight, a user can enable the border radius along a slider. For nine and more present the user uses a drop-down select menu. Users can always access custom value input through the custom button to the right of the control.

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="560" height="261" data-attachment-id="42991" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/border-radius-presets/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/border-radius-presets.png?fit=560%2C261&amp;ssl=1" data-orig-size="560,261" data-comments-opened="1" data-image-title="border-radius-presets" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/border-radius-presets.png?fit=560%2C261&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/border-radius-presets.png?resize=560%2C261&amp;ssl=1" alt="" class="wp-image-42991" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/border-radius-presets.png?w=560&amp;ssl=1 560w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/border-radius-presets.png?resize=300%2C140&amp;ssl=1 300w" sizes="auto, (max-width: 560px) 100vw, 560px"></figure>

As an example you can add the following to the \`settings\` property of your \`theme.json\` file. ([67544](https://github.com/WordPress/gutenberg/pull/67544)). \\

JSON

{
"settings"{
	"border": {
		"radiusSizes": [
				{
					"name": "Small",
					"slug": "small",
					"size": "2px"
				},
				{
					"name": "Medium",
					"slug": "medium",
					"size": "4px"
				},
				{
					"name": "Large",
					"slug": "large",
					"size": "6px"
				}
			]
	}
}

```
{
"settings"{
	"border": {
		"radiusSizes": [
				{
					"name": "Small",
					"slug": "small",
					"size": "2px"
				},
				{
					"name": "Medium",
					"slug": "medium",
					"size": "4px"
				},
				{
					"name": "Large",
					"slug": "large",
					"size": "6px"
				}
			]
	}
}
```

*   The Dev note has been published: [Theme.json Border Radius Presets Support in WordPress 6.9](https://make.wordpress.org/core/2025/11/12/theme-json-border-radius-presets-support-in-wordpress-6-9/)
*   A step-by-step guide can be found on the WordPress Developer blog: [Border radius size presets in WordPress 6.9](https://developer.wordpress.org/news/2025/09/border-radius-size-presets-in-wordpress-6-9/).
