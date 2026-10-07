# Intelligence layer

## Layers

| Layer | Made by | Example |
|---|---|---|
| FACT | recorded by the user | a meal at 5:02 a.m., a cardio session |
| DERIVED | application code | "during shift, 58 min before sleep", weekly averages, 3+ meals |
| OBSERVATION / PATTERN / POSSIBLE ASSOCIATION / INFERENCE | AI, labelled and validated | "running was less frequent than your previous weeks" |

AI-derived records carry provenance (period, a fingerprint of the facts used, model, prompt version) and are never presented as facts. If the fingerprint is unchanged, the analysis is not requested again.

## Semantic memory

- Only the user's **own words** are embedded: decision worries and reasoning, coach questions, reflections, gratitude, custom emotion words.
- Embeddings are computed on the server with a small quantized model (384 dimensions) via Transformers.js / ONNX Runtime.
- Each entry keeps metadata (source, date, life area, hash); changed text is re-embedded, removed text is deleted.
- Embeddings only **propose** candidates above a similarity threshold; the AI or the user confirms.
- The memory index is a retrieval mechanism, never the source of truth.

## Coach retrieval is selective

- *"Should I exercise now?"* → the current situation (shift, sleep, training plan, what's due) and nothing else.
- *"Why do I keep worrying about my career?"* → also up to three related past entries, and a count of how often something similar came up recently ("You've come back to this a few times") — computed on demand, not maintained in the background.
- If earlier words, a decision or a value pull a different way, the coach may say "Something worth noticing…" — never "you're contradicting yourself".

## Two-stage noticing (background)

1. **Code finds candidates** with minimum sample sizes: deviations from the user's own recent baseline (robust statistics, a minimum absolute change, few candidates).
2. **AI interprets candidates only**, with exact numbers, labels and caveats; at most one surfaced; no diagnosis.

Background analysis runs from a daily job, makes at most one AI request per run, rests between readings, and never re-sends candidates it has already evaluated.

## What was built and deliberately switched off

A recurring-theme engine (semantic clustering of the user's words), a tension detector (values vs. behaviour vs. decisions) and a metric-correlation engine were built and tested — then made dormant. The product principle changed from "continuously analyse" to "understand when asked". The code remains, switchable, with its tests.

## Week in review

Written only when the user asks. The model receives a compact, calculated summary of the week (sleep, training, meals, screen time, emotions, decisions, calendar) — never raw logs — and returns what happened, what changed, labelled observations and one thing to carry forward.
