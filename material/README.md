# Material Design 3 Reference Docs

Extraction tooling for Material Design 3 documentation from `m3.material.io`. The scripts convert M3's dynamically-rendered pages into local markdown files for spec reference during development.

All extracted documentation in `docs/` is generated locally and is **not** checked into version control. The content belongs to Google and is subject to their terms of use. To generate the docs, run the extraction scripts below.

## Quick Start

```bash
# Install dependencies
bun install

# Generate/update the sitemap index
bun run extract:sitemap

# Extract pages
bun run extract:pages buttons
bun run extract:pages --category=components --skip-existing

# Check sync status
bun run validate:docs

# Query docs
bun run query:docs related buttons
bun run query:docs search "elevation" --category=styles
bun run query:docs outline docs/components/buttons/specs.md
```

## Directory Layout

```
material/
├── package.json
├── scripts/
│   ├── extract-m3-sitemap.ts    # Fetches sitemap XML → docs/m3-sitemap.json
│   ├── extract-m3-pages.ts      # Extracts pages via Playwright → markdown
│   ├── check-m3-docs.ts         # Validates docs against sitemap
│   ├── query-m3-docs.ts         # Search, list, outline docs
│   └── common/                  # Shared modules
│       ├── dom-extract.ts       # DOM → markdown conversion
│       ├── frontmatter.ts       # YAML frontmatter parsing
│       ├── images.ts            # Image URL validation
│       ├── output.ts            # File writing + prettier
│       ├── page-extract.ts      # Single-page extraction orchestration
│       ├── quality.ts           # Quality checks (sparse, outdated, etc.)
│       ├── sitemap.ts           # Sitemap loading + page resolution
│       └── types.ts             # Shared type definitions
└── docs/                        # Extracted M3 documentation
    ├── m3-sitemap.json          # Source of truth for all pages
    ├── components/
    │   ├── buttons/
    │   │   ├── overview.md
    │   │   ├── specs.md
    │   │   ├── guidelines.md
    │   │   └── accessibility.md
    │   ├── cards/
    │   │   └── ...
    │   └── ...
    ├── foundations/
    │   └── ...
    └── styles/
        └── ...
```

## Scripts

### `extract-m3-sitemap.ts`

Fetches `m3.material.io/sitemap.xml` and produces `docs/m3-sitemap.json`. Filters to three categories: `components`, `foundations`, `styles`. Infers metadata (category, section, page type) from URL structure.

```bash
bun run extract:sitemap
```

URL → path mapping:

| URL                                                  | Output Path                           |
| ---------------------------------------------------- | ------------------------------------- |
| `https://m3.material.io/components`                  | `docs/components/index.md`            |
| `https://m3.material.io/components/buttons/overview` | `docs/components/buttons/overview.md` |
| `https://m3.material.io/components/all-buttons`      | `docs/components/all-buttons.md`      |
| `https://m3.material.io/styles/color/overview`       | `docs/styles/color/overview.md`       |

### `extract-m3-pages.ts`

Extracts pages to markdown using Playwright. Supports targeting by URL, output path, section name, or category.

```bash
bun run extract:pages buttons
bun run extract:pages https://m3.material.io/components/buttons/specs
bun run extract:pages --category=components --skip-existing
bun run extract:pages buttons --update
bun run extract:pages --category=components --analyze
```

| Flag                | Description                                |
| ------------------- | ------------------------------------------ |
| `--skip-existing`   | Skip pages that already have files         |
| `--force`           | Re-extract even if up to date              |
| `--page-type=specs` | Filter to specific page type               |
| `--update`          | Only extract outdated/low-quality pages    |
| `--analyze`         | Report what needs updating (no extraction) |
| `--headed`          | Run with visible browser (for debugging)   |

### `check-m3-docs.ts`

Compares `docs/m3-sitemap.json` against actual doc files and reports missing, outdated, and malformed entries.

```bash
bun run validate:docs
bun run validate:docs --category=components
bun run validate:docs --json
```

Exit code 0 = all clean, 1 = issues found.

### `query-m3-docs.ts`

Search and explore the local docs without reading files directly.

```bash
bun run query:docs list --category=components
bun run query:docs search "elevation" --category=styles
bun run query:docs outline docs/components/buttons/specs.md
bun run query:docs sections
bun run query:docs related buttons
```

All subcommands support `--json` for structured output.

## Output Format

### Frontmatter

Every extracted markdown file has YAML frontmatter:

```yaml
---
url: https://m3.material.io/components/buttons/specs
lastmod: '2026-01-15'
crawled_at: '2026-03-12T10:30:00.000Z'
category: components
section: buttons
page_type: specs
status: complete
---
```

Status values: `complete`, `partial` (known issues), `failed`.

### Page Types

| Type            | Description                                       | Notes                                               |
| --------------- | ------------------------------------------------- | --------------------------------------------------- |
| `overview`      | Component introduction, hero images, availability | Standard extraction                                 |
| `specs`         | Design tokens, measurements, configurations       | Requires dropdown iteration for multiple token sets |
| `guidelines`    | Usage patterns, dos/don'ts                        | Standard extraction                                 |
| `accessibility` | ARIA, keyboard, screen reader guidance            | Standard extraction                                 |
| `xr`            | Spatial/3D design guidelines                      | Standard extraction                                 |

### Specs Pages & Token Dropdowns

Specs pages contain a dropdown that switches between token configurations (e.g., "Button - Color - Elevated", "Button - Size - Small"). Standard extraction only captures the default selection. The extraction system iterates all dropdown options to capture every token set.

Expected token set counts vary by component:

| Component   | Token Sets                            |
| ----------- | ------------------------------------- |
| Buttons     | ~25 (5 colors x 5 sizes)              |
| Tabs        | 2 (Primary, Secondary)                |
| Chips       | 4 (Assist, Filter, Input, Suggestion) |
| Text Fields | 2 (Filled, Outlined)                  |
| Cards       | 3 (Elevated, Filled, Outlined)        |

### DOM → Markdown Conversion

| HTML Element        | Markdown Output            |
| ------------------- | -------------------------- |
| `<h1>`–`<h6>`       | `#` through `######`       |
| `<p>`               | Plain text                 |
| `<ul>/<ol>`         | `-` or `1.` list items     |
| `<table>`           | Markdown table             |
| `<figure>`, `<img>` | `![alt](url)` with caption |
| `<strong>`          | `**text**`                 |
| `<em>`              | `_text_`                   |
| `<code>`            | `` `text` ``               |
| `<a>`               | `[text](href)`             |

Image URLs are normalized to full resolution (`=s0`) and validated against known Google Cloud Storage patterns. Invalid URLs are replaced with `<!-- Image: [alt] - extraction failed -->`.

## Quality Checks

The `--update` and `--analyze` flags run these checks on existing docs:

| Check                 | Condition                           | Indicates                  |
| --------------------- | ----------------------------------- | -------------------------- |
| Outdated              | `crawled_at < lastmod`              | Source updated since crawl |
| Sparse specs          | Specs section < 500 chars           | Incomplete extraction      |
| Missing tokens        | No `\| Token` in specs              | Tables not extracted       |
| Single token set      | Only one `####` header              | Dropdown not iterated      |
| Sparse section        | Any section < 200 chars             | Content missing            |
| Dropdown not expanded | "Select a component" without tables | Dynamic content not loaded |

## Known Limitations

1. **Sequential extraction** — Playwright sessions can't run in parallel; pages are extracted one at a time.
2. **Memory** — Long sessions can cause browser memory bloat. The system closes and reopens the browser between batches.
3. **Dynamic content timing** — Some pages load content after initial render. Wait times are tuned but may need adjustment.
4. **Dropdown fragility** — Specs dropdown iteration depends on consistent M3 UI patterns. UI changes can break it.
5. **Image URL stability** — M3 uses Google Cloud Storage URLs with hash paths. The extraction function can sometimes construct invalid URLs from element attributes.
