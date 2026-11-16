import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(outputDirectory, { recursive: true });
// Preserve the supplied artwork exactly, without decoding or re-encoding it.
await copyFile(source, join(outputDirectory, 'entry.png'));
