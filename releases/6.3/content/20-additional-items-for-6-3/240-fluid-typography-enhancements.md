---
title: Fluid typography enhancements
slug: fluid-typography-enhancements
tags: [theme author]
---

_Improved minimum font size calculations_

A more refined handling of fluid typography arrives with 6.3 thanks to using a logarithmic scale factor to calculate a minimum font size for smaller screens. Essentially, the scale tapers out as the font size increases. With reliable scaling calculations, designers have more typographical freedom and can better rely on the built-in responsiveness of their designs. 

For any theme authors, you should test your theme designs to ensure that this update doesn’t negatively impact its typography. Of note, there is still some work to do on how particularly large font sizes are rendered ([see this comment for context](https://href.li/?https://github.com/WordPress/gutenberg/pull/49707#issuecomment-1516422173)), but the majority of use cases should benefit. 

_Leveraging the theme-defined “wide” size_

An enhancement to the fluid typography system now uses the layout.wideSize defined in theme.json to [set the max viewport width](https://github.com/WordPress/gutenberg/pull/49815). Essentially, this defines the point where fonts will stop growing larger. Before, it was set at 1600px, which is generally much wider than the wide size a theme will define.

**Visuals:** [demo showing large fonts scaling down](https://drive.google.com/file/d/1VytbxcLPT6QgKJubtvppg8iyHTTUs-KC/view?usp=sharing).

**Adoption approach:** must have opted into fluid typography in a block theme. 

**Key Make Posts/GitHub/Trac Issue(s):** Fluid typography: use logarithmic scale factor to calculate a min font size ([49707](https://github.com/WordPress/gutenberg/pull/49707)), Fluid typography: use layout.wideSize as max viewport width ([49815](https://github.com/WordPress/gutenberg/pull/49815)).
