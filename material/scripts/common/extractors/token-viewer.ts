// ---------------------------------------------------------------------------
// Token viewer component extractor
//
// Handles `.main-token-viewer` — the Angular token viewer widget on M3 spec
// pages. For each viewer instance:
// 1. Opens the mat-menu dropdown, discovers token set options
// 2. Iterates each option: select → expand groups → extract <token> elements
// 3. Clicks each token value to open the detail dialog and read the
//    system-level token reference
//
// Produces ComponentSection[] targeting the "Tokens & specs" heading.
// ---------------------------------------------------------------------------

import type { Locator, Page } from 'playwright';

import type { ComponentExtractor, ComponentSection } from './types';

// ---------------------------------------------------------------------------
// Browser-context function (serialized via page.evaluate)
//
// Reads tokens from a `.main-token-viewer` after the caller has selected a
// token set and expanded all groups. Must be self-contained — no imports.
// ---------------------------------------------------------------------------

function extractTokensFromViewer(opts: {
  viewerIndex: number;
  tokenRefs: Record<string, string>;
  tokenValues: Record<string, string>;
}): {
  name: string;
  content: string;
} {
  const viewers = document.querySelectorAll('.main-token-viewer');
  const viewer = viewers[opts.viewerIndex];
  if (!viewer) return { name: 'Unknown', content: '' };

  const name = viewer.querySelector('.active-token-set-button__text')?.textContent?.trim() || 'Default';

  const groups = viewer.querySelectorAll('display-group-item');
  const parts: string[] = [];

  // Build a token row from a single token element
  function tokenRow(token: Element): string[] | null {
    const displayName = token.querySelector('.display-name__text')?.textContent?.trim().replace(/\|/g, '\\|') || '';
    const tokenKey =
      token.querySelector('.token-name span')?.getAttribute('aria-label')?.trim() ||
      token.querySelector('.token-name span')?.textContent?.trim() ||
      '';
    const ref = tokenKey ? opts.tokenRefs[tokenKey] : '';
    const domValue =
      token.querySelector('.token-value-container')?.textContent?.trim().replace(/\|/g, '\\|').replace(/\n/g, ' ') ||
      '';
    const dialogValue = tokenKey ? opts.tokenValues[tokenKey] || '' : '';
    const value = ref || domValue || dialogValue;
    return tokenKey ? [displayName, tokenKey, value] : null;
  }

  // Build a markdown table from rows (including header)
  function rowsToTable(rows: string[][], groupName?: string): string {
    if (rows.length < 2) return '';
    let md = '';
    if (groupName) md += `**${groupName}**\n\n`;
    md +=
      '| ' +
      rows[0].join(' | ') +
      ' |\n' +
      '| ' +
      rows[0].map(() => '---').join(' | ') +
      ' |\n' +
      rows
        .slice(1)
        .map((r) => '| ' + r.join(' | ') + ' |')
        .join('\n') +
      '\n';
    return md;
  }

  if (groups.length > 0) {
    // Grouped layout: tokens inside display-group-item containers
    groups.forEach((group) => {
      const groupName = group.getAttribute('aria-label') || '';
      const tokens = group.querySelectorAll('token[aria-label]');
      if (tokens.length === 0) return;

      const rows: string[][] = [['Name', 'Token', 'Value']];
      tokens.forEach((token) => {
        const row = tokenRow(token);
        if (row) rows.push(row);
      });

      const md = rowsToTable(rows, groupName);
      if (md) parts.push(md);
    });
  } else {
    // Flat layout: tokens directly under the viewer (e.g. elevation, shape)
    const tokens = viewer.querySelectorAll('token[aria-label]');
    if (tokens.length > 0) {
      const rows: string[][] = [['Name', 'Token', 'Value']];
      tokens.forEach((token) => {
        const row = tokenRow(token);
        if (row) rows.push(row);
      });

      const md = rowsToTable(rows);
      if (md) parts.push(md);
    }
  }

  return { name, content: parts.join('\n') };
}

// ---------------------------------------------------------------------------
// Playwright helpers
// ---------------------------------------------------------------------------

interface TokenDialogData {
  /** System-level token references (component token → system token). */
  refs: Record<string, string>;
  /** Values extracted from the dialog for tokens with no DOM textContent. */
  values: Record<string, string>;
}

/**
 * Click each token value in a viewer to open the Angular CDK detail dialog.
 * Extracts both the system-level token reference (for component tokens) and
 * the dialog value text (for tokens whose DOM value is a visual-only custom
 * element like easing curves or duration bars).
 */
async function extractTokenDialogData(page: Page, viewer: Locator): Promise<TokenDialogData> {
  // Extract token values by clicking each token's value container in the browser
  // context. Using DOM .click() instead of Playwright locator.click() because
  // the Angular CDK dialog does not reliably open with Playwright's dispatched
  // click events on certain tokens.
  const result = await viewer.evaluate(async (viewerEl) => {
    const refs: Record<string, string> = {};
    const values: Record<string, string> = {};

    const tokens = Array.from(viewerEl.querySelectorAll('token[aria-label]'));

    for (const token of tokens) {
      const span = token.querySelector('.token-name span');
      const tokenKey = span?.getAttribute('aria-label')?.trim() || span?.textContent?.trim() || '';
      if (!tokenKey) continue;

      const vc = token.querySelector('.token-value-container') as HTMLElement | null;
      if (!vc) continue;

      vc.click();
      await new Promise((r) => setTimeout(r, 500));

      const dialog = document.querySelector('token-detail-panel-dialog');
      if (!dialog || (dialog as HTMLElement).offsetParent === null) continue;

      // System-level token reference (component → system mapping)
      const refEl = dialog.querySelector('.resolution-token-name');
      if (refEl?.textContent?.trim()) {
        refs[tokenKey] = refEl.textContent.trim();
      }

      // Resolved value (e.g. "12dp", "#6750A4", "0")
      if (!refEl?.textContent?.trim()) {
        const resEl = dialog.querySelector('.resolution-text');
        if (resEl?.textContent?.trim()) {
          values[tokenKey] = resEl.textContent.trim();
        }
      }

      // Close dialog
      const closeBtn = dialog.querySelector('button[aria-label="Close dialog"]') as HTMLElement | null;
      if (closeBtn) {
        closeBtn.click();
        await new Promise((r) => setTimeout(r, 400));
      }
    }

    return { refs, values };
  });

  // Second pass: for tokens with no value from the browser-context extraction,
  // try Playwright-based dialog interaction for visual-only values (SVG curves,
  // duration bars) that need parseDialogValue().
  const missingKeys: string[] = [];
  const tokenKeys = await viewer.evaluate((el) => {
    const tokens = el.querySelectorAll('token[aria-label]');
    return Array.from(tokens)
      .map((t) => {
        const span = t.querySelector('.token-name span');
        return span?.getAttribute('aria-label')?.trim() || span?.textContent?.trim() || '';
      })
      .filter(Boolean);
  });

  for (const key of tokenKeys) {
    if (!result.refs[key] && !result.values[key]) {
      // Check if the DOM value is non-empty (already captured by extractTokensFromViewer)
      missingKeys.push(key);
    }
  }

  if (missingKeys.length > 0) {
    for (let i = 0; i < tokenKeys.length; i++) {
      const tokenKey = tokenKeys[i]!;
      if (!missingKeys.includes(tokenKey)) continue;

      const tokenEl = viewer.locator('token[aria-label]').nth(i);
      const valueEl = tokenEl.locator('.token-value-container').first();

      try {
        await valueEl.click({ timeout: 2000, force: true });
      } catch {
        continue;
      }

      const dialogPanel = page.locator('token-detail-panel-dialog');
      try {
        await dialogPanel.waitFor({ state: 'visible', timeout: 2000 });
      } catch {
        continue;
      }

      const dialogText = await dialogPanel.evaluate((el) => el.textContent?.trim() || '').catch(() => '');
      const parsed = parseDialogValue(dialogText);
      if (parsed) {
        result.values[tokenKey] = parsed;
      }

      await page.keyboard.press('Escape');
      await dialogPanel.waitFor({ state: 'hidden', timeout: 1000 }).catch(() => {});
      await page.waitForTimeout(100);
    }
  }

  return result;
}

/**
 * Parse a token value from the detail dialog's text content.
 *
 * Dialog text patterns:
 *   "...timer  Duration MS  50ms"
 *   "...conversion_path  SVG path  M 0,0 C 0.05, 0, ..."
 *   "...speed  Cubic bezier  x0:0.3, y0:0, x1:0.8, y1:0.15"
 *   "...motion_blur  Motion path  Linear"
 */
function parseDialogValue(text: string): string | null {
  // Duration: "Duration MS  50ms"
  const durMatch = text.match(/Duration\s+MS\s+([\d.]+\s*ms)/i);
  if (durMatch) return durMatch[1]!.trim();

  // Cubic bezier: "Cubic bezier  x0:0.3, y0:0, x1:0.8, y1:0.15"
  // → format as "cubic-bezier(0.3, 0, 0.8, 0.15)"
  const bezierMatch = text.match(/Cubic\s+bezier\s+x0:([\d.]+),\s*y0:([\d.]+),\s*x1:([\d.]+),\s*y1:([\d.]+)/i);
  if (bezierMatch) return `cubic-bezier(${bezierMatch[1]}, ${bezierMatch[2]}, ${bezierMatch[3]}, ${bezierMatch[4]})`;

  // Easing SVG path: "SVG path  M 0,0 C ..."
  const svgMatch = text.match(/SVG\s+path\s+(M[\s\d.,CSLZcsz]+)/i);
  if (svgMatch) return svgMatch[1]!.trim();

  // Motion path: "Motion path  Linear" or "Motion path  Arc"
  const motionMatch = text.match(/Motion\s+path\s+(\w+)/i);
  if (motionMatch) return motionMatch[1]!.trim();

  return null;
}

/**
 * Extract all token sets from a single `.main-token-viewer` instance.
 * Opens the dropdown, iterates options, expands groups, reads tokens.
 */
async function extractViewerTokenSets(page: Page, viewer: Locator, viewerIndex: number): Promise<string[]> {
  const dropdownBtn = viewer.locator('.active-token-set-button');

  if (!(await dropdownBtn.isVisible().catch(() => false))) {
    return [];
  }

  // Switch from swatch view to list view if needed. Some token viewers
  // (e.g. motion/styles) default to a swatch layout that uses different
  // DOM structure. Clicking "view_list" toggles to the standard list
  // layout with display-group-item and token[aria-label] elements.
  const viewListBtn = viewer.locator('.token-viewer-nav button').filter({ hasText: 'view_list' });
  if (await viewListBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
    await viewListBtn.click();
    await page.waitForTimeout(1500);
  }

  // Discover options
  await dropdownBtn.click();
  await page.waitForTimeout(500);

  const optionTexts = await page.locator('[role="menuitem"] .token-set-option').allTextContents();
  const options = optionTexts.map((t) => t.trim()).filter((t) => t.length > 0);

  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);

  if (options.length === 0) return [];

  const sections: string[] = [];

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

    const { refs: tokenRefs, values: tokenValues } = await extractTokenDialogData(page, viewer);
    const tokenSet = await page.evaluate(extractTokensFromViewer, { viewerIndex, tokenRefs, tokenValues });

    if (tokenSet.content.trim()) {
      sections.push(`#### ${tokenSet.name}\n\n${tokenSet.content}`);
    }
  }

  return sections;
}

// ---------------------------------------------------------------------------
// Extractor export
// ---------------------------------------------------------------------------

export const tokenViewerExtractor: ComponentExtractor = {
  selector: '.main-token-viewer',
  tag: 'token-viewer',

  async extract(page): Promise<ComponentSection[]> {
    const viewerCount = await page.locator('.main-token-viewer').count();
    const results: ComponentSection[] = [];

    for (let vi = 0; vi < viewerCount; vi++) {
      const viewer = page.locator('.main-token-viewer').nth(vi);
      const sections = await extractViewerTokenSets(page, viewer, vi);

      if (sections.length > 0) {
        results.push({
          targetHeading: null,
          placeholder: `COMPONENT:token-viewer:${vi}`,
          content: sections.join('\n\n---\n\n'),
        });
      }
    }

    return results;
  },
};
