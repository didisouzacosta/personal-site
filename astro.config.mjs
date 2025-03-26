// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://didisouzacosta.github.io',
  base: '/personal-site',
  output: 'static',
  integrations: [icon()]
});