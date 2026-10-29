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

## Other folders

- `scripts/migrate/` was a one-time import of 6.2 to 7.1 from Gutenberg Times and Nomad Blog.
- `7.2/` holds the 7.2 notes and status checks used by the tracking skill. It is not part of the
  site.
