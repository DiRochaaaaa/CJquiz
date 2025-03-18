import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Permite conexões externas no modo desenvolvimento
  },
  preview: {
    host: "0.0.0.0", // 🔥 Permite acesso externo sem precisar especificar IP
    port: 4173, // Mantém a porta padrão do Vite Preview
    strictPort: true, // Garante que o Vite não altere a porta
    allowedHosts: ["*"], // 🔥 Permite acesso de qualquer domínio/IP
  },
});
