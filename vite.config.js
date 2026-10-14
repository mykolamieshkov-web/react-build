import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const mixinsPath = path.resolve(__dirname, 'src/styles/mixins/_mixins.scss').replace(/\\/g, '/')
const mediaPath = path.resolve(__dirname, 'src/styles/mixins/_media.scss').replace(/\\/g, '/')

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|svg)$/i,
      includePublic: true,
      webp: { quality: 75 },
      png: { quality: 75 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 }
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
        additionalData: (content, filePath) => {
          const normalizedPath = filePath.replace(/\\/g, '/')
          
          if (
            normalizedPath.endsWith('styles/mixins/_mixins.scss') ||
            normalizedPath.endsWith('styles/mixins/_media.scss')
          ) {
            return content
          }

          return `
            @use "${mixinsPath}" as *;
            @use "${mediaPath}" as media;
            ${content}
          `
        }
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.webp')) {
            return 'img/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})