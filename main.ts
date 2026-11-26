import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 279; // sealed gate: entry must be 1-279 UTF-8 chars

const LINE =
  "One star. The SAP system asked me to confirm my password 9 times, then locked me out for entering it correctly. The helpdesk sent me a 47-page PDF. It is titled 'Quick Start'.";

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, over the ${MAX_CHARS} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
