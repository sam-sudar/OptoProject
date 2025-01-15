import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginSitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    VitePluginSitemap({
      hostname: "https://eye-and-my-care-optics.vercel.app", // Your website URL
      routes: [
        { url: "/", changefreq: "daily", priority: 1.0 },
        { url: "/about", changefreq: "monthly", priority: 0.8 },
        { url: "/services", changefreq: "weekly", priority: 0.9 },
        { url: "/blogs", changefreq: "weekly", priority: 0.7 },
        { url: "/contacts", changefreq: "yearly", priority: 0.6 },
      ],
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
