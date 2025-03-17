import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Permite conexões externas no ambiente de desenvolvimento
  },
  preview: {
    host: true, // Permite conexões externas no ambiente de produção
    allowedHosts: ["*"], // 🔥 Permite qualquer domínio acessar
  },
});
