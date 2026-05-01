import { defineConfig } from 'velite';

import { projects } from './content/collections/projects';

import rehypePrettyCode from 'rehype-pretty-code';

const config = defineConfig({
  collections: { projects },
  markdown: {
    rehypePlugins: [rehypePrettyCode]
  }
});

export default config;
