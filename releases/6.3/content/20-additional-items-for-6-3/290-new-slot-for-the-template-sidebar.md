---
title: New slot for the Template sidebar
slug: new-slot-for-the-template-sidebar
tags: [plugin author]
---

A new [PluginTemplateSettingsPanel slot](https://github.com/WordPress/gutenberg/pull/50257) lets you add custom controls to the Template sidebar in the editor. This can be helpful if you want to do things like add some instructional text to a template, like a link to a support doc. 

**Adoption approach:** Below is a very simple code example that adds “Hello, World”:

```
import { MyTemplateSettingTest } from '@wordpress/edit-site';

const MyTemplateSettingTest = () => (

<PluginTemplateSettingPanel>

<p>Hello, World!</p>

</PluginTemplateSettingPanel>

);
```

[Here’s a more complex example](https://github.com/woocommerce/woocommerce-blocks/pull/9386) from WooCommerce that adds a way to convert back to a classic template.

**Key Make Posts/GitHub/Trac Issue(s):** Introduce new PluginTemplateSettingPanel slot ([50257](https://github.com/WordPress/gutenberg/pull/50257))
