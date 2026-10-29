---
title: Taxonomy terms updated across REST API
slug: taxonomy-terms-updated-across-rest-api
tags: [plugin author, developer]
---

In WordPress 6.5, taxonomy terms are updated across the REST API. If a plugin or feature makes a REST API call to retrieve a list of templates, the [payload now delivers](https://core.trac.wordpress.org/changeset/57366) the `original source` and `author_text` fields.

**Key Make Posts/GitHub/Trac Issue(s):** REST API: Support assigning terms when creating attachments ([57380](https://core.trac.wordpress.org/changeset/57380))
