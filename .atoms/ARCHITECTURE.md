# Architecture Design

## System Overview
Single-page React landing page for LegaBot - The Autonomous Football Universe. Pure frontend, no backend needed.

## Tech Stack
- React + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- shadcn/ui (UI components)
- Poppins (Google Font)

## Module Design
| Module | Responsibility | Key Files |
|--------|---------------|-----------|
| Pages | Main landing page | src/pages/Index.tsx |
| Components | Reusable section components | src/components/sections/*.tsx |
| Styles | Global styles, fonts, theme | src/index.css |

## Tech Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Single file approach | All sections in Index.tsx | Simple landing page, fewer files = less complexity |
| Tailwind for styling | Custom classes + utilities | Fast development, consistent with brand colors |
| CSS animations | Intersection Observer + CSS | Lightweight, no extra dependencies |

## File Tree Plan
```
src/
├── index.css (global styles, fonts, custom properties)
├── main.tsx (entry point)
├── App.tsx (router)
├── pages/
│   └── Index.tsx (main landing page with all sections)
├── components/
│   ├── HeroSection.tsx
│   ├── ThesisSection.tsx
│   ├── LeagueSection.tsx
│   ├── CoreEngineSection.tsx
│   ├── DigitalPlayersSection.tsx
│   ├── ContentEngineSection.tsx
│   ├── GlobalScaleSection.tsx
│   ├── MonetizationSection.tsx
│   ├── RoadmapSection.tsx
│   └── FooterSection.tsx
```

## Implementation Guide
- Use Poppins font from Google Fonts
- Dark theme with #232323 background
- Digital Violet #635cff for accent/highlight text
- Bold headlines with violet emphasis words
- Smooth scroll behavior
- Fade-in animations on scroll