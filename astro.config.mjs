// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://didisouzacosta.github.io',
  base: '/PersonalWebSite',
  output: 'static',
  integrations: [icon()]
});