# WordPress 7.2 Source of Truth

The source for the WordPress 7.2 Source of Truth. Every push to `trunk` that changes this
directory rebuilds the site on Spacefast.

- Live post: `sot.json` → `spacefast.liveUrl` (reader link: in Spacefast, ID in `spacefast.shareLinkId`)
- Draft review copy, with working notes and hidden items: `/draft/` (reviewer link: ID in `spacefast.draftLinkId`)

## Working on it

Ask Claude, which uses the `wp-source-of-truth` skill or, without it, this directory's `CLAUDE.md`:

- "Sweep the 7.2 SoT": re-checks every PR, Trac ticket and dev note, fixes statuses and facts,
  and opens proposal PRs for anything editorial.
- "Add <feature> to the SoT": researches it and writes it in house style.
- "SoT help" / "What's set up?": explains the workflow and checks the setup steps below.

To edit by hand, change the files in `content/post/`, run `npm run build` in this directory, and
push.

## Layout

- `content/post/`: the post, one Markdown file per item, in filename order
- `notes/`: research, sweep log, open questions, punted items, status data (never published)
- Open PRs named `proposal/7.2/…`: new items and rewrites waiting for review. Each one gets a
  Spacefast preview.
- `../.github/workflows/status-7-2.yml`: the daily status check for this release

```bash
npm ci
npm run build          # dist/index.html (clean post) and dist/draft/index.html (review copy)
npm run build:strict   # also fails on markers or placeholders left in published text
npm run status         # re-check every linked PR and Trac ticket
```

## Setup status

Tick these off as you go. The full steps are in the skill's README, section 5.

- [x] Release directory committed and pushed
- [x] Spacefast site created (`sot.json` → `spacefast.space`)
- [x] Autodeploy connected (`sf git connect`, root directory `7.2`, production branch `trunk`)
- [x] Reader and reviewer share links created, and the reader link checked against `/draft/`
- [x] Status workflow ran once (`gh workflow run "Status 7.2"`)
- [ ] Scheduled sweep routine created (daily from Beta 1)
- [ ] At final release: routine and Status workflow turned off
