import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-demo.cleverapps.io/",
  server: {
    port: 8080,
    host: true
  },
  integrations: [
    preact({})]
});