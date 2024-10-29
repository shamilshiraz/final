import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild', // Default minifier; you can also use 'terser' for advanced options
  },
  plugins: [react()],
})
