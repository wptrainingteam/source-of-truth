---
title: Introducing Interactions powered by the Interactivity API
slug: introducing-interactions-powered-by-the-interactivity-api
tags: [plugin author, theme author, developer, enterprise]
---

The Interactivity API aims to be a standard way to allow developers to add interactivity to the frontend of their blocks, like “hearting a post” or “add to cart” without page loads. Those effects are known as “Interactions” and you can see them in WordPress today in features like “Expand on click” added to Images and the ability for Query Loop blocks to automatically move to the next set of posts/pages without reloading the page (unless you disable this option). 

A standard makes it easier for developers to create rich, interactive user experiences, from simple cases like counters or popups to more complex features like instant page navigation, instant search, or carts and checkouts. This API processes the interactivity directives embedded within HTML content and transforms the markup in the server, seamlessly merging the server-rendered markup with the client-side interactivity to guarantee that:

*   Users view the correct HTML before the JavaScript loads.
*   There are no layout shifts when the JavaScript finally loads.

After various Core blocks were supercharged thanks to this larger project, the stage is now set for the release of this work out into the public rather than through private APIs. If you’re looking to create interactive experiences on your site, this API is made for you and feedback is most welcomed to ensure it remains as useful as possible. 

If you have a previous implementation with this work, please review the [updated docs](https://github.com/WordPress/gutenberg/tree/trunk/packages/interactivity#quick-start-guide) and [migration guide](https://github.com/WordPress/gutenberg/discussions/52906#discussioncomment-7810998) to learn more.

**Adoption approach:** [Read the initial proposal](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/), follow the [“Getting Started” resources](https://github.com/WordPress/gutenberg/tree/trunk/packages/interactivity#quick-start-guide), review the [API reference](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/docs/2-api-reference.md), and join the [Interactivity API discussions](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api) for questions.

**Example of adoption:** Check out this X post with [some examples of early adoption efforts](https://twitter.com/SethRubenstein/status/1755611040002535737).

**Listen:** [Explore the WordPress Podcast episode dedicated to the API](https://wordpress.org/news/2024/02/episode-73-inside-the-interactivity-api/).

**Key Make Posts/GitHub/Trac Issue(s):** [Interactivity API](https://make.wordpress.org/core/2024/03/04/interactivity-api-dev-note/) Dev note, [Merge Announcement: Interactivity API](https://make.wordpress.org/core/2024/02/19/merge-announcement-interactivity-api/) & [Epic: Interactivity API – public 1.0 version](https://github.com/WordPress/gutenberg/issues/56803)
