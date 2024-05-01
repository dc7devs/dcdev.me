import { defineConfig } from 'velite';

import { projects } from './content/collections/projects';
import { notes } from './content/collections/notes';
import { roadmaps } from './content/collections/roadmaps';

import rehypePrettyCode from 'rehype-pretty-code';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import rehypeShiki from '@shikijs/rehype';

const config = defineConfig({
  collections: { projects, notes, roadmaps },
  markdown: {
    rehypePlugins: [rehypePrettyCode]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // rehypePlugins: [[rehypeShiki as any, { theme: 'slack-dark' }]]
  }
});

export default config;
