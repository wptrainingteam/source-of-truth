---
title: "Image Block: Mark as decorative toggle"
slug: image-block-mark-as-decorative-toggle
tags: [end user, site admin]
---

<figure class="wp-block-image alignright size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="263" height="487" data-attachment-id="46343" data-permalink="https://gutenbergtimes.com/mark-as-decorative-2/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/mark-as-decorative-edited.png?fit=263%2C487&amp;ssl=1" data-orig-size="263,487" data-comments-opened="1" data-image-title="mark-as-decorative" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/mark-as-decorative-edited.png?fit=263%2C487&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/mark-as-decorative-edited.png?resize=263%2C487&amp;ssl=1" alt="" class="wp-image-46343" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/mark-as-decorative-edited.png?w=263&amp;ssl=1 263w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/mark-as-decorative-edited.png?resize=162%2C300&amp;ssl=1 162w" sizes="auto, (max-width: 263px) 100vw, 263px"></figure>

Screen readers announce every image to their users — but some images, like dividers and design flourishes, carry no information worth announcing. The Image block’s new “Mark as decorative” checkbox tells assistive technologies to skip such an image entirely on the front end, by rendering it with role=”none” in the published post. It now eliminates the question, did we forget an alt=text or was it a deliberate decision to leave the alt-text empty?

There is further processing to come with the checked box. Marking an image decorative clears its alt text and disables captions and links, since an image that links somewhere or explains something isn’t decorative by definition. Until now, the accessible route was knowing the empty-alt-text convention; the checkbox makes the intent explicit, machine-readable, and available to every content creator. ([78064](https://github.com/WordPress/gutenberg/pull/78064))
