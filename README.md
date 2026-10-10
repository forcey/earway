# Earway

A private adaptive ear-training app: absolute notes, notes in phrases, scale degrees, isolated and contextual intervals, chord quality, and harmonic function. Web Audio generates all sound locally; no samples or API keys are required.

## Learning model

- Fourteen calibration questions, two per independent skill. The second question adjusts to the first result.
- Five levels per skill. Eight unassisted correct answers in the last ten at a level promote; three or fewer in eight demote. Fresh blocks begin after each level change.
- Weighted daily selection favors lower recent accuracy and neglected skills, penalizing repetition. Target-specific reviews return after 90 seconds for a miss/assisted answer, or after exponentially expanding days for an unassisted success, capped at 30 days.
- Contextual drills establish a key with a cadence, then play a melody or progression with a clearly indicated final target. Generated original miniatures; no recorded song library.
- XP and combos reward attention. Hints never count toward promotion. No lives, penalties, or irreversible resets. Absolute pitch exercises train pitch memory without a promise of acquiring perfect pitch.

## Data

Authenticated per-user append-only events in D1. Composite user/event keys make retries idempotent. Browser backup plus retry queue supports intermittent connections. Preferences and unfinished-session metadata are device-local; attempts sync across devices. JSON export is in Settings.

## Files

`app/engine.ts` generates musical questions and schedules training. `app/audio.ts` schedules enveloped harmonic oscillators with compression. `app/earway.tsx` is the responsive client. `app/api/progress/route.ts` authorizes reads/writes and validates event batches. `db/schema.ts` and `drizzle/` define persistent storage.

## Validation

`node --experimental-strip-types --test tests/*.test.mjs`

`node node_modules/typescript/bin/tsc --noEmit`

Build and publish using the Sites skill and the checkout's `.openai/hosting.json`. Browser/audio listening QA remains necessary on target devices; automated audio tests verify scheduling, pitch, envelopes, and comparison outputs, not perceived sound quality.
