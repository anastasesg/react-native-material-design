import { existsSync } from 'node:fs';

import type { Flags, SitemapOutput, SitemapPage } from './types';

const SITEMAP_PATH = 'docs/m3-sitemap.json';

/**
 * Load the sitemap index from docs/m3-sitemap.json.
 * Exits the process if the file doesn't exist.
 */
export async function loadSitemap(): Promise<SitemapOutput> {
  if (!existsSync(SITEMAP_PATH)) {
    console.error(`Error: ${SITEMAP_PATH} not found. Run 'bun scripts/extract-m3-sitemap.ts' first.`);
    process.exit(1);
  }
  return Bun.file(SITEMAP_PATH).json();
}

/**
 * Resolve a CLI target + flags to a list of sitemap pages.
 *
 * Target formats:
 *   - URL: https://m3.material.io/components/buttons/specs
 *   - Output path: docs/components/buttons/specs.md
 *   - Section name: buttons
 *   - Empty (with --category flag): all pages in category
 */
export function resolvePages(sitemap: SitemapOutput, target: string, flags: Flags): SitemapPage[] {
  const allPages = sitemap.categories.flatMap((c) => c.pages);
  let pages: SitemapPage[];

  if (flags.category && !target) {
    pages = sitemap.categories.find((c) => c.category === flags.category)?.pages || [];
  } else if (target.startsWith('https://')) {
    const found = allPages.find((p) => p.url === target);
    pages = found ? [found] : [];
  } else if (target.startsWith('docs/') || target.endsWith('.md')) {
    const found = allPages.find((p) => p.output_path === target);
    pages = found ? [found] : [];
  } else {
    // Section name
    pages = allPages.filter((p) => p.section === target);
  }

  if (flags.pageType) {
    pages = pages.filter((p) => p.page_type === flags.pageType);
  }

  if (flags.category && target) {
    pages = pages.filter((p) => p.category === flags.category);
  }

  return pages;
}
