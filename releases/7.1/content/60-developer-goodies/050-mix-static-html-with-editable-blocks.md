---
title: Mix static HTML with editable blocks
slug: mix-static-html-with-editable-blocks
tags: []
---

A new innerContent block support lets a block keep static HTML fragments interleaved with editable inner blocks as the canonical source of its own markup. In practice, this means a hand-written HTML structure can have just a piece of it—a paragraph, an image—editable in place, while the rest stays fixed and can’t be moved, removed, or rearranged.

The Custom HTML block is the first adopter: pasting HTML with a block comment delimiter embedded in it (for example, a <!– wp:paragraph –> block inside a larger static <div>) makes that inner piece editable directly in the canvas, while the surrounding markup remains locked in place. It’s a narrow, developer-facing capability for now—the HTML block is the only place it’s wired up—but it opens the door for custom blocks to offer the same kind of “mostly static, partly editable” experience going forward. ([79115](https://github.com/WordPress/gutenberg/pull/79115))

The dev note can be found on the Make Core Blog: [Editable blocks inside the Custom HTML block](https://make.wordpress.org/core/2026/07/23/editable-blocks-inside-the-custom-html-block/)
