// ---------------------------------------------------------------------------
// Card-link extraction — detects M3 index page card patterns
//
// On index pages (styles, components, foundations), <a> elements contain
// child divs with 2+ inner children (title + description), and optionally
// <mio-thumbnail> elements with CSS background-image thumbnails.
// ---------------------------------------------------------------------------

import type { ExtractContext } from '../types';

export function extractCardLink(el: HTMLAnchorElement, ctx: ExtractContext): string | null {
  const href = el.href;
  if (!href) return null;

  for (const child of Array.from(el.children)) {
    const innerEls = Array.from(child.children);
    if (innerEls.length < 2) continue;

    const title = (innerEls[0]!.textContent || '').trim();
    const desc = innerEls
      .slice(1)
      .map((d) => (d.textContent || '').trim())
      .filter(Boolean)
      .join(' ');

    if (!title || !desc || title.length >= 80 || desc.length <= title.length) continue;

    // Extract thumbnail from <mio-thumbnail> sibling if present
    let thumbMd = '';
    const thumb = el.querySelector('mio-thumbnail .thumb-container');
    if (thumb) {
      const bg = window.getComputedStyle(thumb as Element).backgroundImage;
      const m = bg.match(/url\("?([^")]+)"?\)/);
      if (m?.[1]) {
        let src = m[1].replace(/[=]w\d+$/, '=s0').replace(/[=]s\d+$/, '=s0');
        if (!src.endsWith('=s0')) src += '=s0';
        ctx.images.push({ src, alt: title });
        ctx.imgIdx++;
        thumbMd = '\n![' + title + '](' + src + ')\n';
      }
    }

    return '\n## [' + title + '](' + href + ')' + thumbMd + '\n' + desc + '\n';
  }

  return null;
}
