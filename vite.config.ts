import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
