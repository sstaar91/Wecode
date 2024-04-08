import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: [
      { find: "@_assets", replacement: resolve(__dirname, "src/assets") },
      {
        find: "@_components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@_constants", replacement: resolve(__dirname, "src/constants") },
      { find: "@_context", replacement: resolve(__dirname, "src/context") },
      { find: "@_hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@_lib", replacement: resolve(__dirname, "src/lib") },
      { find: "@_service", replacement: resolve(__dirname, "src/service") },
      { find: "@_styles", replacement: resolve(__dirname, "src/styles") },
      { find: "@_types", replacement: resolve(__dirname, "src/types") },
      { find: "@_utils", replacement: resolve(__dirname, "src/utils") },
    ],
  },
  plugins: [react()],
});
