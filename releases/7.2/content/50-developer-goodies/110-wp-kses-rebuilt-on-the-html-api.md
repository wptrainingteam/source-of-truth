---
title: "wp_kses() rebuilt on the HTML API"
slug: wp-kses-rebuilt-on-the-html-api
tags: []
flags: [check]
---

`wp_kses()` has been rebuilt on the HTML API instead of regular expressions ([r64233](https://core.trac.wordpress.org/changeset/64233)). In 7.2 the new parser is opt-in: the `wp_kses_force_legacy_parser` filter defaults to `true`, so sites keep the old behavior unless they return `false` to try the new one. With the new parser, output is normalized, `<script>` and `<style>` contents are stripped, and some malformed SVG, MathML, and comments are rejected. Plugins that filter post content should test with it turned on.

Read more: [Progress Report: wp_kses()](https://make.wordpress.org/core/2026/10/07/progress-report-wp_kses/) ([#66208](https://core.trac.wordpress.org/ticket/66208))
