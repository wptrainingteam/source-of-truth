---
title: Script Modules API
slug: script-modules-api
tags: [plugin author, theme author, enterprise]
---

A new API for WordPress has been introduced, designed to work with native ES Modules and Import Maps. It introduces functions such as wp\_register\_script\_module (note the extra script word), and wp\_enqueue\_script\_module. The API aims to provide a familiar experience to the existing WP\_Scripts class, offering similar functionality. It’s not intended to duplicate the exact functionality of WP\_Scripts; rather, it is carefully tailored to address the specific needs and capabilities of script modules.

For this initial version, the current proposal is intentionally simplistic, covering only the essential features needed to work with script modules. Other enhancements and optimizations can be added later as the community identifies additional requirements and use cases so please know feedback is welcomed to help shape this feature going forward.

_Dependency Specification_

With WP\_Script\_Modules, the array of dependencies supports not only strings but also arrays that include the dependency import type (static or dynamic). This design choice allows for future extensions of dependency properties, such as adding a version property to support “scopes” within import maps.

_Module Identifier_

Instead of a handle, WP\_Script\_Modules utilizes the script module identifier, aligning with the script module identifiers used in JavaScript files and import maps.

_Deregistration_

There is no equivalent of wp\_deregister\_script at this stage, but there are plans to work on it in future versions.

_Important note_

Modules are fully functional in both Block and Classic themes.

**Adoption approach:** Please read [more in this dev note](https://make.wordpress.org/core/2024/03/04/script-modules-in-6-5/). WordPress packages are not currently available as script modules, with the exception of the @wordpress/interactivity package. Plans are in place to migrate these packages to be accessible both as scripts and script modules at the same time. Once this migration is complete, WordPress developers will have the option to use script modules for all their requirements instead of traditional scripts.

**Key Make Posts/GitHub/Trac Issue(s):**  Add the ability to handle ES Modules and Import Maps ([56313](https://core.trac.wordpress.org/ticket/56313)), [Exploration to Support Modules and Import Maps](https://make.wordpress.org/core/2023/11/21/exploration-to-support-modules-and-import-maps/). Full list of associated PRs:
