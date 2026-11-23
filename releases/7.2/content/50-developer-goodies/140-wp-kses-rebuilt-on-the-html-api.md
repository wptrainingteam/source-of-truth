---
title: "wp_kses() rebuilt on the HTML API"
slug: wp-kses-rebuilt-on-the-html-api
tags: []
flags: [check]
---

`wp_kses()` has been rebuilt on the HTML API instead of regular expressions, and the new parser is on by default ([r64233](https://core.trac.wordpress.org/changeset/64233)). Output is normalized, `<script>` and `<style>` contents are stripped, and some malformed SVG, MathML, and comments are rejected. If your plugin or theme relies on the old behavior, you can switch back to the legacy parser by returning `true` from the `wp_kses_force_legacy_parser` filter. Plugins that filter or sanitize post content should test against 7.2.

Read more: [Progress Report: wp_kses()](https://make.wordpress.org/core/2026/10/07/progress-report-wp_kses/) ([#66208](https://core.trac.wordpress.org/ticket/66208))
