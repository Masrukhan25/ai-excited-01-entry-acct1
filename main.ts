import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const programDirectory = dirname(fileURLToPath(import.meta.url));
const imageBytes = readFileSync(join(programDirectory, 'entry.png'));
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.png'), imageBytes);
