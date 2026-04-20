import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: false },
      includeAssets: ["icon-192.png", "icon-512.png"],
      manifest: false, // we ship our own /public/manifest.webmanifest
      workbox: {
        navigateFallbackDenylist: [/^\/~oauth/, /^\/api\//],
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2,json}"],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
