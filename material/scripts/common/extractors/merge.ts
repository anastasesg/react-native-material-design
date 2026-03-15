// ---------------------------------------------------------------------------
// Shared merge logic for component extractors
//
// Takes the static markdown from domToMarkdown() and merges in sections
// produced by component extractors. Each section targets a heading in the
// existing markdown — if found, the heading's body is replaced; otherwise
// the section is appended.
// ---------------------------------------------------------------------------

import type { ExtractionResult } from '../types';
import type { ComponentSection } from './types';

/**
 * Replace or append component-extracted sections into the base markdown.
 *
 * For each section:
 * - If `targetHeading` matches an existing heading, replaces that heading's
 *   body (up to the next same-level heading) with the extracted content.
 * - If `targetHeading` is not found or is null, appends to the end.
 */
export function mergeComponentSections(result: ExtractionResult, sections: ComponentSection[]): ExtractionResult {
  let markdown = result.markdown;

  for (const section of sections) {
    // Placeholder-based replacement (injected at the widget's DOM position)
    if (section.placeholder) {
      const marker = `<!-- ${section.placeholder} -->`;
      if (markdown.includes(marker)) {
        markdown = markdown.replace(marker, section.content);
        continue;
      }
      // Placeholder not found — fall through to heading/append
    }

    if (section.targetHeading) {
      markdown = replaceSectionBody(markdown, section.targetHeading, section.content);
      continue;
    }

    markdown += '\n\n' + section.content + '\n';
  }

  return { markdown, images: result.images };
}

/**
 * Find a heading matching `headingText` at any level (## or ###), replace
 * its body with `newBody`, preserving content before and after the section.
 * Falls back to appending under a new ### heading if not found.
 */
function replaceSectionBody(markdown: string, headingText: string, newBody: string): string {
  // Try exact match first, then with & ↔ "and" substitution
  const escaped = escapeRegex(headingText);
  const altEscaped = headingText.includes('&')
    ? escapeRegex(headingText.replace(/&/g, 'and'))
    : headingText.includes(' and ')
      ? escapeRegex(headingText.replace(/ and /g, ' & '))
      : null;
  const pattern = altEscaped ? `(?:${escaped}|${altEscaped})` : escaped;
  const headerPattern = new RegExp(`\n(#{2,3}) ${pattern}\n`);
  const match = markdown.match(headerPattern);

  if (!match) {
    return markdown + `\n### ${headingText}\n\n---\n\n` + newBody + '\n';
  }

  const tokensHeader = match[0];
  const headerLevel = match[1]!;
  const tokensIdx = markdown.indexOf(tokensHeader);
  const preSection = markdown.slice(0, tokensIdx + tokensHeader.length);
  const afterHeader = markdown.slice(tokensIdx + tokensHeader.length);

  // Find the end of this section (next same-level heading)
  const nextSameLevelHeading = afterHeader.indexOf('\n' + headerLevel + ' ');
  const sectionEnd = nextSameLevelHeading !== -1 ? nextSameLevelHeading : afterHeader.length;

  const postSection = afterHeader.slice(sectionEnd);

  // Extract intro paragraph (real text before garbled component content)
  const sectionContent = afterHeader.slice(0, sectionEnd);
  const firstNewline = sectionContent.indexOf('\n\n');
  const introText = firstNewline !== -1 ? sectionContent.slice(0, firstNewline).trim() : sectionContent.trim();

  const cleanIntro =
    introText.length > 0 && introText.length < 300 && !introText.includes('expand_all') ? introText : '';

  return preSection + '\n' + (cleanIntro ? cleanIntro + '\n\n' : '') + '---\n\n' + newBody + '\n' + postSection;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
