---
title: Add Rollbacks to auto-updates
slug: add-rollbacks-to-auto-updates
tags: []
---

Since WordPress 6.3, when an administrator is manually updating plugins, the plugin will not be reactivated if the update causes a PHP fatal error. During an auto-update, this reactivation check does not occur and the next time the site runs users will see the white screen of death (WSOD). To further protect websites and increase confidence in automatic plugin updates, 6.6 includes the ability to perform rollbacks when fatal errors occur during attempted plugin auto-updates by default. A loopback request is performed to the home page of the site and the plugin is rolled back to its backed up version if a fatal error is observed. This allows you to enjoy the ease of auto-updates with the safety of rollbacks if anything goes wrong.

**Key Make Posts/GitHub/Trac Issue(s):** To learn more, [please review the merge proposal for this feature](https://make.wordpress.org/core/2024/04/19/merge-proposal-rollback-auto-update/) and the [trac commit](https://core.trac.wordpress.org/changeset/58128) that landed this feature.
