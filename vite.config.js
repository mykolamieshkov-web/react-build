import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|svg)$/i,
      includePublic: true,
      webp: {
        quality: 75
      },
      png: {
        quality: 75
      },
      jpeg: {
        quality: 75
      },
      jpg: {
        quality: 75
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.webp')) {
            return 'img/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})