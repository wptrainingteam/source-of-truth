---
title: "New APIs: getServer State & getServerContext"
slug: new-apis-getserver-state-getservercontext
tags: []
---

Alongside this, two new APIs are available with `getServerState` and `getServerContext`, available from the `@wordpress/interactivity` package. These functions are required for subscribing to changes in state/context when the HTML is updated using `navigate()`. These functions return an object that is analogous to the state/context returned by `store()`/`getContext()`, with a couple of differences:

*   The object returned is read-only.
*   The object is updated after `navigate()` calls, using the values defined in the HTML.
*   Devs cannot directly use its properties in directives, but they can use callbacks to subscribe to changes in its properties and update the usual state/context.

**Adoption approach:** Opt in. For awareness, some new documentation is available for using the Interactivity API:

*   [The Reactive and Declarative mindset](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/)
*   [Understanding global state, local context and derived state](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state/)
*   [Server-side rendering: Processing directives on the server](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/server-side-rendering/)

**Key Make Posts/GitHub/Trac Issue(s):**_Follow_ [_this iteration issue_](https://github.com/WordPress/gutenberg/issues/63232) _for more information._

Developer Note: [Subscribe to changes in the Interactivity API state and context on client-side navigation in 6.7](https://make.wordpress.org/core/2024/10/15/subscribe-to-changes-in-the-interactivity-api-state-and-context-on-client-side-navigation-in-6-7/)
