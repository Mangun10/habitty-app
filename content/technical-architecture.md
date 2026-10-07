# Technical architecture

## High level

```
Browser (installable PWA)
  Next.js + React + TypeScript UI
  Local, offline-capable data layer (Firestore SDK)
        │                         │
        │ authenticated reads/writes (owner only)
        ▼                         │
  Cloud Firestore  ◄──────────────┘
        ▲
        │ server-side access
Next.js server routes (Node runtime)
  ├── AI orchestration (context builder, contracts, validation, budget)
  ├── Local embedding model (semantic retrieval)
  ├── Scheduled background job (reports, background analysis)
  └── Email delivery for reports
        │
        ├── Groq (interactive LLM)
        └── Gemini (background LLM)
```

## Frontend

- **Next.js App Router + React + TypeScript (strict)**, client-rendered behind sign-in.
- **Tailwind CSS** on top of a token-based design system.
- **Recharts** for trends and comparisons.
- **React Hook Form + Zod** for forms with shared validation.
- **PWA**: installable, works offline for data already viewed, local notifications for reminders.
- A thin data-access layer (one interface, two implementations: Firebase and a local preview mode) keeps vendor calls in one place.

## Backend

- **Next.js server routes** on a Node host. Every AI key stays on the server; none is exposed to the browser bundle.
- Requests are authenticated by verifying the user's ID token; reads on the user's behalf go through the database's own security rules.
- A **scheduled job** runs once a day for personal reports, the family summary and conservative background analysis.

## Data

- **Cloud Firestore**, one document per personal day plus collections for goals, tasks, values, decisions, calendar events, reports and derived insights.
- **Every document is validated** with Zod when read; malformed data is ignored rather than crashing a screen.
- **Owner-only security rules**, with an email allowlist on top of authentication. AI-derived records can only be written by the server; the user may correct them (hide, rename, resolve) but not forge them.

## Authentication

**Firebase Authentication** with Google sign-in, restricted to a single allowlisted, verified account.

## Testing

**Vitest**, 500+ tests across: shift and personal-day logic, plans and day modes, analytics, time zones (including daylight-saving changes), the calendar, AI task contracts and fallbacks, privacy checks for shared reports, rate limiting under concurrency, provider routing, and static checks that logging and page loads never import AI code.

## Deployment

A Node deployment (Vercel) with a daily scheduled job; a static-export build is also supported for hosting without a server (AI features then turn off gracefully).
