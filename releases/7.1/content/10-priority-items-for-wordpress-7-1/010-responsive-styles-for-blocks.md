---
title: Responsive styles for blocks
slug: responsive-styles-for-blocks
tags: [theme builders, site admin, end user]
---

Probably the most requested improvement of the block editor: after years of pushing intrinsic design for fonts and spacing, WordPress 7.1 makes responsive design a built-in, first-class part of the editing experience. The feature builds on earlier steps in this direction — the ability to show or hide blocks by screen size and the Navigation block’s customizable mobile overlay — and extends the idea to styling itself.

<figure class="wp-block-image alignright size-full is-resized"><img data-recalc-dims="1" loading="lazy" decoding="async" width="518" height="760" data-attachment-id="46364" data-permalink="https://gutenbergtimes.com/wordpress-7-1-source-of-truth/responsive-styles-in-preview-dropdown/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Responsive-Styles-in-Preview-dropdown.png?fit=518%2C760&amp;ssl=1" data-orig-size="518,760" data-comments-opened="1" data-image-title="Responsive-Styles-in-Preview-dropdown" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Responsive-Styles-in-Preview-dropdown.png?fit=518%2C760&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Responsive-Styles-in-Preview-dropdown.png?resize=518%2C760&amp;ssl=1" alt="" class="wp-image-46364" style="width:236px;height:auto" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Responsive-Styles-in-Preview-dropdown.png?w=518&amp;ssl=1 518w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Responsive-Styles-in-Preview-dropdown.png?resize=204%2C300&amp;ssl=1 204w" sizes="auto, (max-width: 518px) 100vw, 518px"></figure>

The feature is available across all block editors for Posts, Pages, Templates, Patterns,template parts and Navigation. Responsive styling follows a desktop-first model, letting styles cascade to smaller screens until you customize them for specific devices.

Viewport-specific values are currently limited to block sidebar settings (like typography, spacing, and colors). The controls work in Global Styles (affecting all instances of a block) and on individual block instances, across all block editors — Posts, Pages, Templates, Patterns, template parts, and Navigation. 

Any controls from the toolbar that can’t be set by viewport will be hidden when a viewport state is enabled. Among the most significant controls: viewport-level aspect ratio presets for Image, Featured Image, and Cover blocks, so each can be optimized per device ([#78543](https://github.com/WordPress/gutenberg/pull/78543)). Alongside this work, the Layout controls moved from the Settings tab to the Styles tab, keeping all styling decisions together. 

Community feedback from the Call for Testing made sure this feature ships with an off switch via a new `responsiveEditingEnabled` editor setting: turned off, both the **Responsive styles** option in the **View** menu and the viewport selector in **Global Styles** disappear. It gates the editing interface only. Responsive styles already saved keep rendering as before. ([#80814](https://github.com/WordPress/gutenberg/pull/80814)). See code examples are in the responsive styles dev note.

Follow the [Call for Testing: Responsive Styling](https://make.wordpress.org/test/2026/07/03/call-for-testing-responsive-styling/) to learn how to invoke the feature and what to look out for, and find the technical details in the Dev Note: Responsive block styles and configurable viewports in WordPress 7.1. 

You can find more technical details in the Dev Note: [Responsive block styles and configurable viewports in WordPress 7.1](https://make.wordpress.org/core/2026/08/05/responsive-block-styles-and-configurable-viewports-in-wordpress-7-1/).

<figure class="wp-block-jetpack-videopress jetpack-videopress-player" style=""><div class="jetpack-videopress-player__wrapper"><iframe loading="lazy" title="VideoPress Video Player" aria-label="VideoPress Video Player" width="500" height="281" src="https://videopress.com/embed/AbBtUK09?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" frameborder="0" allowfullscreen="" data-resize-to-parent="true" allow="clipboard-write; presentation"></iframe><script src="https://v0.wordpress.com/js/next/videopress-iframe.js?m=1770107250"></script></div></figure>

#### Viewport breakpoint customization

Themes can now define custom breakpoints in theme.json, so both responsive styling and per-viewport block visibility work from your design system’s breakpoints instead of WordPress’s defaults. For theme developers and designers, this provides fine-grained, device-agnostic control over responsive behavior. ([79104)](https://github.com/WordPress/gutenberg/pull/79104).

JSON"settings": {
		"viewport": {
			"mobile": "30rem",
			"tablet": "45rem"
		}
	}

```
"settings": {
		"viewport": {
			"mobile": "30rem",
			"tablet": "45rem"
		}
	}
```

Tracking: [WordPress 7.1: Block visibility configurable breakpoints and theme.json integration](https://github.com/WordPress/gutenberg/issues/75707) (#75707)

This makes interactive design accessible to non-coders and theme builders. It eliminates the need to add custom CSS snippets for common interactions. 

#### Interactive states styling (hover, focus)

You can now style interactive pseudo-states (:hover, :focus, or :active) without writing any CSS. For the Button block, this works both per-instance and site-wide in Global Styles. For navigation link blocks (Custom Link, Page Link), the state controls are available per-instance in the block inspector; in Global Styles, the state selector is [enabled per block](https://github.com/WordPress/gutenberg/pull/75627#issuecomment-4068456376), with Button as the first, so styling navigation states site-wide currently goes through `theme.json`.
An editor UI for the current-item state is also [in development](https://github.com/WordPress/gutenberg/pull/78769) as part of the [custom states iteration for 7.2](https://github.com/WordPress/gutenberg/issues/79283).

The Dev Note give you more details [Pseudo and custom style states in WordPress 7.1](https://make.wordpress.org/core/2026/08/05/pseudo-and-custom-style-states-in-wordpress-7-1/) and more code examples.

<figure class="wp-block-image size-full is-resized"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1001" height="579" data-attachment-id="46324" data-permalink="https://gutenbergtimes.com/wordpress-7-1-source-of-truth/interactive-states/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Interactive-states.png?fit=1001%2C579&amp;ssl=1" data-orig-size="1001,579" data-comments-opened="1" data-image-title="Interactive-states" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Interactive-states.png?fit=1001%2C579&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Interactive-states.png?resize=1001%2C579&amp;ssl=1" alt="" class="wp-image-46324" style="aspect-ratio:1.7288697381504805;width:569px;height:auto" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Interactive-states.png?w=1001&amp;ssl=1 1001w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Interactive-states.png?resize=300%2C174&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Interactive-states.png?resize=768%2C444&amp;ssl=1 768w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

JSON"core/navigation-link": {
  "-current": {
    "color": { "text": "#ff0000" },
    "typography": { "fontWeight": "700" },
    ":hover": {
      "color": { "text": "#0000ff" }
    },
    ":focus": {
      "color": { "text": "#00aa00" }
    },
    ":active": {
      "color": { "text": "#ff6600" }
    }
  }
}

```

"core/navigation-link": {
  "-current": {
    "color": { "text": "#ff0000" },
    "typography": { "fontWeight": "700" },
    ":hover": {
      "color": { "text": "#0000ff" }
    },
    ":focus": {
      "color": { "text": "#00aa00" }
    },
    ":active": {
      "color": { "text": "#ff6600" }
    }
  }
}
```
