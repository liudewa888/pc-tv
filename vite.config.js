import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import ElementPlus from "unplugin-element-plus/vite";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), ElementPlus()],
  optimizeDeps: {},
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx", ".vue"],
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": {
        // 选项写法
        target: "http://localhost:9080",
        changeOrigin: true,
        rewrite: (path) => {
          path = path.replace(/^\/api/, "");
          // 进行调试输出
          console.log("vite proxy url: ", path);
          return path;
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
