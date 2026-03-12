#!/usr/bin/env bun
/**
 * Extract M3 pages to markdown using Playwright
 *
 * Usage:
 *   bun scripts/extract-m3-pages.ts <target> [flags]
 *
 * Targets:
 *   URL                          Single page by URL
 *   docs/path.md               Single page by output path
 *   section-name                 All pages in a section (e.g., "buttons")
 *   --category=components        All pages in a category
 *
 * Flags:
 *   --skip-existing              Skip pages that already have files
 *   --force                      Re-extract even if up to date
 *   --page-type=specs            Filter to specific page type
 *   --update                     Only extract outdated/low-quality pages
 *   --analyze                    Report what needs updating (no extraction)
 *   --headed                     Run with visible browser (for debugging)
 *
 * Examples:
 *   bun scripts/extract-m3-pages.ts buttons
 *   bun scripts/extract-m3-pages.ts https://m3.material.io/components/buttons/specs
 *   bun scripts/extract-m3-pages.ts --category=components --skip-existing
 *   bun scripts/extract-m3-pages.ts buttons --update
 *   bun scripts/extract-m3-pages.ts --category=components --analyze
 */

/// <reference types="@types/bun" />

import { existsSync } from 'node:fs';

import { chromium } from 'playwright';

import { extractOnePage } from './common/page-extract';
import { checkQuality } from './common/quality';
import { loadSitemap, resolvePages } from './common/sitemap';
import type { Flags } from './common/types';

// ---------------------------------------------------------------------------
// Arg parsing
// ---------------------------------------------------------------------------

function parseArgs(): { target: string; flags: Flags } {
  const args = process.argv.slice(2);
  const flags: Flags = {
    skipExisting: false,
    force: false,
    pageType: null,
    category: null,
    update: false,
    analyze: false,
    headed: false,
  };
  let target = '';

  for (const arg of args) {
    if (arg === '--skip-existing') flags.skipExisting = true;
    else if (arg === '--force') flags.force = true;
    else if (arg === '--update') flags.update = true;
    else if (arg === '--analyze') flags.analyze = true;
    else if (arg === '--headed') flags.headed = true;
    else if (arg.startsWith('--page-type=')) flags.pageType = arg.split('=')[1];
    else if (arg.startsWith('--category=')) flags.category = arg.split('=')[1];
    else if (!target) target = arg;
  }

  return { target, flags };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const { target, flags } = parseArgs();

  if (!target && !flags.category) {
    console.error('Error: provide a target (URL, path, section) or --category=<name>');
    console.error('Usage: bun scripts/extract-m3-pages.ts <target> [--skip-existing] [--force] [--update] [--analyze]');
    process.exit(1);
  }

  const sitemap = await loadSitemap();
  let pages = resolvePages(sitemap, target, flags);

  if (pages.length === 0) {
    console.error(`No pages found for "${target || flags.category}"`);
    process.exit(1);
  }

  // Filter existing
  if (flags.skipExisting) {
    pages = pages.filter((p) => !existsSync(p.output_path));
    if (pages.length === 0) {
      console.log('All pages already exist. Nothing to do.');
      return;
    }
  }

  // Update/analyze mode
  if (flags.update || flags.analyze) {
    console.log(`Checking ${pages.length} pages...\n`);

    const pageResults = await Promise.all(
      pages.map(async (page) => ({
        page,
        quality: await checkQuality(page),
      })),
    );

    if (flags.analyze) {
      for (const { page: p, quality } of pageResults) {
        const status =
          quality.issues.length === 0 ? '\x1b[32m\u2713 OK\x1b[0m' : `\x1b[33m${quality.issues.join(', ')}\x1b[0m`;
        console.log(`  ${p.output_path}  ${status}`);
      }

      const needsWork = pageResults.filter((r) => r.quality.needsReextract).length;
      console.log(`\n${needsWork}/${pages.length} pages need re-extraction`);
      return;
    }

    // Filter to pages needing re-extraction
    if (!flags.force) {
      pages = pageResults.filter((r) => r.quality.needsReextract).map((r) => r.page);

      if (pages.length === 0) {
        console.log('All pages are up to date. Nothing to do.');
        return;
      }
    }
  }

  // Extract
  const label = target || `--category=${flags.category}`;
  console.log(`M3 Extraction - ${label}`);
  console.log('='.repeat(20 + label.length));
  console.log(`\n${pages.length} page(s) to extract\n`);

  const browser = await chromium.launch({ headless: !flags.headed });
  const stats = { ok: 0, partial: 0, failed: 0 };

  try {
    for (const p of pages) {
      process.stdout.write(`-> ${p.output_path}...`);

      const result = await extractOnePage(browser, p);

      switch (result) {
        case 'ok':
          console.log(` \x1b[32mOK\x1b[0m`);
          stats.ok++;
          break;
        case 'partial':
          console.log(` \x1b[33mPARTIAL\x1b[0m (some images failed)`);
          stats.partial++;
          break;
        case 'failed':
          console.log(` \x1b[31mFAILED\x1b[0m`);
          stats.failed++;
          break;
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`\nSummary:`);
  console.log(`  Extracted: ${stats.ok}`);
  if (stats.partial > 0) console.log(`  Partial:   ${stats.partial}`);
  if (stats.failed > 0) console.log(`  Failed:    ${stats.failed}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
