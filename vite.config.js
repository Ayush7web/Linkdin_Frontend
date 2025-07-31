import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base : " / ",
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
