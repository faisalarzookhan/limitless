import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Use relative paths for production deployment
  plugins: [react(),
    // Bundle visualizer for production builds
    process.env.NODE_ENV === "production" && visualizer({
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "esbuild",
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB since we have a large app
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }
            if (id.includes("react-router") || id.includes("react-scroll")) {
              return "react-vendor";
            }
            if (id.includes("framer-motion")) {
              return "animation";
            }
            if (id.includes("swiper")) {
              return "swiper";
            }
            if (id.includes("react-icons")) {
              return "icons";
            }
            // Group smaller packages into a common vendor chunk to avoid empty chunks
            const nodeModule = id.toString().split("node_modules/")[1].split("/")[0];
            const smallPackages = ['cookie', 'set-cookie-parser', 'path-to-regexp', 'tiny-invariant', 'tiny-warning', 'loose-envify', 'scheduler', 'html-parse-stringify', 'void-elements'];
            
            if (smallPackages.includes(nodeModule)) {
              return 'vendor-common';
            }
            
            return `vendor-${nodeModule.replace("@", "at-").replace("/", "_")}`;
          }
        },
      },
    },
  },
});
