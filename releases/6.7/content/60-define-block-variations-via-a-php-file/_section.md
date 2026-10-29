---
title: Define block variations via a PHP file
slug: define-block-variations-via-a-php-file
tags: [developer, plugin author]
---

6.7 introduces [support for referencing a PHP file](https://github.com/WordPress/gutenberg/pull/62092) in block.json for registering block variations. To do this, you must assign the file path as a value for the variations property:

```
{

"variations": "file:./variations.php"

}
```

Previously, you could only define a variations JSON object, but this change lets you register the variations on the server-side. The PHP file must return an array of variations to register.

**Adoption approach:** opt in. 
**Key Make Posts/GitHub/Trac Issue(s):** block.json: Allow passing filename as variations field ([62092](https://github.com/WordPress/gutenberg/pull/62092))
