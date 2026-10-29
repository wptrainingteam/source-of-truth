---
title: AI in WordPress
slug: ai-in-wordpress
tags: [enterprise, developers, site admin]
---

WordPress 7.0 ships with a WP AI client API and a built-in Connectors screen — a centralized hub for managing all kinds of external service integrations, not just AI providers. Connect to OpenAI, Claude, or Gemini and WordPress automatically installs the right plugin and prompts you for your API key. Developers get a consistent framework to build on—enabling features like content generation, block building, and theme creation without reinventing the plumbing every time.

The new Connectors page also sports a shout-out to the [AI Experiments plugin](https://wordpress.org/plugins/ai/) if users want to see AI features, like title, excerpt, or alt-text generation, in action.

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1068" height="680" data-attachment-id="44916" data-permalink="https://gutenbergtimes.com/wordpress-7-0-source-of-truth/connectors-page-wordpress-7-0/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Connectors-Page-WordPress-7-0.png?fit=1068%2C680&amp;ssl=1" data-orig-size="1068,680" data-comments-opened="1" data-image-title="Connectors-Page-WordPress-7-0" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Connectors-Page-WordPress-7-0.png?fit=1024%2C652&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Connectors-Page-WordPress-7-0.png?resize=1068%2C680&amp;ssl=1" alt="" class="wp-image-44916" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Connectors-Page-WordPress-7-0.png?w=1068&amp;ssl=1 1068w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Connectors-Page-WordPress-7-0.png?resize=300%2C191&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Connectors-Page-WordPress-7-0.png?resize=766%2C488&amp;ssl=1 766w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/Connectors-Page-WordPress-7-0.png?resize=1024%2C652&amp;ssl=1 1024w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

But the real value of this Connectors API is broader: any plugin that needs to connect to an outside service via API keys or other credentials can tap into this standardized connection management system. Users get one place to maintain all their integrations. And plugin developer a standardized way to tap into the plumbing.

*   Read the dev note [**Introducing the Connectors API in WordPress 7.0**](https://make.wordpress.org/core/2026/03/18/introducing-the-connectors-api-in-wordpress-7-0/) for all the salient details.
*   The Core AI team also published a [**Call for Testing: Community AI Connector Plugins**](https://make.wordpress.org/ai/2026/03/25/call-for-testing-community-ai-connector-plugins/).
