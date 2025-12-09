import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "glow-shine.onrender.com",
      "glowandshine.com",
      "www.glowandshine.com",
      "localhost"
    ]
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

