---
title: Post list table markup changed for accessibility
slug: post-list-table-markup-changed-for-accessibility
tags: []
---

An eleven-year-old accessibility ticket is resolved: in post list tables, the row header (`th scope="row"`) moves from the checkbox column to the title column, so screen readers identify each row by the post’s name rather than by a checkbox that may not even be present. ([#32892](https://core.trac.wordpress.org/ticket/32892)).

Extenders should check their CSS and JavaScript: selectors like `th.check-column` or ones expecting the title and row actions inside a `td` need updating. The dev note [Post list tables row headers changed](https://make.wordpress.org/core/2026/08/03/post-list-tables-row-headers-changed/) lists the affected patterns, and keeping both `td` and `th` selectors preserves compatibility with older WordPress versions.

* * *

A list of [all the dev notes can be reviewed from the Make Core blog](https://make.wordpress.org/core/tag/dev-notes+7-1/)
