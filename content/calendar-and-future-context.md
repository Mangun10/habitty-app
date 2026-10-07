# Calendar and future context

## Why a personal system needs the future

Past and present tell you what happened and where you are. But many good decisions depend on what is coming: a race in four weeks changes how to train this week; an early event tomorrow changes whether to stay up tonight; an interview changes how to use free time. Without the future, a "personal OS" can only react.

## Design: the calendar is context, not a product

- No new navigation tab: tapping the date on Today opens *What's coming*.
- A compact month view, the selected day's events, and what's ahead — designed for phone first.
- Today shows a short **Coming up** list only when something is close enough to matter, scaled by importance, at most three items.
- Snapshot shows events that took place as part of "what happened", so nothing is logged twice — and never assumes how they went.

## Event model (portfolio level)

Title, timed or all-day, start/end stored as unambiguous instants **plus** the time zone they were entered in and their local dates, a muted colour from the design tokens, an optional type (event, work, personal, health, training, race, interview, exam, travel, appointment, birthday, deadline, other), importance (normal / important / major), an optional link to an existing goal, location, notes and reminders. Recurrence is intentionally not implemented yet.

## Deterministic where it should be

- **Time zones:** wall-clock times convert to instants with the platform's time-zone data, including daylight-saving changes; an event entered in another zone keeps its zone.
- **Conflicts:** overlapping events, overlap with a work shift (including a night shift from the evening before), tasks due during an event, two important events within a day — calculated, never guessed, and stated calmly.
- **Reminders:** fixed offsets, decided by code, shown once, re-armed if the event moves.
- **Creating, editing and opening the calendar make zero AI requests.**

## Future context for the AI

The context builder turns upcoming events into facts: when, how long until (in hours when close), the linked goal, conflicts, and the next shifts from the rota. The coach receives them **only when the question makes them relevant** — a training question with a race ahead, "should I stay up late?" with an early event tomorrow, or a question that names the event.

### "Prepare me for this"

An explicit action on an event, answered by the interactive model:

```
Upcoming event (e.g. a 5K race in a few weeks)
      +
Recent training (sessions by type, last 7 and 28 days)
      +
Shift pattern (next days, and the week before the event)
      +
Sleep and recovery
      +
Linked goal
      ↓
Context-aware preparation (labelled facts vs. interpretation)
```

Every date, shift and number comes from the application; the answer is checked for causal claims, diagnoses and verdicts ("you're not ready"), and nothing is written back into the event.

### Background use

The weekly background analysis sees important upcoming events and may note, conservatively, when the week's data is relevant to preparing for one ("one thing to watch").
