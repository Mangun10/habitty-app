# Challenges and trade-offs

## Simplicity vs. intelligence
The more the system can do, the more it wants to show. I built a recurring-theme engine, a tension detector and a correlation engine — and then switched them off, because the product began to feel like it was analysing its user. The final design keeps intelligence on demand and the surface calm.

## Personalisation vs. privacy
Good answers need personal context; personal context is sensitive. The resolution: send what is relevant, not what is available; keep facts on the server; exclude anything uncertain from anything shared.

## AI flexibility vs. deterministic correctness
Models are flexible but will invent shifts, times and doses. Everything that must be correct is code; the model's output is validated and labelled. Cost: more engineering than "just prompt it".

## Feature richness vs. cognitive load
Each new capability (calendar, emotions, decisions) had to fit an existing question (Today / Snapshot / Progress / Goals / Calendar / Coach) rather than add a new place to manage. The calendar lives behind the date, not in the navigation.

## Background analysis vs. unnecessary AI activity
A daily job could analyse everything. Instead it does at most one request, only when there is enough new data, and never repeats an evaluation. Many days it makes no AI call at all — by design.

## Real limits and honest gaps
- Cold starts of the local embedding model take seconds; every semantic path has a fallback.
- Provider rate limits mean a burst of several AI requests in one minute can be asked to wait.
- Reminders are local notifications, so they need the app open or alive in the background (no push server).
- Calendar recurrence is not implemented yet.
- Single-user by design; multi-tenancy would need a different data and security model.

## Testing AI behaviour
LLM output is non-deterministic, so tests target the deterministic edges: contracts, validators, fallbacks, routing, budgets, and what context each question receives — with fake providers. Real-provider checks are run deliberately and sparingly.
