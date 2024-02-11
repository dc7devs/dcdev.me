import { defineDocumentType } from 'contentlayer/source-files';

export const Note = defineDocumentType(() => ({
  name: 'Note',
  contentType: 'mdx',
  filePathPattern: 'notes/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    relatedImageURL: { type: 'string', required: true }
  },
  computedFields: {
    createdAt: {
      type: 'date',
      resolve: () => new Date()
    }
  }
}));
