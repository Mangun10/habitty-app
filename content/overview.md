# Habitty — Overview

> A personal operating system that helps you become more capable without losing sight of the life you're becoming capable for.

## One-line description

Habitty is a full-stack, AI-assisted **personal operating system**: a calm, mobile-first web app that plans each day around a rotating work-shift schedule, tracks habits, sleep, meals, training and reflection as structured data, and uses **context-aware AI** (with semantic retrieval over the user's own history) only where interpretation genuinely helps.

## Short descriptions (reusable)

- **Resume (1 line):** Designed and built Habitty, a shift-aware personal operating system (Next.js, React, TypeScript, Firebase) with context-aware AI coaching, semantic retrieval via local embeddings, and a two-provider LLM architecture (Groq for interactive, Gemini for background analysis).
- **Portfolio (2–3 lines):** Habitty began as a habit tracker and became a personal operating system: it plans the day around rotating shifts and real sleep, keeps everything as structured data, and brings in AI only when context makes it useful — a coach that knows your day, a decision tree that remembers what you already decided, and a calendar that gives the system a sense of what is coming.
- **LinkedIn project blurb:** A product-engineering and AI-systems project: product design, a custom design system, a deterministic planning engine for shift work, a retrieval-augmented coach (RAG over a curated evidence base and the user's own words), server-side LLM orchestration with token-aware rate limiting across serverless instances, and privacy-aware reporting.

## What it is

Habitty is a single-owner, private application built for a real person with a real constraint: **rotating shifts** (early, afternoon and overnight work weeks, with transition days in between). Generic habit trackers assume a fixed 9-to-5 rhythm and a calendar day that starts at midnight. Habitty instead models a **personal day** that begins when you wake up and ends when you sleep, and plans meals, training, supplements and focus work around the actual shift and the actual sleep.

## The product surfaces

| Surface | Question it answers |
| --- | --- |
| **Today** | What should I do now? |
| **Snapshot** | What actually happened? |
| **Progress** | What is changing? |
| **Goals** | Where am I going? |
| **Calendar** | What is coming? |
| **Coach** | What does it mean, and what should I do next? |

Supporting surfaces: **Values** (what matters to me), **Decision Tree** (worries already thought through), **Week in review**, weekly/monthly/yearly **personal reports**, a full-screen **meditation** timer, a **shift planner**, and settings.

## My role

Sole designer and engineer: product definition, UX and visual design, the design system, front-end, back-end, data modelling, AI architecture, prompt and output contracts, testing, security, and deployment.

## Technology (actually used)

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS, Recharts, React Hook Form, installable PWA
- **Backend:** Next.js server routes on a Node host (Vercel), scheduled jobs
- **Data & auth:** Firebase Authentication (Google sign-in, single allowlisted owner), Cloud Firestore with owner-only security rules
- **Validation:** Zod schemas for every stored document and every AI output
- **AI:** Groq (interactive: coach, decision interpretation, event preparation, reflections), Google Gemini (background analysis)
- **Semantic retrieval:** a small local embedding model (bge-small, quantized) run on the server with Transformers.js / ONNX Runtime — no external embedding API
- **Testing:** Vitest (500+ tests: domain logic, AI contracts, privacy, rate limiting, calendar, time zones)

## Status

Built and in daily personal use; deployed privately. Single-user by design (not a multi-tenant product).

## What makes it technically interesting

1. A **deterministic planning engine** for shift work, with an event-based "personal day".
2. **AI as interpretation, not authority**: application code supplies every fact; the model interprets, and its output is validated, labelled (fact vs. inference) and checked for causal or diagnostic claims before anyone sees it.
3. **Relevance-gated context**: the coach receives only the slices of personal data a question actually needs.
4. **Local semantic retrieval** with server-side embeddings and graceful fallbacks.
5. **Two-provider LLM architecture** with a shared, token-aware budget across serverless instances.
6. **Future context**: a lightweight calendar whose events become structured context for planning and coaching.
