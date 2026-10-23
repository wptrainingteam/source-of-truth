---
title: wp_kses() rebuilt on the HTML API
tags: []
flags: [check]
---

`wp_kses()` is being rebuilt on the HTML API instead of regular expressions. Output is normalized, `<script>` and `<style>` contents are stripped, and some malformed SVG, MathML, and comments are rejected. The `wp_kses_force_legacy_parser` filter restores the old behavior if you need it.

Read more: [Progress Report: wp_kses()](https://make.wordpress.org/core/2026/10/07/progress-report-wp_kses/) ([#66208](https://core.trac.wordpress.org/ticket/66208))

<!-- 🔍 Committed Oct 7 (7119e1b), but in trunk `wp_kses_force_legacy_parser` defaults to true, so the legacy parser is still the default and the HTML API version is opt-in (the docblock says opt-out). Rewrite proposed in a PR; watch for the default flipping before RC. -->
