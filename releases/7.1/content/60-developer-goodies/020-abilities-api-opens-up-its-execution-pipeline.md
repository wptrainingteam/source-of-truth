---
title: Abilities API opens up its execution pipeline
slug: abilities-api-opens-up-its-execution-pipeline
tags: []
---

The Abilities API arrived in WordPress 6.9, and 7.1 gives extenders real control over it. Four new lifecycle filters let plugins step into ability execution — short-circuit it entirely (think caching, rate limiting, or maintenance mode), transform input, layer on extra authorization rules, or reshape and even recover results. Two more filters add custom input and output validation on top of JSON Schema, and a new `wp_ability_invoked` action fires on every invocation — even failed ones — handy for logging and auditing. The core info abilities return more user details, input over the REST API now arrives properly typed, and `wp_prepare_json_schema_for_client()` strips PHP callbacks and WordPress-only conventions before a schema goes out to REST clients, MCP integrations, or AI tools.

A new `public` metadata flag rounds it out: declare once that an ability is meant for external clients, and REST, MCP adapters, and future integrations use it as their default — with channel-specific flags still able to override, and permission callbacks still guarding actual execution.

Finding the right abilities gets easier too: `wp_get_abilities()` now accepts arguments to filter registered abilities by category, namespace, or meta — with the same filtering available on the REST endpoint.

Details and code examples in these dev notes:

*   [New execution lifecycle filters for the Abilities API](https://make.wordpress.org/core/2026/07/29/new-execution-lifecycle-filters-for-the-abilities-api-in-wordpress-7-1/)
*   [Abilities API improvements](https://make.wordpress.org/core/2026/07/31/abilities-api-improvements-in-wordpress-7-1/)
*   [JSON Schema preparation for client compatibility](https://make.wordpress.org/core/2026/07/31/json-schema-preparation-for-client-compatibility-in-wordpress-7-1/)
*   [A unified public exposure flag for Abilities](https://make.wordpress.org/core/2026/08/04/a-unified-public-exposure-flag-for-abilities-in-wordpress-7-1/)
*   [Filtering registered abilities with wp\_get\_abilities() in WordPress 7.1](https://make.wordpress.org/core/2026/08/05/filtering-registered-abilities-with-wp_get_abilities-in-wordpress-7-1/)
