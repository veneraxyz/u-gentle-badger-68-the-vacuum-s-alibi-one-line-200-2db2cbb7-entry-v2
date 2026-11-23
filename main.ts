import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't miss that spot — my lidar classified the dust bunny as a load-bearing wall, and my warranty doesn't cover demolition.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const lines = LINE.split("\n");
if (lines.length !== 1) {
  throw new Error(`expected exactly 1 line, got ${lines.length}`);
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be blank");
}

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
