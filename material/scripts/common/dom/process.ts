// ---------------------------------------------------------------------------
// Tree-walker — recursively processes DOM nodes into markdown
// ---------------------------------------------------------------------------

import { extractCardLink } from './extractors/card-link';
import { extractFigure, extractImage } from './extractors/figure';
import { extractTable } from './extractors/table';
import { shouldSkip } from './filters';
import { resolveIcon } from './icons';
import type { ExtractContext } from './types';

/** Returns true if a computed display value indicates block-level rendering. */
function isBlockDisplay(display: string): boolean {
  return display === 'block' || display === 'flex' || display === 'grid' || display === 'flow-root';
}

/**
 * Join children with appropriate spacing.
 * Inline children are joined with spaces. Block children (those containing
 * newlines) are joined with a single newline, then runs of 3+ newlines are
 * collapsed to exactly 2 (one blank line between blocks).
 *
 * No .trim() — block-level newlines from extractors must survive through
 * custom element wrappers (e.g. <mio-figure>, <mio-video>) so that the
 * parent can detect and space them properly.
 */
function joinChildren(children: string[]): string {
  if (children.length === 0) return '';

  const hasBlock = children.some((c) => c.includes('\n'));
  if (!hasBlock) return children.join(' ').trim();

  return children.join('\n').replace(/\n{3,}/g, '\n\n');
}

export function process(node: Node, ctx: ExtractContext): string {
  if (!node) return '';
  if (node.nodeType === 3) return (node.textContent ?? '').trim();
  if (node.nodeType !== 1) return '';

  const el = node as HTMLElement;
  const style = window.getComputedStyle(el);
  if (style.display === 'none' || style.visibility === 'hidden') return '';

  // Icon font detection
  const icon = resolveIcon(el, style);
  if (icon !== null) return icon;

  // Skip non-content elements
  if (shouldSkip(el)) return '';

  // Component placeholder — skip interactive widgets handled by Playwright extractors
  for (const skip of ctx.skipSelectors) {
    if (el.matches(skip.selector)) {
      const idx = ctx.placeholderCounts[skip.tag] ?? 0;
      ctx.placeholderCounts[skip.tag] = idx + 1;
      return `\n<!-- COMPONENT:${skip.tag}:${idx} -->\n`;
    }
  }

  const tag = el.tagName.toLowerCase();
  const children = Array.from(el.childNodes)
    .map((n) => ctx.process(n))
    .filter(Boolean);

  const text = joinChildren(children);

  switch (tag) {
    case 'h1':
      return '\n# ' + text + '\n';
    case 'h2':
      return '\n## ' + text + '\n';
    case 'h3':
      return '\n### ' + text + '\n';
    case 'h4':
      return '\n#### ' + text + '\n';
    case 'h5':
    case 'h6':
      return '\n##### ' + text + '\n';
    case 'p':
      return '\n' + text + '\n';
    case 'ul':
    case 'ol':
      return (
        '\n' +
        Array.from(el.children)
          .map((li, i) => (tag === 'ol' ? i + 1 + '.' : '-') + ' ' + ctx.process(li))
          .join('\n') +
        '\n'
      );
    case 'li':
      return text;
    case 'table':
      return extractTable(el);
    case 'figure':
      return extractFigure(el, ctx);
    case 'img':
      return extractImage(el as HTMLImageElement, ctx);
    case 'strong':
    case 'b':
      return '**' + text + '**';
    case 'em':
    case 'i':
      return '_' + text + '_';
    case 'code':
      return '`' + text + '`';
    case 'pre':
      return '\n```\n' + text + '\n```\n';
    case 'a': {
      const cardLink = extractCardLink(el as HTMLAnchorElement, ctx);
      if (cardLink) return cardLink;
      const href = (el as HTMLAnchorElement).href;
      if (!href) return text;
      return text ? '[' + text + '](' + href + ')' : text;
    }
    case 'br':
      return ' ';
    case 'hr':
      return '\n---\n';
    case 'blockquote':
      return '\n> ' + text.split('\n').join('\n> ') + '\n';
    case 'section':
    case 'article':
      return '\n' + text + '\n';
    default: {
      // For block-level containers (div, etc.), ensure proper spacing
      if (isBlockDisplay(style.display) && children.some((c) => c.includes('\n'))) {
        return '\n' + text + '\n';
      }
      return text;
    }
  }
}
