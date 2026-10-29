---
title: "Media Library: infinite scrolling is back on by default, with a per-user opt-out"
slug: media-library-infinite-scrolling-is-back-on-by-default-with-
tags: [end user, site admin]
---

The Media Library grid now uses infinite scrolling by default, so attachments load continuously as you scroll instead of behind a “Load more” button. For anyone who prefers the previous behavior, there’s a new personal option: a “Disable infinite scrolling in the Media Library grid view” checkbox on the profile screen. The setting only appears for users who can actually upload files, since others never see the attachment grid.

For developers, the existing media\_library\_infinite\_scrolling filter still works and now takes top precedence: a hooked filter always wins, followed by the user’s profile preference, with infinite scrolling enabled when neither is set. Note the filter’s default value has flipped from false to true as of 7.1.0, so any code relying on the old default should be reviewed. The change ships with unit tests covering the new user option and the full precedence chain ([65564](https://core.trac.wordpress.org/ticket/65564)).

Read the Dev note: [Media Library infinite scrolling is now enabled by default, with a per-user opt-out](https://make.wordpress.org/core/2026/07/23/media-library-infinite-scrolling-is-now-enabled-by-default-with-a-per-user-opt-out/).
