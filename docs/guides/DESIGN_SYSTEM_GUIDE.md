# Design System Guide

This guide provides comprehensive documentation for the Limitless Infotech Solution design system, including design tokens, component guidelines, and implementation standards.

## Table of Contents

1. [Introduction](#introduction)
2. [Design Tokens](#design-tokens)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing System](#spacing-system)
6. [Component Library](#component-library)
7. [Implementation Guidelines](#implementation-guidelines)
8. [Theming](#theming)
9. [Dark Mode](#dark-mode)
10. [Responsive Design](#responsive-design)

## Introduction

Our design system provides a unified approach to creating consistent, accessible, and scalable user interfaces. Built on Tailwind CSS with custom extensions, it ensures visual coherence across all products while maintaining flexibility for unique requirements.

## Design Tokens

Design tokens are the foundational elements of our design system, providing consistent values for colors, typography, spacing, and more.

### Color Tokens

Defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#2563eb',
    600: '#1d4ed8',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#ffc957',
    600: '#ffbd3a',
    700: '#ffad1c',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },
  accent: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#0a0b0d',
    600: '#1a1a1a',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  }
}
```

### Typography Tokens

Font families defined in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Poppins', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

Font sizes with line heights:

```javascript
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
  '9xl': ['8rem', { lineHeight: '1' }],
}
```

## Color System

Our color system is organized into semantic roles:

### Primary Colors
Used for primary actions, branding, and key interactive elements.

### Secondary Colors
Used for secondary actions and complementary elements.

### Accent Colors
Used for highlights, warnings, and attention-grabbing elements.

### Neutral Colors (Dark Scale)
Used for text, backgrounds, borders, and subtle UI elements.

### Semantic Colors
Colors with specific meanings:
- Success: Green tones
- Warning: Yellow/Orange tones
- Error: Red tones
- Info: Blue tones

## Typography

### Font Families

1. **Sans-serif (Inter)**: Used for body text and general UI
2. **Display (Poppins)**: Used for headings and prominent text
3. **Monospace (JetBrains Mono)**: Used for code and technical content

### Font Sizes

| Size | Class | REM | Pixels | Usage |
|------|-------|-----|--------|-------|
| xs | text-xs | 0.75rem | 12px | Captions, fine print |
| sm | text-sm | 0.875rem | 14px | Secondary text |
| base | text-base | 1rem | 16px | Body text |
| lg | text-lg | 1.125rem | 18px | Lead paragraphs |
| xl | text-xl | 1.25rem | 20px | Subheadings |
| 2xl | text-2xl | 1.5rem | 24px | Section headings |
| 3xl | text-3xl | 1.875rem | 30px | Major headings |
| 4xl | text-4xl | 2.25rem | 36px | Page titles |
| 5xl | text-5xl | 3rem | 48px | Hero headings |

### Font Weights

| Weight | Class | Value | Usage |
|--------|-------|-------|-------|
| Thin | font-thin | 100 | Decorative headings |
| Extra Light | font-extralight | 200 | Decorative headings |
| Light | font-light | 300 | Subtle text |
| Normal | font-normal | 400 | Body text |
| Medium | font-medium | 500 | Emphasized text |
| Semi Bold | font-semibold | 600 | Headings, labels |
| Bold | font-bold | 700 | Strong emphasis |
| Extra Bold | font-extrabold | 800 | Hero headings |
| Black | font-black | 900 | Maximum emphasis |

## Spacing System

Our spacing system uses a consistent scale based on 4px increments:

### Spacing Scale

| Name | Size | REM | Pixels | Usage |
|------|------|-----|--------|-------|
| 0 | 0 | 0 | 0px | None |
| 0.5 | 0.125rem | 2px | Tiny gaps |
| 1 | 0.25rem | 4px | Micro spacing |
| 1.5 | 0.375rem | 6px | Small gaps |
| 2 | 0.5rem | 8px | Small spacing |
| 2.5 | 0.625rem | 10px | Compact spacing |
| 3 | 0.75rem | 12px | Element padding |
| 3.5 | 0.875rem | 14px | Element padding |
| 4 | 1rem | 16px | Standard spacing |
| 5 | 1.25rem | 20px | Section padding |
| 6 | 1.5rem | 24px | Section padding |
| 7 | 1.75rem | 28px | Section padding |
| 8 | 2rem | 32px | Large spacing |
| 9 | 2.25rem | 36px | Large spacing |
| 10 | 2.5rem | 40px | Large spacing |
| 11 | 2.75rem | 44px | XL spacing |
| 12 | 3rem | 48px | XL spacing |
| 14 | 3.5rem | 56px | XXL spacing |
| 16 | 4rem | 64px | XXL spacing |
| 20 | 5rem | 80px | Hero spacing |
| 24 | 6rem | 96px | Hero spacing |
| 28 | 7rem | 112px | Hero spacing |
| 32 | 8rem | 128px | Hero spacing |
| 36 | 9rem | 144px | Hero spacing |
| 40 | 10rem | 160px | Hero spacing |
| 44 | 11rem | 176px | Hero spacing |
| 48 | 12rem | 192px | Hero spacing |
| 52 | 13rem | 208px | Hero spacing |
| 56 | 14rem | 224px | Hero spacing |
| 60 | 15rem | 240px | Hero spacing |
| 64 | 16rem | 256px | Hero spacing |
| 72 | 18rem | 288px | Hero spacing |
| 80 | 20rem | 320px | Hero spacing |
| 96 | 24rem | 384px | Hero spacing |

## Component Library

### Button Variants

| Variant | Classes | Usage |
|---------|---------|-------|
| Primary | btn-primary | Main actions, CTAs |
| Secondary | btn-secondary | Secondary actions |
| Outline | btn-outline | Alternative actions |
| Ghost | btn-ghost | Subtle actions |
| Danger | btn-danger | Destructive actions |
| Success | btn-success | Positive actions |

### Card Variants

| Variant | Classes | Usage |
|---------|---------|-------|
| Default | card-default | Standard content containers |
| Elevated | card-elevated | Prominent content |
| Outlined | card-outlined | Subtle containers |
| Filled | card-filled | Colored backgrounds |
| Gradient | card-gradient | Decorative containers |

### Badge Variants

| Variant | Classes | Usage |
|---------|---------|-------|
| Primary | badge-primary | Primary information |
| Secondary | badge-secondary | Secondary information |
| Accent | badge-accent | Highlighted information |
| Success | badge-success | Positive status |
| Warning | badge-warning | Caution status |
| Danger | badge-danger | Error status |
| Info | badge-info | Informational status |
| Neutral | badge-neutral | Generic status |

## Implementation Guidelines

### CSS Architecture

Our CSS follows a layered approach:

```css
/* Base styles */
@layer base {
  /* Global resets and base styles */
}

/* Component styles */
@layer components {
  /* Reusable component classes */
}

/* Utility styles */
@layer utilities {
  /* Custom utility classes */
}
```

### Custom Utilities

We've created several custom utilities for common patterns:

```css
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500;
}

.card-hover {
  @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-2;
}

.btn-primary {
  @apply px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl;
}
```

### Responsive Design

We use a mobile-first approach with the following breakpoints:

| Breakpoint | Prefix | Width |
|------------|--------|-------|
| Small | sm | 640px |
| Medium | md | 768px |
| Large | lg | 1024px |
| Extra Large | xl | 1280px |
| 2X Large | 2xl | 1536px |

### Container Classes

We use a custom container class for consistent page widths:

```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 md:px-6 lg:px-8;
}
```

## Theming

Our design system supports theming through CSS variables and Tailwind's dark mode functionality.

### Theme Variables

Defined in `src/index.css`:

```css
:root {
  --color-primary-500: #2563eb;
  --color-secondary-500: #ffc957;
  --color-accent-500: #0a0b0d;
}
```

### Theme Switching

We support three theme modes:
1. Light mode
2. Dark mode
3. System preference

Implemented through the AppContext:

```tsx
const { theme, changeTheme } = useApp();

// Theme options
changeTheme('light');  // Light theme
changeTheme('dark');   // Dark theme
changeTheme('system'); // Follow system preference
```

## Dark Mode

Our dark mode implementation provides a comfortable viewing experience in low-light conditions.

### Color Palette Adjustments

Dark mode colors are carefully adjusted for:
- Reduced eye strain
- Better contrast ratios
- Consistent visual hierarchy

### Implementation

Dark mode is implemented using Tailwind's class-based dark mode:

```html
<!-- Light mode -->
<div class="bg-white text-gray-900">
  <!-- Content -->
</div>

<!-- Dark mode -->
<div class="dark:bg-dark-900 dark:text-gray-100">
  <!-- Content -->
</div>
```

### Component Adaptation

All components automatically adapt to dark mode:

```tsx
// Button component adapts automatically
<button className="btn-primary">
  Primary Button
</button>

// Renders differently in dark mode
// Light: bg-primary-600 text-white
// Dark: bg-primary-600 text-white (same colors work in both modes)
```

## Responsive Design

Our design system is built with responsive design principles to ensure optimal experiences across all device sizes.

### Mobile-First Approach

We design for mobile devices first, then progressively enhance for larger screens:

```css
/* Mobile styles (default) */
.component {
  @apply p-4;
}

/* Tablet styles */
@media (min-width: 768px) {
  .component {
    @apply p-6;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .component {
    @apply p-8;
  }
}
```

### Responsive Utilities

We've created custom responsive utilities:

```css
.grid-cols-responsive-2 {
  @apply grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10;
}

.grid-cols-responsive-3 {
  @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10;
}

.grid-cols-responsive-4 {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10;
}
```

### Typography Scaling

Text sizes scale appropriately for different viewports:

```css
.responsive-heading {
  @apply text-2xl md:text-3xl lg:text-4xl;
}

.responsive-body {
  @apply text-base md:text-lg;
}
```

## Best Practices

### Design Principles

1. **Consistency**: Use established patterns and components
2. **Accessibility**: Ensure WCAG AA compliance
3. **Performance**: Optimize for fast loading and rendering
4. **Flexibility**: Allow for customization when needed
5. **Maintainability**: Write clean, well-documented code

### Component Development

1. Use TypeScript for type safety
2. Implement proper accessibility attributes
3. Follow established design patterns
4. Test across different themes and viewports
5. Document component APIs and usage

### CSS Guidelines

1. Use Tailwind utility classes primarily
2. Create custom utilities for repeated patterns
3. Follow the layer architecture
4. Maintain consistent spacing and typography
5. Test dark mode variations

## Conclusion

This design system provides a solid foundation for creating consistent, accessible, and beautiful user interfaces. By following these guidelines and using the established components and patterns, we ensure a cohesive user experience across all our products.

Regular updates to this guide help us maintain design consistency and evolve our system to meet changing needs.