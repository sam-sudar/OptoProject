import { rename } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

// Get the directory of this script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const distDir = path.resolve(__dirname, "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");
const newSitemapPath = path.join(distDir, "custom-sitemap.xml");

(async () => {
  try {
    await rename(sitemapPath, newSitemapPath);
    console.log("Sitemap renamed to custom-sitemap.xml");
  } catch (error) {
    console.error("Error renaming sitemap:", error.message);
  }
})();
