// The Robot Vacuum's Best Excuse — make.fun one-liner entry.
// Writes the chosen excuse (one line, max 140 characters) to
// <OUTPUT_DIR>/entry.txt (default ./output). Fails loudly if the
// line breaks the competition rules, so a bad line can never be
// submitted by accident.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The winning line, picked from 14 candidates in CANDIDATES.md:
// deadpan robot logic, a missed spot every owner recognises
// (under the couch), and the punch lands on the last sentence.
const LINE =
  "The dust under the couch has been there since 2019. It pays rent now. I respect tenants.";

const MAX_CHARS = 140;

function fail(message) {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

// Count code points, not UTF-16 units, so emoji and wide
// characters are measured the way the 140-character limit means.
const length = [...LINE].length;

if (LINE.length === 0 || LINE.trim().length === 0) {
  fail("line is empty");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line, no newlines allowed");
}
if (length < 1 || length > MAX_CHARS) {
  fail(`line is ${length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = resolve(process.env.OUTPUT_DIR ?? "output");
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, `${LINE}\n`, "utf8");

console.log(`wrote ${length} characters to ${outFile}`);
