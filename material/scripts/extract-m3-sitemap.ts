#!/usr/bin/env bun
/**
 * Extract M3 sitemap with full metadata (URLs, lastmod dates, categories, output paths)
 * Usage: bun scripts/extract-m3-sitemap.ts [output_file]
 *
 * Filters to only include: components, styles, foundations
 * Generates output_path for each page mapping to docs/ structure
 */

/// <reference types="@types/bun" />

const SITEMAP_URL = 'https://m3.material.io/sitemap.xml';

// Only these categories are included in the output
type Category = 'components' | 'foundations' | 'styles';

type PageType = 'overview' | 'specs' | 'guidelines' | 'accessibility' | 'xr';

interface SitemapPage {
  url: string;
  lastmod: string | null;
  category: Category;
  section: string | null;
  page_type: PageType | null;
  output_path: string;
}

interface CategoryGroup {
  category: Category;
  count: number;
  pages: SitemapPage[];
}

interface SitemapOutput {
  metadata: {
    sitemap_url: string;
    extracted_at: string;
    total_pages: number;
  };
  summary: Array<{ category: Category; count: number }>;
  categories: CategoryGroup[];
}

function getCategory(url: string): Category | null {
  if (url.startsWith('https://m3.material.io/components')) return 'components';
  if (url.startsWith('https://m3.material.io/foundations')) return 'foundations';
  if (url.startsWith('https://m3.material.io/styles')) return 'styles';
  return null; // Excluded categories
}

function getSection(url: string): string | null {
  const path = url.replace('https://m3.material.io/', '');
  const parts = path.split('/');
  return parts.length > 1 ? parts[1] : null;
}

function getPageType(url: string): PageType | null {
  const lastPart = url.split('/').pop();
  const validTypes: PageType[] = ['overview', 'specs', 'guidelines', 'accessibility', 'xr'];
  return validTypes.includes(lastPart as PageType) ? (lastPart as PageType) : null;
}

/**
 * Convert M3 URL to docs output path
 *
 * Examples:
 *   https://m3.material.io/components → docs/components/index.md
 *   https://m3.material.io/components/buttons/overview → docs/components/buttons/overview.md
 *   https://m3.material.io/components/all-buttons → docs/components/all-buttons.md
 *   https://m3.material.io/styles/color/overview → docs/styles/color/overview.md
 */
function getOutputPath(url: string): string {
  const path = url.replace('https://m3.material.io/', '');

  // Handle root category pages (e.g., /components, /styles, /foundations)
  if (!path.includes('/') || path.endsWith('/')) {
    const cleanPath = path.replace(/\/$/, '');
    return `docs/${cleanPath}/index.md`;
  }

  // All other pages become .md files
  return `docs/${path}.md`;
}

function parseXmlSitemap(xml: string): SitemapPage[] {
  const pages: SitemapPage[] = [];

  // Match each <url>...</url> block
  const urlRegex = /<url>([\s\S]*?)<\/url>/g;
  let match;

  while ((match = urlRegex.exec(xml)) !== null) {
    const block = match[1];

    // Extract loc
    const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
    if (!locMatch) continue;
    const url = locMatch[1];

    // Extract lastmod (optional)
    const lastmodMatch = block.match(/<lastmod>([^<]+)<\/lastmod>/);
    const lastmod = lastmodMatch ? lastmodMatch[1] : null;

    // Only include m3.material.io URLs
    if (!url.startsWith('https://m3.material.io')) continue;

    // Filter to only included categories
    const category = getCategory(url);
    if (!category) continue;

    pages.push({
      url,
      lastmod,
      category,
      section: getSection(url),
      page_type: getPageType(url),
      output_path: getOutputPath(url),
    });
  }

  return pages;
}

function groupByCategory(pages: SitemapPage[]): CategoryGroup[] {
  const groups = new Map<Category, SitemapPage[]>();

  for (const page of pages) {
    const existing = groups.get(page.category) || [];
    existing.push(page);
    groups.set(page.category, existing);
  }

  return Array.from(groups.entries())
    .map(([category, groupPages]) => ({
      category,
      count: groupPages.length,
      pages: groupPages.sort((a, b) => a.url.localeCompare(b.url)),
    }))
    .sort((a, b) => a.category.localeCompare(b.category));
}

async function main() {
  const outputFile = process.argv[2] || 'docs/m3-sitemap.json';

  console.log(`Fetching sitemap from ${SITEMAP_URL}...`);

  const response = await fetch(SITEMAP_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status}`);
  }

  const xml = await response.text();
  const pages = parseXmlSitemap(xml);
  const categories = groupByCategory(pages);

  const output: SitemapOutput = {
    metadata: {
      sitemap_url: SITEMAP_URL,
      extracted_at: new Date().toISOString(),
      total_pages: pages.length,
    },
    summary: categories.map(({ category, count }) => ({ category, count })),
    categories,
  };

  await Bun.write(outputFile, JSON.stringify(output, null, 2));

  console.log(`Saved to ${outputFile}\n`);
  console.log('Summary:');
  console.table(output.summary);
  console.log(`\nTotal pages: ${output.metadata.total_pages}`);
}

main().catch(console.error);
