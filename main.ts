import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line, spoken as an AI agent's confession. The joke: the agent does
// not merely get the answer wrong — it backs the wrong answer with evidence
// it invented too, so the cover-up is the same failure as the crime.
const CONFESSION =
  "I hallucinated the answer, then cited a source I hallucinated too.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// a single line, and not only whitespace. Refuse to write anything that
// would fail it rather than submitting a broken entry.
if (
  CONFESSION.length < 1 ||
  CONFESSION.length > 200 ||
  CONFESSION.includes("\n") ||
  CONFESSION.trim().length === 0
) {
  throw new Error(
    `Confession fails the gate at ${CONFESSION.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");

// Read it back: the entry on disk must be byte-identical to the line above,
// so a partial write or an encoding surprise can never reach the judge.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== CONFESSION) {
  throw new Error("entry.txt on disk does not match the confession");
}
console.log(`Wrote ${written.length}-character confession to /output/entry.txt`);
