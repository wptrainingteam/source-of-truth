---
title: Plugin dependencies
slug: plugin-dependencies
tags: [plugin author, enterprise]
---

After nearly 15 years of discussion, a new “Requires Plugins” plugin header has been introduced so that plugin authors can list the slugs of the plugins theirs depend on. This will inform users of the requirements upfront, and provide links to the WordPress.org Plugins Repository that they can click to install and activate the dependencies first. Plugins whose requirements are not met cannot be installed or activated, and they will be deactivated automatically if their requirements become unmet. Plugins that others rely on cannot be deactivated or deleted until their dependent plugins are deactivated or deleted.

Previously, any plugin that requires another plugin (i.e., a dependency) was on its own to make sure admins install the dependency. With this new plugin header, there is now a core first and consistent way plugin authors can make this clear, offering a better user and developer experience all in one. 

**Key Make Posts/GitHub/Trac Issue(s):** [Merge proposal: Plugin Dependencies](https://make.wordpress.org/core/2024/02/15/merge-announcement-plugin-dependencies/), Plugin Dependencies ([22316](https://core.trac.wordpress.org/ticket/22316)) and [Feature Project: Plugin Dependencies Make Core post.](https://make.wordpress.org/core/2022/02/24/feature-project-plugin-dependencies/)
