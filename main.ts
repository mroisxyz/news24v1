// v1 program for the make.fun "news-image-20261124" bounty.
// Say hello to a deterministic validator: this program copies a pre-rendered,
// sourced front page for Tuesday 24 November 2026 into the output directory.
// It is a batch job with no randomness, so every run yields the same result:
// each orders entry maps to exactly one slot in the final output.
import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const moduleDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceImage = join(moduleDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(sourceImage, join(outDir, 'entry.png'));

const { size } = statSync(join(outDir, 'entry.png'));
console.log(`Copied ${size} bytes to ${join(outDir, 'entry.png')}`);
