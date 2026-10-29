---
title: Iterating on the Interactivity API
slug: iterating-on-the-interactivity-api
tags: [plugin author, developer]
---

The Interactivity API provides a standard way to allow developers to add interactivity to the frontend of their blocks. After the release of the initial version of the Interactivity API in 6.5, this latest round of work focused on enhancing the developer experience (especially during debugging), better test coverage and code quality, and fixing reported bugs. This includes the following:

*   Compatibility with Preact developer tools.
*   [A new \`data-wp-on-async\` directive](https://github.com/WordPress/gutenberg/issues/61634), being an async alternative to \`data-wp-on\`.
*   Codebase refactor to TypeScript.
*   Debug messages for mistakes detected during server-side directive processing.

**Key Make Posts/GitHub/Trac Issue(s):** Review all PRs and changes in [this dedicated iteration issue.](https://github.com/WordPress/gutenberg/issues/60219#top)
