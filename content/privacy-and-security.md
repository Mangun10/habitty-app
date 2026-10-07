# Privacy and security (portfolio level)

Habitty holds deeply personal data — sleep, emotions, reflections, worries, decisions. Privacy was a design constraint, not an afterthought. (Exact rules, schemas and infrastructure are intentionally not published.)

## Principles

- **Single owner.** Authentication plus an allowlist: only one verified account can use the app.
- **Owner-only data access**, enforced by the database's server-side security rules — not just by the UI.
- **Server-only secrets.** AI keys and service credentials live only on the server; tests verify they are never in client code.
- **AI-derived records are server-written.** The user can correct or hide them, but the client cannot forge them.
- **Least context.** AI calls receive the slices of data a question needs, not the whole database.
- **Raw data stays raw.** Derived insights carry provenance and never copy raw records.

## Shared summaries

A weekly family summary exists, and it is built defensively:

- an explicit **allowlist** of non-sensitive metrics;
- a **validator** that rejects private topics before anything is sent;
- sharing code that **cannot import** private modules (checked by tests);
- "If uncertain whether a metric is personal, exclude it."

Personal reports go only to the owner.

## AI safety in product terms

- No medical or psychological diagnosis; no medication advice beyond reminders the user configured.
- Causal claims from correlations are rejected in code.
- Interpretations are labelled as interpretations, and the user can correct them.

## What this case study leaves out on purpose

Keys and credentials, project identifiers, email addresses, security-rule details, database schemas, prompts, scheduling details, any personal data, and any real decisions, reflections or health information.
