
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Changed to plugin-react-swc
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080
  },
  base: '/kaceli-renovations-web/', // Keep the base URL for GitHub Pages
})
