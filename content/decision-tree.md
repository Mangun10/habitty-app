# Decision Tree

## The insight

Many worries are not new. They return — about career pace, health, money, relationships — and each time they get re-litigated from scratch. If a decision has already been made with good reasoning, the useful response to the same worry is often: *you already thought this through; has anything materially changed?*

**No new information → no new analysis.**

## The flow (abstract example)

```
Worry          "I'm worried I'm falling behind."
  ↓
Reasoning      why this worry exists, and what actually matters
  ↓
Decision       what I've decided to do about it
  ↓
Action         the concrete behaviour that follows
  ↓
Reconsider if  "What would count as new information?"
```

(Illustrative only — not real personal content.)

## Capture in two inputs

1. *What am I worried about?*
2. *What am I going to do about it?*

The interactive model infers the rest — area, a short title, a clean statement of the decision, what would justify reconsidering, a one-line reasoning — and shows it back as **"Here's how I understood this"**, with the user's own words kept visibly separate from what was inferred. Every inferred field can be corrected; corrections are stored as the user's and guide future inferences.

## Conservative linking

- At most **one value** and **one goal** can be linked.
- A link survives only if the model quotes the user's own words as evidence — checked in code.
- A goal is linked only if the user's action **directly** serves it and is close in meaning (checked with embeddings). Multi-step chains ("practising DSA → financial security") are rejected.
- If anything is uncertain, no link is made. A wrong relationship is worse than none.

## Related decisions found by meaning

Before creating anything, the system searches earlier decisions **semantically** (local embeddings). A differently worded version of the same worry is recognised, and the user chooses:

- **Nothing changed** → the decision stands; nothing is added, no AI call is made.
- **Something changed** → a reconsideration; the previous version is kept in history.
- **Create a new decision**.

## In the coach

When a question matches a decision, the coach can offer to use it ("you decided…"), reconsider it with new information, or simply listen.

## Failure handling

If the model is busy or unavailable, a rule-based organiser fills the same card (marked as such); if the embedding model is slow to load, matching falls back to words after a timeout.
