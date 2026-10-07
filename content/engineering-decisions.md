# Engineering decisions

Format: **Decision → Why → Trade-off**

### 1. Structured data is the source of truth
- **Why:** Facts (a meal at 5:02 a.m., a strength session, 6.5 h of sleep) must be exact, queryable and testable. AI output is a layer on top, with provenance (range, data fingerprint, model, prompt version).
- **Trade-off:** More modelling up front; in return, nothing an AI says can corrupt the record.

### 2. AI as interpretation, not authority
- **Why:** Models invent shifts, doses and dates when given room to. The app supplies the facts; the model may only interpret them, with labels.
- **Trade-off:** Answers are sometimes more cautious ("not enough data yet") — preferable to confident fiction.

### 3. Deterministic logic before LLM reasoning
- **Why:** Plans, day modes, supplement timing, trends, conflicts and reminders are rules that must be right every time and must be testable.
- **Trade-off:** Rules must be designed explicitly; there is no "let the model figure it out".

### 4. Local semantic embeddings for retrieval
- **Why:** Word overlap misses "I feel behind at work" vs "Am I falling behind my peers?". A small embedding model on the server finds related past words with no external embedding API and no data leaving the server for retrieval.
- **Trade-off:** A cold start downloads the model (seconds), so every semantic path has a timeout and a word-based fallback. Making the native runtime ship correctly in the serverless bundle needed explicit tracing configuration.

### 5. Separate interactive and background AI workloads
- **Why:** User-facing answers need latency; background analysis benefits from more context. Separate providers and separate budgets mean background work can never slow or block a question.
- **Trade-off:** Two providers to configure and test; one routing function keeps it manageable.

### 6. Relevance-gated context
- **Why:** "Should I exercise now?" needs the current situation, not last month's reflections. Sending everything wastes tokens and invites irrelevant answers.
- **Trade-off:** Relevance rules must be tuned and tested; they are deterministic and conservative.

### 7. Shift-aware, adaptive planning
- **Why:** The core user constraint. Shift phases (before, during, after work), transition days and sleep windows drive the plan.
- **Trade-off:** Substantial date/time logic and edge cases (overnight shifts crossing midnight, daylight saving in other zones).

### 8. A budget that works across serverless instances
- **Why:** Provider limits are per key, not per instance. A shared record with optimistic concurrency guarantees the limits; reserve-then-settle accounting keeps legitimate requests from being blocked by theoretical maxima.
- **Trade-off:** One extra small read/write per AI call.

### 9. Privacy boundaries enforced in code and rules
- **Why:** Shared reports use an explicit allowlist and a validator; private modules can't be imported by the sharing code (checked by tests); database rules make AI-derived records server-written only.
- **Trade-off:** Less detail in anything shared; more tests.

### 10. Avoid duplicate logging
- **Why:** Snapshot reuses what Today already recorded; calendar events that happened appear in Snapshot automatically.
- **Trade-off:** One shared metric registry to maintain.

### 11. Keep the UI simple despite complex back-end logic
- **Why:** The product's value is calm clarity. Complexity lives in tested modules, not on screen.
- **Trade-off:** Some capabilities stay hidden until needed (progressive disclosure).

### 12. Conservative by default, on-demand when asked
- **Why:** Building a theme engine and a tension detector showed they were more analysis than the product needed. They were kept as dormant, tested code; the coach now recognises recurring concerns on demand from retrieved context.
- **Trade-off:** Fewer automatic insights; a calmer product.
