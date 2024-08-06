import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [preact()],
  site: "https://astro-demo.cleverapps.io/",
  server: {
    port: 8080,
    host: true
  }
});