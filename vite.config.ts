import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/react-todo",
  server: {
    host: true,
    port: 3000
  },
  plugins: [react()],
})
