---
title: "AI: embeddings in the PHP AI Client"
slug: ai-embeddings-in-the-php-ai-client
tags: []
flags: [check]
---

WordPress 7.2 adds embedding generation through a new `wp_ai_client_embedding()` function that follows the same pattern as AI prompts ([r64327](https://core.trac.wordpress.org/changeset/64327), [#65638](https://core.trac.wordpress.org/ticket/65638)). It’s infrastructure only: there’s no indexing or search built in. The bundled PHP AI Client is updated to version 1.5.1 ([r65001](https://core.trac.wordpress.org/changeset/65001), [#66400](https://core.trac.wordpress.org/ticket/66400)).
