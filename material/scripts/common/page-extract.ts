import type { Browser, Locator, Page } from 'playwright';

import { domToMarkdown, extractTokensFromViewer, postProcessMarkdown } from './dom-extract';
import { buildFrontmatter } from './frontmatter';
import { isValidImageUrl, sanitizeMarkdownImages } from './images';
import { writeOutput } from './output';
import type { ExtractionResult, SitemapPage } from './types';

// ---------------------------------------------------------------------------
// Shared browser helpers
// ---------------------------------------------------------------------------

async function scrollPage(page: Page): Promise<void> {
  await page.keyboard.press('End');
  await page.waitForTimeout(2000);
  await page.keyboard.press('Home');
  await page.waitForTimeout(1000);
}

// ---------------------------------------------------------------------------
// Token reference extraction via Playwright clicks
//
// Angular's token detail dialog only opens from real pointer events, so we
// must use Playwright's click() rather than HTMLElement.click() in evaluate.
// For each <token> element in a viewer, clicks the value to open the dialog,
// reads the first .resolution-token-name (the system-level token), then
// closes the dialog.
// ---------------------------------------------------------------------------

async function extractTokenRefsViaPlaywright(page: Page, viewer: Locator): Promise<Record<string, string>> {
  const refs: Record<string, string> = {};

  // Get all token keys from the viewer
  const tokenKeys = await viewer.evaluate((el) => {
    const tokens = el.querySelectorAll('token[aria-label]');
    return Array.from(tokens)
      .map((t) => {
        const span = t.querySelector('.token-name span');
        return span?.getAttribute('aria-label')?.trim() || span?.textContent?.trim() || '';
      })
      .filter(Boolean);
  });

  for (let i = 0; i < tokenKeys.length; i++) {
    const tokenKey = tokenKeys[i]!;

    // Click the value container (force: true bypasses CDK overlay interception)
    const tokenEl = viewer.locator('token[aria-label]').nth(i);
    const valueEl = tokenEl.locator('.token-value-container').first();

    try {
      await valueEl.click({ timeout: 2000, force: true });
    } catch {
      continue;
    }

    // Wait for the Angular CDK dialog panel to render
    const dialogPanel = page.locator('token-detail-panel-dialog');
    try {
      await dialogPanel.waitFor({ state: 'visible', timeout: 1000 });
    } catch {
      continue;
    }

    // Extract the first system-level token reference
    const refText = await dialogPanel
      .locator('.resolution-token-name')
      .first()
      .textContent({ timeout: 500 })
      .catch(() => null);
    if (refText?.trim()) {
      refs[tokenKey] = refText.trim();
    }

    // Close via Escape (dismisses CDK overlay + dialog)
    await page.keyboard.press('Escape');
    await page.waitForTimeout(50);
  }

  return refs;
}

// ---------------------------------------------------------------------------
// Overview / Guidelines / Accessibility extraction
//
// Standard flow: navigate → scroll → evaluate domToMarkdown → post-process.
// Works for any page type that doesn't need special DOM interaction.
// ---------------------------------------------------------------------------

export async function extractStandardPage(page: Page, url: string): Promise<ExtractionResult> {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('main', { timeout: 30000 });
  await page.waitForTimeout(3000);
  await scrollPage(page);
  return page.evaluate(domToMarkdown);
}

// ---------------------------------------------------------------------------
// Specs page extraction
//
// Specs pages use a custom Angular token viewer component. The workflow:
// 1. Extract the full page (gets non-token sections via domToMarkdown)
// 2. Find all .main-token-viewer blocks (current + deprecated)
// 3. For each viewer: open its mat-menu dropdown, discover token set options
// 4. Iterate each option: select → expand groups → extract <token> elements
// 5. Combine the full page content with per-option token sections
// ---------------------------------------------------------------------------

export async function extractSpecsPage(page: Page, url: string): Promise<ExtractionResult> {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('main', { timeout: 30000 });
  await page.waitForTimeout(4000);

  // Full page content (non-token sections)
  await scrollPage(page);
  const fullResult = await page.evaluate(domToMarkdown);

  // Find token viewers
  const viewerCount = await page.locator('.main-token-viewer').count();

  if (viewerCount === 0) {
    return fullResult;
  }

  const tokenSections: string[] = [];

  for (let vi = 0; vi < viewerCount; vi++) {
    const viewer = page.locator('.main-token-viewer').nth(vi);
    const dropdownBtn = viewer.locator('.active-token-set-button');

    if (!(await dropdownBtn.isVisible().catch(() => false))) {
      continue;
    }

    // Discover options by opening the mat-menu
    await dropdownBtn.click();
    await page.waitForTimeout(500);

    const optionTexts = await page.locator('[role="menuitem"] .token-set-option').allTextContents();

    const options = optionTexts.map((t) => t.trim()).filter((t) => t.length > 0);

    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    if (options.length === 0) continue;

    // Iterate each token set option
    for (const optionText of options) {
      await dropdownBtn.click();
      await page.waitForTimeout(500);

      const menuItem = page.locator('[role="menuitem"]').filter({ hasText: optionText }).first();

      try {
        await menuItem.click({ timeout: 3000 });
      } catch {
        console.warn(`    Warning: could not select "${optionText}", skipping`);
        await page.keyboard.press('Escape');
        await page.waitForTimeout(300);
        continue;
      }

      await page.waitForTimeout(2000);

      // Expand all groups
      const expandBtn = viewer.locator('.token-viewer-nav button').filter({ hasText: 'expand_all' });

      if (await expandBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
        await expandBtn.click();
        await page.waitForTimeout(1500);
      }

      // Scroll to load all token content
      await page.keyboard.press('End');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Home');
      await page.waitForTimeout(500);

      // Click each token to extract system-level token references from dialogs
      const tokenRefs = await extractTokenRefsViaPlaywright(page, viewer);

      const tokenSet = await page.evaluate(extractTokensFromViewer, { viewerIndex: vi, tokenRefs });

      if (tokenSet.content.trim()) {
        tokenSections.push(`#### ${tokenSet.name}\n\n${tokenSet.content}`);
      }
    }
  }

  if (tokenSections.length === 0) {
    return fullResult;
  }

  // Merge: replace the default token section with all iterated sets
  return mergeTokenSections(fullResult, tokenSections);
}

function mergeTokenSections(fullResult: ExtractionResult, tokenSections: string[]): ExtractionResult {
  // Match "Tokens & specs" at any heading level (## or ###)
  const headerPattern = /\n(#{2,3}) Tokens & specs\n/;
  const match = fullResult.markdown.match(headerPattern);

  if (!match) {
    // No header found — append
    const tokenBlock = '\n### Tokens & specs\n\n---\n\n' + tokenSections.join('\n\n---\n\n') + '\n';
    return {
      markdown: fullResult.markdown + tokenBlock,
      images: fullResult.images,
    };
  }

  const tokensHeader = match[0]; // includes surrounding newlines
  const headerLevel = match[1]; // "##" or "###"
  const tokensIdx = fullResult.markdown.indexOf(tokensHeader);
  const preTokens = fullResult.markdown.slice(0, tokensIdx + tokensHeader.length);
  const afterHeader = fullResult.markdown.slice(tokensIdx + tokensHeader.length);

  // Find the intro paragraph (text before the garbled token viewer content)
  // The intro ends at the first line that looks like token viewer noise
  // or at the next same-level heading.
  const nextSameLevelHeading = afterHeader.indexOf('\n' + headerLevel + ' ');
  const sectionEnd = nextSameLevelHeading !== -1 ? nextSameLevelHeading : afterHeader.length;

  // Content after the token section that should be preserved
  const postTokens = afterHeader.slice(sectionEnd);

  // Extract intro text: first paragraph before garbled content or sub-headings
  const sectionContent = afterHeader.slice(0, sectionEnd);
  const firstNewline = sectionContent.indexOf('\n\n');
  const introText = firstNewline !== -1 ? sectionContent.slice(0, firstNewline).trim() : sectionContent.trim();

  // Only keep the intro if it looks like a real sentence (not token viewer garbage)
  const cleanIntro =
    introText.length > 0 && introText.length < 300 && !introText.includes('expand_all') ? introText : '';

  const combined =
    preTokens +
    '\n' +
    (cleanIntro ? cleanIntro + '\n\n' : '') +
    '---\n\n' +
    tokenSections.join('\n\n---\n\n') +
    '\n' +
    postTokens;

  return { markdown: combined, images: fullResult.images };
}

// ---------------------------------------------------------------------------
// Dispatcher — picks the right extractor based on page type
// ---------------------------------------------------------------------------

async function extractByType(page: Page, sitemapPage: SitemapPage): Promise<ExtractionResult> {
  switch (sitemapPage.page_type) {
    case 'specs':
      return extractSpecsPage(page, sitemapPage.url);
    default:
      // overview, guidelines, accessibility, xr, null
      return extractStandardPage(page, sitemapPage.url);
  }
}

// ---------------------------------------------------------------------------
// Single-page orchestrator
//
// Opens a tab, extracts, post-processes, validates images, writes output.
// ---------------------------------------------------------------------------

export async function extractOnePage(browser: Browser, sitemapPage: SitemapPage): Promise<'ok' | 'partial' | 'failed'> {
  const page = await browser.newPage();

  try {
    let result = await extractByType(page, sitemapPage);

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
