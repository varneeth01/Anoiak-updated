# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the Anoiak premium consultancy website (react-vite) and a shared Express API server.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── anoiak/             # Anoiak premium consultancy website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Anoiak Website (`artifacts/anoiak`)

Ultra-premium luxury consultancy website for Anoiak.

### Brand
- **Company**: Anoiak
- **Founder**: Varneeth Varma Nandimanddalam
- **Services**: Business Consultancy, Personal Branding, Business Advice, Marketing, Performance Marketing
- **Email**: varneethvarma.n@gmail.com
- **Phone**: +91 7981399132
- **Location**: Hoskote, Bengaluru, Karnataka, India

### Tech Stack
- React + Vite + TypeScript
- Tailwind CSS (v4)
- Framer Motion (scroll animations)
- Lucide React (icons)
- React Helmet Async (SEO)
- React Hook Form + @hookform/resolvers (contact form)
- Wouter (routing)

### Design System
- Background: obsidian black (#090909)
- Text: warm ivory (#f5f0e8)
- Accent: champagne gold (#c9a84c)
- Cards: slightly lighter dark (#111111)
- Typography: Cormorant Garamond (serif, headings) + Inter (sans, body)
- Oversized editorial typography (hero ~9rem)
- Massive whitespace (sections py-32 to py-44)
- Minimal, refined motion (fade-up, stagger)

### Pages
- `/` — Home (hero, trust strip, founder, services, quote banner, methodology, FAQ, CTA)
- `/about` — About (founder story, values, mission)
- `/services` — Services (5 premium services in editorial layout)
- `/contact` — Contact (form + contact details)

### Components
- `src/components/layout/Navbar.tsx` — Sticky transparent navbar with scroll effect
- `src/components/layout/Footer.tsx` — Editorial luxury footer
- `src/components/layout/Layout.tsx` — Page wrapper with floating buttons
- `src/components/AnimatedSection.tsx` — Framer Motion scroll-trigger animations
- `src/components/PageSEO.tsx` — Per-page SEO meta tags

### Features
- Floating WhatsApp button (wa.me/917981399132)
- Scroll-to-top button
- Mobile hamburger menu
- Premium contact form with success/loading/error states
- SEO meta tags per page

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references
