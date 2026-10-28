import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  build: {
    // Emit a manifest so the prerender script can resolve hashed asset names.
    manifest: true,
    rollupOptions: {
      output: {
        /**
         * Separa las dependencias del codigo propio. Antes todo viajaba en un
         * unico chunk de ~647 KB, asi que cualquier cambio de contenido
         * invalidaba tambien React y framer-motion en la cache del visitante.
         * Ahora los vendors se descargan una vez y sobreviven a los despliegues.
         */
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-dom') || id.includes('/react/') || id.includes('react-router')) {
            return 'vendor-react';
          }
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
            return 'vendor-motion';
          }
          if (id.includes('lucide-react')) return 'vendor-icons';
          return 'vendor';
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
