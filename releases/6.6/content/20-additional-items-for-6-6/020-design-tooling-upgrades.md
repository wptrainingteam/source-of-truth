---
title: Design tooling upgrades
slug: design-tooling-upgrades
tags: [theme author]
---

#### Define multiple style options for sections of blocks, including all nested blocks  [theme author] [enterprise]

6.6 introduces the ability for theme authors to define style options for sections of multiple blocks, including inner blocks, that then appear in the Inspector in the same format as a block style variation. With just a few clicks, folks using block themes that add this functionality can quickly change just a section of a page or template to predefined styles that a theme author provides, like a light or dark version of a section. Overall, block style variations can now be:

*   registered across multiple block types at the same time.
*   registered via two methods: theme.json partials or by passing a theme.json shaped object in the style’s data given to existing block style registration functions.
*   customized via the styles.variations property in theme.json or theme style variation. But there’s a strong chance this will be deprecated or changed in the future. If you use this method, expect future changes [per this discussion](https://github.com/WordPress/gutenberg/issues/62686) and [this warning](https://make.wordpress.org/core/2024/06/24/section-styles/#via-theme-style-variations-not-recommended). 

For those in the agency and enterprise space, you can use this same functionality to control branding when building a block theme. Rather than applying styles to blocks in a one off way and having to update them individually in the future, you can make variations for Group and Columns blocks that folks can use. Later on, if any updates need to happen, just update those variations, whether in theme.json or straight in Styles, and the changes will take care of themselves across the site. 

The aim is to provide more composability, less duplication, and an intuitive experience to style your site. Ultimately, this new option levels up the systematic approach to styling that the Site Editor and block themes seek to provide. This feature came together thanks to work to expand the block style variations API, providing a familiar pathway to implement for themers and to use for end users. 

**Changes to CSS Specificity**

As part of this effort, please note that some decisions had to be made around CSS Specificity ([full discussion here](https://github.com/WordPress/gutenberg/discussions/61810)) with [:root prefix being chosen as the way forward](https://github.com/WordPress/gutenberg/discussions/61810#discussioncomment-9502090). It’s recommended that you review these changes to ensure they work with your setup, especially for custom blocks and block style variations. Please review this change in [CSS specificity dev note](https://make.wordpress.org/core/2024/06/21/wordpress-6-6-css-specificity/) for more information. 

**Visuals:** [demo](https://drive.google.com/file/d/1xCDhFRAbO12V7-vl9DVpwpXoA7MP_kd0/view?usp=drive_link) of switching between different section styles then changing overall color variations, [demo](https://drive.google.com/file/d/1oOWkzit-22SCHK-MAPtcTOg-V7-9-lly/view?usp=drive_link) of applying a section style then editing the section style in Styles.
**Adoption approach:** There are a few ways folks are aiming to offer this functionality:

*   Programmatically via \`wp\_register\_block\_style()\`
*   By standalone theme.json partials within a theme’s /styles directory alongside a theme’s style variations.
*   Via theme style variations defining block style variations under styles.blocks.variations. Of note, registering within theme style variation exists but there’s a strong chance this will be deprecated or changed in the future. If you use this method, expect future changes [per this discussion](https://github.com/WordPress/gutenberg/issues/62686) and [this warning](https://make.wordpress.org/core/2024/06/24/section-styles/#via-theme-style-variations-not-recommended). 

For examples, please [dive deep with this Developer Blog tutorial](https://developer.wordpress.org/news/2024/06/21/styling-sections-nested-elements-and-more-with-block-style-variations-in-wordpress-6-6/) and read the [dedicated dev note.](https://make.wordpress.org/core/2024/06/24/section-styles/)
**Key Make Posts/GitHub/Trac Issue(s):** Follow this [iteration issue](https://github.com/WordPress/gutenberg/issues/57537#top) for more information. 

#### Use negative margins

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/qdh1hKAuXSQ?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

You can now add negative margins directly in the editor for all blocks that support margin controls. Previously, this option was only available via theme.json. By being able to set negative margins, you can create some overlapping designs with ease. Of note, the negative values need to be manually entered to balance some UX considerations and add some guardrails, meaning they can’t be selected by dragging. 

**Visuals:** manually inputting negative margins [demo](https://drive.google.com/file/d/1UpY54MRD5W3NQCPwSNYcoId3rSodEoF3/view?usp=drive_link), design forward [demo](https://drive.google.com/file/d/1E_13tZAm2RxEMt7WHGwNeVQGlTi2m4Tc/view?usp=drive_link), [public YouTube video](https://youtu.be/qdh1hKAuXSQ) with negative margins included.
**Adoption approach:** automatically available with blocks that support margin. 
**Key Make Posts/GitHub/Trac Issue(s):** allow negative values for margin ([60347](https://github.com/WordPress/gutenberg/pull/60347)), [Core Editor Improvement: Upgrade your designs](https://make.wordpress.org/core/2024/05/09/core-editor-improvement-upgrade-your-designs/)

#### Set site background images in the Site Editor

Background images have been extended to the Site Editor within Styles and theme.json so you can add your own custom background images, including animated gifs, to your site. This image is then displayed on every page of your site. An example might be a photo that stretches with the window size, or a repeating pattern background. Similar to when interacting with images in other places, the background can be set to repeat or be displayed as contain or cover backgrounds. In all, background size, background position, and background repeat options are all supported. 

Of note, WordPress already has support for [custom site-wide background images in the Customizer](https://wordpress.org/documentation/article/customizer/#background-image) and to ensure backwards compatibility the theme.json variant will not affect themes that have enabled this feature. Background images set via the customizer currently take precedence over those set in theme.json or in the Site Editor.

For theme authors, you can use both relative and absolute paths to your images depending on your use case. 

**Visuals:** [image](https://drive.google.com/file/d/12jeQA9uPVTwutzGyE_JSw0rQXHvV72b9/view?usp=drive_link) of the background image option, [demo](https://drive.google.com/file/d/18DMJyEHWAfHdOC3QhW4lbpP6rccmJRWJ/view?usp=drive_link) of setting a background image and changing options
**Adoption approach:** One can either set the background image in the Styles section or via theme.json.

Here’s an example of a theme.json file with absolute paths to image files, meaning this file has to be hosted and maintained to work:

```
{

"$schema": "../../schemas/json/theme.json",

"version": 2,

"styles": {

"color": {

"background": "tomato"

},

"background": {

"backgroundImage": {

"url": "https://i0.wp.com/wordpress.org/files/2023/12/sotw-dotorg-drawer.png?w=1807&ssl=1",

"source": "file"

},

"backgroundPosition": "center center",

"backgroundRepeat": "repeat",

"backgroundSize": "cover"

}

}

}
```

Here’s an example of a theme.json file with relative paths to image files, meaning the image is a part of the theme’s assets. Relative paths to theme assets are defined using the file:./ prefix:

```
{

"styles": {

"background": {

"backgroundImage": {

"url": "file:./assets/my-theme-background.jpg"

},

"backgroundSize": "cover"

}

}

}
```

**Key Make Posts/GitHub/Trac Issue(s):** Global styles: background UI controls ([59454](https://github.com/WordPress/gutenberg/pull/59454)) & Global styles: add background image to top-level theme.json styles ([59354](https://github.com/WordPress/gutenberg/pull/59354))

#### Add box shadow to Featured Image block

Box shadows can now be added to the Featured Image block to create unique designs. When combined with the ability to create and edit box shadows, numerous options open up to draw folks into your site. This also provides feature parity with the Image block so you can have a cohesive visual look across all images on your site. 

**Key Make Posts/GitHub/Trac Issue(s):** Add Box Shadow support for featured image ([59616](https://github.com/WordPress/gutenberg/pull/59616))

#### Use your Featured Image in the Media and Text block

The Media & Text Block supports using the featured image of a post for media, which adds more design options when using Media & Text in single post and page templates. 

**Visuals:** [demo](https://drive.google.com/file/d/1K8t_VMaSecYSRThaIiXokyMJWcJ4yCYt/view?usp=drive_link) of adding media & text block with a featured image to a single post template. 
**Key Make Posts/GitHub/Trac Issue(s):** Add featured image to Media & Text block ([51491](https://github.com/WordPress/gutenberg/pull/51491)), 

#### Add ability to create/edit shadows in Styles

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/qdh1hKAuXSQ?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span></div></figure>

Building on the four shadow presets and the ability to add more presets using theme.json, functionality has been added to Styles so you can create shadows and edit to your liking. This puts the power in your hands to create the exact shadow you’d like. 

**Visuals**: [public YouTube video](https://youtu.be/qdh1hKAuXSQ) with creating and editing shadows included.
**Key Make Posts/GitHub/Trac Issue(s):** Add ability to create / edit shadows in the Styles ([57100](https://github.com/WordPress/gutenberg/issues/57100#top))

#### Additional supports

A selection of smaller efforts come together to provide more design options directly in the editor:

*   Set a site wide background image complete with all of the expected image controls either in the root of theme.json or directly in the Styles interface under Layout  ([59354](https://github.com/WordPress/gutenberg/pull/59354)). 
*   Enable shadow for Cover block [(](https://github.com/WordPress/gutenberg/commit/97422ea30e86fbff7d5fa8ad66915cd60e886855)[61883](https://github.com/WordPress/gutenberg/pull/61883)[)](https://github.com/WordPress/gutenberg/commit/97422ea30e86fbff7d5fa8ad66915cd60e886855) alongside shadow support in the Featured Image block mentioned above.

**Visuals:** [demo](https://drive.google.com/file/d/18DMJyEHWAfHdOC3QhW4lbpP6rccmJRWJ/view?usp=drive_link) of setting a side wide background image.
