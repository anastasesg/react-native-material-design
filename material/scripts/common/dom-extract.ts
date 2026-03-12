import type { ExtractionResult } from './types';

// ---------------------------------------------------------------------------
// DOM → Markdown (browser context)
//
// IMPORTANT: This function is serialized and sent to the browser via
// page.evaluate(). It must be completely self-contained — no imports,
// no closures over external variables.
// ---------------------------------------------------------------------------

/** Extracts the main content of an M3 page to markdown + image list. */
export function domToMarkdown(): ExtractionResult {
  const main = document.querySelector('main');
  if (!main) return { markdown: '', images: [] };

  const images: Array<{ src: string; alt: string }> = [];
  let imgIdx = 0;

  // Icon font names → unicode symbols (inlined for browser context)
  const iconMap: Record<string, string> = {
    check: '\u2713',
    check_circle: '\u2713',
    close: '\u2717',
    cancel: '\u2717',
    warning: '\u26A0',
    error: '\u26A0',
    info: '\u2139',
  };

  function process(node: Node): string {
    if (!node) return '';
    if (node.nodeType === 3) return (node.textContent ?? '').trim();
    if (node.nodeType !== 1) return '';

    const el = node as HTMLElement;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return '';

    // --- Icon font detection ---
    // Material Icons/Symbols render icon names as visible text.
    // Detect by class name or computed font-family and replace with symbols.
    if (
      el.classList.contains('material-icons') ||
      el.classList.contains('material-icons-outlined') ||
      el.classList.contains('material-symbols-outlined') ||
      el.classList.contains('material-symbols-rounded') ||
      el.classList.contains('material-symbols-sharp')
    ) {
      const iconName = (el.textContent || '').trim().toLowerCase();
      return iconMap[iconName] || '';
    }
    const fontFamily = (style.fontFamily || '').toLowerCase();
    if (fontFamily.includes('material icons') || fontFamily.includes('material symbols')) {
      const iconName = (el.textContent || '').trim().toLowerCase();
      return iconMap[iconName] || '';
    }

    // --- Skip non-content elements ---
    if (el.tagName === 'NAV' || el.getAttribute('role') === 'navigation') return '';
    if (el.classList.contains('page-nav') || el.classList.contains('toc')) return '';
    if (el.getAttribute('role') === 'tablist') return '';
    if (el.getAttribute('role') === 'tooltip') return '';
    if (el.classList.contains('copy-button-container')) return '';
    if (el.classList.contains('copy-button')) return '';
    if (el.classList.contains('tooltip')) return '';
    if (el.classList.contains('badge-list')) return '';

    const role = el.getAttribute('role');
    if (role === 'button') {
      const ariaLabel = (el.getAttribute('aria-label') || '').toLowerCase();
      if (ariaLabel.includes('copy link')) return '';
      const btnText = (el.textContent || '').trim().toLowerCase();
      if (btnText === 'close' || btnText === 'resources') return '';
    }

    const tag = el.tagName.toLowerCase();
    const children = Array.from(el.childNodes).map(process).filter(Boolean);

    const hasBlockChildren = children.some((c) => c.includes('\n'));
    const text = hasBlockChildren ? children.join('\n').trim() : children.join(' ').trim();

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
            .map((li, i) => (tag === 'ol' ? i + 1 + '.' : '-') + ' ' + process(li))
            .join('\n') +
          '\n'
        );
      case 'li':
        return text;
      case 'table':
        return extractTable(el);
      case 'figure':
        return extractFigure(el, images, imgIdx++);
      case 'img':
        return extractImage(el as HTMLImageElement, images, imgIdx++);
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
        const href = (el as HTMLAnchorElement).href;
        if (!href) return text;

        // Detect card-link pattern: <a> containing a child div/element with
        // 2+ inner children (title + description). Common on M3 index pages
        // (styles, components, foundations). The <a> may also contain
        // <mio-thumbnail> (thumbnail via CSS background-image) and ripple overlays.
        for (const child of Array.from(el.children)) {
          const innerEls = Array.from(child.children);
          if (innerEls.length < 2) continue;
          const title = (innerEls[0]!.textContent || '').trim();
          const desc = innerEls
            .slice(1)
            .map((d) => (d.textContent || '').trim())
            .filter(Boolean)
            .join(' ');
          if (title && desc && title.length < 80 && desc.length > title.length) {
            // Extract thumbnail from <mio-thumbnail> sibling if present
            let thumbMd = '';
            const thumb = el.querySelector('mio-thumbnail .thumb-container');
            if (thumb) {
              const bg = window.getComputedStyle(thumb as Element).backgroundImage;
              const m = bg.match(/url\("?([^")]+)"?\)/);
              if (m?.[1]) {
                let src = m[1].replace(/[=]w\d+$/, '=s0').replace(/[=]s\d+$/, '=s0');
                if (!src.endsWith('=s0')) src += '=s0';
                images.push({ src, alt: title });
                imgIdx++;
                thumbMd = '\n![' + title + '](' + src + ')\n';
              }
            }
            return '\n## [' + title + '](' + href + ')' + thumbMd + '\n' + desc + '\n';
          }
        }

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
        return '\n' + children.join('\n').trim() + '\n';
      default:
        return text;
    }
  }

  // --- Composable element extractors ---

  function extractCellContent(cell: Element): string {
    const labeled = cell.querySelector('[aria-label]');
    const label = labeled?.getAttribute('aria-label') || '';

    const link = cell.querySelector('a');
    if (link) {
      const href = link.getAttribute('href') || '';
      const linkText = label || link.textContent?.trim() || '';
      if (href && linkText) return `[${linkText}](${href})`;
    }

    const raw = label || (cell.textContent ?? '').trim();
    return raw.replace(/\|/g, '\\|').replace(/\n/g, ' ');
  }

  function extractTable(el: HTMLElement): string {
    const headerRow = el.querySelector('thead tr');
    const tbodies = Array.from(el.querySelectorAll('tbody'));
    const rows: string[][] = [];

    if (headerRow) {
      rows.push(Array.from(headerRow.querySelectorAll('th,td')).map(extractCellContent));
    }

    const colCount = rows[0]?.length || 0;

    for (const tbody of tbodies) {
      const tbodyRows = Array.from(tbody.querySelectorAll('tr'));
      let groupLabel = '';

      for (const row of tbodyRows) {
        const cells = Array.from(row.querySelectorAll('th,td'));

        // Single-cell TH = group label row
        if (cells.length === 1 && cells[0].tagName === 'TH') {
          groupLabel = extractCellContent(cells[0]);
          continue;
        }

        const cellValues = cells.map(extractCellContent);
        if (colCount > cellValues.length) {
          cellValues.unshift(groupLabel);
          groupLabel = '';
        }
        rows.push(cellValues);
      }
    }

    // Fallback: no thead/tbody structure
    if (tbodies.length === 0 && !headerRow) {
      const allRows = Array.from(el.querySelectorAll('tr'));
      for (const row of allRows) {
        rows.push(Array.from(row.querySelectorAll('th,td')).map(extractCellContent));
      }
    }

    if (!rows.length) return '';
    const cols = Math.max(...rows.map((r) => r.length));
    const norm = rows.map((r) => {
      while (r.length < cols) r.push('');
      return r;
    });
    return (
      '\n| ' +
      norm[0].join(' | ') +
      ' |\n| ' +
      norm[0].map(() => '---').join(' | ') +
      ' |\n' +
      norm
        .slice(1)
        .map((r) => '| ' + r.join(' | ') + ' |')
        .join('\n') +
      '\n'
    );
  }

  function extractFigure(el: HTMLElement, imgs: Array<{ src: string; alt: string }>, idx: number): string {
    const img = el.querySelector('img');

    // Caption: figcaption (may contain ol/ul), or bare list in figure
    const figcap = el.querySelector('figcaption');
    let cap = '';
    if (figcap) {
      cap = extractCaptionContent(figcap);
    } else {
      const list = el.querySelector('ol, ul');
      if (list) cap = extractListCaption(list);
    }

    if (img?.src) {
      let src = img.src.replace(/[=]w\d+$/, '=s0').replace(/[=]s\d+$/, '=s0');
      if (!src.endsWith('=s0')) src += '=s0';
      const alt = img.alt || cap || 'Figure ' + (idx + 1);
      imgs.push({ src, alt });
      return '\n\n![' + alt + '](' + src + ')\n\n' + (cap ? cap + '\n' : '');
    }

    // Video: <video> with <source> children (e.g. M3 guidelines demos)
    const video = el.querySelector('video');
    const videoSrc = video?.querySelector('source')?.getAttribute('src') || video?.src;
    if (videoSrc) {
      const desc = video?.getAttribute('aria-label') || cap || 'Video ' + (idx + 1);
      return '\n\n[Video: ' + desc + '](' + videoSrc + ')\n\n' + (cap ? cap + '\n' : '');
    }

    return cap ? '\n' + cap + '\n' : '';
  }

  function extractCaptionContent(el: Element): string {
    const list = el.querySelector('ol, ul');
    if (list) return extractListCaption(list);
    return el.textContent?.trim() || '';
  }

  function extractListCaption(list: Element): string {
    const isOrdered = list.tagName === 'OL';
    return Array.from(list.querySelectorAll('li'))
      .map((li, i) => {
        const txt = li.textContent?.trim() || '';
        return isOrdered ? `${i + 1}. ${txt}` : `- ${txt}`;
      })
      .filter(Boolean)
      .join('\n');
  }

  function extractImage(el: HTMLImageElement, imgs: Array<{ src: string; alt: string }>, idx: number): string {
    if (el.closest('figure')) return '';
    let src = el.src;
    if (!src) return '';
    src = src.replace(/[=]w\d+$/, '=s0').replace(/[=]s\d+$/, '=s0');
    if (!src.endsWith('=s0')) src += '=s0';
    const alt = el.alt || 'Image ' + (idx + 1);
    imgs.push({ src, alt });
    return '\n\n![' + alt + '](' + src + ')\n\n';
  }

  // --- Run extraction ---

  const md = process(main)
    .replace(/\n{4,}/g, '\n\n\n')
    .replace(/([^\n])\n(!\[)/g, '$1\n\n$2')
    .replace(/(!\[.*?\]\(.*?\))\n([^\n])/g, '$1\n\n$2')
    .trim();
  return { markdown: md, images };
}

// ---------------------------------------------------------------------------
// Token set extraction (browser context, specs pages only)
//
// Extracts tokens from a specific `.main-token-viewer` after the caller has
// selected a token set and expanded all groups via Playwright interaction.
//
// The token viewer uses custom Angular components (<display-group-item>,
// <token>) instead of HTML tables. Each group (Enabled, Disabled, etc.)
// contains <token> elements with display name, token key, and value.
// ---------------------------------------------------------------------------

export function extractTokensFromViewer(opts: { viewerIndex: number; tokenRefs: Record<string, string> }): {
  name: string;
  content: string;
} {
  const viewers = document.querySelectorAll('.main-token-viewer');
  const viewer = viewers[opts.viewerIndex];
  if (!viewer) return { name: 'Unknown', content: '' };

  const name = viewer.querySelector('.active-token-set-button__text')?.textContent?.trim() || 'Default';

  const groups = viewer.querySelectorAll('display-group-item');
  const parts: string[] = [];

  groups.forEach((group) => {
    const groupName = group.getAttribute('aria-label') || '';
    const tokens = group.querySelectorAll('token[aria-label]');
    if (tokens.length === 0) return;

    const rows: string[][] = [['Name', 'Token', 'Value']];

    tokens.forEach((token) => {
      const displayName = token.querySelector('.display-name__text')?.textContent?.trim().replace(/\|/g, '\\|') || '';
      const tokenKey =
        token.querySelector('.token-name span')?.getAttribute('aria-label')?.trim() ||
        token.querySelector('.token-name span')?.textContent?.trim() ||
        '';
      // Use system token ref if available, otherwise fall back to raw value
      const ref = tokenKey ? opts.tokenRefs[tokenKey] : '';
      const value =
        ref ||
        token.querySelector('.token-value-container')?.textContent?.trim().replace(/\|/g, '\\|').replace(/\n/g, ' ') ||
        '';
      if (tokenKey) rows.push([displayName, tokenKey, value]);
    });

    if (rows.length < 2) return;

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
    parts.push(md);
  });

  return { name, content: parts.join('\n') };
}

// ---------------------------------------------------------------------------
// Post-processing (runs in Node, not browser)
//
// Cleans up known artifacts in extracted markdown. Applied after all
// page-type-specific extraction is complete.
// ---------------------------------------------------------------------------

/**
 * Fix icon font text leakage in do/don't callouts.
 *
 * The M3 site renders Material Icon names (e.g. "check", "close") as
 * visible icon glyphs via font-family. When the DOM extractor reads
 * textContent, the icon name leaks into the markdown as plain text:
 *
 *   check Do Use at least 3:1 contrast   →   ✓ **Do:** Use at least 3:1 contrast
 *   close Don't Use custom colors         →   ✗ **Don't:** Use custom colors
 *   warning Caution Be careful            →   ⚠ **Caution:** Be careful
 */
export function postProcessMarkdown(markdown: string, _pageType: string | null): string {
  let result = markdown;

  // Fix icon-name + Do/Don't/Caution at line start.
  // The M3 site uses curly apostrophe U+2019 in "Don\u2019t" — match both straight and curly.
  const aposBoth = "['\\u2019]"; // matches ' or \u2019

  // When DOM-level icon detection worked (icon → ✓/✗/⚠), format the label
  result = result.replace(/\n\u2713 Do\b/g, '\n\u2713 **Do:**');
  result = result.replace(new RegExp(`\n\u2717 Don${aposBoth}t\\b`, 'g'), '\n\u2717 **Don\u2019t:**');
  result = result.replace(/\n\u26A0 Caution\b/g, '\n\u26A0 **Caution:**');

  // Safety net: icon name leaked as plain text
  result = result.replace(/\ncheck Do\b/g, '\n\u2713 **Do:**');
  result = result.replace(new RegExp(`\nclose Don${aposBoth}t\\b`, 'g'), '\n\u2717 **Don\u2019t:**');
  result = result.replace(/\nwarning Caution\b/g, '\n\u26A0 **Caution:**');

  return result;
}
