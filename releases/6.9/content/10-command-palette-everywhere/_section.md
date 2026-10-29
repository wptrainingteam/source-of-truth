---
title: Command Palette everywhere
slug: command-palette-everywhere
tags: [all]
---

A couple of years ago the Command Palette was first released for the Site Editor. It provides content creators and administrators with a quick search and command execution tool. Invoked by Ctrl+K or Cmd+K. It is now available from any admin screen and helps streamline content creation as well as administering a WordPress site. It provides shortcuts to places otherwise only available by navigating multiple menu levels deep. 

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="631" data-attachment-id="42912" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/command-palette-everywhere/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Command-Palette-everywhere.png?fit=1066%2C657&amp;ssl=1" data-orig-size="1066,657" data-comments-opened="1" data-image-title="Command-Palette-everywhere" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Command-Palette-everywhere.png?fit=1024%2C631&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Command-Palette-everywhere-1024x631.png?resize=1024%2C631&amp;ssl=1" alt="Command Palette now available from the dashboard" class="wp-image-42912" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Command-Palette-everywhere.png?resize=1024%2C631&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Command-Palette-everywhere.png?resize=300%2C185&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Command-Palette-everywhere.png?resize=768%2C473&amp;ssl=1 768w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Command-Palette-everywhere.png?w=1066&amp;ssl=1 1066w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

Technically, this change extracts navigation commands from \`@wordpress/edit-site\` to \`@wordpress/core-commands\`, making them universally accessible. This architectural shift sets the foundation for admin-wide command integration in WordPress 6.9 and beyond, potentially reducing the need for repetitive clicking through admin menus.

*   For developers the new useCommands hook was introduced. ([71603](https://github.com/WordPress/gutenberg/pull/71603))
