#!/usr/bin/env bun
/**
 * Query M3 documentation files
 *
 * Subcommands:
 *   list [--category=X] [--section=X] [--page-type=X]  List docs with metadata
 *   search <query> [--category=X] [--section=X] [--regex]  Full-text search
 *   outline <path>                                       Headings + frontmatter
 *   sections [--category=X]                              List unique sections
 *   related <section>                                    All docs for a section
 *
 * Flags:
 *   --json    Output as JSON instead of plain text
 *
 * Usage:
 *   bun scripts/query-m3-docs.ts list --category=components
 *   bun scripts/query-m3-docs.ts search "elevation" --category=styles
 *   bun scripts/query-m3-docs.ts outline docs/components/buttons/specs.md
 *   bun scripts/query-m3-docs.ts sections
 *   bun scripts/query-m3-docs.ts related buttons
 */

/// <reference types="@types/bun" />

import { existsSync } from 'node:fs';

import { parseFrontmatter } from './common/frontmatter';
import { loadSitemap } from './common/sitemap';
import type { SitemapOutput, SitemapPage } from './common/types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function extractHeadings(content: string): Array<{ level: number; text: string }> {
  const headings: Array<{ level: number; text: string }> = [];
  const body = content.replace(/^---\n[\s\S]*?\n---\n?/, '');

  for (const line of body.split('\n')) {
    const match = line.match(/^(#{1,6})\s+(.+)/);
    if (match) {
      headings.push({ level: match[1].length, text: match[2].trim() });
    }
  }

  return headings;
}

function getPages(
  sitemap: SitemapOutput,
  filters: {
    category?: string;
    section?: string;
    pageType?: string;
  },
): SitemapPage[] {
  return sitemap.categories
    .filter((c) => !filters.category || c.category === filters.category)
    .flatMap((c) => c.pages)
    .filter((p) => !filters.section || p.section === filters.section)
    .filter((p) => !filters.pageType || p.page_type === filters.pageType);
}

function parseArgs(args: string[]): {
  subcommand: string;
  positional: string[];
  flags: Record<string, string | boolean>;
} {
  const flags: Record<string, string | boolean> = {};
  const positional: string[] = [];
  let subcommand = '';

  for (const arg of args) {
    if (!subcommand && !arg.startsWith('-')) {
      subcommand = arg;
    } else if (arg.startsWith('--')) {
      const eqIndex = arg.indexOf('=');
      if (eqIndex !== -1) {
        flags[arg.slice(2, eqIndex)] = arg.slice(eqIndex + 1);
      } else {
        flags[arg.slice(2)] = true;
      }
    } else {
      positional.push(arg);
    }
  }

  return { subcommand, positional, flags };
}

// ---------------------------------------------------------------------------
// Subcommands
// ---------------------------------------------------------------------------

async function cmdList(flags: Record<string, string | boolean>, jsonOutput: boolean) {
  const sitemap = await loadSitemap();
  const pages = getPages(sitemap, {
    category: flags.category as string | undefined,
    section: flags.section as string | undefined,
    pageType: flags['page-type'] as string | undefined,
  });

  if (jsonOutput) {
    console.log(JSON.stringify(pages, null, 2));
    return;
  }

  const pathW = Math.max(4, ...pages.map((p) => p.output_path.length));
  const secW = Math.max(7, ...pages.map((p) => (p.section ?? '-').length));
  const typeW = Math.max(9, ...pages.map((p) => (p.page_type ?? '-').length));

  console.log(`${'PATH'.padEnd(pathW)}  ${'SECTION'.padEnd(secW)}  ${'PAGE_TYPE'.padEnd(typeW)}`);
  console.log('-'.repeat(pathW + secW + typeW + 4));

  for (const p of pages) {
    console.log(
      `${p.output_path.padEnd(pathW)}  ${(p.section ?? '-').padEnd(secW)}  ${(p.page_type ?? '-').padEnd(typeW)}`,
    );
  }

  console.log(`\n${pages.length} docs`);
}

async function cmdSearch(positional: string[], flags: Record<string, string | boolean>, jsonOutput: boolean) {
  if (positional.length === 0) {
    console.error('Error: search requires a query argument');
    console.error('Usage: bun scripts/query-m3-docs.ts search <query>');
    process.exit(1);
  }

  const query = positional.join(' ');
  const useRegex = flags.regex === true;
  const sitemap = await loadSitemap();
  const pages = getPages(sitemap, {
    category: flags.category as string | undefined,
    section: flags.section as string | undefined,
  });

  const contextLines = 1;
  const results: Array<{
    path: string;
    matches: Array<{ line: number; text: string; context: string[] }>;
  }> = [];

  const fileContents = await Promise.all(
    pages
      .filter((p) => existsSync(p.output_path))
      .map(async (p) => ({
        path: p.output_path,
        content: await Bun.file(p.output_path).text(),
      })),
  );

  let pattern: RegExp | null = null;
  if (useRegex) {
    try {
      pattern = new RegExp(query, 'gi');
    } catch {
      console.error(`Error: Invalid regex pattern: ${query}`);
      process.exit(1);
    }
  }

  for (const { path, content } of fileContents) {
    const lines = content.split('\n');
    const matches: Array<{
      line: number;
      text: string;
      context: string[];
    }> = [];

    for (let i = 0; i < lines.length; i++) {
      const hit = useRegex ? pattern!.test(lines[i]) : lines[i].toLowerCase().includes(query.toLowerCase());

      if (useRegex) pattern!.lastIndex = 0;

      if (hit) {
        const ctxStart = Math.max(0, i - contextLines);
        const ctxEnd = Math.min(lines.length - 1, i + contextLines);
        const context: string[] = [];
        for (let j = ctxStart; j <= ctxEnd; j++) {
          context.push(`${j === i ? '>' : ' '} ${lines[j]}`);
        }
        matches.push({ line: i + 1, text: lines[i], context });
      }
    }

    if (matches.length > 0) {
      results.push({ path, matches });
    }
  }

  if (jsonOutput) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }

  if (results.length === 0) {
    console.log(`No matches for "${query}"`);
    return;
  }

  let totalMatches = 0;
  for (const result of results) {
    console.log(`\n${result.path} (${result.matches.length} matches)`);
    for (const m of result.matches) {
      console.log(`  Line ${m.line}:`);
      for (const ctx of m.context) {
        console.log(`    ${ctx}`);
      }
    }
    totalMatches += result.matches.length;
  }

  console.log(`\n${totalMatches} matches in ${results.length} files`);
}

async function cmdOutline(positional: string[], jsonOutput: boolean) {
  if (positional.length === 0) {
    console.error('Error: outline requires a file path argument');
    console.error('Usage: bun scripts/query-m3-docs.ts outline <path>');
    process.exit(1);
  }

  const filePath = positional[0];
  if (!existsSync(filePath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
  }

  const content = await Bun.file(filePath).text();
  const frontmatter = parseFrontmatter(content);
  const headings = extractHeadings(content);

  if (jsonOutput) {
    console.log(JSON.stringify({ frontmatter, headings }, null, 2));
    return;
  }

  if (frontmatter) {
    console.log('Frontmatter:');
    for (const [key, value] of Object.entries(frontmatter)) {
      console.log(`  ${key}: ${value ?? 'null'}`);
    }
    console.log();
  }

  console.log('Headings:');
  for (const h of headings) {
    const indent = '  '.repeat(h.level - 1);
    console.log(`${indent}${'#'.repeat(h.level)} ${h.text}`);
  }
}

async function cmdSections(flags: Record<string, string | boolean>, jsonOutput: boolean) {
  const sitemap = await loadSitemap();

  const grouped: Record<string, string[]> = {};

  for (const cat of sitemap.categories) {
    if (flags.category && cat.category !== flags.category) continue;

    const sections = new Set<string>();
    for (const page of cat.pages) {
      if (page.section) sections.add(page.section);
    }

    if (sections.size > 0) {
      grouped[cat.category] = [...sections].sort();
    }
  }

  if (jsonOutput) {
    console.log(JSON.stringify(grouped, null, 2));
    return;
  }

  for (const [category, sections] of Object.entries(grouped)) {
    console.log(`${category} (${sections.length}):`);
    for (const section of sections) {
      console.log(`  ${section}`);
    }
    console.log();
  }
}

async function cmdRelated(positional: string[], jsonOutput: boolean) {
  if (positional.length === 0) {
    console.error('Error: related requires a section argument');
    console.error('Usage: bun scripts/query-m3-docs.ts related <section>');
    process.exit(1);
  }

  const section = positional[0];
  const sitemap = await loadSitemap();

  const pages = sitemap.categories.flatMap((c) => c.pages).filter((p) => p.section === section);

  if (pages.length === 0) {
    const allSections = new Set(
      sitemap.categories
        .flatMap((c) => c.pages)
        .map((p) => p.section)
        .filter(Boolean) as string[],
    );
    const suggestions = [...allSections].filter((s) => s.includes(section));

    console.error(`No docs found for section "${section}"`);
    if (suggestions.length > 0) {
      console.error(`Did you mean: ${suggestions.join(', ')}?`);
    }
    process.exit(1);
  }

  if (jsonOutput) {
    console.log(JSON.stringify(pages, null, 2));
    return;
  }

  console.log(`${section} (${pages[0].category}):\n`);

  const pathW = Math.max(...pages.map((p) => p.output_path.length));
  for (const p of pages) {
    console.log(`  ${p.output_path.padEnd(pathW)}  ${p.page_type ?? '(index)'}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function printUsage() {
  console.log(`Usage: bun scripts/query-m3-docs.ts <subcommand> [options]

Subcommands:
  list [--category=X] [--section=X] [--page-type=X]
      List available docs with metadata

  search <query> [--category=X] [--section=X] [--regex]
      Full-text search across docs

  outline <path>
      Show headings outline and frontmatter of a doc

  sections [--category=X]
      List all unique sections grouped by category

  related <section>
      Get all docs for a component/topic

Global flags:
  --json    Output as JSON`);
}

async function main() {
  const { subcommand, positional, flags } = parseArgs(process.argv.slice(2));
  const jsonOutput = flags.json === true;

  switch (subcommand) {
    case 'list':
      await cmdList(flags, jsonOutput);
      break;
    case 'search':
      await cmdSearch(positional, flags, jsonOutput);
      break;
    case 'outline':
      await cmdOutline(positional, jsonOutput);
      break;
    case 'sections':
      await cmdSections(flags, jsonOutput);
      break;
    case 'related':
      await cmdRelated(positional, jsonOutput);
      break;
    default:
      if (subcommand) {
        console.error(`Unknown subcommand: ${subcommand}\n`);
      }
      printUsage();
      process.exit(subcommand ? 1 : 0);
  }
}

main().catch(console.error);
