import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        content: "./content-scripts/content-scripts.ts",
        "content-main": "./content-scripts/main.ts",
      },
      output: {
        entryFileNames: "assets/[name].js",
      },
    },
  },
});
