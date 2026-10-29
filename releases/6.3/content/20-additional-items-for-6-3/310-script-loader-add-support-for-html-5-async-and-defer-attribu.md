---
title: "Script Loader: Add support for HTML 5 “async” and “defer” attributes"
slug: script-loader-add-support-for-html-5-async-and-defer-attribu
tags: []
---

From trac ticket [12009](https://core.trac.wordpress.org/ticket/12009):

“This allows developers to register scripts with an intended loading strategy by changing the $in\_footer parameter of wp\_register\_script and wp\_enqueue\_script to an array that accepts both an in\_footer and strategy argument. If present, the loading strategy attribute will be added to the script tag when that script is printed to the page as long as it is not a dependency of any blocking scripts, including any inline scripts attached to the script or any of its dependents.”

**Key Make Posts/GitHub/Trac Issue(s):** Add support for HTML 5 “async” and “defer” attribute ([12009](https://core.trac.wordpress.org/ticket/12009)).
