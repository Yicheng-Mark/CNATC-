import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
// 注：kimi-plugin-inspect-react 的 inspectAttr() 是 Kimi IDE 的开发期元素检查插件，
// 在 Vercel 等干净构建环境会让 vite build 在 transforming 阶段静默崩溃，故从生产构建中移除。
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
