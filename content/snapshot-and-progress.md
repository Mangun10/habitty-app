# Snapshot and Progress

## One source of truth, two questions

- **Snapshot — "What actually happened?"** A single daily capture.
- **Progress — "What is changing?"** Analysis of the same records over time.

Both read the same daily records through one **metric registry**, in which a metric can belong to several areas (screen time: habits *and* mind; sleep: health, fitness and mind). Nothing is logged twice, and the two screens can never disagree.

## What Snapshot combines

- **Existing structured activity** already recorded on Today (sleep, wake time, training, meditation, DSA, reading, meals, supplements) — shown, not re-entered
- **Calendar events** that took place that day
- **Emotions:** quick multi-select check-ins from a small preset list or the user's own word, each with a timestamp and the shift/day context the app already knows — a record, never a diagnosis
- **Numerical metrics:** screen time via a no-typing slider, weight
- **Lightweight yes/no metrics:** e.g. sun exposure, an instrument practised, junk food
- **One good thing:** a short gratitude line

## What Progress shows

Areas: Overview, Week review, Reports, Health, Fitness, Habits, Mind & Life, Goals and History, over 7 days to all time.

- Deterministic calculations: averages, counts, rates, ranges, comparisons with the previous period, known vs. unknown days (an unrecorded day is unknown, never "no")
- Trend charts with sensible bucketing (daily → weekly → monthly as the range grows)
- Relationship views only when there is enough paired data
- **Worth noticing:** at most a few AI-derived observations, labelled, each with a "Not useful" control
- **Personal reports** (weekly, monthly, yearly): the facts section is rendered in code; an AI reflection is written only on request and cached

## Design choices

- Emotions are words, not scores; a fixed, stated tone mapping is used only for comparisons.
- No productivity score, no streaks, no grades.
- Partial days (today) are treated as unfinished, not as failures.
