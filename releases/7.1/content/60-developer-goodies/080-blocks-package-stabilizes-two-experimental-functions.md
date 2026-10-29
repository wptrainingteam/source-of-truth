---
title: Blocks package stabilizes two experimental functions
slug: blocks-package-stabilizes-two-experimental-functions
tags: []
---

The [Blocks package stabilizes](https://github.com/WordPress/gutenberg/pull/79928) cloneSanitizedBlock and sanitizeBlockAttributes, dropping their \_\_experimental prefixes now that the functions have been stable in practice for some time. The old \_\_experimental-prefixed names still work but will log a deprecation notice, so plugins or themes importing them directly should switch to the new names.
