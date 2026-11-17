# 7.2: our departures from the design export

The 7.2 page started from a design export (`sot-site/7-2/index.html` plus `shell/`). We changed
some things on purpose after that. When a new export comes in, merge it into `page.html` and keep
everything below. Never copy the export over `page.html` as is.

When you make a new deliberate change to the page that the design doesn't have, add it here.

## Content we filled in or removed

| What | Ours | Export has | Since |
|---|---|---|---|
| Byline credits | "Written by Justin Tadlock with Ryan Welcher, Anne McCarthy, and Jonathan Bossenger." | "Needed" placeholder | `bb1b84d` |
| Highlights figcaption | None. Removed on purpose. | A caption (a placeholder, later "Draft highlights… #83719") | `bb1b84d` |
| Dev Blog link in Resources | "What's new for developers: November" | Missing | `bb1b84d` |
| Gutenberg 24.3 release post | Linked | "link needed" | `bb1b84d` |
| "Updated" date in hero, changelog date | Real dates (`Month Day, Year`) | "Month Day" placeholder | `b300bde` |
| Google Drive folder link | Linked | "Link needed" | `88a6cb1` |
| #65661 tracking line | Full ticket title, then "(#65661)" | "Ticket title needed" | `118b8bc` |

Items the Doc still has are kept even when an export drops them. Right now that's
**Secrets API**: both Nov 17 exports (`sot-site-11-17-002.zip` too) drop it, but the Doc still
has it. That's why the static item count is one higher than the export's (35, not 34).

## Wiring for the build

| What | Ours | Export has |
|---|---|---|
| Head | `<!-- sot:head -->` slot | No slot |
| Site header | `<!-- sot:header -->` slot | Hard-coded `<header class="sot-header">` |
| Stylesheets | `sot.css`, `wpui.css` | `../shell/sot.css`, `../shell/wp-ui.css` |
| Scripts | `site.js`, `wpui.js` | `../shell/versions.js`, `../shell/sot.js`, `../shell/wp-ui.js` |
| Shared shell CSS/JS | `layouts/generic/sot.css` and `site.js` | `shell/sot.css` and `sot.js`. Port changes by hand. |
| Images | `images/` (only `images/` is published) | `assets/` |
| Highlights classes | `ed-highlights`, `ed-highlights__light` and `__dark` (styled in `edition.css`) | `sot-highlights`, `sot-highlights__img--light` and `--dark` |
| Highlights files | Only the `.webp` images. The page doesn't use the `.png` copies. | `.png` and `.webp` |

## Ports in the 7.2 scripts and styles

| File | Ours | Export has |
|---|---|---|
| `edition.css` | Dashicons font inlined as a `data:` URL. Header comment points to `layouts/generic/sot.css`. `.wpui-h1` selector. | `url(assets/dashicons.woff2)`, `../shell/sot.css`, `h1` |
| `recreations.js` | Admin screen titles are `<p class="wpui-h1">`, so the page's `h1` styles don't hit them | `<h1>` |
| `wp-icons.js`, `wp-snapshots.css`, `wp-snapshots.js` | Line ending or newline differences only | — |
| `edition.js` | Same as the export | — |
| `recreations.js` | The Global Styles form demo's fields and the media editor's Title field have `autocomplete="off" data-1p-ignore data-lpignore="true"`, so password managers don't offer to log in | No attributes |
| `recreations.js`, `edition.css` | The demo's Name and Email fields are `<p class="ed-site__field">`, spaced 16px apart | Plain `<p>`, no gap |
