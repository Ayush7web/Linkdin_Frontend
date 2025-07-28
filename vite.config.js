import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  test: { minThreads: 1, maxThreads: 1 },
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    watch: {
      usePolling: true,
      interval: 100,
      ignored: ["**/node_modules/**", "**/.git/**"],
    },
  },
});
