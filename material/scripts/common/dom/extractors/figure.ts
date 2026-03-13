// ---------------------------------------------------------------------------
// Figure, video, and image extraction
// ---------------------------------------------------------------------------

import type { ExtractContext } from '../types';
import { extractCaptionContent, extractListCaption } from './caption';

/** Extract caption text from a figure element. Checks figcaption first, then bare lists. */
function getFigureCaption(el: HTMLElement): string {
  const figcap = el.querySelector('figcaption');
  if (figcap) return extractCaptionContent(figcap);

  const list = el.querySelector('ol, ul');
  if (list) return extractListCaption(list);

  return '';
}

/** Normalize Google User Content image URLs — strip size params for full resolution. */
function normalizeImageSrc(src: string): string {
  let normalized = src.replace(/[=]w\d+$/, '=s0').replace(/[=]s\d+$/, '=s0');
  if (!normalized.endsWith('=s0')) normalized += '=s0';
  return normalized;
}

export function extractFigure(el: HTMLElement, ctx: ExtractContext): string {
  const img = el.querySelector('img');
  const cap = getFigureCaption(el);

  // Image figure
  if (img?.src) {
    const src = normalizeImageSrc(img.src);
    const alt = img.alt || cap || 'Figure ' + (ctx.imgIdx + 1);
    ctx.images.push({ src, alt });
    ctx.imgIdx++;
    return '\n\n![' + alt + '](' + src + ')\n\n' + (cap ? cap + '\n' : '');
  }

  // Video figure — prefer caption over aria-label for description.
  // M3 captions provide semantic meaning ("Spatial springs apply to movement")
  // while aria-labels describe the visual ("A shape bounces into place"), and
  // are sometimes swapped between figures (Google bug).
  const video = el.querySelector('video');
  const videoSrc = video?.querySelector('source')?.getAttribute('src') || video?.src;
  if (videoSrc) {
    const desc = cap || video?.getAttribute('aria-label') || 'Video ' + (ctx.imgIdx + 1);
    ctx.imgIdx++;
    return '\n\n[Video: ' + desc + '](' + videoSrc + ')\n\n';
  }

  return cap ? '\n' + cap + '\n' : '';
}

export function extractImage(el: HTMLImageElement, ctx: ExtractContext): string {
  if (el.closest('figure')) return '';
  let src = el.src;
  if (!src) return '';
  src = normalizeImageSrc(src);
  const alt = el.alt || 'Image ' + (ctx.imgIdx + 1);
  ctx.images.push({ src, alt });
  ctx.imgIdx++;
  return '\n\n![' + alt + '](' + src + ')\n\n';
}
