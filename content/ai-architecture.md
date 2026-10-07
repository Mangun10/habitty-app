# AI architecture

## Principle: AI interprets; the application owns the facts

The application calculates every fact — dates, shifts, sleep, training counts, averages, trends, time until an event, conflicts — and passes them to the model as labelled context. The model interprets. Its output is validated before anyone sees it.

```
User question / scheduled job
        │
        ▼
Current context  +  Personal data  +  Goals & values  +  Historical patterns  +  Future events
        │
        ▼
Context builder (deterministic, relevance-gated)
        │
        ▼
Retrieval (semantic memory + curated evidence)
        │
        ├──────────────► Interactive AI (Groq)   — when the user asks
        └──────────────► Background AI (Gemini)  — scheduled, conservative
        │
        ▼
Validation (schema, labels, no causal or diagnostic claims, safe fallback)
        │
        ▼
Personalised guidance
```

## Two providers, two kinds of work

| | Interactive | Background |
|---|---|---|
| Provider | **Groq** (open-weight reasoning model) | **Google Gemini** (Flash-Lite) |
| Used for | Coach, Decision Tree interpretation, "Prepare me for this", week-in-review, report reflections | Weekly pattern analysis, obvious deviations from the user's own baseline |
| Trigger | Only an explicit user action | A daily scheduled job, at most one AI request per run |
| Priority | Latency | Depth of context |

Routing happens in **one server-side function**: no part of the app calls a provider directly. A background failure is never retried on the interactive provider, so background work can't consume interactive capacity.

## Context engineering

- **Relevance-gated context:** a question about "right now" gets the current situation only; a reflective question also gets the user's related past words; a training question with a race ahead gets the race. Unrelated history is left out.
- **Token budgets per task:** every prompt has an input cap; less important context (research snippets, then memory) is trimmed first, never the situation or the question.
- **Task contracts:** each AI task is a typed contract — task, labelled sections, rules, an output schema, token caps and a version. Output that fails the schema, invents identifiers, claims causation or diagnoses is dropped, and every task has a deterministic fallback.

## Retrieval-augmented generation (RAG)

Two retrieval sources:

1. **A curated evidence base** for general guidance (sleep, training, nutrition, shift work), each source with an evidence level and date, retrieved lexically and cited.
2. **The user's own words** — decision worries and reasoning, coach questions, reflections, gratitude, custom emotion words — embedded with a **local embedding model** on the server (see `intelligence-layer.md`).

## Evidence labels

AI output distinguishes **FACT**, **DERIVED** (calculated), **OBSERVATION**, **PATTERN**, **POSSIBLE ASSOCIATION** and **INFERENCE**. A judgement presented as fact is relabelled; causal language ("caused", "leads to") and diagnoses are rejected by code, not just discouraged by prompt.

## Rate limiting that survives serverless

Serverless platforms run several instances at once, so an in-memory counter is not enough. AI calls are admitted against a **shared budget record** using optimistic concurrency (read, decide, write only if unchanged). Interactive work has priority over reports and background jobs; calls **reserve** an estimate of tokens and then **settle** to the provider's reported usage, so short answers don't block the minute. The background provider has its own budget, configured from its quota rather than hard-coded.

## What deliberately does not use AI

Logging, opening pages, charts, averages, trends, plans, reminders, time-zone conversion, event conflicts and the Today briefing. Opening any screen makes zero AI requests.
