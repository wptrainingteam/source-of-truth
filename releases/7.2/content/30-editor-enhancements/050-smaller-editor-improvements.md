---
title: Smaller editor improvements
slug: smaller-editor-improvements
tags: []
flags: [edit]
---

* The **Options** menu groups its view settings into **Appearance**, **Notes**, and **Panels** submenus ([#82976](https://github.com/WordPress/gutenberg/pull/82976)).
* The post author field is searchable and finds users on the server, which helps on sites with many authors ([#83323](https://github.com/WordPress/gutenberg/pull/83323)).
* New posts no longer get published with an `auto-draft` slug ([#83518](https://github.com/WordPress/gutenberg/pull/83518)).
* The starter patterns modal can filter patterns by category ([#81396](https://github.com/WordPress/gutenberg/pull/81396)).
* The Command Palette has a **View post** command ([#66720](https://github.com/WordPress/gutenberg/pull/66720)).
* In the inserter, “My patterns” is now “Site patterns,” with a filter by author ([#84680](https://github.com/WordPress/gutenberg/pull/84680)).
* Restoring a revision first saves any unsaved changes as their own revision, so nothing is lost ([#84590](https://github.com/WordPress/gutenberg/pull/84590)), and the browser backup notice shows the backup’s date before you restore it ([#84735](https://github.com/WordPress/gutenberg/pull/84735)).
* Snackbar notices with an action, like **Undo**, stay on screen longer ([#84842](https://github.com/WordPress/gutenberg/pull/84842)).
* The inserter opens faster and doesn’t re-render every item when the selection changes ([#83437](https://github.com/WordPress/gutenberg/pull/83437), [#83284](https://github.com/WordPress/gutenberg/pull/83284)).
* **Select all** in List View is much faster on long posts: on a post with 1,000 blocks, it dropped from 16.8 seconds to 0.4 seconds ([#81210](https://github.com/WordPress/gutenberg/pull/81210)).
