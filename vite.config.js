import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GITHUB_PAGES=true (set by the deploy workflow) builds for the project-pages
// subpath; the real domain deploy (Netlify/Vercel) always serves from root.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/highachiever/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
