import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/meu-portfolio-repo/", // <--- ADICIONE ESTA LINHA
  plugins: [react()],
})