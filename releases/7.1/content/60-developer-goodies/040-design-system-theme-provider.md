---
title: Design System Theme Provider
slug: design-system-theme-provider
tags: []
---

The first version of the design system’s theme component arrives in WordPress 7.1. It consists of standardized CSS custom properties that follow the W3C Design Tokens specification. You probably won’t spot the difference right away — the default theme was deliberately built to match existing styles — but this is the machinery that will power the admin color scheme in the Site Editor. You can read more details on the future direction in the [Merge Proposal: Design System Theming](https://make.wordpress.org/core/2026/07/07/merge-proposal-design-system-theming/) 

The Dev Note has more: [Design System Theming in WordPress 7.1](https://make.wordpress.org/core/2026/07/31/design-system-theming-in-wordpress-7-1/)

#### Admin color schemes in Site Editor

The Site Editor’s sidebar and interface now respect your chosen WordPress admin color scheme instead of always showing a dark background. This brings visual consistency across the post editor, Site Editor, and admin dashboard. If you’ve personalized WordPress with a color scheme you prefer, that choice now carries through everywhere you work. [78397](https://github.com/WordPress/gutenberg/pull/78397)
