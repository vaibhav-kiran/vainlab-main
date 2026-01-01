import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Explicitly set base to '/'
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            if (id.includes('vanta') || id.includes('three')) {
              return 'vanta-three';
            }
            if (id.includes('@supabase/supabase-js')) {
              return 'supabase-client';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            return 'vendor'; // all other third-party dependencies
          }
        },
      },
    },
  },
}));
