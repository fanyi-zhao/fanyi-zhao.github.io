# fanyi-zhao.github.io

Hugo + PaperMod source for `https://fanyi-zhao.github.io/`.

## Prerequisites

- `hugo` (extended) >= `0.146.0`
- `git`

## Local Development

```bash
hugo server -D
```

Open `http://localhost:1313`.

## Production Build

```bash
hugo --gc --minify
```

Generated static output is written to `public/`.

## Deploy

Deployment is handled by GitHub Actions in `.github/workflows/hugo-pages.yml`.

On push to `main`, the workflow:

1. Builds the site with Hugo.
2. Uploads the generated `public/` artifact.
3. Deploys to GitHub Pages via `deploy-pages`.

## Content Editing

- Posts live in `content/posts/`.
- Main config is `hugo.toml`.
- FAQ page is `content/faq/_index.md`.
- Archives page is `content/archives/_index.md`.
- Search page is `content/search/_index.md`.
- Tags landing page is `content/tags/_index.md`.

### Post Front Matter Contract

Required:

- `title` (string)
- `date` (`YYYY-MM-DD` or RFC3339)
- `draft` (bool)
- `summary` (string)
- `tags` (string array)

Optional:

- `ShowToc` (bool)
- `math` (bool)
- `author` (string)
