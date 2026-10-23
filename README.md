# WordPress Source of Truth

One directory per WordPress release. Each holds the Markdown source for that release's Source of
Truth post and the build that turns it into a site. Every push to `trunk` rebuilds the release's
Spacefast site.

| Release | Directory | Status |
|---|---|---|
| WordPress 7.2 | [`7.2/`](7.2/) | Draft |

Each release directory is self-contained (its own `package.json`, scripts, notes and
`sf.jsonc`), so changing how one release builds never changes a published one. The daily status
workflows live at the root in `.github/workflows/status-<version>.yml`, because GitHub only runs
workflows from there. See each directory's `README.md` for how to work on that release.
