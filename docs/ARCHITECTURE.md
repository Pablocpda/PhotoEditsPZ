# Architecture — PhotoEditsPZ

> Type: Dynamic (updated via /progress and /update-context)
> Used: building + system changes
> Last updated: 2026-04-19 22:45

---

## Strategy

Prototype → Validate → Build → Scale

---

## 1. Prototype Architecture

### Purpose
Validate core flow fast with minimal setup

### Stack
- HTML5 + CSS3 + Vanilla JavaScript
- Static file hosting (GitHub Pages or local)
- No backend dependencies

### Components
- UI: Gallery grid, package cards, contact form, scheduling widget
- Logic: Client-side form validation, mock data filtering
- Mock/Data: Hardcoded portfolio images, sample packages, fake API responses

### Data Flow
User → UI (Gallery/Packages) → Logic (selection) → Mock Response (confirmation)

---

## 2. Production Architecture (MVP)

### Purpose
Real system with persistent data and integrations

### Stack
- Frontend: Next.js or Astro with React/Svelte
- Backend: Node.js Express API
- Database: PostgreSQL or MongoDB (contact requests, session logs)
- Scheduling: Calendly/Acuity Scheduling API integration
- Storage: Cloud CDN for portfolio images (Cloudinary, AWS S3)

### Components
- Frontend: Gallery, packages, contact form, booking confirmation
- Backend/API: Contact form processor, appointment slots, email notifications
- Database: Contacts, packages, availability, bookings
- Services: Email notifications, payment (future), scheduling API

### Data Flow
User → Frontend (Gallery/Contact) → Backend API (validation/processing) → Database (store) → Scheduling API (calendar) → Notification Service (email)

---

## 3. Evolution

- Prototype is MVP-adjacent: minimal complexity, validates flow only
- Production adds: real data persistence, email/notification pipeline, third-party integrations
- Backend replaces: mock responses with database queries
- Database added: for contact history, booking logs, availability management
- Services added: email, scheduling sync, future payment processing

---

## Rules

- High-level only
- No code
- No over-engineering
- Must evolve with system
