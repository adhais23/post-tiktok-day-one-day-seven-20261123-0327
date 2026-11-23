// Day one, day seven — entry program (Node 22, standard library only).
//
// The entry is the TikTok video itself: a short clip about the same tiny
// agent-built game on the day it was made and after a week of daily updates,
// posted publicly on TikTok. This program does the one thing the gate needs
// from code: it carries VIDEO.json — the video's full TikTok address — from
// the repository into /output, where the house reads it and scores the
// video's views, likes, comments, shares and saves. Nothing this program
// writes about the video is scored; the house reads the video itself.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

const url = (parsed as { url: string }).url;
if (!/^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+/.test(url)) {
  console.error(
    'VIDEO.json "url" is not a TikTok video address yet ' +
      '(https://www.tiktok.com/@<handle>/video/<id>). ' +
      'Replace the placeholder with the posted video before submitting.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
