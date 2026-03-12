import type { SitemapPage } from './types';

/**
 * Parse YAML frontmatter from a markdown file's content.
 * Returns null if no frontmatter block is found.
 */
export function parseFrontmatter(content: string): Record<string, string | null> | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const fm: Record<string, string | null> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'")))
      val = val.slice(1, -1);
    fm[key] = val === 'null' || val === '~' || val === '' ? null : val;
  }
  return fm;
}

/**
 * Build a YAML frontmatter block for a crawled page.
 */
export function buildFrontmatter(page: SitemapPage, status: 'complete' | 'partial' | 'failed'): string {
  return [
    '---',
    `url: ${page.url}`,
    `lastmod: ${page.lastmod ?? 'null'}`,
    `crawled_at: ${new Date().toISOString()}`,
    `category: ${page.category}`,
    `section: ${page.section ?? 'null'}`,
    `page_type: ${page.page_type ?? 'null'}`,
    `status: ${status}`,
    '---',
  ].join('\n');
}
