# What I learned

## Building a product, not a collection of features
Every screen had to answer one clear question. Features that couldn't attach to a question (or that duplicated another) were folded in or removed. The product got better as it got simpler.

## Designing around context
The most valuable thing the app knows is not any single number but the combination — shift, personal day, sleep, what's due, what's coming. Modelling that context explicitly made both the rules and the AI dramatically better.

## Knowing when not to use AI
Counting, averaging, scheduling, converting time zones and detecting conflicts are code problems. Using an LLM there adds cost, latency and error. AI earns its place in interpretation, synthesis and language.

## Separating source-of-truth data from model interpretation
Keeping facts and interpretations in different layers — with labels and provenance — made the AI safer to use and the data safer to keep.

## Designing adaptive systems
Plans that lower expectations on hard days, relevance rules that decide what context a question needs, budgets that reserve and settle — adaptivity is mostly careful, explainable rules.

## Balancing sophistication with simplicity
The hardest design work was invisible: making a page with one sentence and three steps correct across rotating shifts. The measure of success was how little the user has to think about it.

## Practical engineering lessons
- Serverless changes assumptions: per-instance memory can't enforce provider limits; native ML runtimes need explicit bundling.
- Validate everything that crosses a boundary — stored documents and model output alike.
- Write tests for privacy and "no AI here" guarantees, not only for features.
