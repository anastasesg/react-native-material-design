// ---------------------------------------------------------------------------
// Runtime bundler — bundles DOM extractors into a self-contained browser
// script using Bun.build(). Called once per extraction session.
//
// This file runs in Node/Bun context, NOT in the browser.
// ---------------------------------------------------------------------------

import { resolve } from 'path';

let cachedBundle: string | null = null;

/**
 * Bundles all DOM extractor modules into a single IIFE string.
 * The result assigns exports to `globalThis.__domExtract`.
 * Cached after first call — safe to call repeatedly.
 */
export async function bundleDomExtract(): Promise<string> {
  if (cachedBundle) return cachedBundle;

  const entrypoint = resolve(import.meta.dir, 'index.ts');
  const result = await Bun.build({
    entrypoints: [entrypoint],
    target: 'browser',
    format: 'iife',
  });

  if (!result.success) {
    const errors = result.logs.map((l) => l.message).join('\n');
    throw new Error('Failed to bundle DOM extractors:\n' + errors);
  }

  cachedBundle = await result.outputs[0]!.text();
  return cachedBundle;
}
