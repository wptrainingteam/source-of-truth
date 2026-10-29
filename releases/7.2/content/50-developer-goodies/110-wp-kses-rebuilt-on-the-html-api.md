---
title: "wp_kses() rebuilt on the HTML API"
slug: wp-kses-rebuilt-on-the-html-api
tags: []
flags: [check]
---

`wp_kses()` is being rebuilt on the HTML API instead of regular expressions. Output is normalized, `<script>` and `<style>` contents are stripped, and some malformed SVG, MathML, and comments are rejected. The `wp_kses_force_legacy_parser` filter restores the old behavior if you need it.

Read more: [Progress Report: wp_kses()](https://make.wordpress.org/core/2026/10/07/progress-report-wp_kses/) ([#66208](https://core.trac.wordpress.org/ticket/66208))
