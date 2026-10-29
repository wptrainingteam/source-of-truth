Building off of my [public 6.2 Source of Truth](https://nomad.blog/2023/03/01/wordpress-6-2-source-of-truth/), I’m offering up the next edition for WordPress 6.3, set to launch August 8th, 2023. **This is an early look — come back on July 25th, 2023 if you want a confirmed finalized version.** I like to share early and often both to find areas of improvement, get feedback, and put power in the hands of those involved in helping get the wider WordPress community up to speed on what’s coming. In particular, I’d recommend staying up to date on the [dev notes](https://make.wordpress.org/core/tag/dev-notes6-3/) as those are coming out on a rolling basis at this point.

As always, feedback is welcomed for improvements for future versions as I consider how best to share this information. Of note, this is not meant to replace dev notes or the release specific field guides which serve important roles and are separate efforts.

Finally, big thank you to the various editors, developers, designers, and more that contributed to this in so many ways from content reviews to technical reviews to creating specific assets.

**Important Note/Guidelines**

This should be used to inspire your own content and to ensure that you have the best information about this release. If you do copy and paste anything here, keep in mind that others might do the same, opening the door for some awkwardness around duplicated content out on the web. 

*   If there are drastic changes, this post will be updated and a changelog will be added.
*   Each item has been tagged using best guesses with different high level labels so that you can more readily see at a glance who is likely to be most impacted.
*   Each item has a high level description, visuals (if relevant), adoption strategy (if relevant), and key resources if you want to learn more.

**Changelog**

**July 17th:** initial public launch.

WordPress 6.3 is set to launch on August 8th, 2023 bringing with it cohesive site editing thanks to expanded functionality, richer interfaces, and a focus on a polished experience. The culmination of this work enables you to build and launch your entire website seamlessly within the Site Editor. Create and edit pages or patterns, style every detail, manage your menus in isolation or within the context of templates, and navigate it all with the Command Palette. 

Taken together with WordPress 6.2, this marks the wrap of Gutenberg Phase 2 (Customization) and the beginnings of Phase 3, [which will focus on collaborative workflows](https://wordpress.org/about/roadmap/). As before, a new phase doesn’t mean work is done, and we will continue to make improvements to this powerful experience. 

To help set the stage visually, here are a few graphics to keep in mind to better explain some of the updated interfaces:

<figure class="wp-block-image size-large"><a href="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image.png?ssl=1"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1600" height="1115" data-attachment-id="15585" data-permalink="https://nomad.blog/2023/07/17/wordpress-6-3-source-of-truth/image-5/" data-orig-file="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image.png?fit=1600%2C1115&amp;ssl=1" data-orig-size="1600,1115" data-comments-opened="1" data-image-title="image" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image.png?fit=1024%2C714&amp;ssl=1" src="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image.png?resize=1600%2C1115&amp;ssl=1" alt="Annotated visual showing a separation between document title and command palette in the WordPress editor." class="wp-image-15585"></a></figure>

<figure class="wp-block-image size-large"><a href="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image-1.png?ssl=1"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1600" height="577" data-attachment-id="15587" data-permalink="https://nomad.blog/2023/07/17/wordpress-6-3-source-of-truth/image-1-2/" data-orig-file="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image-1.png?fit=1600%2C577&amp;ssl=1" data-orig-size="1600,577" data-comments-opened="1" data-image-title="image-1" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image-1.png?fit=1024%2C369&amp;ssl=1" src="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image-1.png?resize=1600%2C577&amp;ssl=1" alt="Annotated visual showing the difference between the Site and Detail Views in the Site Editor. " class="wp-image-15587"></a></figure>

<figure class="wp-block-image size-large"><a href="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image-2.png?ssl=1"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1600" height="577" data-attachment-id="15588" data-permalink="https://nomad.blog/2023/07/17/wordpress-6-3-source-of-truth/image-2-2/" data-orig-file="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image-2.png?fit=1600%2C577&amp;ssl=1" data-orig-size="1600,577" data-comments-opened="1" data-image-title="image-2" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image-2.png?fit=1024%2C369&amp;ssl=1" src="https://i0.wp.com/nomad.blog/wp-content/uploads/2023/07/image-2.png?resize=1600%2C577&amp;ssl=1" alt="Annotated visual showing the difference between the Site and Edit View in the Site Editor." class="wp-image-15588"></a></figure>

### Important links:

*   [Roadmap to 6.3](https://make.wordpress.org/core/2023/05/18/roadmap-to-6-3/).
*   [Phase 2, Finale](https://make.wordpress.org/core/2023/02/04/phase-2-finale/).
*   [WordPress 6.3 Planning Roundup](https://make.wordpress.org/core/2023/05/18/wordpress-6-3-planning-roundup/).
*   [An early look at Dev Notes for 6.3](https://github.com/WordPress/gutenberg/issues/51484) with current dev notes found [with this tag](https://make.wordpress.org/core/tag/dev-notes6-3/).
*   [WordPress 6.3 Field Guide](https://make.wordpress.org/core/2023/07/18/wordpress-6-3-field-guide/).
*   For developer specific content, check out the various editions of “What’s New for Developers”: [April](https://developer.wordpress.org/news/2023/04/whats-new-for-developers-april-2023/), [May](https://developer.wordpress.org/news/2023/05/whats-new-for-developers-may-2023/), [June](https://developer.wordpress.org/news/2023/06/whats-new-for-developers-june-2023/), [July](https://developer.wordpress.org/news/2023/07/whats-new-for-developers-july-2023/).

### 6.3 assets:

To view all assets in this document, [please review this drive folder](https://drive.google.com/drive/u/1/folders/1soNOgWWnfsxzqPSvU7kNx2w23Is44FmB).
