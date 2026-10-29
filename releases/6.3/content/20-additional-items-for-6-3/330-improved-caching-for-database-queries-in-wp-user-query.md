---
title: "Improved Caching for Database Queries in WP\\_User\\_Query"
slug: improved-caching-for-database-queries-in-wp-user-query
tags: [plugin author]
---

This was pulled and summarized from a [draft dev note](https://docs.google.com/document/d/167MFCnGHllI8EhT2asQCuBAznHn5X9Xt0-E1eR5w0mw/edit) of these changes.

“In WordPress 6.3, significant enhancements have been made to the WP\_User\_Query class, specifically regarding caching of database queries. The implementation of query caching in WP\_User\_Query aligns with that of other query classes. Once a query is executed, the resulting database queries are cached, and subsequent queries with the same parameters will retrieve the data from the cache. This caching behavior, when combined with persistent object caching, ensures that the database query won’t be executed again until the caches are invalidated, leading to a substantial reduction in overall database queries.It’s important to note that starting from this version onward, all calls to WP\_User\_Query will be automatically cached by default. However, if you wish to disable query caching for specific queries, you can simply set the cache\_results parameter to false, as demonstrated in the following example:

```
$args = array(

   'number' => 50,

   'cache_results' => false

);

$query = new WP_User_Query( $args );

Alternatively, you can globally disable caching by using a filter, as shown below:

function disable_caching( $wp_user_query ) {

   $wp_user_query->query_vars['cache_results'] = false;

}

add_action( 'pre_get_users', 'disable_caching' );
```

It’s worth noting that caching will be disabled for user queries that utilize the field parameter and request more than 3 fields. This decision is made to prevent cache values from becoming excessively large and to avoid filling up caches with data unlikely to be reused.”

**Key Make Posts/GitHub/Trac Issue(s):** 

*   [Dev note draft](https://docs.google.com/document/d/167MFCnGHllI8EhT2asQCuBAznHn5X9Xt0-E1eR5w0mw/edit)
*   Add query cache to WP\_User\_Query class ([40613](https://core.trac.wordpress.org/ticket/40613))
