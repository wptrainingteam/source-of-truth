---
title: View inherited style values
slug: view-inherited-style-values
tags: []
---

Knowing where a block’s style comes from is key to knowing where a change might need to be made to style it to your liking. For 6.6, work was started to show locally the value that a block inherits globally, when applicable. This means that, for example, if you set a paragraph to always have blue text in Styles, every paragraph you added will show blue text and the block settings will show the blue color as the chosen text color. This is in contrast to today’s experience, where it shows a circle with a line through it, to indicate that no local color has been set despite the block inheriting it globally. This change will not land for 6.6 but when it lands in a future release it will resolve long standing feedback on the experience of styling in the Site Editor and lay the groundwork for future improvements to [showing the hierarchy of styling](https://github.com/WordPress/gutenberg/issues/49278). 

**Key Make Posts/GitHub/Trac Issue(s):** Follow [this issue](https://github.com/WordPress/gutenberg/issues/37752) for more information.
