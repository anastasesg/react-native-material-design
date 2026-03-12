/// <reference types="@types/bun" />

// ---------------------------------------------------------------------------
// Sitemap types
// ---------------------------------------------------------------------------

export interface SitemapPage {
  url: string;
  lastmod: string | null;
  category: 'components' | 'foundations' | 'styles';
  section: string | null;
  page_type: string | null;
  output_path: string;
}

export interface SitemapOutput {
  metadata: { sitemap_url: string; extracted_at: string; total_pages: number };
  summary: Array<{ category: string; count: number }>;
  categories: Array<{
    category: string;
    count: number;
    pages: SitemapPage[];
  }>;
}

// ---------------------------------------------------------------------------
// Extraction types
// ---------------------------------------------------------------------------

export interface ExtractionResult {
  markdown: string;
  images: Array<{ src: string; alt: string }>;
}

export interface QualityResult {
  issues: string[];
  needsReextract: boolean;
}

// ---------------------------------------------------------------------------
// CLI types
// ---------------------------------------------------------------------------

export interface Flags {
  skipExisting: boolean;
  force: boolean;
  pageType: string | null;
  category: string | null;
  update: boolean;
  analyze: boolean;
  headed: boolean;
}
