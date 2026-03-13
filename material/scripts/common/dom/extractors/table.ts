// ---------------------------------------------------------------------------
// Table extraction — markdown tables from <table> elements
// ---------------------------------------------------------------------------

export function extractCellContent(cell: Element): string {
  const labeled = cell.querySelector('[aria-label]');
  const label = labeled?.getAttribute('aria-label') || '';

  const link = cell.querySelector('a');
  if (link) {
    const href = link.getAttribute('href') || '';
    const linkText = label || link.textContent?.trim() || '';
    if (href && linkText) return `[${linkText}](${href})`;
  }

  const raw = label || (cell.textContent ?? '').trim();
  return raw.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

export function extractTable(el: HTMLElement): string {
  const headerRow = el.querySelector('thead tr');
  const tbodies = Array.from(el.querySelectorAll('tbody'));
  const rows: string[][] = [];

  if (headerRow) {
    rows.push(Array.from(headerRow.querySelectorAll('th,td')).map(extractCellContent));
  }

  const colCount = rows[0]?.length || 0;

  for (const tbody of tbodies) {
    const tbodyRows = Array.from(tbody.querySelectorAll('tr'));
    let groupLabel = '';

    for (const row of tbodyRows) {
      const cells = Array.from(row.querySelectorAll('th,td'));

      // Single-cell TH = group label row
      if (cells.length === 1 && cells[0]!.tagName === 'TH') {
        groupLabel = extractCellContent(cells[0]!);
        continue;
      }

      const cellValues = cells.map(extractCellContent);
      if (colCount > cellValues.length) {
        cellValues.unshift(groupLabel);
        groupLabel = '';
      }
      rows.push(cellValues);
    }
  }

  // Fallback: no thead/tbody structure
  if (tbodies.length === 0 && !headerRow) {
    const allRows = Array.from(el.querySelectorAll('tr'));
    for (const row of allRows) {
      rows.push(Array.from(row.querySelectorAll('th,td')).map(extractCellContent));
    }
  }

  if (!rows.length) return '';
  const cols = Math.max(...rows.map((r) => r.length));
  const norm = rows.map((r) => {
    while (r.length < cols) r.push('');
    return r;
  });
  return (
    '\n| ' +
    norm[0]!.join(' | ') +
    ' |\n| ' +
    norm[0]!.map(() => '---').join(' | ') +
    ' |\n' +
    norm
      .slice(1)
      .map((r) => '| ' + r.join(' | ') + ' |')
      .join('\n') +
    '\n'
  );
}
