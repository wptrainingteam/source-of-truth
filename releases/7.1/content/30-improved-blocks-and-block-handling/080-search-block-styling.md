---
title: Search block Styling
slug: search-block-styling
tags: [theme builder, site admin, end user]
---

A styling gap is closed in the release for the Search block: color settings now apply to the search input field even when the search button is disabled ([77219](https://github.com/WordPress/gutenberg/pull/77219)), so your search boxes match your design system regardless of which display options you choose.

The block also embraces modern HTML: it can now render inside the native <search> landmark element, which carries search semantics for browsers and assistive technologies without the manual role=”search” attribute. Because dropping that attribute could break existing theme CSS, the feature is opt-in — per block via a new HTML element selector in the Advanced panel, or site-wide with add\_theme\_support( ‘search-element’ ) (#78485). Default output is unchanged, with a path to making the modern markup the default in a future release.([78485](https://github.com/WordPress/gutenberg/pull/78485))
