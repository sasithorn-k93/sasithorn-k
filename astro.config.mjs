// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sasithorn-k93.github.io',
  base: '/sasithorn-k',
  vite: {
    plugins: [tailwindcss()]
  }
});