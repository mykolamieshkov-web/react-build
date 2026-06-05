Here's your comprehensive feedback document based on our conversation:

```markdown
# Project Preferences & Corrections Log

## Project Context
- **Stack**: React (latest stable) + Vite + Tailwind CSS + SCSS modules
- **Build Tool**: Vite with `@` alias pointing to `./src`
- **Linting**: ESLint with React Hooks + React Refresh rules
- **Project Type**: Static pages with React Router for navigation

## Critical Corrections Made

### 1. Color System
- **DO NOT** invent or suggest color palettes
- **MUST USE** CSS custom properties only:
  - `var(--primary-color)`
  - `var(--secondary-color)`
  - `var(--accent-color)`
  - `var(--decoration-color)`
- Color variables are pre-defined in root file - never assume RGB variants exist unless confirmed

### 2. Responsive Approach
- **Desktop-first** design (canvas: 1440px, container max-width: 1200px)
- **MUST USE** provided mixins from `_media.scss`:
  - `@include laptop` → max-width: 1220px
  - `@include tablet-b` → max-width: 992px (tablets landscape/book orientation)
  - `@include tablet` → max-width: 768px (tablets + smartphones landscape)
  - `@include mobile` → max-width: 500px (large smartphones)
  - `@include mobile-s` → max-width: 393px (small smartphones)
  - `@include hover` → handles both hover and touch states
- **Never use** arbitrary breakpoints or custom media queries

### 3. State Management
- **NO global state management** (no Redux, Zustand, Context API for global state)
- Component-local state only (`useState`, `useReducer`)
- If multiple components need same data, lift state up to common parent

### 4. Router Configuration
- React Router is ONLY for interactive functionality and navigation between pages
- Use `BrowserRouter` at app root
- Use `Link` and `NavLink` components (not `<a>` tags)
- Active route styling via `isActive` className function

### 5. SCSS Import Strategy
- Use `@` alias for imports from `src/` directory
- Example: `@import '@/styles/media.scss'` not relative paths
- SCSS preprocessor is configured in Vite - use it properly

### 6. Component Architecture
- **Modular** - each component in its own folder
- **Structure**: `ComponentName/ComponentName.jsx` + `ComponentName.scss`
- **NO placeholders** - every file must be production-ready, fully implemented
- **NO "insert code here" comments** - never acceptable
- **NO abstractions** for single-use code
- Keep components focused - if >200 lines, consider splitting

## Technical Preferences

### Code Quality Standards
- Functional components only (no class components)
- Modern Hooks: `useState`, `useEffect`, `useMemo` as needed
- Semantic HTML elements (header, nav, main, section, article)
- Tailwind CSS for layouts/styling, but SCSS for component-specific responsive logic
- Clean props definitions with sensible defaults

### Performance Requirements
- Production-ready code (no console logs in final)
- Optimized re-renders (useMemo/useCallback when justified)
- Event listener cleanup in useEffect return functions

### Responsive Patterns
- Mobile menu: hamburger transforms to X when open
- Smooth transitions for all interactive elements
- `@include hover` mixin for cross-device hover/active states
- Fixed header that changes style on scroll (background appears after 20px)

## What to Avoid (Based on Corrections)

1. **Don't assume** RGB color variables exist - only the base custom properties are guaranteed
2. **Don't create** new breakpoints - always use the 5 provided mixins
3. **Don't suggest** design/color choices - you're not the designer
4. **Don't add** global state solutions unless explicitly requested
5. **Don't refactor** adjacent code during surgical changes
6. **Don't delete** pre-existing dead code unless asked
7. **Don't use** Tailwind arbitrary values for colors when CSS variables exist

## Success Criteria Pattern

For any task, I should define:
```
1. [Action] → verify: [specific check]
2. [Action] → verify: [specific check]
3. [Action] → verify: [specific check]
```

Example for header component:
- ✅ Complete implementation - no placeholders
- ✅ Desktop-first using exact breakpoints
- ✅ Color variables only (no hardcoded colors)
- ✅ No global state
- ✅ React Router ready with active states
- ✅ Mobile responsive with hamburger menu

## Project File Structure Reference

```
src/
├── components/
│   └── Header/
│       ├── Header.jsx
│       └── Header.scss
├── styles/
│   └── media.scss  (contains all breakpoint mixins)
├── App.jsx
└── main.jsx
```

## Next Session Checklist

Before coding, I MUST:
1. State assumptions explicitly
2. Surface any confusion about requirements
3. Ask for clarification if multiple interpretations exist
4. Acknowledge if a simpler approach exists
5. Never hide tradeoffs or uncertainties

## Pet Project Template Start

```jsx
// Default imports structure
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './ComponentName.scss';

// Use @ alias for SCSS imports
@import '@/styles/media.scss';
```

---

**Note to future self**: Load this file at the start of any pet project session using React + Vite + Tailwind with the specified color system and responsive mixins.
```

This feedback file captures everything from our conversation. Save it as `project-preferences.md` and reload it at the start of future sessions. It's specifically tailored for your React + Vite + SCSS + Tailwind workflow with the custom color variables and breakpoint system.