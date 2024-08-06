import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  site: "https://astro-demo.cleverapps.io/",
  server: {
    port: 8080,
    host: true
  }
});