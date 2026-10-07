# Design system

## Direction: a calm evening room

Habitty is often opened at the edges of the day — after a night shift, before sleep, between tasks. The visual language is designed for that: low glare, warm, quiet, and unhurried. One calm dark theme, by design.

- **Background:** warm charcoal (not blue-black)
- **Text:** warm off-white, with secondary and muted warm greys
- **Accent:** a muted clay/rose, used sparingly for the one action that matters
- **Supporting tones:** sage, mauve (lavender), mist, slate and blush — each with a "soft" surface variant and an "ink" text variant
- **Semantic colours:** success, notice and danger tuned to sit quietly inside the palette

All colours are **design tokens** (CSS custom properties exposed to Tailwind), so components never hard-code colour. Calendar event colours, chart series and level indicators all draw from the same muted set.

## Typography

- **Newsreader** (serif) for headlines, greetings and reflective statements — an editorial voice
- **Geist** (sans) for interface text, numbers and controls
- Generous line height, short line lengths, sentence-case copy

## Interaction principles

- **One primary action per moment.** Today leads with a single "right now" sentence.
- **Quiet secondary actions:** underlined text buttons instead of rows of pills.
- **44 px tap targets** on phone; layouts designed mobile-first, then widened.
- **Progressive disclosure:** details (habit levels, event options, reasons behind a suggestion) open on demand.
- **No streak anxiety, no red badges.** Conflicts are stated calmly ("Overlaps with EU shift").
- **Reduced motion respected** (the meditation circle stays still).

## Data visualisation

Charts (Recharts) follow the same restraint: thin marks, recessive axes, muted series colours, direct labels where useful, and an explicit "not enough data yet" state instead of misleading single points. Every chart can show its data as a table.

## Copy as design

Language is part of the system: "A minimum always counts", "Nothing planned", "From your data", "An interpretation, not a fact". AI output is labelled the same way everywhere (fact / calculated / observation / pattern / possible association / interpretation).

## Components (built in-house)

Sheet (bottom sheet on phone), Field, Segmented control, Switch, Choice chips, Progress ring, Stat row, Chart card, Bar list, Expandable sections, Toasts with undo — all small, accessible and token-driven.
