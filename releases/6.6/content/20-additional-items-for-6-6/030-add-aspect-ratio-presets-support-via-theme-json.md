---
title: Add aspect ratio presets support via theme.json
slug: add-aspect-ratio-presets-support-via-theme-json
tags: [theme author]
---

To add another aspect (get it) of customization, aspect ratio preset support was added to theme.json. This means you can customize the available presets for aspect ratio for the following blocks that support aspect ratio:

*   Image
*   Cover
*   Featured Image

**Adoption approach:** You can add your own presets via the theme in theme.json  settings.dimensions.aspectRatios like so:

```
{

"version": 3,

"settings": {

"dimensions": {

"defaultAspectRatios": true,

"aspectRatios": [

{

"name": "Extra Wide - 2:1",

"ratio": "2/1",

"slug": "2-1"

}

]

}

}

}
```

**Key Make Posts/GitHub/Trac Issue(s):** Add aspect ratio presets support via theme.json.([47271](https://github.com/WordPress/gutenberg/pull/47271))
