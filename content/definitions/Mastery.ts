import { defineDocumentType } from "contentlayer/source-files";

import { Certificate } from "./Certificate";
import { Article } from "./Article";
import { Video } from "./Video";
import { Project } from "./Project";

const sMastery = defineDocumentType(() => ({
  name: 'sMastery',
  fields: {
    certificates: {
      type: 'list',
      of: Certificate,
    },
    article: {
      type: 'nested',
      of: Article,
    },
    video: {
      type: 'nested',
      of: Video,
    },
    project: {
      type: 'nested',
      of: Project,
    }
  },
}))

export const Mastery = defineDocumentType(() => ({
  name: 'Mastery',
  filePathPattern: 'mastery/mastery.mdx',
  fields: {
    skills: { type: 'list', of: sMastery }
  },
}))