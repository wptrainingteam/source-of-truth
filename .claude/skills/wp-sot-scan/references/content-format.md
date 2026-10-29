# Content format and house style

## Contents

1. Sections
2. The intro
3. Items
4. Tags
5. Working markers and notes
6. House style
7. Notes files

## 1. Sections

Use the standard section order from past editions. Leave out a section if the release has
nothing for it:

1. Priority Items for WordPress X.Y
2. New Blocks
3. Improved Blocks and Block handling
4. Editor enhancements
5. Admin / Workflow updates
6. Developer Goodies

Priority Items holds the 4–6 headline features. Everything else goes in the section where a
reader would look for it.

## 2. The intro

The intro follows the published layout, in this order:

1. The welcome line ("Welcome to the Source of Truth for WordPress X.Y!"), the paragraph about
   how to use the post with the contact line, and the thank-you line naming the reviewers.
2. `## Changelog`, with the subtitle "Any changes are cataloged here as the release goes on."
   Entries go newest first. Each one is a bold date, then bullets:

   ```markdown
   **October 27, 2026**

   * Added the Secrets API to Developer Goodies.
   * Removed the Description List block (punted to 7.3).

   **October 21, 2026**: First edition.
   ```
3. `## Important note/guidelines` (the "Try not to just copy and paste" paragraph and the two
   bullets about tags and resources).
4. `## Overview`: the italic "what's shared here is being actively pursued" note, the highlight
   grid image with an italic caption once it exists, 2–4 paragraphs of narrative, and the release
   date sentence.
   - `### Resources`: Help Test, Dev Notes tag, Field Guide (from RC 1), Roadmap, Development
     Cycle page, and the What's new for developers posts.
   - The Gutenberg range sentence ("This release consists of features from the Gutenberg plugin
     versions A – B"), with pipe-separated links to each release post, then "Later Gutenberg
     releases contain bug fixes, backported to the WordPress X.Y release branch."
   - `### Assets`: the line linking the asset folder.
   - `### Tags`: the tag legend (section 4).

The site generates the byline, reading time, "Updated" date and table of contents. Don't write
them in the intro.

## 3. Items

Body anatomy, in this order:

1. **1–3 short paragraphs.** Say what changed and what the reader can do now. Put the PR or
   ticket link in parentheses right after the claim it supports: `([#12345](url))`. Several PRs
   go in one set of parentheses: `([#1](url), [#2](url))`.
2. **Visuals**, if any: an image with real alt text, and an italic caption line below it when
   the image needs context.
3. **Link lines**, each on its own line:
   - `Tracking: [Issue title](url) (#N)` for the iteration or tracking issue.
   - `Read more: [Dev note or Make post title](url)` once a dev note or proposal exists. Add a
     Trac link in parentheses if there is one.
   - `Background: [Post title](url)` for context posts that aren't dev notes.
4. **Working notes** in `<!-- -->` at the end.

A group item, such as "Global Styles and theme.json" under Developer Goodies, uses `####`
subheadings inside one file. Each H4 gets its own entry in the table of contents. A "General
quality of life improvements" item is a bullet list that starts each bullet with the bold block
name: `* **Columns:** …`.

## 4. Tags

Use exactly these seven, singular and lowercase, because the page's filter buttons and readers'
browser searches both match on the exact string:

`end user` · `theme builder` · `plugin author` · `developer` · `site admin` · `enterprise` · `all`

Put the most affected audience first. The page's audience buttons are strict: with **developer** on, readers see only items tagged `developer` (or whose section is tagged `developer`), and the intro is hidden. So tag every audience an item really affects. `all` is a button of its own, not a wildcard. In
the Doc, tags are a `==[end user] [site admin]==` line under the heading, and the importer reads
that line as the item's tags.

## 5. Working markers and notes

| Emoji | Flag word | Meaning |
|---|---|---|
| ✏️ | `edit` | Copy needs editing |
| 🙏 | `blessed` | Blessed feature, developed during the Beta cycle |
| 🔍 | `check` | To-do or double-check |
| 🎨 | `visuals` | Visuals being made |
| 🏈 | `punted` | Confirmed punted to the next release |

Markers go in the heading, or inline inside a `<!-- -->` note. The importer strips both, and the
site build fails if a marker or comment still reaches a page, so a missed marker never reaches
readers. Clear a flag once nothing in the item's working notes still needs it.

A working note says what to check and what to do with the answer: "🔍 Merged Oct 18, after
Gutenberg 24.2; confirm it's in Beta 1. Remove the sentence if not." Notes that say only "check
this" can't be resolved by anyone but the author.

## 6. House style

Match the published 7.1 post:

- Write for the reader who uses the feature. Say what they can now do ("You can now set a block's
  position per viewport"), not what the PR did ("Adds viewport support to position").
- Keep it plain and specific. No hype words ("exciting", "powerful", "game-changing").
- Use **bold** for UI labels and menu paths (**Options** > **Notes**), `code` for identifiers,
  functions, filters, settings and files, and `<kbd>` for keys (`<kbd>Shift</kbd>+<kbd>Tab</kbd>`).
- Use present tense, as if it ships. The Overview note already covers the caveat that it may
  not.
- Developer items name the API and the migration step: what's deprecated, what replaces it, and
  what to test.
- Check every link's format: the number in the text matches the URL, the brackets are balanced,
  and it points at `/pull/` for PRs and `/issues/` for issues. The 7.1 post shipped with links
  like `([79104)](…)`, and the build can't catch those.
- Don't copy PR titles or descriptions as they are. Readers see the post, not GitHub.

## 7. Notes files

| File | Holds |
|---|---|
| `notes/research.md` | Release basics (milestone table, squad, Gutenberg range), official planning sources, and a research entry for every candidate, including ones that never reach the post |
| `notes/scans/`, `notes/scan-state.json` | Weekly scan results and state, written by wp-sot-scan |
| `notes/open-questions.md` | A numbered list of questions that block a decision. Remove a question once it's answered. |
| `notes/punted.md` | Items confirmed out of the release, with the reason and a source link |
| `notes/backlog.md` | Items carried over from the previous release, to re-check |
| `notes/doc-updates.md` | Doc changes waiting to be pasted in while the Doc write path isn't set up (`google-doc.md`, section 4) |
