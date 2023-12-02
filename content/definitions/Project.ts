import { defineDocumentType } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
    name: 'Project',
    fields: {
        githubURL: { type: 'string', required: true },
        screenshot: { type: 'string' }
    }
}))