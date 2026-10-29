---
title: "New Core patterns, with a Curated vs. Community category in the pattern directory"
slug: new-core-patterns-with-a-curated-vs-community-category-in-th
tags: []
---

In line with this major release, a set of new Core patterns are available automatically for all to use from the Inserter. These include new banner, text, and image based options: 

*   [Fullscreen fixed cover within another cover](https://wordpress.org/patterns/pattern/fullscreen-fixed-cover-within-another-cover/)
*   [Cover Poster on Left, Paragraph on Right](https://wordpress.org/patterns/pattern/cover-poster-on-left-paragraph-on-right/)
*   [Centered image with two-tone background color](https://wordpress.org/patterns/pattern/centered-image-with-two-tone-background-color/)
*   [Fullwidth Dark Banner with Heading Top Left](https://wordpress.org/patterns/pattern/fullwidth-dark-banner-with-heading-top-left/)
*   [Fullwidth cover with repeating gradient text](https://wordpress.org/patterns/pattern/fullwidth-cover-with-repeating-gradient-text/)
*   [Fullwidth, vertically aligned headline on right with description on left](https://wordpress.org/patterns/pattern/fullwidth-vertically-aligned-headline-on-right-with-description-on-left/)
*   [Fullwidth headline with links and gradient offset background](https://wordpress.org/patterns/pattern/fullwidth-headline-with-links-and-gradient-offset-background/)
*   [Heading, Paragraph, Button with Two Images](https://wordpress.org/patterns/pattern/heading-paragraph-button-with-two-images/)
*   [Bold sale banner with geometric background](https://wordpress.org/patterns/pattern/bold-sale-banner-with-geometric-background/)
*   [Offset bold paragraph text with varying opacity](https://wordpress.org/patterns/pattern/offset-bold-paragraph-text-with-varying-opacity/)
*   [Offset text with a brutalist design vibe](https://wordpress.org/patterns/pattern/offset-text-with-a-brutalist-design-vibe/)
*   [Fullscreen image with right content area](https://wordpress.org/patterns/pattern/fullscreen-image-with-right-content-area/)
*   [Cover Image with Bold Heading and Button, Left](https://wordpress.org/patterns/pattern/cover-image-with-bold-heading-and-button-left/)
*   [Cover Image with Bold Heading and Button](https://wordpress.org/patterns/pattern/cover-image-with-bold-heading-and-button/)
*   [Fullscreen cover image gallery](https://wordpress.org/patterns/pattern/fullscreen-cover-image-gallery/)

To make it easier to find the curated patterns provided by Core, a new filter was also added to the Pattern Directory so you can easily search for Curated (Core provided) or Community patterns. 

**Visuals:** [curated vs. community filter image](https://drive.google.com/file/d/1nVs6mGkjM3i0MPRKrdUMW751w7jw8atD/view?usp=drive_link)

**Adoption approach:** To fully remove patterns bundled with WordPress core from being accessed in the Inserter, the following can be added to your functions.php file: `remove_theme_support( 'core-block-patterns' );`

**Key Make Posts/GitHub/Trac Issue(s):** Add select for filtering the pattern directory ([580](https://github.com/WordPress/pattern-directory/issues/580))
