---
title: Improvements to the Caching API
slug: improvements-to-the-caching-api
tags: [plugin author]
---

This was pulled and summarized from a [draft dev note](https://docs.google.com/document/d/1nBCiXyeGczuU4WhPUx30ITL7jxL3nj2CIGudQ1M6470/edit) of these changes.

_Change cache groups for all query caches_

“In previous versions, the query results were stored in the same cache group as the corresponding object. For instance, post query data would be stored in the posts group. However, starting from WordPress 6.3, this approach has been modified. The update introduces new cache groups with a prefix, offering developers greater control over the handling of objects within these groups. Core functionality now enables developers to specify the expiration time for a cache group, allowing them to set a duration of, for instance, one day.”

_New utility function wp\_cache\_set\_last\_changed()_

“A new utility function, \`wp\_cache\_set\_last\_changed()\`, has been introduced in the WordPress core. This function is utilized to update the last updated value in the cache. It complements the existing wp\_cache\_get\_last\_changed() function, which was added in WordPress 4.7. In the core codebase, all instances where the last changed value was updated have been replaced with calls to this new function.”

_Validation added to \`\_get\_non\_cached\_ids()\` for with invalid ids_

“The \_get\_non\_cached\_ids() function has been updated to perform validation, ensuring that only an array of unique integers are passed as input. In the previous version, no validation was conducted on the input, leading to potential validation errors and even PHP fatal errors.”

**Key Make Posts/GitHub/Trac Issue(s):** 

*   [Dev note draft](https://docs.google.com/document/d/1nBCiXyeGczuU4WhPUx30ITL7jxL3nj2CIGudQ1M6470/edit#heading=h.mlz7738cj4sw). 
*   WP\_Query cache memory leak ([57625](https://core.trac.wordpress.org/ticket/57625))
*   Warn about calling \`\_get\_non\_cached\_ids()\` with invalid ids ([57593](https://core.trac.wordpress.org/ticket/57593))
*   Avoid reaching inside the object cache object in tests ([31463](https://core.trac.wordpress.org/ticket/31463))
