// ---------------------------------------------------------------------------
// DOM → Markdown entry point
//
// This module is bundled at runtime into a self-contained browser script
// via Bun.build(). All imports are resolved at bundle time — the output
// has zero dependencies and runs in Playwright's page.evaluate() context.
// ---------------------------------------------------------------------------

import { process } from './process';

/** Extracts the main content of an M3 page to markdown + image list. */
function domToMarkdown(skipSelectors?: Array<{ selector: string; tag: string }>) {
  const main = document.querySelector('main');
  if (!main) return { markdown: '', images: [] as Array<{ src: string; alt: string }> };

  const ctx = {
    images: [] as Array<{ src: string; alt: string }>,
    imgIdx: 0,
    skipSelectors: skipSelectors || [],
    placeholderCounts: {} as Record<string, number>,
    process: (node: Node) => process(node, ctx),
  };

  const md = ctx
    .process(main)
    .replace(/\n{4,}/g, '\n\n\n')
    .replace(/([^\n])\n(!\[)/g, '$1\n\n$2')
    .replace(/(!\[.*?\]\(.*?\))\n([^\n])/g, '$1\n\n$2')
    .trim();

  return { markdown: md, images: ctx.images };
}

// Expose on globalThis for access via page.evaluate() after script injection
(globalThis as any).__domExtract = { domToMarkdown };
