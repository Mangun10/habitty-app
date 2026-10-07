# Habitty — portfolio case study

A standalone, static case-study website about Habitty, for a résumé and personal portfolio.

**This folder is completely separate from the Habitty application.** It imports nothing from the app, the app imports nothing from it, it is ignored by the app's git repository (`portfolio/` in `.gitignore`), and it is not part of the app's build or deployment. Copy it out to its own repository to publish it.

## Run locally

No build step and no dependencies. Either:

- open `index.html` directly in a browser, or
- serve the folder: `python -m http.server 8080` (or `npx serve .`) and open http://localhost:8080

The page works without JavaScript; `script.js` only adds the mobile menu, section highlighting and a gentle fade-in (skipped when reduced motion is preferred). Fonts load from Google Fonts with system fallbacks; without a connection the page falls back to Georgia and the system sans-serif.

## Deploy to GitHub Pages

1. Create a new repository and copy the **contents** of this folder into it (so `index.html` is at the root).
2. Push to `main`.
3. Repository → Settings → Pages → Source: *Deploy from a branch*, Branch: `main` / `(root)`.
4. The site appears at `https://<user>.github.io/<repo>/`. All paths are relative, so it also works from a sub-path.

## Files

```
index.html          the case study page
styles.css          styles (palette copied from Habitty's design tokens, not imported)
script.js           progressive enhancements (vanilla JS, no libraries)
assets/             SVG diagrams and the mark, all original recreations
  ai-architecture.svg       context → context builder → retrieval → Groq / Gemini → validation
  system-architecture.svg   high-level system diagram
  decision-tree.svg         abstract Decision Tree flow
  future-context.svg        generic "prepare for an event" example
  shift-day.svg             the personal day across three shift types
  mark.svg                  favicon / mark
content/            the full source material, reusable for résumés, LinkedIn and interviews
  overview.md                    one-liners, role, stack, status
  problem.md                     the problem with habit trackers on rotating shifts
  product-philosophy.md          principles
  product-decisions.md           product decisions: what, why, trade-off
  design-system.md               palette, type, interaction and data-viz principles
  ai-architecture.md             providers, context engineering, RAG, validation, rate limiting
  technical-architecture.md      frontend, backend, data, auth, testing, deployment
  engineering-decisions.md       decision, why, trade-off
  intelligence-layer.md          facts vs. interpretation, semantic memory, background analysis
  calendar-and-future-context.md the calendar as future context, "Prepare me for this"
  decision-tree.md               "no new information → no new analysis"
  snapshot-and-progress.md       one source of truth, no duplicate logging
  privacy-and-security.md        privacy principles at portfolio level
  challenges-and-tradeoffs.md    honest trade-offs and limits
  what-i-learned.md              lessons
  keywords.md                    keywords that reflect what is actually built
```

## Intentionally excluded

For privacy and security, this case study does **not** contain:

- API keys, secrets, tokens or credentials of any kind
- project identifiers, domains, private URLs or email addresses
- security-rule details, database schemas or collection layouts
- prompts and internal AI task definitions
- scheduling, cron or infrastructure specifics
- any personal data: no logs, health information, reflections, emotions, goals, values or real decisions
- screenshots of the real app (the phone on the page is a recreated illustration with generic content)

Examples (a 5K race, "I'm worried I'm falling behind") are generic and illustrative. No metrics or dates have been invented; the only number quoted is the size of the test suite (500+).
