# The problem

## Habit trackers assume a life that doesn't rotate

Most habit apps are built around a stable routine: wake at 7, work 9-to-5, a day that resets at midnight, a streak that breaks if you miss a box. For someone working **rotating shifts** — an early week, an afternoon week, an overnight week, with awkward transition days in between — that model fails in small, constant ways:

- "Today" at 2 a.m. is still yesterday's waking day if you are on a night shift.
- "Morning" can mean 6:30 a.m. one week and 2:30 p.m. the next.
- A missed workout after an overnight shift is not a failure; it is the right decision.
- Streaks punish exactly the days when protecting sleep matters most.

## Tracking is not the same as guidance

Even a perfect log only answers *what happened*. The questions that actually matter during a day are different:

- **What should I do now**, given my shift, my sleep and what is left of the day?
- **What actually happened**, without having to log everything twice?
- **What is changing** over weeks and months?
- **Where am I going**, and do my days still point there?
- **What is coming** that should change how I handle today?
- **What did I already decide** about the things I keep worrying about?

## AI alone doesn't solve it either

An LLM chat window can give advice, but it doesn't know the shift, the sleep, the training type, the supplements that are due, the goals, or the decision made last month — and if you paste all of that in, it will happily invent the rest. Ungrounded AI produces confident, generic, sometimes wrong guidance.

## The design challenge

Build a system that:

1. understands the user's **real context** (shift, personal day, sleep, training, meals, tasks, goals, values, upcoming events);
2. keeps that context as **structured data** that code can reason about correctly;
3. gives **guidance before tracking** — the next sensible step, not another form;
4. uses **AI only where interpretation adds value**, grounded in facts the application supplies;
5. stays **calm and simple on the surface**, no matter how much logic sits underneath.

Habitty is the answer I designed and built for that challenge.
