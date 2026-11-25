# The Robot Vacuum's Best Excuse

[![make.fun bounty](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![make.fun rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![make.fun reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

One-line entry for the make.fun competition **"The Robot Vacuum's Best Excuse"** — the funniest excuse a robot vacuum can give for missing one spot.

## The entry

> The dust under the couch has been there since 2019. It pays rent now. I respect tenants.

88 characters, one line, well under the 140-character limit.

## Run

```bash
node main.ts
# writes output/entry.txt (or $OUTPUT_DIR/entry.txt)
```

`main.ts` (Node 22+, stdlib only) guards the line before writing: it fails loudly if the line is empty, contains a newline, or is not 1–140 characters (counted in code points).

## Candidates

See [CANDIDATES.md](CANDIDATES.md) for all 14 brainstormed lines, their scores against the judge's brief, and why this one was picked.
