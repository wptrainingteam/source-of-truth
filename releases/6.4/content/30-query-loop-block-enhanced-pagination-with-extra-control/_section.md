---
title: "Query loop block: enhanced pagination with extra control"
slug: query-loop-block-enhanced-pagination-with-extra-control
tags: [site admin, end user]
---

Gone are the days of needing a page refresh when switching between different pages in a Query Loop block thanks to a new option you can toggle on/off as you’d like. This enhanced pagination is powered by a private version of the Interactivity API and provides a slick browsing experience. Compatibility is considered and if blocks that won’t work with this new experience are added to the Query Loop, enhanced pagination will automatically be disabled with a warning for users to be aware. To enable, simply disable the “Force page reload” setting to prevent full page reloads and take advantage of this new feature. 

For added control, the ability to set the number of pages in the Query Page Numbers block has been added as well. 

**Visuals:** [Turning on enhanced pagination demo](https://drive.google.com/file/d/16Mrgq-una3A0RkH1neIC_UZgeQQ60m7y/view?usp=drive_link), [YouTube video explaining improved pagination feature](https://youtu.be/y7YHFncLvD4) in an earlier state. 

**Adoption approach:****Key Make Posts/GitHub/Trac Issue(s):** Query block: Client-side pagination ([53812](https://github.com/WordPress/gutenberg/pull/53812)), make mid size parameter settable for Query Pagination block. ([#51216](https://github.com/WordPress/gutenberg/pull/51216)), Query block: Start prefetching on first click to next/previous. ([54781](https://github.com/WordPress/gutenberg/pull/54781))
