# Roadmap — PhotoEditsPZ

> Type: Dynamic (update if direction changes)
> Used: /new-session, /update-context
> Last updated: 2026-04-19 22:45

---

## Objective

- Prototype success: Core flow navigable (gallery → packages → contact form → scheduling)
- MVP success: Users can view portfolio, select packages, submit contact requests, and schedule sessions

---

## Phases

### 1. Planning
- Define scope: portfolio web + scheduling integration
- Define core flow: Gallery → Packages → Contact → Appointment

---

### 2. Prototype (Validation)
- Build fast: Static HTML/CSS/JS site
- Focus only on core flow: display photos, show packages, contact form, calendar widget
- Use mocks: hardcoded portfolio data, mock booking responses

Checkpoint:
- Works? YES/NO
- Useful? YES/NO
- Decision: proceed/pivot/stop

---

### 3. Technical Direction (Confirmed) ✅
- [x] Choose stack: Next.js + Tailwind + Supabase
- [x] Define approach: Dynamic portfolio with Supabase Storage + Edge Functions for contact notifications.

---

### 4. Development (MVP)
- Build real system: Replace mocks with database
- Connect contact form to email/notification system
- Integrate scheduling platform API

---

### 5. Validation
- Test flows: Portfolio browsing, package selection, contact submission, appointment booking
- Fix bugs and usability issues

---

### 6. Deployment
- Setup hosting (Vercel/Netlify for frontend)
- Deploy backend API
- Configure scheduling integration

---

### 7. Optimization
- Performance tuning (image optimization, lazy loading)
- SEO improvements for photography portfolio
- User feedback iteration

---

## Rules

- PROJECT_STATE overrides this
- Update only when direction changes
- Do not over-specify
