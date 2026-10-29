---
title: General quality of life improvements.
slug: general-quality-of-life-improvements
tags: []
---

#### Pattern editing experience improvements

[theme builder] [site admin] [developer]

WordPress 7.0 shifted pattern editing to focus on content changes rather than exposing every tool, treating patterns more like single blocks. In 7.1, work focuses on UX refinements based on feedback, bug fixes, and general maintenance. For users inserting and customizing patterns, this means a more polished, predictable experience with fewer rough edges.

Tracking: [WordPress 7.1: Pattern Editing Iteration](https://github.com/WordPress/gutenberg/issues/75717) (#75717)

*   Pattern Editing and Block Fields: Highlight selected block ([74841](https://github.com/WordPress/gutenberg/pull/74841)_)_
*   Pattern editing: show root block identity when editing pattern sections [#79417](https://github.com/WordPress/gutenberg/pull/79417) 

####  Block Width and Layout Controls

[theme builder] [site admin] [developer]

Refines spacing and layout tools to be more intuitive. The Columns block no longer shows a confusing ‘Skip’ option in its layout picker, the Button block now uses the standard width control system, and spacing controls display in a more logical order when unlinked. These changes remove friction points that tripped up editors when building complex layouts.

*   Button: Migrate to width block support [#74242](https://github.com/WordPress/gutenberg/pull/74242) 
*   Columns: Remove redundant Skip option from layout picker [#78405](https://github.com/WordPress/gutenberg/pull/78405) 
*   Re-order spacing side controls when unlinked [#66317](https://github.com/WordPress/gutenberg/pull/66317) 

#### Link Control and Preview Enhancements

[theme builder] [site admin] [developer]

When linking to pages or posts, the link picker now shows ‘Homepage’ instead of just ‘Page’ for your site’s front page, and uses the actual entity link title for previews. These small improvements make link creation feel smarter and help editors understand exactly what they’re linking to before publishing.

*   Use entity link title for link control preview [#77155](https://github.com/WordPress/gutenberg/pull/77155) 
*   Link Picker: Use Homepage badge instead of Page if Homepage [#75929](https://github.com/WordPress/gutenberg/pull/75929) 

#### Additional CSS Validation

[theme builder] [site admin] [developer] [end user]

Additional CSS is now validated both on mount and via a new dimension validation endpoint for sideloaded styles. These checks prevent malformed or insecure CSS from breaking your site’s appearance or introducing security risks, giving you more confidence when adding custom styles.

*   Validate additional CSS on mount [#78682](https://github.com/WordPress/gutenberg/pull/78682) 
*   Add dimension validation to sideload endpoint [#74903](https://github.com/WordPress/gutenberg/pull/74903) 

#### Block Editor Attribute Handling

[theme builder] [developer]

The block editor now correctly targets the right block when copying direct insert block attributes, fixing edge cases where attributes would apply to the wrong block. This fix ensures that copy-paste and duplication workflows behave as expected.

*   Block Editor: Fix target block for copying direct insert block attributes [#77877](https://github.com/WordPress/gutenberg/pull/77877) 
*   Block Editor: Allow overriding \`disableContentOnlyForTemplateParts\` setting [#79191](https://github.com/WordPress/gutenberg/pull/79191) 

#### Image handling improved

[end user] [site admin]

A set of small fixes makes working with images more predictable. If an image points to a media library item that has since been deleted, the editor no longer treats it as a local attachment, preventing confusing errors. The crop button only appears when cropping is actually available for your user role and image type, so you’re never offered a tool that can’t work. 

And the featured image field now shows placeholder text making clear at a glance what goes there_._

*   Image block: Validate attachment ID exists before treating image as local [#77178](https://github.com/WordPress/gutenberg/pull/77178)
*   Image/Site Logo: hide crop toolbar when editMediaEntity is unavailable [#76626](https://github.com/WordPress/gutenberg/pull/76626)
*   Set placeholder to featured image field [#76342](https://github.com/WordPress/gutenberg/pull/76342)

#### Post Template Layout Improvements

[theme builder] [site admin]

Ensures the Post Template block’s fallback styles only apply when appropriate, preventing layout conflicts when custom minimum column widths are defined. This fix gives editors more predictable control over query loop layouts without unexpected style overrides.

*   Ensure Post Template fallback styles don’t apply when minimumColumnWidth is defined [#77411](https://github.com/WordPress/gutenberg/pull/77411) 

#### Post Title Block Enhancements

[site admin] [end user]

The Title block gains a placeholder attribute, letting you show helpful text when no title has been entered yet. This small addition improves the editing experience for custom post types and guides content creators to fill in required fields.

*   Post Title: Add placeholder attribute [#7601](https://github.com/WordPress/gutenberg/pull/76016) _v22.7.0_

#### Block Inserter Enhancements

[site admin] [end user]

Makes discovering and adding blocks easier with visual polish to the inserter interface. The search input now stays visible while scrolling through block options, and the inserter button animates to clearly signal when the panel is open. These small touches reduce friction when building pages and help editors stay oriented while exploring block options.

*   Block Inserter: Animate inserter button icon to signal open state. [#78306](https://github.com/WordPress/gutenberg/pull/78306) 
*   Make Block Inserter search input sticky while scrolling [#77698](https://github.com/WordPress/gutenberg/pull/77698)
