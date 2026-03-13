// ---------------------------------------------------------------------------
// Caption extraction — figcaption, ordered/unordered lists as captions
// ---------------------------------------------------------------------------

export function extractListCaption(list: Element): string {
  const isOrdered = list.tagName === 'OL';
  return Array.from(list.querySelectorAll('li'))
    .map((li, i) => {
      const txt = li.textContent?.trim() || '';
      return isOrdered ? `${i + 1}. ${txt}` : `- ${txt}`;
    })
    .filter(Boolean)
    .join('\n');
}

export function extractCaptionContent(el: Element): string {
  const list = el.querySelector('ol, ul');
  if (list) return extractListCaption(list);
  return el.textContent?.trim() || '';
}
