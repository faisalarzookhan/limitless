import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Use absolute paths for proper subdomain support
  plugins: [
    react(),
    // Bundle visualizer for production builds
    process.env.NODE_ENV === 'production' &&
      visualizer({
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  server: {
    port: 5173,
    open: true,
    // Allow requests from any subdomain during development
    cors: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB since we have a large app
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            // Large libraries that need separate chunks
            if (id.includes('react')) {
              if (id.includes('react-dom') || id.includes('react/jsx')) {
                return 'react';
              }
              return 'react';
            }
            if (id.includes('react-router') || id.includes('react-scroll')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation';
            }
            if (id.includes('swiper')) {
              return 'swiper';
            }
            if (id.includes('react-icons')) {
              return 'icons';
            }
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18next';
            }
            if (id.includes('chart.js') || id.includes('react-chartjs-2')) {
              return 'charts';
            }
            if (id.includes('jspdf') || id.includes('jspdf-autotable')) {
              return 'pdf';
            }
            if (id.includes('canvg')) {
              return 'canvg';
            }
            if (id.includes('html2canvas')) {
              return 'html2canvas';
            }
            if (id.includes('date-fns')) {
              return 'date-fns';
            }
            if (id.includes('prop-types')) {
              return 'prop-types';
            }
            if (id.includes('core-js')) {
              return 'core-js';
            }
            if (id.includes('dompurify')) {
              return 'dompurify';
            }
            if (id.includes('fflate')) {
              return 'fflate';
            }
            
            // Group smaller packages into a common vendor chunk to avoid empty chunks
            const nodeModule = id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0];
            const smallPackages = [
              'cookie',
              'set-cookie-parser',
              'path-to-regexp',
              'tiny-invariant',
              'tiny-warning',
              'loose-envify',
              'scheduler',
              'html-parse-stringify',
              'void-elements',
            ];

            if (smallPackages.includes(nodeModule)) {
              return 'vendor-common';
            }

            return `vendor-${nodeModule.replace('@', 'at-').replace('/', '_')}`;
          }
          
          // Split main application code into logical chunks
          if (id.includes('src/pages/')) {
            return 'pages';
          }
          if (id.includes('src/components/')) {
            return 'components';
          }
          if (id.includes('src/hooks/')) {
            return 'hooks';
          }
          if (id.includes('src/utils/')) {
            return 'utils';
          }
          if (id.includes('src/services/')) {
            return 'services';
          }
        },
      },
    },
  },
});
