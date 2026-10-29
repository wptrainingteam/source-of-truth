---
title: Quality of life improvements
slug: quality-of-life-improvements
tags: []
---

**Block** 

Outside of many of the big improvements to various blocks listed throughout the rest of this document, there are numerous smaller enhancements to the base block experience that continue to make blocks easier to use and more robust in their capabilities: 

*   Improved drag & drop with images by allowing you to drop an image onto an empty paragraph block to replace it with a new Image block.
*   Calendar: Set the background, link and text color ([45643](https://github.com/WordPress/gutenberg/pull/45643)).
*   Columns: Add transform to unwrap the contents ([45666](https://github.com/WordPress/gutenberg/pull/45666)).
*   Latest posts: Add color support ([41874](https://github.com/WordPress/gutenberg/pull/41874)).
*   Latest posts and latest comments: Add spacing support ([45110](https://github.com/WordPress/gutenberg/pull/45110)).
*   List/quote: Unwrap inner block when pressing Backspace at start. This results in the first inner block becoming a Paragraph that is separate from its previous parent List or Quote container ([45075](https://github.com/WordPress/gutenberg/pull/45075)).
*   List Item: typography support added ([43312](https://github.com/WordPress/gutenberg/pull/43312)). 
*   Page List: expand to see the hierarchy of pages in the List View ([45776](https://github.com/WordPress/gutenberg/pull/45776)).
*   Page List: typography support added, including setting the font size, family, and more ([43316](https://github.com/WordPress/gutenberg/pull/43316)). 
*   Page List: option to select the root page to build the Page List block from, allowing a subset of pages to be displayed ([45861](https://github.com/WordPress/gutenberg/pull/45861)).
*   Post Author: Include option to link author archive. ([42670](https://github.com/WordPress/gutenberg/pull/42670))
*   Post Author: Make the Author selector display all users instead of just 10 ([45640](https://github.com/WordPress/gutenberg/pull/45640)).
*   Post Terms: Add spacing support ([43646](https://github.com/WordPress/gutenberg/pull/43646)).
*   Video: Update placeholder style ([44215](https://github.com/WordPress/gutenberg/pull/44215)).

**Visuals:** 

*   [Calendar block color supports image](https://drive.google.com/file/d/1h1eLDXgJpCO7NofGhgZYQDP-OijZth0e/view?usp=sharing).
*   [Page List: select root page to build the page list from video](https://drive.google.com/file/d/1lf1rvcQS9z8r6S16TZh0wMKB5z0o3MlS/view?usp=sharing).

**Keyboard**

*   Transform Paragraph into Heading via Keyboard Shortcut using the new control + option + 1 – 6 keyboard shortcut, allowing you to set specific Heading levels. 
*   Added support for alt + arrow keyboard combinations to make navigating blocks of text easier ([44081](https://github.com/WordPress/gutenberg/pull/44081)).
    *   If your cursor is towards the end of a long paragraph, you can quickly press alt + up arrow to move to the beginning of that paragraph. 
    *   If you are already at the beginning of a text block, you’ll move to the start of the previous paragraph. 
    *   alt + down arrow will move you to the end of a block of text.

**Visuals:** [Transforming paragraphs to headers via keyboard shortcuts video](https://drive.google.com/file/d/1aFqjYty6TJM8ocOhrF1QPtygeCAgV8FG/view?usp=sharing)

**Other**

*   Spacing Visualizers: Block toolbar is hidden as soon as you hover over the spacing setting allowing you to focus on the content while you adjust the spacing ([45131](https://github.com/WordPress/gutenberg/pull/45131)).
*   Spacing Visualizers: Visualizers for block spacing are visible as soon as you hover over a spacing control rather than just when edited ([44955](https://github.com/WordPress/gutenberg/pull/44955)).
*   Updated lock icon to make it an outline to be less visually heavy ([45645](https://github.com/WordPress/gutenberg/pull/45645)).
*   Update the border icon ([46264](https://github.com/WordPress/gutenberg/pull/46264)).
*   Min Height: Add height control component with slider ([45875](https://github.com/WordPress/gutenberg/pull/45875)).
*   Selecting multiple blocks is now more visually consistent ([44150](https://github.com/WordPress/gutenberg/pull/44150)).
*   The sibling and line inserters feature a more natural animation effect.
*   Block inserter is hidden when the user is typing, reducing visual clutter.

**Visuals:** 

*   [Using spacing visualizers with the block toolbar hidden image](https://drive.google.com/file/d/1AvCpyKajuHJCJsNhODAH6C8Fh7Rqi8TZ/view?usp=sharinghttps://drive.google.com/file/d/1AvCpyKajuHJCJsNhODAH6C8Fh7Rqi8TZ/view?usp=sharing). 
*   [Selecting multiple blocks visual update GIF](https://drive.google.com/file/d/1tyUOoDOA_YQTGbC-SKeOcyrhNjCTRI8o/view?usp=sharing).
