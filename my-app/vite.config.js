import {defineConfig} from "vite";
import react from "@vitejs/plugin-react"
import path from "path";
import svgr from "vite-plugin-svgr";

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
      "@icons": `${path.resolve(__dirname, "./src/assets/icons")}`,
      "@images": `${path.resolve(__dirname, "./src/assets/images")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@helpers": `${path.resolve(__dirname, "./src/utils/helpers")}`,
      "@constants": `${path.resolve(__dirname, "./src/utils/constants.js")}`,
      "@templates": `${path.resolve(__dirname, "./src/templates/")}`,
      "@context": `${path.resolve(__dirname, "./src/context/")}`,
    }
  }
})
