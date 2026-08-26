import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const cloudflareWebAnalyticsToken =
  process.env.CLOUDFLARE_WEB_ANALYTICS_TOKEN?.trim();

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/embodied-ai-board/" : "/",
  plugins: [
    react(),
    cloudflareWebAnalyticsToken && {
      name: "cloudflare-web-analytics",
      transformIndexHtml() {
        return [
          {
            tag: "script",
            attrs: {
              type: "module",
              src: "https://static.cloudflareinsights.com/beacon.min.js",
              "data-cf-beacon": JSON.stringify({
                token: cloudflareWebAnalyticsToken,
              }),
            },
            injectTo: "body",
          },
        ];
      },
    },
  ],
  build: {
    outDir: "pages-dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "index.html",
    },
  },
});
