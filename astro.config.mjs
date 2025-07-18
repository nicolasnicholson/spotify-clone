import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";
// astro.config.mjs
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react(), vercel()],
  output: 'server',
  adapter: vercel()
});