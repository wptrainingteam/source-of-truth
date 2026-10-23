---
title: Description List block
tags: [end user, site admin]
flags: [check]
published: false
---

The new Description List block is for content built from terms and their descriptions, such as glossaries, specifications, event details, or FAQs. It outputs proper `<dl>`, `<dt>`, and `<dd>` markup, so browsers and assistive technologies understand how each term relates to its description. Inside the block, you add Term and Detail blocks in whatever order you need. Press <kbd>Tab</kbd> to turn a term into a detail, or <kbd>Shift</kbd>+<kbd>Tab</kbd> to turn it back ([#81728](https://github.com/WordPress/gutenberg/pull/81728)).

Tracking: [Block for description list](https://github.com/WordPress/gutenberg/issues/4880) (#4880)

<!-- Hidden Oct 23: #81728 is still open after Beta 1 and the block isn't blessed. Bring it back through a proposal if it lands as a blessed feature. 🔍 At risk: #81728 was not merged as of Oct 16, and review questions (dt/dd content model, side-by-side layout, Enter behavior, block naming) were still open. Remove if it misses Beta 1 and isn't blessed. 🎨 Screenshot once merged. -->
