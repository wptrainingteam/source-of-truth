---
title: Developer specific updates
slug: developer-specific-updates
tags: []
---

**Update to experimental API process [plugin author] [theme author]**

While more of an FYI than a release specific item, a new experimental API package has been introduced to better communicate to external consumers of various APIs what can be relied upon and how best to use them. For context, experimental and unstable APIs are temporary values exported from a module whose existence is either pending future revision or provides an immediate means to an end.

There is no support commitment for experimental and unstable APIs. They can and will be removed or changed without advance warning, including as part of a minor or patch release. As an external consumer, you should avoid these APIs.

**Key Make Posts/GitHub/Trac Issue(s):** developer documentation [can be found here](https://github.com/WordPress/gutenberg/blob/trunk/docs/contributors/code/coding-guidelines.md#experimental-and-unstable-apis) with the [original discussion about this new experimental package here](https://github.com/WordPress/gutenberg/pull/43386).  

**Introducing a WP\_HTML\_Tag\_Processor [plugin author] [theme author]** 

WordPress 6.2 ships with WP\_HTML\_Tag\_Processor – a tool to adjust HTML tag attributes in the block markup:

```
$p = new WP_HTML_Tag_Processor( '<a href="https://nomad.blog/2023/03/01/wordpress-6-2-source-of-truth/#"></a>' );

$p->next_tag( 'a' );

$p->remove_attribute( 'href' );

echo $p->get_updated_html();

// <a></a>
```

Before WordPress 6.2, the block markup was typically updated using regular expressions or the DOMDocument class. Both have downsides. The former is tedious and prone to security issues, while the latter uses libxml2, which [does not support HTML5](https://gitlab.gnome.org/GNOME/libxml2/-/issues/211).

The Tag Processor attempts to be an HTML5-spec-compliant parser that provides the ability in PHP to find specific HTML tags and then add, remove, or update attributes on that tag. It provides a safe and reliable way to modify the attribute on HTML tags. 

**Key Make Posts/GitHub/Trac Issue(s):** introduce HTML processor ([57575](https://core.trac.wordpress.org/ticket/57575)) and [an early look at the dev note for this feature.](https://github.com/WordPress/gutenberg/issues/44410#issuecomment-1420787816) 

**Control the search columns for WP\_Query [plugin author]**

\`WP\_Query\` now supports a [new \`search\_columns\` argument](https://core.trac.wordpress.org/ticket/43867), which allows developers to control which database columns are included when performing a search query via the \`s\` argument. By default, the \`post\_title\`, \`post\_content\`, and \`post\_excerpt\` columns are included. The new argument allows developers to fine-tune the search without filtering and manually adjusting the SQL query directly.

The change also introduced the \`posts\_search\_columns\` filter hook, which provides an array of columns to search.

**Key Make Posts/GitHub/Trac Issue(s):**  Introduce the ability to control which fields are searched in a search query ([43867](https://core.trac.wordpress.org/ticket/43867))

**All custom attachment filenames for wp\_mail() [plugin author]**

Nine years after the ticket was first opened, the \`wp\_mail()\` function allows developers to customize the email attachment filenames. The changeset adds support for passing an associative array named \`$attachments\` where string keys are used as the filenames. Previous to this change, attachment filenames in outgoing emails could only ever be derived from their paths (passed in as a numerically indexed array of \`$attachments\`.

**Key Make Posts/GitHub/Trac Issue(s):** Allow custom attachment filenames for wp\_mail ([55030](https://core.trac.wordpress.org/changeset/55030))

**Check if a theme has a theme.json [plugin author]** 

As part of broader performance work, a new [\`wp\_theme\_has\_theme\_json()\` function](https://core.trac.wordpress.org/ticket/56975) is being introduced, making it available to extenders for public consumption. It is a conditional for checking whether the currently active theme or its parent has a \`theme.json\` file.

**Key Make Posts/GitHub/Trac Issue(s):** Replace the internal \`WP\_Theme\_JSON\_Resolver::theme\_has\_support()\` with a public function ([56975](https://core.trac.wordpress.org/ticket/56975))
