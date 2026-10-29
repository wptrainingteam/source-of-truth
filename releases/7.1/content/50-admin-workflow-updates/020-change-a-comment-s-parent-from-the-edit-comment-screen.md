---
title: "Change a comment’s parent from the Edit Comment screen"
slug: change-a-comment-s-parent-from-the-edit-comment-screen
tags: [end user, site admin, enterprise]
---

Ever needed to fix a comment that landed in the wrong thread? The Edit Comment screen now has an “In reply to” control in the Save box — hit Edit and you get a dropdown of the post’s other comments, listed by the author with a short excerpt. Top-level comments just show “None.”

You can’t create broken threads with it: the dropdown hides the comment itself and anything nested under it, and the server double-checks on save — the new parent has to be on the same post and can’t be the comment or one of its own replies (anything invalid gets bounced with a WP\_Error). If the current parent wouldn’t normally show up in the list (a pingback, say), it’s kept in there as the selected option, so saving without touching the field changes nothing. Works without JavaScript too, and there are tests covering the validation. ([65570](https://core.trac.wordpress.org/ticket/65570))

<figure class="wp-block-image size-full"><img data-recalc-dims="1" loading="lazy" decoding="async" width="687" height="511" data-attachment-id="46353" data-permalink="https://gutenbergtimes.com/wordpress-7-1-source-of-truth/change-comments-parent/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Change-comments-parent.png?fit=687%2C511&amp;ssl=1" data-orig-size="687,511" data-comments-opened="1" data-image-title="Change-comments-parent" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Change-comments-parent.png?fit=687%2C511&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Change-comments-parent.png?resize=687%2C511&amp;ssl=1" alt="" class="wp-image-46353" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Change-comments-parent.png?w=687&amp;ssl=1 687w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2026/07/Change-comments-parent.png?resize=300%2C223&amp;ssl=1 300w" sizes="auto, (max-width: 687px) 100vw, 687px"></figure>
