---
title: Clearer error screens
tags: [all]
flags: [check]
---

When something breaks in the editor, the error screen now explains what happened in plainer language and includes a button to copy the error details, so it's easier to report the problem or share it with your developer ([#76470](https://github.com/WordPress/gutenberg/pull/76470), [#82496](https://github.com/WordPress/gutenberg/pull/82496)). Debugging details are available right in the error screen ([#81642](https://github.com/WordPress/gutenberg/pull/81642)), and the Site Editor no longer falls back to a blank screen when one part fails ([#82486](https://github.com/WordPress/gutenberg/pull/82486)).

When an autosave fails, the notice now says when the editor will try again ("Retrying in 42 seconds."), and it goes away once a later autosave succeeds ([#84656](https://github.com/WordPress/gutenberg/pull/84656), [#84649](https://github.com/WordPress/gutenberg/pull/84649)).

Background: [Defensive data design](https://make.wordpress.org/core/2026/08/04/defensive-data-design/)

<!-- 🔍 #82496 (merged Oct 16) adds a copy option and a show/hide details button for save failures; confirm what #76470 changes. 🎨 Screenshot of the new error screen. -->
