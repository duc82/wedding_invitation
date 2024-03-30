import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf("node_modules") !== -1) {
            return id.toString().split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
  },

  server: {
    open: true,
    port: 3000,
    host: true,
  },
});