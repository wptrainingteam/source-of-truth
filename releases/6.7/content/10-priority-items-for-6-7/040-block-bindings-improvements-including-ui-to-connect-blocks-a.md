---
title: "Block Bindings improvements, including UI to connect blocks and custom fields"
slug: block-bindings-improvements-including-ui-to-connect-blocks-a
tags: [developer, plugin author, enterprise]
---

The Block Bindings API launched in 6.5 and iterated upon in 6.6 allows you to bind dynamic data to block attributes, solving many use cases for custom blocks and powering other features, like overrides in synced patterns. The work for this release centered mainly on polishing and opening the underlying APIs that were deemed stable, improving the overall UX, and adding a user interface (UI) that allows users to connect attributes with custom fields to their binding sources, making it possible to create bindings through the UI instead of the Code Editor.

#### UI to connect blocks and custom fields

_A quick note here, this is specific to post meta fields as the APIs to extend this UI weren’t considered stable yet. This means that other sources can’t use it yet._

This release comes with a new user interface (UI) that allows users to connect attributes with custom fields, making it possible to create bindings through the UI instead of the Code Editor. This UI is controlled by a new editor setting reading a [`new edit_block_binding` capability](https://github.com/WordPress/wordpress-develop/pull/7258), which is mapped to \`edit\_post\` (if editing a post) or `edit_theme_options` (if editing a template). This means that by default admin and editor users can create and modify bindings, but this can be overridden with `block_editor_settings_all` or `map_meta_cap` filters.

#### New APIs to empower extenders

*   [APIs to register sources in the client](https://github.com/WordPress/gutenberg/pull/65713): Allow extenders to show their source value and provide mechanisms to update it if wanted.
*   [Utils to update and remove bindings](https://github.com/WordPress/gutenberg/pull/64102): Open the door for plugin authors who might want to create their own UI.
*   [PHP filter to customize the output of a block bindings source](https://github.com/WordPress/wordpress-develop/pull/6839): Provide flexibility for developers that just want to modify the output of a specific source.

#### UX improvements

In terms of UX improvements, this includes everything from warnings when a block is connected to an invalid attribute to changing the placeholder text when a block is bound. Additionally, a [new “label” property](https://github.com/WordPress/wordpress-develop/pull/7298) has been added to register\_meta to be able to consume a human-readable text, which highly improves the UX, especially for non-developer users. When combined, these all seek to improve the experience of editing and interacting with bound blocks.

For this release, the possibility of extending this UI hasn’t been opened because the API wasn’t considered stable, but there are plans to do so in the future.

**Visuals:** [demo](https://drive.google.com/file/d/1V0OduoyRBnFNy2KUtjAvQiu7lUotfpfA/view?usp=drive_link) of UI to connect blocks and custom fields. 
**Adoption approach:** opt-in by using block bindings UI with the ability to override which users have access to the UI with the \`block\_editor\_settings\_all\` filter. To disable, you can use the same \`block\_editor\_settings\_all\` filter and set `$editor_settings['canUpdateBlockBindings']`as false.
**Key Make Posts/GitHub/Trac Issue(s):** To read about every change in this release, review [this iteration issue](https://github.com/WordPress/gutenberg/issues/63018)**.**

The Developer Note covers the details: [Block Bindings: Improvements to the Editor Experience in 6.7](https://make.wordpress.org/core/2024/10/21/block-bindings-improvements-to-the-editor-experience-in-6-7/)
