---
title: Connectors authentication improvements
slug: connectors-authentication-improvements
tags: []
---

The Connectors framework, which manages WordPress’s connections to external services like AI providers, now supports username and application password authentication as an alternative to API keys. A [merged pull request](https://github.com/WordPress/gutenberg/pull/79403) adds a default connector form for this method, along with the underlying authentication type, mirroring the equivalent API already available in WordPress Core.

The change also handles the practical details: saved passwords are masked in the UI and over REST, credentials can be set via constants or environment variables instead of the database, and a [companion Core patch](https://github.com/WordPress/wordpress-develop/pull/12264) keeps the two in sync. For connectors that require an account login rather than a bare API key, this removes the need for a custom settings screen.

This lands alongside a broader [open proposal for a PHP-side field registry](https://github.com/WordPress/gutenberg/issues/78647) that would let connector authors declare arbitrary settings—model choice, temperature, custom URLs, and more—the way register\_setting() works elsewhere in WordPress. That registry isn’t built yet; the application password work is a first, concrete step (new auth method, not new field types), addressing one of the two gaps the proposal identified rather than the full vision.

Tracking: [Connectors: proposal for a PHP-side field registry for connector configuration](https://github.com/WordPress/gutenberg/issues/78647) (#78647)
