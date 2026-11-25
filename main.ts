// One Line, One Laugh — make.fun entry (u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
//
// Writes a single original funny line to /output/entry.txt.
// Deterministic: the same line on every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// My own original line: meditation meets open-mic night — the brain
// turns a quiet moment into an unsolicited greatest-hits set of old
// embarrassments. Sharpened from "performed every embarrassing thing"
// to the "greatest-hits set" image, which lands the joke faster.
const LINE =
  "I tried meditating, but my brain treated the silence like an open mic night and performed a greatest-hits set of my most embarrassing moments.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
