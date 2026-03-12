import { existsSync } from 'node:fs';

import { parseFrontmatter } from './frontmatter';
import type { QualityResult, SitemapPage } from './types';

/**
 * Check whether a crawled page needs re-extraction.
 *
 * Checks for:
 *   - Missing file
 *   - Outdated (source lastmod > crawled_at)
 *   - Malformed frontmatter
 *   - Specs-specific quality (missing tokens section, sparse content, etc.)
 */
export async function checkQuality(page: SitemapPage): Promise<QualityResult> {
  const issues: string[] = [];

  if (!existsSync(page.output_path)) {
    return { issues: ['missing'], needsReextract: true };
  }

  const content = await Bun.file(page.output_path).text();
  const fm = parseFrontmatter(content);

  // Outdated check
  if (fm?.crawled_at && page.lastmod) {
    if (new Date(page.lastmod) > new Date(fm.crawled_at)) {
      issues.push('outdated');
    }
  }

  // Malformed frontmatter
  if (!fm || !fm.url || !fm.crawled_at || !fm.status) {
    issues.push('malformed-frontmatter');
  }

  // Specs-specific quality
  if (page.page_type === 'specs') {
    const specsIdx = content.indexOf('### Tokens & specs');
    if (specsIdx === -1) {
      issues.push('missing-tokens-section');
    } else {
      const specsSection = content.slice(specsIdx);
      if (specsSection.length < 500) issues.push('sparse-specs');
      if (!specsSection.includes('| ')) issues.push('missing-token-tables');
      const h4Count = (specsSection.match(/^####\s/gm) || []).length;
      if (h4Count < 2) issues.push('single-token-set');
    }
  }

  return { issues, needsReextract: issues.length > 0 };
}
