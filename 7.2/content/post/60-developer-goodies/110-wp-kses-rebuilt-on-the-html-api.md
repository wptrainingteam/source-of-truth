---
title: wp_kses() rebuilt on the HTML API
tags: []
flags: [check]
---

`wp_kses()` has a new implementation built on the HTML API instead of regular expressions. In 7.2 it's opt-in: the old parser stays the default, and returning `false` from the `wp_kses_force_legacy_parser` filter switches a site to the new one. With the new parser, output is normalized, `<script>` and `<style>` contents are stripped, and some malformed SVG, MathML, and comments are rejected. If your plugin depends on `wp_kses()` output, test it with the new parser now.

Read more: [Progress Report: wp_kses()](https://make.wordpress.org/core/2026/10/07/progress-report-wp_kses/) ([#66208](https://core.trac.wordpress.org/ticket/66208))

<!-- 🔍 Committed Oct 7 (7119e1b) with the legacy parser as the default. The docblock says opt-out; if the default flips before RC 1, swap the second sentence. -->
