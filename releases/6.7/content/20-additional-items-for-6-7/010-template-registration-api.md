---
title: Template Registration API
slug: template-registration-api
tags: [plugin author, theme author, developer]
---

A new API streamlines the process of registering templates and template parts for plugins, making it easier for developers to integrate custom templates. Previously, plugins had to rely on multiple filters to accomplish this, which created a barrier to entry and limited adoption. With this new API, developers now have a much simpler path to building block templates and aligning with the expectations of WordPress users.

One key feature of the new API is that plugin-registered templates can be overridden by themes, with fallback options that automatically revert to the plugin’s registered title and description when necessary. The API also empowers theme builders by offering customization options for these templates. Additionally, developers can unregister existing templates or create custom category templates to suit their needs.

**Visuals:** [image](https://drive.google.com/file/d/1jXL79RTt3v7UN9UW_dQ5GT9myUU-juCE/view?usp=drive_link) of code showing how to register a template. 
**Adoption approach:** Opt in. The tutorial, [Registering block templates via plugins in WordPress 6.7](https://developer.wordpress.org/news/2024/08/29/registering-block-templates-via-plugins-in-wordpress-6-7/), walks you through an example of how to use the new API to provide single, archive, and custom templates for a Book custom post type. Here’s an example for now:

```
register_block_template( 'devblog-plugin-templates//example', [

'title'       => __( 'Example', 'devblog-plugin-templates' ),

'description' => __( 'An example block template from a plugin.', 'devblog-plugin-templates' ),

'content'     => '

<main class="wp-block-group">

<div class="wp-block-group">

<p>This is a plugin-registered template.</p>

</div>

</main>

'

] );
```

**Key Make Posts/GitHub/Trac Issue(s):** [Registering block templates via plugins in WordPress 6.7](https://developer.wordpress.org/news/2024/08/29/registering-block-templates-via-plugins-in-wordpress-6-7/) developer blog post tutorial, Add plugin template registration API ([61577](https://github.com/WordPress/gutenberg/pull/61577)).

Developer Note: [New Plugin Template Registration API in WordPress 6.7](https://make.wordpress.org/core/2024/10/20/new-plugin-template-registration-api-in-wordpress-6-7/)
