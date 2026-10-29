---
title: Paragraph
slug: paragraph
tags: [all]
---

A new typography tool has been added for specifying the line indent of paragraph blocks ([73114](https://github.com/WordPress/gutenberg/pull/73114), [74889](https://github.com/WordPress/gutenberg/pull/74889)). Users and theme creators can specify line indentation rules for a single paragraph block and also at global styles / theme.json level for all paragraph blocks. For global styles and theme.json, it’s possible to choose whether all paragraphs or only subsequent paragraphs are indented, which accounts for different indentation standards around the world.

The dev note on **[the new `textIndent` block support](https://make.wordpress.org/core/2026/03/15/new-block-support-text-indent-textindent/)** has all the details for developers working on blocks or themes.

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="813" height="655" data-attachment-id="44985" data-permalink="https://gutenbergtimes.com/wordpress-7-0-source-of-truth/textindent-standard/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/TextIndent-standard.png?fit=813%2C655&amp;ssl=1" data-orig-size="813,655" data-comments-opened="1" data-image-title="TextIndent-standard" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/TextIndent-standard.png?fit=813%2C655&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/TextIndent-standard.png?resize=813%2C655&amp;ssl=1" alt="" class="wp-image-44985" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/TextIndent-standard.png?w=813&amp;ssl=1 813w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/TextIndent-standard.png?resize=300%2C242&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/03/TextIndent-standard.png?resize=768%2C619&amp;ssl=1 768w" sizes="auto, (max-width: 813px) 100vw, 813px"></figure>

The example code sets a default indent value of 1.5em globally for paragraphs:

JSON{
  "settings": {
    "typography": {
      "textIndent": "true"
    }
  },
  "styles": {
    "blocks": {
      "core/paragraph": {
        "typography": {
          "textIndent": "1.5em"
        }
      }
    }
  }
}

```
{
  "settings": {
    "typography": {
      "textIndent": "true"
    }
  },
  "styles": {
    "blocks": {
      "core/paragraph": {
        "typography": {
          "textIndent": "1.5em"
        }
      }
    }
  }
}
```

More details can be learned in the Dev Note: [New Block Support: Text Indent (textIndent)](https://make.wordpress.org/core/?p=121744&preview=1&_ppp=b05f93cb55) 

#### Columns in Paragraph blocks [all]

Now that there is block support for typographical columns, the paragraph block can now handle text columns by default ([74656](https://github.com/WordPress/gutenberg/pull/74656)).

On the front-end only, the Paragraph block now has a `.wp-block-paragraph` class. This change doesn’t affect global styles, which still use the `p` selector.([71207](https://github.com/WordPress/gutenberg/pull/71207))

<figure class="wp-block-jetpack-videopress jetpack-videopress-player" style=""><div class="jetpack-videopress-player__wrapper"><iframe loading="lazy" title="VideoPress Video Player" aria-label="VideoPress Video Player" width="500" height="312" src="https://videopress.com/embed/g2nWsrEr?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" frameborder="0" allowfullscreen="" data-resize-to-parent="true" allow="clipboard-write; presentation"></iframe><script src="https://v0.wordpress.com/js/next/videopress-iframe.js?m=1770107250"></script></div></figure>
