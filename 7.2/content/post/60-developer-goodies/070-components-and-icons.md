---
title: Components and icons
tags: []
flags: [check]
---

`@wordpress/ui` adds a large set of components, including Menu, CheckboxControl, RadioGroupControl, SwitchControl, SearchableSelectControl, Calendar, Spinner, Meter, and Progress ([#79560](https://github.com/WordPress/gutenberg/pull/79560), [#82213](https://github.com/WordPress/gutenberg/pull/82213), [#83143](https://github.com/WordPress/gutenberg/pull/83143), [#83146](https://github.com/WordPress/gutenberg/pull/83146), [#80979](https://github.com/WordPress/gutenberg/pull/80979), [#81337](https://github.com/WordPress/gutenberg/pull/81337)).

A few utilities that used to be private are now public: `withIgnoreIMEEvents` in `@wordpress/keycodes`, for keyboard handlers that shouldn't fire while someone is typing with an input method editor ([#81343](https://github.com/WordPress/gutenberg/pull/81343)), and a new `@wordpress/kebab-case` package that matches how PHP generates slugs ([#81294](https://github.com/WordPress/gutenberg/pull/81294)).
