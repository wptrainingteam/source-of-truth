---
title: Patterns as template starters
slug: patterns-as-template-starters
tags: [theme author, site admin]
---

After prior releases added [template types support](https://github.com/WordPress/gutenberg/pull/45814) to the Patterns API, a [new modal](https://github.com/WordPress/gutenberg/pull/46248) was added in the Site Editor for users when adding a new template. This modal allows users to build a new template from theme-registered template patterns, easing creation and offering another way for theme authors or site owners to delight users. This means theme authors can register custom patterns meant for specific template types (e.g., single post, 404, etc.), and they will appear in the start modal for users to benefit from. 

**Visuals:** [selecting a custom pattern from the template creation flow video](https://drive.google.com/file/d/14DWyhXkKR1C8fSgta5eaqCFLCvQMs9xy/view?usp=sharing).

**Adoption approach:**  [404 pattern registered for the 404 template](https://gist.github.com/annezazu/99ce2f84fa033dae48eacc50a8287bae) would then enable that pattern to appear as an option to select from. 

**Key Make Posts/GitHub/Trac Issue(s**): Add: Patterns to the template start modal ([47322](https://github.com/WordPress/gutenberg/pull/47322))
