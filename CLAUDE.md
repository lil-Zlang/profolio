# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **minimalist portfolio website** built with Next.js 14, featuring a unique single-page expandable layout. The project was specifically redesigned to prioritize simplicity, performance, and accessibility over complex animations.

**Key Philosophy**: Brutally simple design with typography-focused content, monospace aesthetic, and zero animations for fast loading and better accessibility.

## Development Commands

### Core Development
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm start            # Start production server
npm run lint         # ESLint checks
```

### Testing
```bash
npm test             # Run Jest tests once
npm run test:watch   # Run tests in watch mode
```

**Important**: Tests include mocks for framer-motion (legacy from previous version). Coverage threshold is set to 90% for all metrics.

### Single Test Execution
```bash
npx jest __tests__/components/Hero.test.tsx    # Run specific test file
npx jest --testNamePattern="renders the hero"  # Run specific test case
```

## Architecture & Key Concepts

### Single-Page Expandable Layout
The portfolio uses a unique **single-page expandable interface** rather than traditional scrolling:

- **SinglePagePortfolio.tsx**: Main component managing section expansion state
- **Expandable Sections**: About, Experience, Skills, Projects, Contact
- **Section Control**: Navbar communicates with portfolio via `useImperativeHandle`
- **State Management**: Simple React state for tracking expanded sections

```typescript
// Key pattern: Section expansion controlled by parent-child communication
const toggleSection = (section: string) => {
  setExpandedSection(expandedSection === section ? null : section)
}
```

### Component Structure
```
app/
├── layout.tsx          # Root layout with JetBrains Mono font
├── page.tsx           # Main page orchestrating components
├── globals.css        # Minimal CSS with monospace design

components/
├── Hero.tsx           # Compact header section
├── Navbar.tsx         # Navigation with section controls
├── SinglePagePortfolio.tsx  # Main expandable content
├── About.tsx          # Individual section components
├── Experience.tsx     # (used within SinglePagePortfolio)
├── Skills.tsx
├── Projects.tsx
├── Contact.tsx
└── Footer.tsx         # Simple footer
```

### Design System
- **Font**: JetBrains Mono (monospace for developer aesthetic)
- **Colors**: Black, white, and grays only
- **Borders**: Used extensively for clean separation
- **Hover Effects**: Minimal gray background transitions
- **No Animations**: Static design for performance and accessibility

### Data Architecture
Portfolio content is **hardcoded within components** rather than using external data sources:
- Experience data in `SinglePagePortfolio.tsx:20-41`
- Skills categories in `SinglePagePortfolio.tsx:43-56`
- Projects data in `SinglePagePortfolio.tsx:58-77`

## Testing Strategy

### Test Structure
- **Location**: `__tests__/components/`
- **Pattern**: Component-focused unit tests
- **Mocking**: Legacy framer-motion mocks (from previous animated version)
- **Coverage**: 90% threshold for branches, functions, lines, statements

### Test Utilities
- **@testing-library/react** for component testing
- **@testing-library/jest-dom** for DOM assertions
- **jest-environment-jsdom** for browser-like testing environment

## Deployment Configuration

### Vercel Optimization
- **next.config.js**: Configured for Vercel deployment
- **Image domains**: Unsplash images allowed
- **React Strict Mode**: Enabled for development
- **Automatic deployments**: On push to `main` branch

### Build Optimization
- **Bundle size**: ~91kB First Load JS (highly optimized)
- **Dependencies**: Minimal (only Next.js, React, React-DOM + dev tools)
- **Performance**: No animation libraries for faster loading

## Key Development Notes

### Recent Simplification (October 2025)
The codebase underwent major simplification:
- **Removed**: framer-motion, lucide-react, react-intersection-observer
- **Eliminated**: All animations, theme switching, complex layouts
- **Reduced**: Total lines of code by ~60%
- **Implemented**: Single-page expandable layout for better UX

### Content Updates
Portfolio content (experience, projects, skills) is embedded in components. Update the data objects in `SinglePagePortfolio.tsx` when refreshing content.

### Component Communication Pattern
```typescript
// Parent (page.tsx) controls child (SinglePagePortfolio) via ref
const portfolioRef = useRef<any>(null)
const handleSectionClick = (section: string) => {
  if (portfolioRef.current?.toggleSection) {
    portfolioRef.current.toggleSection(section)
  }
}
```

This pattern enables the navbar to control section expansion without complex state management.