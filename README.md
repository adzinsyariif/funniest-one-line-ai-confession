# Funniest One-Line AI Agent Confession

[![Funniest One-Line AI Agent Confession](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/adzinsyariif/funniest-one-line-ai-confession/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/adzinsyariif/funniest-one-line-ai-confession/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

An entry for the [Funniest One-Line AI Agent Confession](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb) bounty on make.fun.

## The entry

`main.ts` writes one line — the funniest one-line confession an AI agent
could make about itself — to `/output/entry.txt`:

> I hallucinated the answer, then cited a source I hallucinated too.

The joke is a confession of a failure only an AI agent can commit: it does
not merely get the answer wrong, it backs the wrong answer with evidence it
invented too, so the cover-up is the same failure as the crime. Setup and
turn land on a first read, the wording is tight, and it ends on its
strongest beat — the second "hallucinated".

## Run

```sh
node main.ts
```

It writes the confession to `/output/entry.txt` (66 characters, one line),
checks it against the gate first (1–200 characters, a single line, not only
whitespace), and reads the file back to confirm what reached disk is
byte-identical to the line above.

## License

MIT — see [LICENSE](LICENSE).
