# Dating-Sim Emotion Loop Design

## Goal
Make the current mapChoice opening feel more like a real dating sim by combining A and B: a reply-driven emotional loop plus a compact in-game date planner.

## Chosen approach
Implement a small, reversible layer on top of the existing Day 1-3 mapChoice system.

1. **A: Date emotion loop**
   - Every generated Day 1-3 night phone scene gets three replies.
   - Replies write route-specific `*_phone_dayN_*_reply` flags and small affection rewards.
   - Day 2-3 first-location scenes react to the previous day’s reply flag via `variants`, so the player sees yesterday remembered in dialogue.
   - Rewards stay below route-lock scale and do not write `route_lock_*`, configured route seed flags, or bare legacy `*_route` aliases.

2. **B: Date planner UI**
   - Add a compact `PLAN` button next to SAVE/LOAD/CG/STATUS.
   - The planner modal shows current chapter, recent map visits parsed from existing choice history, and a lightweight route-interest suggestion list.
   - It is read-only and uses existing `gameState`; no save schema migration.

## Boundaries
- No new dependencies.
- No background/asset generation.
- No route lock in Day 1-3.
- Ordinary `choice` and reply-style `phone` still max 3.
- Planner must not duplicate quick menu layout or expose intrusive reward toasts.

## Validation
- Add contract tests for generated night replies, next-day variant memory, no route lock/seed flags, planner source wiring, and planner modal QA coverage.
- Run `npm test`, `npm run build`, and focused VN QA after implementation.
