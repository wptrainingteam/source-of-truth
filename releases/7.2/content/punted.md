## Secrets API

 **Secrets API.** Committed in r64337 (Oct 13), then reverted before RC 1 in [r65538](https://core.trac.wordpress.org/changeset/65538) (Nov 17) “to allow more time for the API to mature.” Feedback questioned whether writing secrets belongs in the same API as reading host-provided secrets, and the `manage_secrets` capabilities weren’t checked when secrets were set. Tracking: [#66187](https://core.trac.wordpress.org/ticket/66187). Dev note (now outdated): [The Secrets API in WordPress 7.2](https://make.wordpress.org/core/2026/11/11/the-secrets-api-in-wordpress-7-2/).

## New Blocks

### Description List block

==[end user] [site admin]==

The new Description List block is for content built from terms and their descriptions, such as glossaries, specifications, event details, or FAQs. It outputs proper `<dl>`, `<dt>`, and `<dd>` markup, so browsers and assistive technologies understand how each term relates to its description. Inside the block, you add Term and Detail blocks in whatever order you need. Press <kbd>Tab</kbd> to turn a term into a detail, or <kbd>Shift</kbd>+<kbd>Tab</kbd> to turn it back ([#81728](https://github.com/WordPress/gutenberg/pull/81728)).

Tracking: [Block for description list](https://github.com/WordPress/gutenberg/issues/4880) (#4880)



### Table of Contents block

==[end user] [theme builder]==

After several years as an experiment, the Table of Contents block is set to become available to everyone. It now builds its list from the post's headings on the server instead of saving a static copy, so it stays up to date whenever headings change ([#80318](https://github.com/WordPress/gutenberg/pull/80318), [#80404](https://github.com/WordPress/gutenberg/pull/80404)). Turning it into a static list is now a confirmed **Detach** action ([#80844](https://github.com/WordPress/gutenberg/pull/80844)), and the block gained background, shadow, and text alignment support.

Tracking: [Stabilize the Table of Contents Block](https://github.com/WordPress/gutenberg/issues/42229) (#42229)
