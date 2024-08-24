import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "chiko-cd",
    project: "javascript-react"
  })],
  build: {
    // or 'es2022' for broader compatibility
    target: "esnext",

    sourcemap: true
  },
});