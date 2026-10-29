---
title: Button element inherits typography
slug: button-element-inherits-typography
tags: []
---

With the release of WordPress 6.9, the button element defined in the default \`theme.json\` can inherit typographical styles from its parent. ([70676](https://github.com/WordPress/gutenberg/pull/70676)) 

The full styles for the element now look like this:

JSON

{
	"styles": {
		"elements": {
			"button": {
				"typography": {
					"fontSize": "inherit",
					"fontFamily": "inherit",
					"fontStyle": "inherit",
					"fontWeight": "inherit",
					"letterSpacing": "inherit",
					"textTransform": "inherit",
					"lineHeight": "inherit",
					"textDecoration": "none"
				}
			}
	}
}

```
{
	"styles": {
		"elements": {
			"button": {
				"typography": {
					"fontSize": "inherit",
					"fontFamily": "inherit",
					"fontStyle": "inherit",
					"fontWeight": "inherit",
					"letterSpacing": "inherit",
					"textTransform": "inherit",
					"lineHeight": "inherit",
					"textDecoration": "none"
				}
			}
	}
}
```
