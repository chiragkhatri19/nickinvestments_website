# Agent Guidelines for Nick Investments Website

## Project Overview
A premium landing page for Nick Investments, a wealth management company in India. Built with React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Build & Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code (TypeScript + React)
npm run lint
```

**Note:** This project does not have a test suite. For single-component testing, use manual testing via the dev server.

## Code Style Guidelines

### TypeScript
- Use strict TypeScript mode (enabled in `tsconfig.json`)
- Avoid `any` type - use proper interfaces/types
- Use `interface` for object shapes, `type` for unions/aliases
- Export component props as interfaces at the top of files

```typescript
// Good
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// Avoid
const Button = ({ children }) => ... // no types
```

### React Components
- Use functional components with arrow function syntax
- Export default for page-level components, named exports for utilities
- Use `"use client"` directive for client-side components (Navbar, FloatingCTA)
- Keep components under 300 lines - extract sub-components if needed

```typescript
// Good
export default function ComponentName() {
  // ...
}

// Helper components can be in same file
function SubComponent({ prop }: { prop: string }) {
  return <div>{prop}</div>;
}
```

### Imports
- Use `@/` path alias for src imports (configured in tsconfig)
- Group imports: React → third-party → internal → types
- One import per line

```typescript
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { FormData } from "@/types";
```

### Tailwind CSS
- Use pre-defined brand colors from `tailwind.config.js`:
  - Navy: `bg-[#002147]`, `text-[#002147]`
  - Orange: `bg-[#E67E22]`, `text-[#E67E22]`
  - Dark Orange: `bg-[#944a00]`, `text-[#944a00]`
- Use arbitrary values sparingly - prefer semantic Tailwind classes
- Break long className strings onto multiple lines for readability

```typescript
// Good
className="flex items-center justify-between gap-4 
           bg-[#002147] text-white px-6 py-4"

// Avoid
className="flex items-center justify-between gap-4 bg-[#002147] text-white px-6 py-4"
```

### Framer Motion
- Use `motion` component variants for consistency
- Prefer `whileInView` for scroll-triggered animations
- Use `AnimatePresence` for enter/exit animations
- Keep animations subtle - avoid excessive motion

```typescript
// Good - simple entrance
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>

// Avoid - complex chained animations that cause lag
<motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }} />
```

### Naming Conventions
- Components: PascalCase (`ContactForm.tsx`)
- Functions/Variables: camelCase (`handleSubmit`, `isLoading`)
- Constants: UPPER_SNAKE_CASE for config objects
- CSS classes: kebab-case (standard Tailwind)
- Files: kebab-case (`floating-cta.tsx`)

### File Structure
```
src/
├── components/     # UI components
├── api/           # API client functions
├── lib/           # Utilities and helpers
├── App.tsx        # Root component
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## Design Principles

### Avoid "AI Slop"
- No excessive gradients or decorative elements
- No infinite animations (rotating, pulsing elements)
- No emojis in UI - use Lucide icons instead
- Professional, trustworthy aesthetic
- Clean whitespace with intentional spacing

### Color Usage
- Navy (`#002147`) as primary/backgrounds
- Orange (`#E67E22`) for CTAs and accents only
- White/off-white for card backgrounds
- Use color sparingly - trust the typography

### Performance
- Minimize `useEffect` dependencies
- Use `passive: true` for scroll listeners
- Avoid layout animations that trigger reflow
- Lazy load images with proper alt text

## Error Handling
- Always handle form state (`idle`, `loading`, `error`, `success`)
- Provide user feedback for async operations
- Use try/catch for API calls
- Never log sensitive data

## Accessibility
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Include `aria-label` on icon-only buttons
- Ensure color contrast meets WCAG AA standards
- Add `data-testid` for important interactive elements
