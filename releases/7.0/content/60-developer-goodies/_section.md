---
title: Developer Goodies
slug: developer-goodies
tags: [developer, enterprise]
---

#### Client-side Abilities API

WordPress 7.0 ships a JavaScript counterpart to the server-side Abilities API introduced in 6.9. The [Client-Side Abilities API](https://make.wordpress.org/core/2026/03/24/client-side-abilities-api-in-wordpress-7-0/) arrives as two packages: `@wordpress/abilities` for pure state management usable in any project, and `@wordpress/core-abilities`, which auto-fetches server-registered abilities via the REST API. You can now register browser-only abilities — navigation, block insertion, and more — opening the door to browser agents, extensions, and WebMCP integrations directly in the client.

#### WP AI Client

WordPress 7.0 ships a built-in **[AI Client](https://make.wordpress.org/core/2026/03/24/introducing-the-ai-client-in-wordpress-7-0/),** that gives your plugin a single, provider-agnostic PHP entry point — `wp_ai_client_prompt()` — for text, image, speech, and video generation. You describe what you need; WordPress routes it to whichever AI provider the site owner has configured via Settings > Connectors. Official provider plugins cover Anthropic, Google, and OpenAI. No credential handling, no provider lock-in, and graceful feature detection before any UI is shown.
