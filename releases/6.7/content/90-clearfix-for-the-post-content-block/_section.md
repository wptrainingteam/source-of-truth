---
title: Clearfix for the Post Content block
slug: clearfix-for-the-post-content-block
tags: [theme author, end user]
---

“[A “clearfix” solution](https://github.com/WordPress/gutenberg/pull/63690) is now applied to the Post Content block. This is an old-school technique that ensures blocks after Post Content sit below the content itself, especially in cases where there is a right or left-aligned block at the end of the post. As this was an issue for quite a while, it’s expected that theme developers found other ways to solve this particular problem. Now that it’s solved for the core block, you might need to double-check your existing sites to make sure this doesn’t break any previous layouts. Content creators might have helped themselves by adding a spacer block after the aligned block in questions.” – From [What’s new for developers? (September 2024)](https://developer.wordpress.org/news/2024/09/10/whats-new-for-developers-september-2024/)

**Adoption approach:** please double-check to ensure existing layouts continue to work. 
**Key Make Posts/GitHub/Trac Issue(s):** Post content: Add clearfix ([63690](https://github.com/WordPress/gutenberg/pull/63690))
