import { defineConfig } from 'astro/config';
import { readFileSync } from "fs";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  integrations: [tailwind(), mdx(), solidJs()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [
      // important: a language's dependencies must be loaded first, or explosion
      {
        id: 'tlaplus',
        scopeName: 'source.tlaplus',
        grammar: JSON.parse(readFileSync('./highlighting/tlaplus.tmLanguage.json')),
        aliases: ['tla']
      }, {
        id: 'pluscal',
        scopeName: 'source.tlaplus.pluscal',
        grammar: JSON.parse(readFileSync('./highlighting/pluscal.tmLanguage.json')),
        embeddedLangs: ['tlaplus']
      }, {
        id: 'mpcal',
        scopeName: 'source.tlaplus.mpcal',
        grammar: JSON.parse(readFileSync('./highlighting/mpcal.tmLanguage.json')),
        embeddedLangs: ['tlaplus', 'pluscal']
      }],
      wrap: true
    }
  }
});