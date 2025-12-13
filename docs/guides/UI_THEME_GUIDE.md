# UI & Theme Guide

## 🎨 Complete UI & Theme Documentation

This guide covers all UI components, theme system, design patterns, and styling guidelines for the Limitless Infotech Solution website.

---

## 📑 Table of Contents

1. [Theme System](#theme-system)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Responsive Design](#responsive-design)
7. [Dark Mode](#dark-mode)
8. [Animations](#animations)
9. [Best Practices](#best-practices)

---

## 🌓 Theme System

### Overview
The website supports three theme modes:
- **Light Mode** - Default bright theme
- **Dark Mode** - Dark theme for low-light environments
- **System** - Follows OS preference

### Implementation
Theme is managed via Context API (`AppContext.jsx`) and persisted in localStorage.

### Theme Toggle
Located in Navbar component with three options:
```jsx
<button onClick={() => setTheme('light')}>Light</button>
<button onClick={() => setTheme('dark')}>Dark</button>
<button onClick={() => setTheme('system')}>System</button>
```

### Theme Classes
Tailwind's `class` dark mode is used:
```jsx
// Add 'dark' class to <html> element for dark mode
<html class="dark">
```

### Using Theme in Components
```jsx
// Light and dark variants
<div className="bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
  Content
</div>
```

---

## 🎨 Color System

### Primary Colors (Brand Blue)
Used for main branding, CTAs, links, and primary actions.

```css
primary-50:  #f0f9ff  /* Lightest - backgrounds */
primary-100: #e0f2fe  /* Very light - hover states */
primary-200: #bae6fd  /* Light - borders */
primary-300: #7dd3fc  /* Medium light */
primary-400: #38bdf8  /* Medium */
primary-500: #0ea5e9  /* MAIN BRAND COLOR */
primary-600: #0284c7  /* Dark - hover states */
primary-700: #0369a1  /* Darker - active states */
primary-800: #075985  /* Very dark */
primary-900: #0c4a6e  /* Darkest */
primary-950: #082f49  /* Ultra dark */
```

**Usage:**
- Buttons: `bg-primary-600 hover:bg-primary-700`
- Links: `text-primary-600 dark:text-primary-400`
- Borders: `border-primary-500`
- Backgrounds: `bg-primary-50 dark:bg-primary-900/20`

### Secondary Colors (Purple)
Used for accents, badges, and secondary actions.

```css
secondary-50:  #faf5ff
secondary-100: #f3e8ff
secondary-200: #e9d5ff
secondary-300: #d8b4fe
secondary-400: #c084fc
secondary-500: #a855f7  /* Main secondary */
secondary-600: #9333ea  /* Hover */
secondary-700: #7e22ce  /* Active */
secondary-800: #6b21a8
secondary-900: #581c87
secondary-950: #3b0764
```

**Usage:**
- Secondary buttons: `bg-secondary-600`
- Badges: `bg-secondary-100 text-secondary-700`
- Gradients: `from-secondary-500 to-purple-600`

### Accent Colors (Orange)
Used for highlights, special features, and warnings.

```css
accent-50:  #fff7ed
accent-100: #ffedd5
accent-200: #fed7aa
accent-300: #fdba74
accent-400: #fb923c
accent-500: #f97316  /* Main accent */
accent-600: #ea580c  /* Hover */
accent-700: #c2410c  /* Active */
accent-800: #9a3412
accent-900: #7c2d12
accent-950: #431407
```

**Usage:**
- Highlights: `bg-accent-100 text-accent-700`
- Warning badges: `bg-accent-50 border-accent-500`
- Special CTAs: `bg-accent-600 hover:bg-accent-700`

### Dark Mode Colors (Slate/Gray)
Used for dark mode backgrounds and neutral elements.

```css
dark-50:  #f8fafc
dark-100: #f1f5f9
dark-200: #e2e8f0
dark-300: #cbd5e1
dark-400: #94a3b8
dark-500: #64748b
dark-600: #475569
dark-700: #334155  /* Dark mode cards */
dark-800: #1e293b  /* Dark mode secondary bg */
dark-900: #0f172a  /* Dark mode main bg */
dark-950: #020617  /* Darkest */
```

**Usage:**
- Dark backgrounds: `dark:bg-dark-900`
- Dark cards: `dark:bg-dark-800`
- Dark borders: `dark:border-dark-700`
- Dark text: `dark:text-dark-100`

### Semantic Colors

#### Success (Green)
```css
bg-green-100 text-green-700   /* Light mode */
dark:bg-green-900/30 dark:text-green-300  /* Dark mode */
```

#### Error (Red)
```css
bg-red-100 text-red-700       /* Light mode */
dark:bg-red-900/30 dark:text-red-300  /* Dark mode */
```

#### Warning (Yellow)
```css
bg-yellow-100 text-yellow-700 /* Light mode */
dark:bg-yellow-900/30 dark:text-yellow-300  /* Dark mode */
```

#### Info (Blue)
```css
bg-blue-100 text-blue-700     /* Light mode */
dark:bg-blue-900/30 dark:text-blue-300  /* Dark mode */
```

### Gradient System

#### Text Gradients
```jsx
// Multi-color gradient
<h1 className="text-gradient">
  Gradient Text
</h1>

// Primary gradient
<h2 className="text-gradient-primary">
  Primary Gradient
</h2>
```

#### Background Gradients
```jsx
// Primary
<div className="bg-gradient-primary">

// Secondary
<div className="bg-gradient-secondary">

// Accent
<div className="bg-gradient-accent">

// Custom
<div className="bg-gradient-to-r from-primary-500 to-secondary-500">
```

---

## 📝 Typography

### Font Families

#### Sans Serif (Body Text)
```css
font-sans: 'Inter', system-ui, sans-serif
```
**Usage:** Paragraphs, body text, UI elements
```jsx
<p className="font-sans">Body text</p>
```

#### Display (Headings)
```css
font-display: 'Poppins', system-ui, sans-serif
```
**Usage:** Headings, hero text, important titles
```jsx
<h1 className="font-display">Main Heading</h1>
```

#### Monospace (Code)
```css
font-mono: 'JetBrains Mono', monospace
```
**Usage:** Code snippets, technical text
```jsx
<code className="font-mono">const x = 10;</code>
```

### Font Sizes

```css
text-xs:   0.75rem (12px)   /* Fine print, labels */
text-sm:   0.875rem (14px)  /* Small text, captions */
text-base: 1rem (16px)      /* Body text (default) */
text-lg:   1.125rem (18px)  /* Large body text */
text-xl:   1.25rem (20px)   /* Small headings */
text-2xl:  1.5rem (24px)    /* H4 */
text-3xl:  1.875rem (30px)  /* H3 */
text-4xl:  2.25rem (36px)   /* H2 */
text-5xl:  3rem (48px)      /* H1 */
text-6xl:  3.75rem (60px)   /* Hero headings */
text-7xl:  4.5rem (72px)    /* Large hero */
text-8xl:  6rem (96px)      /* Extra large hero */
text-9xl:  8rem (128px)     /* Massive hero */
```

### Heading Hierarchy

#### H1 (Page Title)
```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white">
  Main Page Title
</h1>
```

#### H2 (Section Title)
```jsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
  Section Title
</h2>
```

#### H3 (Subsection)
```jsx
<h3 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-3">
  Subsection Title
</h3>
```

#### H4 (Card Title)
```jsx
<h4 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
  Card Title
</h4>
```

#### Body Text
```jsx
<p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  Body paragraph text with good readability.
</p>
```

### Font Weights
```css
font-thin:       100
font-extralight: 200
font-light:      300
font-normal:     400  /* Default */
font-medium:     500
font-semibold:   600  /* Headings */
font-bold:       700  /* Important text */
font-extrabold:  800
font-black:      900
```

### Line Heights
```css
leading-none:    1
leading-tight:   1.25   /* Headings */
leading-snug:    1.375
leading-normal:  1.5    /* Body text */
leading-relaxed: 1.625  /* Comfortable reading */
leading-loose:   2
```

---

## 📏 Spacing & Layout

### Spacing Scale
```css
0:   0px
0.5: 2px
1:   4px
2:   8px
3:   12px
4:   16px    /* Base unit */
5:   20px
6:   24px    /* Common spacing */
8:   32px    /* Section spacing */
10:  40px
12:  48px    /* Large spacing */
16:  64px
20:  80px    /* Section padding */
24:  96px
32:  128px
40:  160px
```

### Common Spacing Patterns

#### Card Padding
```jsx
<div className="p-6 md:p-8 lg:p-10">
  Card content
</div>
```

#### Section Padding
```jsx
<section className="py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-16">
  Section content
</section>
```

#### Content Spacing
```jsx
<div className="space-y-6 md:space-y-8 lg:space-y-12">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### Grid Gaps
```jsx
<div className="grid gap-6 md:gap-8 lg:gap-10">
  Grid items
</div>
```

### Container Widths
```jsx
// Max-width container
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
  Content
</div>

// Full width
<div className="w-full">
  Content
</div>

// Constrained width
<div className="max-w-4xl mx-auto">
  Content (prose)
</div>
```

### Border Radius
```css
rounded-none:  0px
rounded-sm:    2px
rounded:       4px     /* Small elements */
rounded-md:    6px
rounded-lg:    8px     /* Buttons, inputs */
rounded-xl:    12px    /* Cards */
rounded-2xl:   16px    /* Large cards */
rounded-3xl:   24px    /* Feature cards */
rounded-full:  9999px  /* Circles, pills */
```

---

## 🧩 Components

### Buttons

#### Primary Button
```jsx
<button className="btn-primary">
  Click Me
</button>

// Or with manual classes:
<button className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
  Click Me
</button>
```

#### Secondary Button
```jsx
<button className="btn-secondary">
  Click Me
</button>
```

#### Outline Button
```jsx
<button className="btn-outline">
  Click Me
</button>
```

#### Ghost Button
```jsx
<button className="btn-ghost">
  Click Me
</button>
```

#### Icon Button
```jsx
<button className="w-10 h-10 rounded-lg bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors">
  <HiHome className="w-5 h-5" />
</button>
```

### Cards

#### Basic Card
```jsx
<div className="bg-white dark:bg-dark-800 rounded-2xl p-6 md:p-8 shadow-soft border border-gray-100 dark:border-dark-700">
  Card content
</div>
```

#### Service Card
```jsx
<div className="service-card card-hover">
  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6">
    <HiCode className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-2xl font-bold mb-3">Service Title</h3>
  <p className="text-gray-600 dark:text-gray-400">Service description</p>
</div>
```

#### Portfolio Card
```jsx
<div className="portfolio-card group">
  <img src="project.jpg" alt="Project" className="w-full h-64 object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">Project Title</h3>
      <p>Project description</p>
    </div>
  </div>
</div>
```

#### Testimonial Card
```jsx
<div className="testimonial-card">
  <div className="flex items-center gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ))}
  </div>
  <p className="text-gray-700 dark:text-gray-300 mb-6">
    "Testimonial text..."
  </p>
  <div className="flex items-center gap-4">
    <img src="avatar.jpg" className="w-12 h-12 rounded-full" />
    <div>
      <h4 className="font-semibold">Client Name</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">Company</p>
    </div>
  </div>
</div>
```

### Forms

#### Text Input
```jsx
<div>
  <label className="label-text">Name</label>
  <input 
    type="text"
    className="input-field"
    placeholder="Enter your name"
  />
</div>
```

#### Textarea
```jsx
<div>
  <label className="label-text">Message</label>
  <textarea 
    className="textarea-field"
    rows="5"
    placeholder="Enter your message"
  />
</div>
```

#### Select Dropdown
```jsx
<div>
  <label className="label-text">Service</label>
  <select className="select-field">
    <option>Web Development</option>
    <option>Mobile App Development</option>
    <option>Custom Software</option>
  </select>
</div>
```

#### Checkbox
```jsx
<label className="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" className="checkbox-field" />
  <span className="text-gray-700 dark:text-gray-300">I agree to terms</span>
</label>
```

#### Radio Button
```jsx
<label className="flex items-center gap-2 cursor-pointer">
  <input type="radio" name="option" className="w-5 h-5 text-primary-600 focus:ring-primary-500" />
  <span className="text-gray-700 dark:text-gray-300">Option 1</span>
</label>
```

#### Form Validation Error
```jsx
<div>
  <input className="input-field border-red-500" />
  <p className="error-text">This field is required</p>
</div>
```

### Badges

#### Primary Badge
```jsx
<span className="badge badge-primary">New</span>
```

#### Secondary Badge
```jsx
<span className="badge badge-secondary">Popular</span>
```

#### Success Badge
```jsx
<span className="badge badge-success">Active</span>
```

#### Custom Badge
```jsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
  Custom Badge
</span>
```

### Alerts

#### Success Alert
```jsx
<div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <HiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
    <div>
      <h4 className="font-semibold text-green-900 dark:text-green-300">Success!</h4>
      <p className="text-green-700 dark:text-green-400">Operation completed successfully.</p>
    </div>
  </div>
</div>
```

#### Error Alert
```jsx
<div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <HiXCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
    <div>
      <h4 className="font-semibold text-red-900 dark:text-red-300">Error!</h4>
      <p className="text-red-700 dark:text-red-400">Something went wrong.</p>
    </div>
  </div>
</div>
```

---

## 📱 Responsive Design

### Breakpoints
```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large desktop */
```

### Mobile-First Approach
Always design for mobile first, then add larger breakpoints:

```jsx
// ❌ Wrong
<div className="lg:text-base md:text-sm text-xs">

// ✅ Correct
<div className="text-xs md:text-sm lg:text-base">
```

### Responsive Patterns

#### Typography
```jsx
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Responsive Heading
</h1>

<p className="text-sm md:text-base lg:text-lg">
  Responsive paragraph
</p>
```

#### Spacing
```jsx
<section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
  Content
</section>
```

#### Grid Layouts
```jsx
// 1 column mobile, 2 tablet, 3 desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

// 1 column mobile, 2 tablet, 4 desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

#### Flex Layouts
```jsx
<div className="flex flex-col md:flex-row gap-6">
  <div className="w-full md:w-1/2">Column 1</div>
  <div className="w-full md:w-1/2">Column 2</div>
</div>
```

#### Visibility
```jsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">Desktop only</div>

// Show on mobile, hide on desktop
<div className="block lg:hidden">Mobile only</div>
```

---

## 🌙 Dark Mode

### Implementation

#### Toggle Dark Mode
```jsx
// In AppContext
const [theme, setTheme] = useState('system');

useEffect(() => {
  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [theme]);
```

#### Component Dark Mode Styling
```jsx
<div className="bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
  <h1 className="text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-700 dark:text-gray-300">Content</p>
  <div className="bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-dark-700">
    Card
  </div>
</div>
```

### Dark Mode Checklist

#### ✅ Always Include Dark Mode Variants For:
- Backgrounds: `bg-white dark:bg-dark-900`
- Text colors: `text-gray-900 dark:text-white`
- Borders: `border-gray-200 dark:border-dark-700`
- Shadows: Adjust for visibility
- Icons: Ensure contrast
- Images: Consider dark versions
- Hover states: `hover:bg-gray-100 dark:hover:bg-dark-800`

### Common Dark Mode Patterns

#### Card
```jsx
<div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-gray-100">
```

#### Input
```jsx
<input className="bg-white dark:bg-dark-800 border-gray-300 dark:border-dark-600 text-gray-900 dark:text-gray-100" />
```

#### Button
```jsx
<button className="bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 text-white">
```

---

## ✨ Animations

### Tailwind Transitions
```jsx
// Basic transition
<div className="transition-all duration-300">

// Specific properties
<button className="transition-colors duration-200">
<div className="transition-transform duration-300">
<div className="transition-opacity duration-500">
```

### Hover Effects

#### Scale
```jsx
<button className="transform hover:scale-105 transition-transform">
  Scale on hover
</button>
```

#### Translate
```jsx
<div className="transform hover:-translate-y-2 transition-transform">
  Move up on hover
</div>
```

#### Opacity
```jsx
<div className="opacity-0 hover:opacity-100 transition-opacity">
  Fade in on hover
</div>
```

### Built-in Animations
```jsx
// Fade in
<div className="animate-fade-in">

// Fade in from bottom
<div className="animate-fade-in-up">

// Slide in from left
<div className="animate-slide-in-left">

// Scale in
<div className="animate-scale-in">

// Pulse (infinite)
<div className="animate-pulse-slow">

// Float (infinite)
<div className="animate-float">
```

### Framer Motion (Advanced)
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

---

## ✅ Best Practices

### 1. Consistency
- Use design tokens (colors, spacing) consistently
- Follow established patterns
- Maintain component hierarchy
- Use same spacing scale everywhere

### 2. Accessibility
```jsx
// Use semantic HTML
<button> instead of <div onClick>
<nav> for navigation
<main> for main content

// Include alt text
<img src="..." alt="Descriptive text" />

// Proper labels
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Focus states
<button className="focus:outline-none focus:ring-2 focus:ring-primary-500">
```

### 3. Performance
- Lazy load images
- Use proper image sizes
- Minimize animations
- Use CSS instead of JS when possible
- Optimize bundle size

### 4. Responsive Design
- Always test on multiple screen sizes
- Use mobile-first approach
- Test touch interactions on mobile
- Ensure readable text sizes (min 16px)

### 5. Dark Mode
- Always include dark mode variants
- Test in both modes
- Ensure proper contrast
- Use semantic colors

### 6. Component Reusability
```jsx
// ❌ Bad - Hardcoded styles
<button className="px-8 py-3 bg-blue-600 text-white rounded-lg">

// ✅ Good - Reusable class
<button className="btn-primary">
```

### 7. Code Organization
```jsx
// Group related classes
className="
  // Layout
  flex items-center justify-between
  // Spacing
  px-6 py-4 gap-4
  // Colors
  bg-white dark:bg-dark-900
  text-gray-900 dark:text-white
  // Effects
  rounded-xl shadow-lg
  hover:shadow-xl transition-all
"
```

### 8. Naming Conventions
- Use descriptive class names
- Follow BEM for custom classes
- Keep component names clear
- Use semantic HTML elements

---

## 🎯 Common Patterns

### Hero Section
```jsx
<section className="py-20 md:py-28 lg:py-32 px-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
      Hero Title
    </h1>
    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
      Hero description
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="btn-primary">Get Started</button>
      <button className="btn-outline">Learn More</button>
    </div>
  </div>
</section>
```

### Feature Section
```jsx
<section className="py-16 md:py-20 lg:py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
        Features
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Feature description
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Feature cards */}
    </div>
  </div>
</section>
```

### CTA Section
```jsx
<section className="py-16 md:py-20 bg-gradient-primary text-white">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
      Ready to Get Started?
    </h2>
    <p className="text-lg mb-8 opacity-90">
      Let's build something amazing together
    </p>
    <button className="btn-secondary">
      Start Your Project
    </button>
  </div>
</section>
```

---

## 📚 Resources

### Design Tools
- Figma - Design mockups
- Adobe Color - Color palette creation
- Coolors - Color scheme generator

### Development Tools
- Tailwind CSS IntelliSense (VS Code)
- Chrome DevTools
- Responsively App - Responsive testing

### Inspiration
- Dribbble
- Behance
- Awwwards
- SaaS landing pages

---

## 🔍 Troubleshooting

### Dark Mode Not Working
1. Check if 'dark' class is on `<html>` element
2. Verify dark: variants are included
3. Check Tailwind config: `darkMode: 'class'`
4. Ensure theme context is working

### Styles Not Applying
1. Check Tailwind purge/content config
2. Restart dev server
3. Clear browser cache
4. Verify class names are correct

### Responsive Issues
1. Test in actual devices, not just browser resize
2. Check breakpoint syntax
3. Verify mobile-first approach
4. Test touch interactions

---

**Guide Version:** 1.0.0  
**Last Updated:** 2024  
**Maintained By:** Design & Development Team