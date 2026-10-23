---
title: Script and style concatenation retired
tags: []
---

The admin and the login screen no longer combine scripts and styles through `load-scripts.php` and `load-styles.php`. Each script and style now loads as its own tag, and the assets of the next admin screen are prefetched instead ([#57548](https://core.trac.wordpress.org/ticket/57548)). The `CONCATENATE_SCRIPTS` constant is no longer read, and both loaders now return 410 Gone.

If your plugin worked with concatenation, check it against these changes: `_print_scripts()`, `_print_styles()`, `script_concat_settings()`, `in_default_dir()`, and `WP_Dependencies::get_etag()` are deprecated, and the `print_head_scripts`, `print_footer_scripts`, `print_admin_styles`, and `print_late_styles` filters no longer change anything. TinyMCE also loads as two separate files instead of the `wp-tinymce.js` bundle.
