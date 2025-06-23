import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // ADICIONE ESTA LINHA:
  base: '/meu-portfolio-repo/', 
  plugins: [react()],
})