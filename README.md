# private-blog → [AkatQuas.github.io](https://akatquas.github.io/)

Source for [AkatQuas](https://github.com/AkatQuas)'s site ([akatquas.github.io](https://akatquas.github.io/)): blog, long-form topic notes (SICP, Docker, K8s, …), and static assets. Public bio: *Omnia apta IA peragantur.* — recent work centers on GitHub Actions automation, LLM-assisted tooling ([ai-dispatch](https://github.com/AkatQuas/ai-dispatch), [stock-radar](https://github.com/AkatQuas/stock-radar)), and maintained OSS like [regexper-ng](https://github.com/AkatQuas/regexper-ng).

Built with [Docusaurus 3](https://docusaurus.io/); publish output goes to [`AkatQuas.github.io`](https://github.com/AkatQuas/AkatQuas.github.io).

## Requirements

- Node.js **18+** (CI uses 22)
- npm

## Setup

```console
npm install
```

## Development

```console
npm start
```

Dev server: [http://localhost:4200](http://localhost:4200).

## Build

```console
npm run build
```

Output directory: `build/`. Preview locally:

```console
npm run serve
```

## Content layout

| Path | Purpose |
|------|---------|
| [`blog/`](blog/) | Posts in **one year folder** per post: `blog/YYYY/MM-DD-slug.md` → URL `/blog/YYYY/MM/DD/slug` |
| [`docs/`](docs/) | Topic notes (`_category_.json` for sidebar groups) → `/docs/...` |
| [`static/`](static/) | Files copied as-is (`/images/`, `/downloads/`, etc.) |

Blog list pagination: `/blog`, `/blog/page/2`, … Full list by year: `/blog/archive` (link at the bottom of the blog sidebar).

Markdown uses `format: 'md'` in [`docusaurus.config.js`](docusaurus.config.js) so legacy posts are not parsed as MDX.

## Deployment

Pushes to **`master`** run [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml):

1. `npm ci`
2. [`deploy.sh`](deploy.sh) → `docusaurus build`, copy this README into `build/README.md`, publish `build/` to **`master`** on `AkatQuas/AkatQuas.github.io` via `gh-pages`

Git author in CI: `github-actions[bot]`. Cross-repo publish uses an SSH **deploy key** on [`AkatQuas.github.io`](https://github.com/AkatQuas/AkatQuas.github.io) (write access); private key is repo secret **`PAGES_DEPLOY_KEY`** on `private-blog`.

Manual publish (needs a local SSH key that can push to the pages repo):

```console
./deploy.sh
```

## Custom theme

Swizzled components under [`src/theme/`](src/theme/):

- `BlogSidebar` — Archive link under recent posts
- `BlogArchivePage` — archive page without hero banner

## Acknowledgement

Much thanks to [favicon.io](https://favicon.io/)
