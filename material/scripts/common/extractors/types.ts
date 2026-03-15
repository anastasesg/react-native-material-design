// ---------------------------------------------------------------------------
// Component extractor types (Playwright level)
//
// Each extractor targets a specific interactive Angular component on the M3
// site. The orchestrator detects components by selector and delegates
// extraction, then merges the results into the static markdown.
// ---------------------------------------------------------------------------

import type { Page } from 'playwright';

import type { ExtractionResult } from '../types';

/** A section of markdown produced by a component extractor. */
export interface ComponentSection {
  /** Heading to match in the existing markdown for replacement. null = append. */
  targetHeading: string | null;
  /** Placeholder marker to replace (alternative to targetHeading). */
  placeholder?: string;
  /** Extracted markdown content. */
  content: string;
}

/** Contract for a component-level Playwright extractor. */
export interface ComponentExtractor {
  /** CSS selector to detect the component on the page. */
  selector: string;
  /** Short identifier used in DOM placeholders (e.g. "token-viewer"). */
  tag: string;
  /** Extract structured sections from all instances of the component. */
  extract: (page: Page, result: ExtractionResult) => Promise<ComponentSection[]>;
}
