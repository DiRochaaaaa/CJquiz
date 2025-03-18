import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Permite conexões externas no modo desenvolvimento
    cors: true, // Habilita CORS para development
  },
  preview: {
    host: "0.0.0.0", // 🔥 Permite acesso externo sem precisar especificar IP
    port: 4173, // Mantém a porta padrão do Vite Preview
    strictPort: true, // Garante que o Vite não altere a porta
    allowedHosts: ["*", "quiz.conversecomjesus.site"], // 🔥 Permite acesso de qualquer domínio/IP e especificamente quiz.conversecomjesus.site
    cors: true, // Habilita CORS para preview
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false, // Desabilita sourcemaps em produção
  },
});
