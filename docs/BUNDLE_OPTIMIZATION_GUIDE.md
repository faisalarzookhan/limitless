# Bundle Optimization Guide

This document explains the bundle optimization strategy implemented for the Limitless Infotech Solution website.

## Overview

The project implements code splitting and chunking to optimize the bundle size and improve loading performance. This addresses the Vite warning about chunks exceeding 500 kB.

## Chunking Strategy

### React and Core Dependencies
- `react.js` - Contains React and ReactDOM
- `react-vendor.js` - Contains React Router DOM and React Scroll
- `scheduler.js` - React's scheduler dependency

### UI and Animation Libraries
- `animation.js` - Contains Framer Motion for animations
- `swiper.js` - Contains Swiper library for carousels
- `icons.js` - Contains React Icons

### Vendor Libraries
- Other dependencies are chunked by package name (e.g., `vendor-framer-motion.js`)

## Performance Improvements

### Before Optimization
- Single large chunks exceeding 500 kB
- Slower initial load times
- Less efficient caching

### After Optimization
- Chunks are now properly separated
- Better caching strategy (framework code separated from app code)
- Improved loading performance
- More efficient updates

## Bundle Analysis

To analyze the bundle size:

1. Run `npm run analyze` - Generates and opens bundle analysis report
2. Run `npm run bundle-report` - Alternative command to generate report
3. Check the generated `dist/stats.html` file for detailed analysis

## Configuration

The optimization is implemented in `vite.config.ts`:

1. Custom `manualChunks` function that separates dependencies
2. Rollup Plugin Visualizer for bundle analysis
3. Increased chunk size warning limit to 1000 kB

## Best Practices

- Keep frequently changing code separate from stable dependencies
- Group related libraries together in chunks
- Monitor bundle size regularly using the analyze scripts
- Consider lazy loading for pages/components not immediately needed