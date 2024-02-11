import { defineDocumentType } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  contentType: 'data',
  filePathPattern: 'projects/*.yaml',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    status: {
      type: 'enum',
      options: ['to_begin', 'doing', 'progressing', 'finishing', 'done'],
      required: true
    },
    coreTech: { type: 'string', required: true },
    toolsUsed: {
      type: 'list',
      of: { type: 'string' },
      required: true
    },
    projectType: {
      type: 'enum',
      options: [
        'FRONTEND',
        'BACKEND',
        'FULL-STACK',
        'API',
        'E-COMMERCE',
        'CMS',
        'LANDING_PAGE',
        'PWA',
        'CORPORATE_PORTALS',
        'RESERVATION & SHEDULING',
        'AUTOMATIONS & INTEGRATIONS',
        'DASHBOARDS',
        'E-LEARNING',
        'BLOGS & PORTFOLIO'
      ],
      required: true
    },
    projectClassification: {
      type: 'enum',
      options: ['personal study', 'sketch study', 'professional'],
      required: true
    },
    imageURL: { type: 'string', required: false },
    articleURL: { type: 'string', required: false },
    githubSourceCodeURL: { type: 'string', required: false },
    deploymentURL: { type: 'string', required: false }
  },
  computedFields: {
    startDate: {
      type: 'date',
      resolve: () => new Date()
    }
  }
}));
