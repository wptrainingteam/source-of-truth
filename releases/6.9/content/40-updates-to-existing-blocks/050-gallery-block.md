---
title: Gallery Block
slug: gallery-block
tags: [all]
---

This next WordPress version adds the support for gallery-wide aspect ratio setting to the Gallery Block. User can now set the same aspect ratio for all images in the gallery with one click from the sidebar. **(**[**71116**](https://github.com/WordPress/gutenberg/pull/71116)**) (**[**72104**](https://github.com/WordPress/gutenberg/pull/72104)**).**

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="652" data-attachment-id="42962" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/gallery-block-aspect-ratio/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Gallery-block-aspect-ratio.png?fit=1333%2C849&amp;ssl=1" data-orig-size="1333,849" data-comments-opened="1" data-image-title="Gallery-block-aspect-ratio" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Gallery-block-aspect-ratio.png?fit=1024%2C652&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Gallery-block-aspect-ratio.png?resize=1024%2C652&amp;ssl=1" alt="" class="wp-image-42962" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Gallery-block-aspect-ratio.png?resize=1024%2C652&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Gallery-block-aspect-ratio.png?resize=300%2C191&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Gallery-block-aspect-ratio.png?resize=768%2C489&amp;ssl=1 768w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Gallery-block-aspect-ratio.png?resize=1080%2C688&amp;ssl=1 1080w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Gallery-block-aspect-ratio.png?w=1333&amp;ssl=1 1333w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

Theme developers can control the availability via theme.json. The code snippet shows an example of removing the default choice `defaultAspectRatios` and only offering two choices in the editor.

JSON"settings":{
        "blocks" {
            "core/gallery":{
                "dimensions":{
                    "defaultAspectRatios":false,
                    "aspectRatios": [
                        {
                             "name": "Square - 1:1",
                             "slug": "square",
                             "ratio": "1"
                        },
                        {
                             "name": "Wide - 16:9",
                             "slug": "16-9",
                             "ratio": "16/9"
                        }
                  ]
             }
         }
    }

```
"settings":{
        "blocks" {
            "core/gallery":{
                "dimensions":{
                    "defaultAspectRatios":false,
                    "aspectRatios": [
                        {
                             "name": "Square - 1:1",
                             "slug": "square",
                             "ratio": "1"
                        },
                        {
                             "name": "Wide - 16:9",
                             "slug": "16-9",
                             "ratio": "16/9"
                        }
                  ]
             }
         }
    }
```
