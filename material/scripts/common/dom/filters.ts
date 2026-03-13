// ---------------------------------------------------------------------------
// Element filtering — skip non-content elements (navigation, tooltips, etc.)
// ---------------------------------------------------------------------------

/** Returns true if the element should be skipped entirely. */
export function shouldSkip(el: HTMLElement): boolean {
  if (el.tagName === 'NAV' || el.getAttribute('role') === 'navigation') return true;
  if (el.classList.contains('page-nav') || el.classList.contains('toc')) return true;
  if (el.getAttribute('role') === 'tablist') return true;
  if (el.getAttribute('role') === 'tooltip') return true;
  if (el.classList.contains('copy-button-container')) return true;
  if (el.classList.contains('copy-button')) return true;
  if (el.classList.contains('tooltip')) return true;
  if (el.classList.contains('badge-list')) return true;

  const role = el.getAttribute('role');
  if (role === 'button') {
    const ariaLabel = (el.getAttribute('aria-label') || '').toLowerCase();
    if (ariaLabel.includes('copy link')) return true;
    const btnText = (el.textContent || '').trim().toLowerCase();
    if (btnText === 'close' || btnText === 'resources') return true;
  }

  return false;
}
