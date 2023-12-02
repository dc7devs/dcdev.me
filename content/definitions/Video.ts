import { defineDocumentType } from "contentlayer/source-files";

export const Video = defineDocumentType(() => ({
    name: 'Video',
    fields: {
        youtubeURL: { type: 'string', required: true },
        youtubeThumbURL: { type: 'string', required: true }
    }
}))
