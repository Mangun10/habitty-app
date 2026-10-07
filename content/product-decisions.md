# Product decisions

Each decision: **what** → **why** → **trade-off**.

## 1. A "personal day" instead of a calendar day
- **What:** The day starts at "I'm awake" and ends at "I'm going to sleep", whatever the clock says.
- **Why:** On an overnight shift, 3 a.m. belongs to the evening before. Meals, supplements and plans only make sense against the waking day.
- **Trade-off:** More complex date logic everywhere (and tests for partial days), in exchange for a plan that matches lived experience.

## 2. Training type, not training time
- **What:** The plan says *strength*, *cardio* or *recovery* — never "train at 6 p.m.".
- **Why:** With rotating shifts, a fixed time is wrong half the time. The type is what matters; timing adapts to the shift phase.
- **Trade-off:** Less precise scheduling, but advice that stays true across rotations.

## 3. Minimum / target / stretch instead of pass/fail
- **What:** Three levels per habit; the minimum counts fully.
- **Why:** Hard days still count, so consistency survives the weeks that matter most.
- **Trade-off:** Less "gamified" pressure — deliberately.

## 4. Adaptive day modes
- **What:** Normal, transition (first day on a new shift), low energy (short sleep or low energy), recovery (chosen by the user).
- **Why:** The plan should lower expectations on hard days automatically, with a stated reason.
- **Trade-off:** Rules must be conservative and explainable; they never diagnose anything.

## 5. Today opens instantly, without AI
- **What:** The Today briefing is rule-based; a coach-written note is generated only when asked.
- **Why:** Opening the app should be instant and should never silently spend an AI request.
- **Trade-off:** The default note is less "personal", but always fast, deterministic and free.

## 6. One source of truth for Snapshot and Progress
- **What:** Snapshot captures; Progress analyses the same daily records through one metric registry, where a metric can belong to several areas.
- **Why:** No duplicate logging, no two numbers that disagree.
- **Trade-off:** A shared model to maintain carefully.

## 7. A Decision Tree with two inputs
- **What:** "What am I worried about?" and "What am I going to do about it?" — the rest is inferred, shown back, and editable.
- **Why:** Capturing a decision must be cheaper than worrying again.
- **Trade-off:** AI inference must be conservative: a wrong link to a value or goal is worse than none.

## 8. The calendar lives behind Today's date
- **What:** No new navigation tab; tapping the date opens what's coming.
- **Why:** Habitty is a personal OS, not a calendar app. Future events matter as *context*.
- **Trade-off:** Fewer calendar features (no recurrence yet) in exchange for a calmer product.

## 9. Emotions as words, screen time as a slider
- **What:** Quick multi-select emotion check-ins (with custom words) and a no-typing slider.
- **Why:** Capture in seconds; record, not diagnose.
- **Trade-off:** Coarser data than a validated questionnaire — appropriate for a personal reflection tool.

## 10. Conservative background intelligence
- **What:** Background AI is limited to a weekly pattern reading and obvious deviations from the user's own baseline; broader "theme" and "tension" engines were built and then deliberately made dormant.
- **Why:** The product should not feel like it is constantly analysing its user.
- **Trade-off:** Less automatic insight; recurring concerns are instead recognised on demand by the coach.

## 11. Privacy boundaries for anything shared
- **What:** A family summary is built from an explicit allowlist of non-sensitive metrics and is validated before sending; private reflection, coach conversations and AI insights can never reach it.
- **Why:** "If uncertain whether something is personal, exclude it."
- **Trade-off:** A less detailed family summary, by design.
