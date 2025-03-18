import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(), 
    splitVendorChunkPlugin(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
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
    minify: 'terser', // Usa terser para minificação mais agressiva
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true, // Remove debuggers
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
});
