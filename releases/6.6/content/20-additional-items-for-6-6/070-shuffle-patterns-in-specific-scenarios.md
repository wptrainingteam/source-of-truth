---
title: Shuffle patterns in specific scenarios
slug: shuffle-patterns-in-specific-scenarios
tags: []
---

To make it easier to swap between similar patterns, a shuffle button has been added when a pattern is inserted and has categories defined with a single top-level block such as a Group block. When shuffling, a new pattern from the same category is added in and the shuffle option remains to allow you to cycle through all available options.

**Visuals:** [demo](https://drive.google.com/file/d/1Tfq6ydmsCZ-jhGbs4pt2bBzgV5eg6sbL/view?usp=drive_link) showing how the pattern shuffle option works.
**Adoption approach:** If you are a block themer and you want to have users have this option, you can adopt this by adding multiple patterns to the same category and ensuring each pattern has a top level Group block. For an example, review [Twenty Twenty-Four’s call to action (cta) patterns.](https://github.com/WordPress/twentytwentyfour/tree/trunk/patterns)
**Key Make Posts/GitHub/Trac Issue(s**): Add Shuffle option to sections via pattern category ([59251](https://github.com/WordPress/gutenberg/pull/59251)), Pattern Shuffling: Make the results deterministic. ([60074](https://github.com/WordPress/gutenberg/pull/60074))
