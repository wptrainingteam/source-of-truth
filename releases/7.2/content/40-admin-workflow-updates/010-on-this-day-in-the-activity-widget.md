---
title: On This Day in the Activity widget
slug: on-this-day-in-the-activity-widget
tags: [end user, site admin]
flags: [check, visuals]
---

The Dashboard’s **Activity** widget gains a **Published On This Day** section that lists posts you published on today’s date in previous years. It only appears on days when there’s something to show. To make room, **Recent Comments** moves out of the Activity widget into its own dashboard widget, which you can rearrange or hide like any other ([r64593](https://core.trac.wordpress.org/changeset/64593)).

The section shows up to 10 posts. Developers can change the query with the `wp_dashboard_on_this_day_query_args` filter.

Tracking: [Feature request: On This Day dashboard widget](https://core.trac.wordpress.org/ticket/65116) (#65116)
