/**
 * Check whether an image URL is a real asset (not a fabricated slug-based URL).
 *
 * Valid sources:
 *   - Firebase Storage URLs
 *   - Google User Content URLs with long hash paths (not readable slugs)
 */
export function isValidImageUrl(url: string): boolean {
  if (!url) return false;
  if (url.startsWith('https://firebasestorage.googleapis.com/')) return true;
  if (url.startsWith('https://lh3.googleusercontent.com/')) {
    const path = url.replace('https://lh3.googleusercontent.com/', '').replace(/[=]s0$/, '');
    if (path.length < 30) return false;
    if ((path.match(/-/g) || []).length > path.length / 10) return false;
    return true;
  }
  return false;
}

/**
 * Replace invalid image URLs in markdown with HTML comments.
 */
export function sanitizeMarkdownImages(markdown: string, images: Array<{ src: string; alt: string }>): string {
  let result = markdown;
  for (const img of images) {
    if (!isValidImageUrl(img.src)) {
      result = result.replace(`![${img.alt}](${img.src})`, `<!-- Image: ${img.alt} - extraction failed -->`);
    }
  }
  return result;
}
