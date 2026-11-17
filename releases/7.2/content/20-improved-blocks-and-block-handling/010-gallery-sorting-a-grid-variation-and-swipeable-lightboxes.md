---
title: "Gallery: sorting, a Grid variation, and swipeable lightboxes"
slug: gallery-sorting-a-grid-variation-and-swipeable-lightboxes
tags: [end user, site admin]
flags: [check, visuals]
---

Galleries you put together by hand can now be sorted, not just dynamic ones. Pick an option from the **Order by** control, and the images reorder themselves. If you’ve arranged them yourself, the control shows **Custom**. The existing **Random** option, which shuffles images on each page load, now sits in the same dropdown, and the ordering controls for both kinds of gallery live together in the **Settings** panel ([#83438](https://github.com/WordPress/gutenberg/pull/83438)).

A new Grid variation gives you control over the gallery’s layout that the default version doesn’t offer. The default Gallery uses a fixed flex layout. The Grid variation switches to the editor’s grid layout, so you can resize individual images to span more space and build layouts like a large featured image next to smaller ones. You can switch between the two from the inspector, and your layout settings are kept if you switch back ([#81909](https://github.com/WordPress/gutenberg/pull/81909)).

On phones, swiping between images in a gallery’s lightbox is now animated, so visitors can tell they can swipe through the gallery instead of closing it to see the next image ([#79114](https://github.com/WordPress/gutenberg/pull/79114)).

Tracking: [WordPress 7.2: Dynamic galleries and media inserter](https://github.com/WordPress/gutenberg/issues/81370) (#81370)
