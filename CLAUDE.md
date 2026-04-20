# Claude — PhotoEditsPZ

> Type: Project configuration
> Purpose: PhotoEditsPZ-specific context and constraints

---

## Project Identity

Photography portfolio + booking platform for event photographers in Honduras. Accessible pricing, high quality. Core flow: gallery → packages → contact → schedule.

---

## Phase Focus

**Current:** Planning → Prototype Validation

Prototype: Fast validation of core flow with static HTML/CSS/JS + mocks.

---

## Stack (this project)

- **Prototype:** HTML5 + CSS3 + Vanilla JavaScript (static)
- **MVP:** Next.js + React + Tailwind + Supabase (from STACK_GLOBAL)
- **Backend:** Node.js Express + PostgreSQL
- **Booking:** Calendly or Acuity Scheduling API

---

## Key Constraints

- Weekend + night availability only
- Budget: 1,000 Lempiras/hour
- Limited resources, high quality focus
- Must address client trust (photographer experience)

---

## Truth Priority

1. docs/PROJECT_STATE.md
2. Codebase
3. docs/ROADMAP.md
4. docs/ARCHITECTURE.md

---

## Before Starting

Read:
- docs/PROJECT_STATE.md (always)
- docs/IDEA_DRAFT.md (for problem context)
- docs/ROADMAP.md (if planning next phase)
- docs/ARCHITECTURE.md (when building MVP)

Do NOT read everything upfront — load on demand.

---

## Execution Style

- Design-first: lock the prototype flow before coding
- Minimal: no over-engineering, prototype is validation only
- Direct: execute the core flow, skip polish for now
- Iterate: test with real flow (gallery → booking), fix bugs, then MVP

---

## Do NOT

- Commit credentials to git
- Build backend before prototype works
- Add features outside core flow
- Overcomplicate hosting setup (GitHub Pages for prototype is fine)
