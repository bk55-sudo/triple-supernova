import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/triple-supernova/', // Assuming the repo name is 'triple-supernova' based on the path
})
