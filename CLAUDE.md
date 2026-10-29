# WordPress Source of Truth

One site, built from `releases/<version>/` into `dist/`. Read `README.md` for the layout.

The Source of Truth skills live in `.claude/skills/`. Edit them here, not in a plugin.

## Content rules

- Page content comes only from the source (the Google Doc or the imported Markdown). Do not
  invent copy.
- A block that is not in the source is built mechanically from data or left out.
- Nothing marked ✏️ 🙏 🔍 🎨 🏈, no `<!-- -->` comments, and none of the Notes, Backlog,
  guidelines or Tags legend reaches a page.
- 🏈 items are hidden.
- The Punted block comes only from the Doc's Punted tab.
- Sections stay in source order.
- Never hand-edit imported Markdown. Fix the Doc and re-import.

## Commands

- `npm ci`: install.
- `npm test`: run the tests.
- `npm run build`: build every release into `dist/`.
- `npm run -s import:doc -- <doc-id-or-url>`: import a release from a Google Doc.

## Rules

- Run `npm test` and `npm run build` before every commit.
- `<version>/notes/` (for example `7.2/notes/`) belongs to the `wp-sot-scan` skill. Only that
  skill writes there. Site work never modifies it.
- Commit messages describe the change. No AI co-author or "generated with" lines.
- In interactive sessions, confirm with a person before pushing to `trunk` and before any
  Spacefast action.
- In non-interactive runs (scheduled or cloud), push to `trunk` only if `npm test` and
  `npm run build` pass and the diff touches only `releases/<version>/` for the release being
  updated. Otherwise stop and report what happened without pushing.
