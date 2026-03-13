// ---------------------------------------------------------------------------
// Icon font detection — Material Icons / Symbols render icon names as visible
// text via font-family. We detect these and replace with unicode symbols.
// ---------------------------------------------------------------------------

const iconMap: Record<string, string> = {
  check: '\u2713',
  check_circle: '\u2713',
  close: '\u2717',
  cancel: '\u2717',
  warning: '\u26A0',
  error: '\u26A0',
  info: '\u2139',
  star: '\u2605',
};

const iconClasses = new Set([
  'material-icons',
  'material-icons-outlined',
  'material-symbols-outlined',
  'material-symbols-rounded',
  'material-symbols-sharp',
]);

/** Returns the unicode symbol if `el` is an icon font element, or '' to skip it. null = not an icon. */
export function resolveIcon(el: HTMLElement, style: CSSStyleDeclaration): string | null {
  const isIconByClass = Array.from(el.classList).some((c) => iconClasses.has(c));
  const isIconByFont =
    !isIconByClass &&
    ((style.fontFamily || '').toLowerCase().includes('material icons') ||
      (style.fontFamily || '').toLowerCase().includes('material symbols'));

  if (!isIconByClass && !isIconByFont) return null;

  const iconName = (el.textContent || '').trim().toLowerCase();
  return iconMap[iconName] || '';
}
