---
title: Form elements in theme.json
slug: form-elements-in-theme-json
tags: []
---

WordPress theme development reaches new enrichment with theme.json support for form element styling. Developers can now target text-based controls and select/dropdown elements through the styles.elements property, defining colors, borders, and typography directly in Global Styles. 

This eliminates custom CSS dependencies, allowing search forms, comment forms, and plugin-generated forms to automatically inherit the site’s design system. ([34198](https://github.com/WordPress/gutenberg/issues/34198)) ([70378](https://github.com/WordPress/gutenberg/pull/70378)) ([70379](https://github.com/WordPress/gutenberg/pull/70379)) Below snippet shows an example for the textInput element. 

JSON"elements": {
	"textInput": {
			"border": {
				"radius": "0",
				"style": "solid",
				"width": "1px",
				"color": "red"
			},
			"color": {
				"text": "var(--wp--preset--color--theme-2)"
			},
			"typography": {
				"fontFamily": "var(--wp--preset--font-family--inter)"
			}
		}
}

```
"elements": {
	"textInput": {
			"border": {
				"radius": "0",
				"style": "solid",
				"width": "1px",
				"color": "red"
			},
			"color": {
				"text": "var(--wp--preset--color--theme-2)"
			},
			"typography": {
				"fontFamily": "var(--wp--preset--font-family--inter)"
			}
		}
}
```

An additional resource is the tutorial on the WordPress Developer blog: [How WordPress 6.9 gives forms a theme.json makeover](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/)
