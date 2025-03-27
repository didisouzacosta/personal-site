// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  base: '/',
  output: 'static',
  integrations: [icon()]
});