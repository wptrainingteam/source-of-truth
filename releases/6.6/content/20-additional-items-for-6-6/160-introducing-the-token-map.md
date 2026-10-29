---
title: Introducing the Token Map
slug: introducing-the-token-map
tags: [developer]
---

_Summarized from the Make Core announcement post._

The Token Map, in short, is a new semantic utility meant to answer one simple question: given a string and a byte offset into that string, does the next sequence of bytes match one of a known set of tokens, and if so, what is the replacement for that token? It’s designed as a low-level utility for use in combination with other string parsing logic. There are two ways to create a Token Map: one is from an associative array whose keys are the tokens and whose values are the replacements. The other is an optimization for large token maps (referring again here to HTML with more than two thousand tokens).

In many cases, you likely won’t need to use this optimized data structure when a simpler approach will work just as well. It’s recommended that you experiment first before exploring using it. As an example of an appropriate use-case for the Token Map, you can consider using it to find and replace @-mentions in a document. If your organization has a couple thousand usernames, the Token Map can serve as an efficient way to find those. Username mentions fit this niche well: there are potentially hundreds or thousands of the lookup terms; and the terms have varying lengths without a trailing marker, making it slightly more difficult to segment with a regular expression.

**Key Make Posts/GitHub/Trac Issue(s):** Read [this Make Core post](https://make.wordpress.org/core/2024/06/24/introducing-the-token-map/) for a full recap.
