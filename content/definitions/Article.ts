import { defineDocumentType } from '@contentlayer/source-files';

export const Article = defineDocumentType(() => ({
  name: 'Article',
  fields: {
      title: { type: 'string', required: true },
      description: { type: 'markdown', require: true },
      url: { type: 'string', required: true },
      imageBanner: { type: 'string', required: true },
      publishedAt: { type: 'date', required: true }
  }
}))
