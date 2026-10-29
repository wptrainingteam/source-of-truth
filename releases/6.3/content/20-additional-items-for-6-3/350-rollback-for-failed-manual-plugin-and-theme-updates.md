---
title: Rollback for failed manual plugin and theme updates
slug: rollback-for-failed-manual-plugin-and-theme-updates
tags: [plugin author, site admin, theme author]
---

Summarized from this [Dev note](https://make.wordpress.org/core/2023/07/11/new-in-6-3-rollback-for-failed-manual-plugin-and-theme-updates/):

“Should the manual plugin or theme update process fail, the rollback feature will automatically restore the previously installed version to ensure the website remains available to its users. hen updating a plugin or theme, the old version of the plugin or theme is moved to a `wp-content/upgrade-temp-backup/plugins/PLUGINNAME` or `wp-content/upgrade-temp-backup/themes/THEMENAME` folder. When a rollback occurs, the user should simply see that there is an update pending and their site should still be working.”

**Key Make Posts/GitHub/Trac Issue(s):** [Dev note](https://make.wordpress.org/core/2023/07/11/new-in-6-3-rollback-for-failed-manual-plugin-and-theme-updates/)
