import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Resolve the artwork beside this program, regardless of the working directory.
const source = new URL('./entry.png', import.meta.url);

await mkdir(outputDir, { recursive: true });
await copyFile(source, join(outputDir, 'entry.png'));
