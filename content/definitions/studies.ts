import { defineDocumentType } from 'contentlayer/source-files';

export const Studies = defineDocumentType(() => ({
  name: 'Studies',
  contentType: 'data',
  filePathPattern: 'studies/*.yaml',
  fields: {
    title: { type: 'string', required: true }
  }
}));
