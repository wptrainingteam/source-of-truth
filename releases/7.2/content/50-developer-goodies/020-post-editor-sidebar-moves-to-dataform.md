---
title: Post editor sidebar moves to DataForm
slug: post-editor-sidebar-moves-to-dataform
tags: []
flags: [check]
---

The post and page settings sidebar is now built on DataForm, the same form system used for Quick Edit ([#85081](https://github.com/WordPress/gutenberg/pull/85081)). `PluginDocumentSettingPanel`, `PluginSidebar`, `PluginPostStatusInfo`, the publish panels, and `removeEditorPanel` keep working, but `PluginPostExcerpt` hasn't been ported and may be removed. If your plugin extends the sidebar, test it now.

Read more: [Call for testing: DataForm editor inspector](https://make.wordpress.org/core/2026/09/17/call-for-testing-dataform-editor-inspector/)
