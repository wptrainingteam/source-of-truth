---
title: Notes
slug: notes
tags: [all]
---

Asynchronous collaboration comes to WordPress via the new Notes feature and rings in the 3rd Phase of Gutenberg. Site owners, Editors and Authors can collaborate by leaving comment directly on the post or page, attached to the blocks in the editor. The notes are threaded, resolveable, and can be reopened as well. Add an access notes from the Block toolbar and via the sidebar. Post authors will receive email notification when notes are added to the content.

<figure class="wp-block-image size-large"><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="730" data-attachment-id="42914" data-permalink="https://gutenbergtimes.com/wordpress-6-9-source-of-truth/notes-in-wordpress-6-9/" data-orig-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?fit=1600%2C1141&amp;ssl=1" data-orig-size="1600,1141" data-comments-opened="1" data-image-title="Notes-in-WordPress-6-9" data-image-description="" data-image-caption="" data-large-file="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?fit=1024%2C730&amp;ssl=1" src="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?resize=1024%2C730&amp;ssl=1" alt="Collaborative Notes in WordPress 6.9" class="wp-image-42914" srcset="https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?resize=1024%2C730&amp;ssl=1 1024w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?resize=300%2C214&amp;ssl=1 300w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?resize=768%2C548&amp;ssl=1 768w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?resize=1536%2C1095&amp;ssl=1 1536w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?resize=1080%2C770&amp;ssl=1 1080w, https://i0.wp.com/gutenbergtimes.com/wp-content/uploads/2025/11/Notes-in-WordPress-6-9.png?w=1600&amp;ssl=1 1600w" sizes="auto, (max-width: 1000px) 100vw, 1000px"></figure>

Notes are by default enabled for Posts and Pages. They can be enabled also for other content post types via the \`register\_post\_type\` function. 

PHPregister\_post\_type( 'book', array(
	'label' => 'Books',
	'public' => true,
	'show\_in\_rest' => true,
	'supports' => array(
		'title',
		'editor' => array( 'notes' => true ),
		'author',
	),
) );

```
register_post_type( 'book', array(
	'label' => 'Books',
	'public' => true,
	'show_in_rest' => true,
	'supports' => array(
		'title',
		'editor' => array( 'notes' => true ),
		'author',
	),
) );
```

More details on handling Notes programmatically can be found in the Dev Note: [**Notes feature in WordPress 6.9**](https://make.wordpress.org/core/2025/11/15/notes-feature-in-wordpress-6-9/).
