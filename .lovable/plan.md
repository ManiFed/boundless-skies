# Boundless Skies Alliance — Website Build Plan

## Design System

- **Palette**: Deep navy/indigo primary, warm gold accent, white/light backgrounds, high-contrast text
- **Typography**: Large, readable fonts with generous spacing throughout
- **Layout**: Max-width ~1200px, sticky header, large touch targets, clear section separation
- **Accessibility-first**: High contrast, large buttons, no clutter, simple navigation

## Phase 1 Pages (4 pages)

### 🏠 Home Page

8 sections as specified:

1. **Hero** — Full-width with starry/nature background, headline "Astronomy and nature without barriers", two CTA buttons
2. **Quick Mission** — Centered 2-3 sentence block
3. **Upcoming Events** — Event cards with the Walk MS Outreach Event (May 3, 2026, Glen Island Park) prominently featured
4. **What We Do** — 4 horizontal cards (Stargazing, Nature Programs, Adaptive Equipment, Outreach)
5. **Accessibility in Action** — Split layout with bullet points (seated viewing, simplified controls, shared experiences)
6. **Partnership Callout** — Centered block listing partner types with CTA
7. **Get Involved** — Visual break section with Join/Volunteer/Contact buttons
8. **Footer** — Mission snippet, contact info (New Rochelle, NY), social link placeholders

### 📖 About Page

- Mission statement, The Problem, The Solution, Founding Story, Vision sections — all clean text blocks with clear hierarchy

### ♿ Accessibility in Action Page

- Philosophy section, then Mobility/Visual/Cognitive categories as distinct blocks, real examples section, future development roadmap

### 📬 Contact Page

- Form with Name, Email, Message fields, plus "I am…" dropdown (Individual/Organization/Sponsor)

## Global Components

- **Header**: Text logo left, nav links right (Home, About, Accessibility, Contact), sticky, large click areas
- **Footer**: Consistent across all pages

## Technical Notes

- All client-side React with React Router
- Smooth scroll animations between sections
- Mobile-responsive throughout
- Lucide icons for visual accents
- **Deployable with Github Pages (EXTREMELY IMPORTANT)**