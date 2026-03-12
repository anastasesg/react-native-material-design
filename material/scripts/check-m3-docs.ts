#!/usr/bin/env bun
/**
 * Check M3 docs sync status
 *
 * Compares docs/m3-sitemap.json against actual docs files and reports:
 * - Missing: URLs in sitemap with no corresponding markdown file
 * - Outdated: Files where crawled_at < lastmod (source updated since crawl)
 * - Malformed: Files with invalid/missing frontmatter
 *
 * Usage:
 *   bun scripts/check-m3-docs.ts [--json] [--category=components]
 */

/// <reference types="@types/bun" />

import { existsSync } from 'node:fs';

import { parseFrontmatter } from './common/frontmatter';
import { loadSitemap } from './common/sitemap';
import type { SitemapPage } from './common/types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CheckResult {
  missing: Array<{ output_path: string; url: string }>;
  outdated: Array<{
    output_path: string;
    crawled_at: string;
    lastmod: string;
  }>;
  malformed: Array<{ output_path: string; reason: string }>;
  complete: Array<{ output_path: string }>;
  summary: {
    total: number;
    complete: number;
    missing: number;
    outdated: number;
    malformed: number;
  };
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

function validateFrontmatter(fm: Record<string, string | null> | null, expected: SitemapPage): string | null {
  if (!fm) return 'missing frontmatter';
  if (!fm.url) return 'missing url field';
  if (fm.url !== expected.url) return `url mismatch: expected ${expected.url}, got ${fm.url}`;
  if (!fm.crawled_at) return 'missing crawled_at field';
  if (!fm.status) return 'missing status field';
  if (!['complete', 'partial', 'failed'].includes(fm.status!)) return `invalid status: ${fm.status}`;
  return null;
}

function isOutdated(fm: Record<string, string | null>, page: SitemapPage): boolean {
  if (!fm.crawled_at || !page.lastmod) return false;
  return new Date(page.lastmod) > new Date(fm.crawled_at);
}

// ---------------------------------------------------------------------------
// Check
// ---------------------------------------------------------------------------

async function checkDocs(categoryFilter?: string): Promise<CheckResult> {
  const sitemap = await loadSitemap();

  const result: CheckResult = {
    missing: [],
    outdated: [],
    malformed: [],
    complete: [],
    summary: { total: 0, complete: 0, missing: 0, outdated: 0, malformed: 0 },
  };

  const pages = sitemap.categories
    .filter((c) => !categoryFilter || c.category === categoryFilter)
    .flatMap((c) => c.pages);

  result.summary.total = pages.length;

  for (const page of pages) {
    if (!existsSync(page.output_path)) {
      result.missing.push({ output_path: page.output_path, url: page.url });
      result.summary.missing++;
      continue;
    }

    const content = await Bun.file(page.output_path).text();
    const fm = parseFrontmatter(content);

    const validationError = validateFrontmatter(fm, page);
    if (validationError) {
      result.malformed.push({ output_path: page.output_path, reason: validationError });
      result.summary.malformed++;
      continue;
    }

    if (fm && isOutdated(fm, page)) {
      result.outdated.push({
        output_path: page.output_path,
        crawled_at: fm.crawled_at!,
        lastmod: page.lastmod!,
      });
      result.summary.outdated++;
      continue;
    }

    result.complete.push({ output_path: page.output_path });
    result.summary.complete++;
  }

  return result;
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

function printResult(result: CheckResult): void {
  console.log('M3 Docs Sync Status');
  console.log('===================\n');

  if (result.missing.length > 0) {
    console.log(`Missing (${result.missing.length}):`);
    for (const item of result.missing) {
      console.log(`  - ${item.output_path}`);
      console.log(`    ${item.url}`);
    }
    console.log();
  }

  if (result.outdated.length > 0) {
    console.log(`Outdated (${result.outdated.length}):`);
    for (const item of result.outdated) {
      console.log(`  - ${item.output_path} (crawled: ${item.crawled_at.split('T')[0]}, source: ${item.lastmod})`);
    }
    console.log();
  }

  if (result.malformed.length > 0) {
    console.log(`Malformed (${result.malformed.length}):`);
    for (const item of result.malformed) {
      console.log(`  - ${item.output_path} (${item.reason})`);
    }
    console.log();
  }

  console.log('Summary:');
  console.log(`  Total in sitemap: ${result.summary.total}`);
  console.log(`  Complete: ${result.summary.complete}`);
  console.log(`  Missing: ${result.summary.missing}`);
  console.log(`  Outdated: ${result.summary.outdated}`);
  console.log(`  Malformed: ${result.summary.malformed}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);

  const jsonOutput = args.includes('--json');
  const categoryArg = args.find((a) => a.startsWith('--category='));
  const category = categoryArg?.split('=')[1];

  if (category && !['components', 'foundations', 'styles'].includes(category)) {
    console.error(`Error: Invalid category '${category}'. Must be one of: components, foundations, styles`);
    process.exit(1);
  }

  const result = await checkDocs(category);

  if (jsonOutput) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    printResult(result);
  }

  if (result.summary.missing > 0 || result.summary.outdated > 0 || result.summary.malformed > 0) {
    process.exit(1);
  }
}

main().catch(console.error);
