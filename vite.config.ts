import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("xtdrew-"),
        },
      },
    }),
  ],
  base: ".",
  server: {
    host: "0.0.0.0",
    port: 80,
  },
  build: {
    sourcemap: false,
    cssCodeSplit: false,
  },
});
