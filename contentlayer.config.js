import { makeSource } from 'contentlayer/source-files';

import { Project } from './content/definitions/project';
import { Roadmap } from './content/definitions/roadmap';
import { Note } from './content/definitions/note';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import rehypeShiki from '@shikijs/rehype';

import rehypeSlug from 'rehype-slug';

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Roadmap, Note],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeShiki,
        {
          theme: 'vesper'
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});
