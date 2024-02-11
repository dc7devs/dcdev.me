import { defineDocumentType } from 'contentlayer/source-files';

export const Roadmap = defineDocumentType(() => ({
  name: 'Roadmap',
  contentType: 'data',
  filePathPattern: 'roadmaps/*.yaml',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    progressRoadmapURL: { type: 'string', required: true },
    roadmapImagePreviewURL: { type: 'string', required: true },
    status: {
      type: 'enum',
      options: ['no started', 'in progress', 'done'],
      required: true
    }
  }
}));
