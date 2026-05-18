# Early Free Action Route Rework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the early game feel like a player-driven dating sim by adding Day 1–2 location/action choices for 현겸, 욱현, and 재성, then making Day 3 route entry react to those early actions.

**Architecture:** Do not replace the VN engine or delete the existing longform route graph. Add free-action choice nodes inside the existing scenario modules and route them back into the current story flow. Use flags and affection rewards so early actions matter, and update tests/docs so future content does not regress into passive day-by-day narration.

**Tech Stack:** Vite, React 18, modular scenario files under `src/data/scenario/`, Node `assert` contract tests in `tests/ui-contract.test.mjs`.

---

## Files
- Modify `tests/ui-contract.test.mjs` — add contracts for Day 1–2 free action hubs, early 욱현/재성 route seeds, and emotional Day 3 route-choice wording.
- Modify `src/data/scenario/day1.js` — insert `choice-day1-after-school-action` and three action scenes after the first 현겸 beat.
- Modify `src/data/scenario/day2.js` — insert `choice-day2-free-action` and three action scenes before the Day 2 closing.
- Modify `src/data/scenario/day3.js` — make route entry choice text more emotional and add variants that acknowledge early 욱현/재성 action flags.
- Modify `docs/scenario-authoring.md` — document early free-action rules.

## Acceptance
- Day 1 has a three-choice action hub with 현겸/욱현/재성 choices and route seed flags.
- Day 2 has a three-choice action hub with 현겸/욱현/재성 choices and route seed flags.
- 욱현/재성 can gain affection before Day 3.
- Day 3 choice wording reads like emotional route selection, not functional investigation.
- Scenario graph validates and all tests/build pass.
