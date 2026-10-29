---
title: Client-side media processing improvements
slug: client-side-media-processing-improvements
tags: [developer, site admin, enterprise]
---

When you upload an image in the block editor, your browser — not your server — will now handle the creation of all sub-sized images using a WebAssembly (WASM) version of libvips (wasm-vips), a high-performance image processing library. The result stored on your server is improved over what server-side processing produced until today: smaller files generated directly on your device. Server-side image processing CPU usage could decline by more than 80% on capable devices ([79188](https://github.com/WordPress/gutenberg/pull/79188))

The update also comes with broader modern image  format support that includes HEIC (the default format for iPhone photos), JPEGS with HDR gain maps (used by UltraHDR and Adaptive HDR), AVIF and WebP support built in. A great performance improvement is the GIF-to-video conversion feature for lighter, more efficient files that are faster to load on the front-end. This feature is opt-in right now. Uploads are also more resilient, with a progress indicator and automatic retries if your data connectivity drops off ([76765](https://github.com/WordPress/gutenberg/pull/76765), [79307](https://github.com/WordPress/gutenberg/pull/79307)).

For content creators uploading media, this update means better support for HDR images,  faster, more reliable uploads, broader format support, and better-optimized files without manual intervention.

Plugin developers should note that some server-side hooks, including \`wp\_generate\_attachment\_metadata\`, \`image\_resize\_dimensions\`, and \`wp\_handle\_upload\` may not fire as before. The team is working on documentation and mitigation strategies. ([74333](https://github.com/WordPress/gutenberg/issues/74333))

More in-depth information is available in the Dev Note [Client-Side Media Processing in WordPress 7.1](https://make.wordpress.org/core/2026/07/22/client-side-media-processing-in-wordpress-7-1/)
