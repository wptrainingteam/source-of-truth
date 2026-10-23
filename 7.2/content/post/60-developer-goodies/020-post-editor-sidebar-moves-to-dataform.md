---
title: Post editor sidebar moves to DataForm
tags: []
flags: [check]
---

The post and page settings sidebar is now built on DataForm, the same form system used for Quick Edit ([#85081](https://github.com/WordPress/gutenberg/pull/85081)). `PluginDocumentSettingPanel`, `PluginSidebar`, `PluginPostStatusInfo`, the publish panels, and `removeEditorPanel` keep working, but `PluginPostExcerpt` hasn't been ported and may be removed. If your plugin extends the sidebar, test it now.

Read more: [Call for testing: DataForm editor inspector](https://make.wordpress.org/core/2026/09/17/call-for-testing-dataform-editor-inspector/)

<!-- 🔍 Stabilized on Oct 19 (#85081), after Gutenberg 24.2. Confirm it's in Beta 1, and check what happened to `PluginPostExcerpt` and the `editor.PostFeaturedImage` filter (#83133). -->
