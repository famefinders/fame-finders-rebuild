import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 5173,
    host: 'localhost',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});