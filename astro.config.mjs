// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://silvercoastfitness.com', // or your dev URL later
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});