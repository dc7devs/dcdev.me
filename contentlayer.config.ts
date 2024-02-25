import { makeSource } from 'contentlayer/source-files';

import { Project } from './content/definitions/project';
import { Roadmap } from './content/definitions/roadmap';
import { Note } from './content/definitions/note';

import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions
} from 'rehype-autolink-headings';
// import rehypePrettyCode, {
//   type Options as PrettyCodeOptions
// } from 'rehype-pretty-code';

import rehypeSlug from 'rehype-slug';
import { s } from 'hastscript';
// import remarkGfm from 'remark-gfm';

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Roadmap, Note],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3'],
          properties: { class: 'heading-link' },
          content: s(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              width: '24',
              height: '24',
              fill: 'none',
              stroke: 'currentColor',
              'stroke-width': '2',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'aria-label': 'Anchor link'
            },
            [
              s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
              s('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
              s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
              s('line', { x1: '16', y1: '3', x2: '14', y2: '21' })
            ]
          )
        } satisfies Partial<AutolinkOptions>
      ]
      // [
      //   rehypePrettyCode,
      //   {
      //     theme: {
      //       light: 'github-light',
      //       dark: 'github-dark'
      //     }
      //   } satisfies Partial<PrettyCodeOptions>
      // ]
    ]
  }
});
