import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
import fs from "fs";

// Load proxy config if it exists
let proxy = undefined;
const proxyPath = path.resolve(__dirname, "proxy.config.json");
if (fs.existsSync(proxyPath)) {
  proxy = JSON.parse(fs.readFileSync(proxyPath, "utf-8"));
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
