# Team ChalkWise — Pre-Launch Toolkit

**Project:** [ChalkWise](https://chalkwise.illinihunt.org/) is a gamified student-matching app for UIUC students that helps classmates find study partners based on shared courses, study preferences, and availability.
**Built by:** Charlie, Billy, Sofia
**Automation type:** Marketing + Operations

---

## Product

ChalkWise is a UIUC-only matching app that helps students find study partners in the same classes through a more structured, lower-friction flow than Reddit, Discord, or GroupMe. Users sign up with their `@illinois.edu` email, build a profile with their major, classes, study style, and availability, then browse and match with relevant classmates. If two users mutually match, ChalkWise opens a direct message so they can start coordinating right away.

## Automation

Our team built a pre-launch toolkit with two automations: a **Social Content Pipeline** and a **Launch Readiness Dashboard**. The marketing automation generated a full 7-day content calendar across LinkedIn, Instagram, and X so ChalkWise could launch with a consistent audience-facing message instead of posting randomly or not posting at all. The operations automation produced a structured readiness scorecard and fix-it checklist so the team could identify launch blockers, polish issues, and product gaps before promoting the app more broadly.

## Prompt used

We used prompt chaining across the capstone workflow, but these were the two most important final prompts:

**Marketing automation prompt**

> Create a social content pipeline for ChalkWise using the product summary, user feedback, launch goals, and competitor notes in my project context. Build an audience analysis first, then generate a 7-day content calendar with platform-specific posts for LinkedIn, Instagram, and X, and finally create a clean content hub page that organizes the full campaign.

**Operations automation prompt**

> Run a launch-readiness audit for ChalkWise using the live site and my project context. Evaluate broken links and navigation, mobile responsiveness, empty states and edge cases, error handling, SEO basics, and accessibility. Save the output as a launch-readiness scorecard and a prioritized fix-it checklist.

## Inner / outer loop

- **Inner loop (AI execution):** Codex synthesized our product context into audience positioning, generated platform-specific social copy, organized it into a content hub, reviewed the live ChalkWise site, and turned the audit into a scorecard plus prioritized checklist.
- **Outer loop (human judgment):** We decided the brand voice, clarified the target users, selected which automations mattered most for launch, checked whether the generated content sounded like ChalkWise, and evaluated whether the audit findings matched our real product instincts.

## Anthropic agent pattern

Which of these fits best? Pick one and defend in 1–2 sentences.

- [x] Prompt chaining
- [ ] Routing
- [ ] Parallelization
- [ ] Orchestrator-worker
- [ ] Evaluator-optimizer

**Why this one:** This workflow depended on sequential context-building: first we documented the product, feedback, competitors, and goals, then we used that context to generate marketing outputs and operations outputs. Each automation got better because it was chained off the project knowledge base we built first.

## What required human judgment

The automations were not fully autonomous because we still had to decide what success looked like, which users mattered first, what voice felt right for the product, and whether the audit findings were truly launch-critical. If we had let Codex run end-to-end without checking in, it could have produced content that sounded generic or an audit that overemphasized minor issues instead of the real priorities, like class-section specificity and public-facing product credibility.

## What didn't work

The process was not perfect on the first try. We had to clarify that our project files should live in a separate ChalkWise workspace rather than the NovaBrew course workspace, and some of the generated language needed human review to make sure it felt like a student product instead of generic startup copy. The audit also had limitations: it could identify obvious issues like weak metadata and likely edge-case risks, but it was not a substitute for real device testing or deeper product validation with more users.

---

*Submitted for BADM 350, Spring 2026.*
