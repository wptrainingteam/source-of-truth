---
title: Import widgets to block themes
slug: import-widgets-to-block-themes
tags: [site admin, end user]
---

Prior to 6.2, when switching to a block theme, content in widgets were lost, requiring a site owner to copy/paste anything they wanted to keep over. To ease gradual adoption of block themes and prevent content loss, a pathway has been built that offers the option to import widgets from a classic theme, closing a big gap in experience. Here are the steps to do so:

1.  Open the Appearance > Editor after switching from a classic theme to a block theme. 
2.  Choose a template you’d like to import widgets into.
3.  Add a template part to that template.
4.  Open the sidebar settings, choose which widget area you’d like to import, and select “Import”. 

There are a few known issues at this time to be aware of:

*   [Offer a way to select multiple widget areas for import](https://github.com/WordPress/gutenberg/issues/47345#top)
*   [Improve importing widgets from classic to block theme UX](https://github.com/WordPress/gutenberg/issues/47291#top)
*   [Widget Importer: ensure it works with importing menus](https://github.com/WordPress/gutenberg/issues/47285#top)

For more context, this process seeks to transform widgets into blocks. If this fails, whether due to the fact that there isn’t a block counterpart or something else, they are skipped in the import process and a notice is displayed. You can see further [discussion and details on this topic here](https://github.com/WordPress/gutenberg/pull/45509#issuecomment-1326916212). 

**Visuals:** [importing widgets video](https://drive.google.com/file/d/1smtgP1wUf5-EOH81pQEU8CxPHEtkxbBv/view?usp=share_link).

**Key Make Posts/GitHub/Trac Issue(s):** Pathway to import widgets when switching to a block theme from a classic theme ([39270](https://github.com/WordPress/gutenberg/issues/39270))
