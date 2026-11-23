---
title: More developer changes
slug: more-developer-changes
tags: []
flags: [check]
---

* **`WP_DEBUG` on for local sites:** When `WP_DEBUG` isn't defined, it now defaults to `true` for the `local` environment type, so local sites display notices and warnings ([r64115](https://core.trac.wordpress.org/changeset/64115)). Define it in `wp-config.php` to keep the old behavior.
* **"Howdy" moves into the user menu:** The toolbar's account item shows only the display name and avatar. Code that edits the greeting in the `my-account` node should target `user-info` instead ([r64312](https://core.trac.wordpress.org/changeset/64312)).
* **Add Theme is back in the Appearance menu:** On single sites, the submenu positions after it shift by one. Find menu items by slug, not by numeric key ([r64352](https://core.trac.wordpress.org/changeset/64352)).
* **Site meta:** New `register_site_meta()` and `unregister_site_meta()` functions for multisite ([r63603](https://core.trac.wordpress.org/changeset/63603)).
* **Version-control detection:** A `.git` file, used by worktrees and submodules, now marks a site as a checkout, which turns off automatic updates ([r65259](https://core.trac.wordpress.org/changeset/65259)).
* **Script compression leftovers removed:** `COMPRESS_SCRIPTS`, `COMPRESS_CSS`, and `ENFORCE_GZIP` do nothing now, and `compression_test()` and `script_concat_settings()` are deprecated ([r64485](https://core.trac.wordpress.org/changeset/64485)).
* **New `.delete-link` CSS class** for destructive action links in the admin ([r64603](https://core.trac.wordpress.org/changeset/64603)).

Read more: [Miscellaneous Developer Changes in WordPress 7.2](https://make.wordpress.org/core/2026/11/19/miscellaneous-developer-changes-in-wordpress-7-2/)
