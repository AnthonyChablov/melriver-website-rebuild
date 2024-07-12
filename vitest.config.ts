import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
1;
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: "./__tests__/setup.ts",
    environment: "jsdom",
    globals: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
