# Day4-14 Flag Consumption Matrix

This tracked matrix is the CI-safe source of truth for Day4-14 dating-sim memory flags. `.omx/plans/day4-14-flag-consumption-matrix.md` may guide planning, but tests must use this tracked document, `tests/fixtures/day4-14-memory-flags.json`, or an explicit in-test allowlist.

Rules:

- Visible date memory flags use `<routeId>_date_day<day>_<motif>`.
- Phone reply memory flags use `buildPhoneReplyFlag(routeId, day, tone)` / `<routeId>_phone_day<day>_<direct|gentle|tease>_reply`.
- Hidden payoff-only flags use `memory_payoff_<routeId>_day<day>_<motif>` and must not start with `<routeId>_`.
- Day4-9 never writes explicit `route_lock_<id>`.
- Every matrix-listed Day4-9 flag must have a reachable `producerScene` and concrete Day10-14 or terminal `variants.requiredFlags` consumer. Day4-5 rows currently list Day10 lock reflection, Day11 payoff, and `ending-promise` payoff consumers.
- Story-lint scope is bounded to new or modified Day4-14 lines and touched payoff/ending variants.

The concrete machine-readable rows live in `tests/fixtures/day4-14-memory-flags.json`.
