import { defineDocumentType } from 'contentlayer/source-files';

export const Note = defineDocumentType(() => ({
  name: 'Note',
  contentType: 'mdx',
  filePathPattern: 'notes/*.mdx',
  fields: {
    createdAt: { type: 'date', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    relatedImageURL: { type: 'string' }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) =>
        `/studying/${doc._raw.flattenedPath.replaceAll(' ', '-')}`
    }
  }
}));
