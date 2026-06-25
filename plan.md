# Implementation Plan - Royal Dishes by Madam Whyte Website

Create a modern, responsive, and professional restaurant website for "Royal Dishes by Madam Whyte" using React, Tailwind CSS, and Framer Motion. The site will feature a luxury aesthetic with a gold and green color palette, highlighting authentic Nigerian cuisine.

## Scope Summary
- **Single Page Application (SPA):** A long-scrolling landing page with sections for Hero, About, Menu, Why Us, Reviews, Gallery, and Contact.
- **Visual Design:** Royal Gold (#D4AF37) and Deep Green (#0F5132) palette. Mobile-first, elegant, and fast.
- **Key Features:**
  - Dynamic Menu display with categories.
  - WhatsApp & Phone integration for ordering.
  - Review carousel.
  - Masonry gallery.
  - Google Maps integration.
- **Non-Goals:**
  - Back-end ordering system (orders go to WhatsApp/Phone).
  - User authentication/profiles.
  - Real-time inventory tracking.

## Assumptions & Open Questions
- **Images:** Will use high-quality placeholder images (Unsplash/Pexels) for Nigerian dishes since specific restaurant photos aren't provided.
- **Map:** Will use an iframe embed for the specific Lagos address provided.

## Affected Areas
- **Frontend:** All UI components, layout, and styling.
- **Assets:** Logo placeholder and food imagery.
- **Configuration:** Tailwind colors and typography (Poppins/Inter).

## Ordered Phases

### Phase 1: Setup & Theme (frontend_engineer)
- Update `index.css` with the custom color palette and font imports (Poppins, Inter).
- Configure basic layout wrapper with smooth scroll.
- Install necessary dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.

### Phase 2: Core Components (frontend_engineer)
- **Navbar:** Sticky navigation with logo and mobile menu.
- **Hero Section:** High-impact visual with CTAs (WhatsApp/Order/Menu).
- **About Section:** Narrative section about Madam Whyte.

### Phase 3: Menu & Features (frontend_engineer)
- **Menu Section:** Category tabs (Swallows, Rice, Protein, Specials) with price cards.
- **Why Us Section:** Icon-based cards for USPs (Fast Delivery, Affordable, etc.).

### Phase 4: Social Proof & Gallery (frontend_engineer)
- **Reviews Section:** Carousel displaying customer testimonials.
- **Gallery Section:** Masonry-style grid for food and interior categories.

### Phase 5: Contact & Footer (frontend_engineer)
- **Ordering/Contact Section:** WhatsApp and Phone CTA blocks.
- **Map Section:** Google Maps iframe embed for 16B Oba Daudu Street.
- **Footer:** Quick links and social icons.

### Phase 6: Polishing (quick_fix_engineer)
- Final responsive checks.
- Add fade-in animations using Framer Motion.
- SEO meta tags in `index.html`.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core structure, sections, and logic.
2. quick_fix_engineer — Apply animations, SEO tweaks, and final styling refinements.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:** Complete build of the SPA.
- **Files:** `src/App.tsx`, `src/index.css`, `src/components/*`
- **Depends on:** none
- **Acceptance criteria:**
  - All sections from the user request are present.
  - Colors follow #D4AF37 and #0F5132.
  - WhatsApp button links correctly (https://wa.me/2348128176870).
  - Menu categories are filterable or cleanly grouped.
  - Responsive layout (mobile/desktop).

### 2. quick_fix_engineer
- **Phases:** 6
- **Scope:** Refine UX with animations and SEO.
- **Files:** `index.html`, `src/App.tsx`
- **Depends on:** frontend_engineer
- **Acceptance criteria:**
  - Framer Motion "Reveal on Scroll" animations applied.
  - Google Map iframe is correctly embedded and centered.
  - Page title and meta descriptions updated for SEO.
