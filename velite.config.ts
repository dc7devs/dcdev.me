import { defineConfig } from 'velite';

import { projects } from './content/collections/projects';
import { notes } from './content/collections/notes';
import { roadmaps } from './content/collections/roadmaps';

import rehypePrettyCode from 'rehype-pretty-code';

const config = defineConfig({
  collections: { projects, notes, roadmaps },
  markdown: {
    rehypePlugins: [rehypePrettyCode]
  }
});

export default config;
