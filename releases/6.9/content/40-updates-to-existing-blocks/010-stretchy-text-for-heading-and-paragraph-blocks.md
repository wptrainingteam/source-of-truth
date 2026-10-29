---
title: Stretchy Text for Heading and Paragraph blocks.
slug: stretchy-text-for-heading-and-paragraph-blocks
tags: [all]
---

Both Heading and Paragraph blocks now support a new “Stretchy” variation that stretches text to the full width of its container. The transform tool from the button tools bar allowing users to convert text into this stretchy format. 

<figure class="wp-block-gallery has-nested-images columns-default wp-block-gallery-1 is-layout-flex wp-block-gallery-is-layout-flex"><figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="277" height="271" data-attachment-id="43081" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/sstretchy-heading-2025-11-21/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Sstretchy-Heading-2025-11-21.png?fit=277%2C271&amp;ssl=1" data-orig-size="277,271" data-comments-opened="1" data-image-title="Sstretchy-Heading-2025-11-21" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Sstretchy-Heading-2025-11-21.png?fit=277%2C271&amp;ssl=1" data-id="43081" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Sstretchy-Heading-2025-11-21.png?resize=277%2C271&amp;ssl=1" alt="" class="wp-image-43081"></figure><figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="279" height="252" data-attachment-id="43082" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/stretchy-paragrapph-2025-11-21/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-Paragrapph-2025-11-21.png?fit=279%2C252&amp;ssl=1" data-orig-size="279,252" data-comments-opened="1" data-image-title="Stretchy-Paragrapph-2025-11-21" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-Paragrapph-2025-11-21.png?fit=279%2C252&amp;ssl=1" data-id="43082" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-Paragrapph-2025-11-21.png?resize=279%2C252&amp;ssl=1" alt="" class="wp-image-43082"></figure></figure>

<figure class="wp-block-image alignright size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="289" height="158" data-attachment-id="42955" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/stretchy-slash-command/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-slash-command.png?fit=289%2C158&amp;ssl=1" data-orig-size="289,158" data-comments-opened="1" data-image-title="Stretchy-slash-command" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-slash-command.png?fit=289%2C158&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-slash-command.png?resize=289%2C158&amp;ssl=1" alt="" class="wp-image-42955"></figure>

Content creators can find these variations also in the Block inserter or via the Slash command. 

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="354" height="307" data-attachment-id="42956" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/stretchy-in-inserter/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-in-inserter.png?fit=354%2C307&amp;ssl=1" data-orig-size="354,307" data-comments-opened="1" data-image-title="Stretchy-in-inserter" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-in-inserter.png?fit=354%2C307&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-in-inserter.png?resize=354%2C307&amp;ssl=1" alt="" class="wp-image-42956" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-in-inserter.png?w=354&amp;ssl=1 354w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Stretchy-in-inserter.png?resize=300%2C260&amp;ssl=1 300w" sizes="auto, (max-width: 354px) 100vw, 354px"></figure>

Stretchy Text offers designers and content creators an additional creative tool, opening up numerous possibilities for visually appealing text, especially when paired with suitable fonts. 

Developers can add support for this feature to any Custom text block via block.json. ([73148](https://github.com/WordPress/gutenberg/pull/73148))([73056](https://github.com/WordPress/gutenberg/pull/73056)) ([73067](https://github.com/WordPress/gutenberg/pull/73067))([72923](https://github.com/WordPress/gutenberg/pull/72923))

JSON{
	"supports":{
		"typography":{
				"fitText": true,
		}
	}
}

```
{
	"supports":{
		"typography":{
				"fitText": true,
		}
	}
}
```
