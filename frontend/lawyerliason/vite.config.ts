import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
base: '/Lawyer-Liaison-Frontend/',
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
