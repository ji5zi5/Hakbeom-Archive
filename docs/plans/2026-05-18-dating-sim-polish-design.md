# Dating-Sim Polish Design

## Goal

Make Hakbeom Archive feel more like a real dating sim by connecting three currently separate feelings into one player loop: choose who to spend time with, see relationship-dependent reactions, and unlock a special memory/CG-style payoff.

## Selected Scope

The user approved doing all three requested directions together:

1. Date / promise events.
2. Affection-dependent dialogue and presentation.
3. Special CG / confession-style highlight moments.

This design keeps the first implementation as a focused vertical slice. It should add the feeling without requiring a full route rewrite or new external dependencies.

## Current Context

The app already has the main VN shell: dialogue scenes, choices, phone replies, route rewards, status modal, save/load, gallery, recollection replay, background/character/effect/audio directives, and contract tests. Recent fixes stabilized long choices, Day 2 route flow, ending replay, and stale character overlap.

The missing dating-sim layer is the explicit reward rhythm: player choice should create a visible promise/date, that promise should affect later character behavior, and the game should mark the moment as a memory.

## User Experience

### 1. Date / Promise Event Loop

Add a small “after-school promise” pattern to early common-route content. A choice should feel like selecting a mini-date target rather than simply choosing the next text node. The chosen branch should:

- give affection and a route seed flag;
- show a place-specific moment;
- set a promise/date flag that later scenes can remember;
- return cleanly to common route.

The UI does not need a calendar yet. For this slice, promises are scenario-driven events exposed through choices and save/status metadata.

### 2. Affection-Dependent Reactions

Use existing `variants` support to make high-affection and route-flag scenes warmer. The important effect is “this character remembers me.” Scene text should change when affection reaches key thresholds or when the relevant promise flag is present.

Keep this lightweight: no new relationship engine if `variantMatchesState()` already handles flags and affection ranges.

### 3. Special Memory / CG Payoff

Use existing gallery/recollection infrastructure to create one or more special “memory” unlocks. A date/promise scene can unlock a gallery item and recollection entry. If no new artwork is available, use existing background + character presentation as a CG-style memory tile and label it clearly.

The payoff should be visible from the gallery and replayable via recollection.

## Architecture

Use existing systems first:

- Scenario data owns date events, route flags, rewards, and unlocks.
- `routeConfig` owns gallery/recollection metadata.
- `BAVisualNovel` renders already-supported UI states and should not get new core story logic unless required.
- `variantMatchesState()` remains the relationship text resolver.
- Contract tests protect graph reachability, reward/unlock integrity, and at least one affection-gated variant.

## Data Flow

1. Player selects a date/promise choice.
2. `applyRouteRewards()` records affection and flags.
3. `applyRouteUnlocks()` maps flags to gallery/recollection unlocks from `routeConfig`.
4. Later `resolveItemText()` chooses relationship variants from flags/affection.
5. Save summary/status/gallery communicate the consequence.

## Testing Strategy

Add semantic contract tests rather than fragile visual-only checks:

- chosen promise/date branch grants affection, flags, and unlocks;
- scenario validation catches metadata mistakes;
- replay path can reach new recollection start scenes;
- affection/flag variant matching changes a later scene;
- build and VN QA still pass.

Visual checks should focus on whether the new memory/date scenes still show one clear character and do not break choice/phone layout.

## Non-Goals

- No full calendar UI in this slice.
- No new dependency.
- No generated CG unless explicitly requested later.
- No route-wide rewrite of all 14 days in one pass.

## Implementation Preference

Start with a Day 2/early common-route vertical slice because that area already has multi-character free action choices and route seed flags. Add one or a few compact special memories there, then reuse the pattern later across routes.
