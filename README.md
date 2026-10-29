# WordPress Source of Truth

One site holds every WordPress Source of Truth. Each release lives in `releases/<version>/` as
Markdown plus a `release.json`, and `npm run build` turns all of them into one static site in
`dist/`: a page per release at `/<major>-<minor>/` (for example `/7-1/`), with the newest also at `/`. The canonical base URL for canonical links, `robots.txt` and the sitemap is `baseUrl` in `site.json`.

## Releases

| Version | Source | Link |
|---|---|---|
| 7.2 | Google Doc | [Draft](https://docs.google.com/document/d/1N2sSjT4sxgrbTneUhYFOjOkUvq0CNwsYiSgIhY134Tk/edit) |
| 7.1 | Gutenberg Times | [Original post](https://gutenbergtimes.com/wordpress-7-1-source-of-truth/) |
| 7.0 | Gutenberg Times | [Original post](https://gutenbergtimes.com/wordpress-7-0-source-of-truth/) |
| 6.9 | Gutenberg Times | [Original post](https://gutenbergtimes.com/wordpress-6-9-source-of-truth/) |
| 6.8 | Gutenberg Times | [Original post](https://gutenbergtimes.com/source-of-truth-wordpress-6-8/) |
| 6.7 | Gutenberg Times | [Original post](https://gutenbergtimes.com/6-7-source-of-truth/) |
| 6.6 | Nomad Blog | [Original post](https://nomad.blog/2024/06/26/wordpress-6-6-source-of-truth/) |
| 6.5 | Nomad Blog | [Original post](https://nomad.blog/2024/03/13/wordpress-6-5-source-of-truth/) |
| 6.4 | Nomad Blog | [Original post](https://nomad.blog/2023/10/09/wordpress-6-4-source-of-truth/) |
| 6.3 | Nomad Blog | [Original post](https://nomad.blog/2023/07/17/wordpress-6-3-source-of-truth/) |
| 6.2 | Nomad Blog | [Original post](https://nomad.blog/2023/03/01/wordpress-6-2-source-of-truth/) |

## Prerequisites

- Node 20 or later. Run `npm ci` once after you clone.
- Push access to `wptrainingteam/source-of-truth`, and `gh` signed in (`gh auth status`).
- Claude Code, run from inside the clone, to use the skills.
- The release's Google Doc shared as "anyone with the link can view", so the import can download
  it. The weekly scan needs "anyone with the link can comment".
- For the weekly scan only: macOS, because the scan puts its block on the clipboard, and Claude in
  Chrome connected with permission to act on `core.trac.wordpress.org` and `docs.google.com`. The
  full checklist, including a Chrome download setting for Trac, is in "Before the first run" in
  `.claude/skills/wp-sot-scan/SKILL.md`.

## Add or update a release

1. Import the Google Doc: `npm run -s import:doc -- <doc-id-or-url>`. This writes
   `releases/<version>/`. Do not hand-edit the imported Markdown. To change content, fix the Doc
   and import again.
2. Optional: give a release its own layout by adding `releases/<version>/layout/` and setting
   `"layout": "own"` in its `release.json`. Otherwise it uses `layouts/generic/`.
3. Run `npm test` and `npm run build`.
4. Commit. Spacefast rebuilds the site on every push to `trunk`.

## Preview locally

Run `npm run build`, then serve `dist/` with any static server, for example `npx serve dist`.

## Skills

The Claude Code skills that track, build and scan the Source of Truth live in this repo, in
`.claude/skills/`. Clone the repo and run Claude Code from inside it, and the skills load. There
is nothing to install.

- `wp-sot-site`: import a release's Google Doc and build the site.
- `wp-sot-scan`: the weekly scan that checks every ticket, PR and dev note linked in the Doc.

## Other folders

- `scripts/migrate/` was a one-time import of 6.2 to 7.1 from Gutenberg Times and Nomad Blog.
- `<version>/notes/` (for example `7.3/notes/`) is the `wp-sot-scan` skill's working folder. The
  scan creates it on its first run for a release. It is not part of the site.
