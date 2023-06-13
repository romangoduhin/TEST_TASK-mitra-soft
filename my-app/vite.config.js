import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@redux": `${path.resolve(__dirname, "./src/redux/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
    }
  }
})
