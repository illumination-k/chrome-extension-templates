import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: "./popup/index.html",
      },
      output: {
        entryFileNames: "assets/[name].js",
      },
    },
  },
});
