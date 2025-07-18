import { defineConfig as defineVitestConfig } from 'vitest/config';
import { defineConfig as defineViteConfig } from 'vite';
import react from '@vitejs/plugin-react';

const viteConfig = defineViteConfig({
  base: '/react-website/', // Set for GitHub Pages deployment
  plugins: [react()],
});

export default defineVitestConfig({
  ...viteConfig,
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    watch: false,
    globals: true,
  },
});
