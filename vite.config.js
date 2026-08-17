import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // './' keeps asset paths relative so the build works from any
  // GitHub Pages sub-path without extra configuration.
  base: './'
})
