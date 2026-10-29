---
title: Customize heading level curation
slug: customize-heading-level-curation
tags: [developer]
---

The `levelOptions` block attribute allows you to limit the available heading levels directly through block markup in patterns and templates. Additionally, you can customize the attribute using a filter for both PHP and JavaScript so the applications are broad. This attribute is now available for Core blocks that use heading elements, including [Post Title](https://github.com/WordPress/gutenberg/pull/64106), [Query Title](https://github.com/WordPress/gutenberg/pull/64107), [Site Tagline](https://github.com/WordPress/gutenberg/pull/64113), [Site Title](https://github.com/WordPress/gutenberg/pull/64111), and [Comments Title](https://github.com/WordPress/gutenberg/pull/64103).

**Visuals:** [image](https://drive.google.com/file/d/1NChG_4ZAkyPKtkLSyPLlhD0Vm_X4OkZl/view?usp=drive_link) of before/after heading curation.
**Adoption approach:** Opt in via block markup or filters. For examples, [please review the PR](https://github.com/WordPress/gutenberg/pull/63535) that added this option to see both markup and filter examples. 
**Key Make Posts/GitHub/Trac Issue(s):** Enable heading level curation. ([63535](https://github.com/WordPress/gutenberg/pull/63535))

Developer Note excerpt: [Heading level curation](https://make.wordpress.org/core/2024/10/20/miscellaneous-block-editor-changes-in-wordpress-6-7/#heading-level-curation)
