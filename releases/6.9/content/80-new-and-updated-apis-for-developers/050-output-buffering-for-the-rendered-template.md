---
title: Output buffering for the rendered template
slug: output-buffering-for-the-rendered-template
tags: []
---

WordPress 6.9 introduces a new way for plugin developers to handle HTML output, called the “template enhancement output buffer.” It standardizes output, meaning instead of plugins creating their own temporary storage for HTML, WordPress now provides a built-in system. If a plugin developer wants to use this feature, they just need to add a special wp\_template\_enhancement\_output\_buffer filter _before_ the template is loaded. This system is designed for making small improvements or additions to a page, not for essential parts of the website’s functionality. If a website doesn’t want to use this buffer, it can disable it by filtering wp\_should\_output\_buffer\_template\_for\_enhancement to be false. 

For older (classic) WordPress themes, this buffer is now enabled by default. This allows them to load block styles only when needed and move them to the <head> section of the HTML, which can significantly reduce the amount of CSS on a page. Even if the page has already started loading, you can still send HTTP headers (like Server-Timing) while the output is being buffered. #[64126](https://core.trac.wordpress.org/ticket/64126)). [#43258](https://core.trac.wordpress.org/ticket/43258) ([PR#8412](https://github.com/WordPress/wordpress-develop/pull/8412#issuecomment-3344496798)) More details are available in the Dev Note.
