# Team ChalkWise — Social Content Pipeline

**Project:** [ChalkWise](https://chalkwise.illinihunt.org/) is a gamified student-matching app for UIUC students that helps classmates find study partners based on shared courses, study preferences, and availability.
**Built by:** Charlie, Billy, Sofia
**Automation type:** Marketing

---

## Product

ChalkWise is a UIUC-only student matching app that helps students find study partners in the same classes. Users sign up with their `@illinois.edu` email, create a profile with their classes, study style, and availability, and browse potential matches through a gamified discover flow. If two users mutually match, they can directly message each other to coordinate studying.

## Automation

Our automation was a Social Content Pipeline for ChalkWise. It took our product context, user feedback, launch goals, and competitor positioning and turned that into an audience analysis, a 7-day content calendar, and a content hub page with platform-specific posts for LinkedIn, Instagram, and X. It solved the problem that before this, ChalkWise had no real social posting system at all.

## Prompt used

Create a social content pipeline for ChalkWise using the product summary, user feedback, launch goals, and competitor notes in my project context. Build an audience analysis first, then generate a 7-day content calendar with platform-specific posts for LinkedIn, Instagram, and X, and finally create a clean content hub page that organizes the full campaign.

## Inner / outer loop

- **Inner loop (AI execution):** Codex synthesized our product context into audience positioning, generated platform-specific social media copy, built a 7-day posting calendar, and created a clean content hub page to organize the campaign.
- **Outer loop (human judgment):** We decided the brand voice, clarified who the target users were, evaluated whether the generated content actually sounded like ChalkWise, and approved the final tone and direction.

## Anthropic agent pattern

Which of these fits best? Pick one and defend in 1–2 sentences.

- [x] Prompt chaining
- [ ] Routing
- [ ] Parallelization
- [ ] Orchestrator-worker
- [ ] Evaluator-optimizer

**Why this one:** This workflow relied on sequential context-building. We first defined the product, target audience, user feedback, competitors, and launch goals, then used that context to generate the audience analysis and content outputs. Each step improved the quality of the next one.

## What required human judgment

The automation was not fully autonomous because we still had to decide what voice fit ChalkWise, which users we wanted to speak to first, and whether the generated content actually matched our product and audience. If we had let Codex run end-to-end without checking in, it could have produced content that sounded generic or too polished instead of feeling like a real student product for UIUC.

## What didn't work

The process did not work perfectly on the first try. We had to clarify the brand voice before the content felt right, and we still needed to review the posts to make sure they sounded like ChalkWise instead of generic startup marketing. Another limitation was that the automation could generate a strong content system quickly, but it still depended on us to judge whether the tone, messaging, and priorities matched what real UIUC students would respond to.

---

*Submitted for BADM 350, Spring 2026.*
