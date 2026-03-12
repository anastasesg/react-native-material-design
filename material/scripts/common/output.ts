import { existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

import { $ } from 'bun';

/**
 * Write extracted content to a file, creating directories as needed.
 * Runs prettier for consistent markdown formatting.
 */
export async function writeOutput(outputPath: string, content: string): Promise<void> {
  const dir = dirname(outputPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  await Bun.write(outputPath, content);
  // --ignore-path='' overrides .prettierrc ignorePath (.gitignore) which excludes docs/
  await $`bunx prettier --ignore-path='' --write ${outputPath}`.quiet();
}
