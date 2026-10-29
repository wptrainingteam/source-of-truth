---
title: Raising the minimum version of MySQL
slug: raising-the-minimum-version-of-mysql
tags: []
---

In WordPress 6.5, [the minimum required version of MySQL](https://make.wordpress.org/core/2023/12/08/raising-the-minimum-version-of-mysql-required-in-wordpress-6-5/) has been raised from 5.0 to 5.5.5. (as of [57173](https://core.trac.wordpress.org/changeset/57173)). Using 5.5.5 also ensures two things:

*   The presence of utf8mb4 support (added in MySQL 5.5.3)
*   InnoDB is the default storage engine instead of MyISAM (added in 5.5.5).

While the minimum required version is changing in WordPress 6.5, WordPress continues to recommend using [MySQL](https://www.mysql.com/) version 5.7 or greater OR [MariaDB](https://mariadb.org/) version 10.4 or greater.

**Key Make Posts/GitHub/Trac Issue(s):** [Raising the minimum version of MySQL required in WordPress 6.5](https://make.wordpress.org/core/2023/12/08/raising-the-minimum-version-of-mysql-required-in-wordpress-6-5/) Make Core post.
