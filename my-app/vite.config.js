import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@redux": `${path.resolve(__dirname, "./src/redux/")}`,
    }
  }
})
