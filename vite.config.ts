import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['firebase/firestore'],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'], // Ensure .jsx is included
  },
  build: {
    rollupOptions: {
      external: ['firebase'],
    },
  },
});


