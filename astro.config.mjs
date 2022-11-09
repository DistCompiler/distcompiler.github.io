import { defineConfig } from 'astro/config';
import { readFileSync } from "fs";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [tailwind(), mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [
      // important: a language's dependencies must be loaded first, or explosion
      {
        id: 'mpcal',
        scopeName: 'source.tlaplus.mpcal',
        grammar: JSON.parse(readFileSync('highlighting/mpcal.tmLanguage.json'))
      }, {
        id: 'tlaplus',
        scopeName: 'source.tlaplus',
        grammar: JSON.parse(readFileSync('./highlighting/tlaplus.tmLanguage.json')),
        aliases: ['tla']
      }],
      wrap: true
    }
  }
});