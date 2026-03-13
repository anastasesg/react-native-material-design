import type { Browser, Page } from 'playwright';

import { bundleDomExtract } from './dom/bundle';
import { postProcessMarkdown } from './dom-extract';
import { mergeComponentSections } from './extractors/merge';
import { tokenViewerExtractor } from './extractors/token-viewer';
import type { ComponentExtractor } from './extractors/types';
import { buildFrontmatter } from './frontmatter';
import { isValidImageUrl, sanitizeMarkdownImages } from './images';
import { writeOutput } from './output';
import type { ExtractionResult, SitemapPage } from './types';

// ---------------------------------------------------------------------------
// Component extractors registry
//
// Each extractor targets an interactive Angular component by CSS selector.
// The pipeline runs all extractors whose selector matches, regardless of
// page type. Add new extractors here as they are built.
// ---------------------------------------------------------------------------

const extractors: ComponentExtractor[] = [tokenViewerExtractor];

// ---------------------------------------------------------------------------
// Shared browser helpers
// ---------------------------------------------------------------------------

async function scrollPage(page: Page): Promise<void> {
  await page.keyboard.press('End');
  await page.waitForTimeout(2000);
  await page.keyboard.press('Home');
  await page.waitForTimeout(1000);
}

async function evaluateDomToMarkdown(
  page: Page,
  skipSelectors: Array<{ selector: string; tag: string }>,
): Promise<ExtractionResult> {
  const bundle = await bundleDomExtract();
  await page.evaluate(bundle);
  return page.evaluate(
    (selectors) => (globalThis as any).__domExtract.domToMarkdown(selectors),
    skipSelectors,
  ) as Promise<ExtractionResult>;
}

// ---------------------------------------------------------------------------
// Unified page extraction pipeline
//
// 1. Navigate + scroll + static DOM extraction via domToMarkdown()
// 2. Detect interactive components by selector, run matching extractors
// 3. Merge component results into the static markdown
// ---------------------------------------------------------------------------

async function extractPage(page: Page, url: string): Promise<ExtractionResult> {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('main', { timeout: 30000 });
  await page.waitForTimeout(3000);
  await scrollPage(page);

  const skipSelectors = extractors.map((e) => ({ selector: e.selector, tag: e.tag }));
  let result = await evaluateDomToMarkdown(page, skipSelectors);

  for (const extractor of extractors) {
    const count = await page.locator(extractor.selector).count();
    if (count > 0) {
      const sections = await extractor.extract(page, result);
      result = mergeComponentSections(result, sections);
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Single-page orchestrator
//
// Opens a tab, extracts, post-processes, validates images, writes output.
// ---------------------------------------------------------------------------

export async function extractOnePage(browser: Browser, sitemapPage: SitemapPage): Promise<'ok' | 'partial' | 'failed'> {
  const page = await browser.newPage();

  try {
    let result = await extractPage(page, sitemapPage.url);

    if (!result.markdown.trim()) {
      console.error(`    FAIL: empty content`);
      const content = buildFrontmatter(sitemapPage, 'failed') + '\n\n<!-- Empty extraction -->\n';
      await writeOutput(sitemapPage.output_path, content);
      return 'failed';
    }

    // Post-process (icon font fix, page-type-specific cleanup)
    let markdown = postProcessMarkdown(result.markdown, sitemapPage.page_type);

    // Validate and sanitize images
    markdown = sanitizeMarkdownImages(markdown, result.images);

    const status = result.images.some((img) => !isValidImageUrl(img.src)) ? 'partial' : 'complete';

    const content = buildFrontmatter(sitemapPage, status as 'complete' | 'partial') + '\n\n' + markdown + '\n';

    await writeOutput(sitemapPage.output_path, content);
    return status === 'complete' ? 'ok' : 'partial';
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`    FAIL: ${msg}`);
    const content = buildFrontmatter(sitemapPage, 'failed') + `\n\n<!-- Extraction error: ${msg} -->\n`;
    await writeOutput(sitemapPage.output_path, content);
    return 'failed';
  } finally {
    await page.close();
  }
}
