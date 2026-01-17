import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ОБЪЕДИНЯЕМ ВСЕ ИМПОРТЫ В ОДНУ СТРОКУ
        // Важно: в конце каждой строки должна быть точка с запятой!

      }
    }
  }
})