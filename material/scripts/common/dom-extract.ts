// ---------------------------------------------------------------------------
// Post-processing (runs in Node, not browser)
//
// Cleans up known artifacts in extracted markdown. Applied after all
// extraction is complete.
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

  // When DOM-level icon detection worked (icon → ✓/✗/⚠/★), format the label
  result = result.replace(/\n\u2713 Do\b/g, '\n\u2713 **Do:**');
  result = result.replace(new RegExp(`\n\u2717 Don${aposBoth}t\\b`, 'g'), '\n\u2717 **Don\u2019t:**');
  result = result.replace(/\n\u26A0 Caution\b/g, '\n\u26A0 **Caution:**');
  result = result.replace(/\n\u2605 Note:?\s*/g, '\n> \u2605 **Note:** ');

  // Safety net: icon name leaked as plain text
  result = result.replace(/\ncheck Do\b/g, '\n\u2713 **Do:**');
  result = result.replace(new RegExp(`\nclose Don${aposBoth}t\\b`, 'g'), '\n\u2717 **Don\u2019t:**');
  result = result.replace(/\nwarning Caution\b/g, '\n\u26A0 **Caution:**');
  result = result.replace(/\nstar Note:?\s*/g, '\n> \u2605 **Note:** ');

  return result;
}
