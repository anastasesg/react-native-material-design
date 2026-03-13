// ---------------------------------------------------------------------------
// Shared types for DOM extraction (browser context)
// ---------------------------------------------------------------------------

/** Result returned by domToMarkdown(). */
export interface ExtractionResult {
  markdown: string;
  images: Array<{ src: string; alt: string }>;
}

/** Shared state threaded through all extractors. */
export interface ExtractContext {
  images: Array<{ src: string; alt: string }>;
  imgIdx: number;
  /** Component selectors to skip (emit placeholder instead of garbled text). */
  skipSelectors: Array<{ selector: string; tag: string }>;
  /** Tracks how many placeholders have been emitted per tag. */
  placeholderCounts: Record<string, number>;
  process: (node: Node) => string;
}
