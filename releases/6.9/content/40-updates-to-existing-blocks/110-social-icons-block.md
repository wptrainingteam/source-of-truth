---
title: Social Icons Block
slug: social-icons-block
tags: [developers, enterprise]
---

The update to the Social Icons Block enables now extenders to register custom Social Icons variations. This way, any group of Social Icons that are relevant to the site owner can be created and used in the content, for instance icons of various Podcast directories, or to add icons for payment systems not available in core. 

On the WordPress Developer Block developers will find a tutorial on [how to register their own social media icons](https://developer.wordpress.org/news/2025/08/registering-custom-social-icons-in-wordpress-6-9/)**.** Plugin developers can now remove existing icons and register their own. ([70261](https://github.com/WordPress/gutenberg/pull/70261))

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="513" height="111" data-attachment-id="42985" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/social-icons-more/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icons-more.png?fit=513%2C111&amp;ssl=1" data-orig-size="513,111" data-comments-opened="1" data-image-title="social-icons-more" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icons-more.png?fit=513%2C111&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icons-more.png?resize=513%2C111&amp;ssl=1" alt="" class="wp-image-42985" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icons-more.png?w=513&amp;ssl=1 513w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icons-more.png?resize=300%2C65&amp;ssl=1 300w" sizes="auto, (max-width: 513px) 100vw, 513px"></figure>

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="380" height="136" data-attachment-id="42986" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/social-icon-podcasts/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icon-podcasts.png?fit=380%2C136&amp;ssl=1" data-orig-size="380,136" data-comments-opened="1" data-image-title="social-icon-podcasts" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icon-podcasts.png?fit=380%2C136&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icon-podcasts.png?resize=380%2C136&amp;ssl=1" alt="" class="wp-image-42986" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icon-podcasts.png?w=380&amp;ssl=1 380w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/social-icon-podcasts.png?resize=300%2C107&amp;ssl=1 300w" sizes="auto, (max-width: 380px) 100vw, 380px"></figure>

A bug fix now makes sure the social icons honor theme.json styles for typography. ([70380](https://github.com/WordPress/gutenberg/pull/70380))

JSON

"core/social-links": {
		"typography": {
			"fontSize": "var(--wp--preset--font-size--x-large)"
		}
},

```
"core/social-links": {
		"typography": {
			"fontSize": "var(--wp--preset--font-size--x-large)"
		}
},
```
