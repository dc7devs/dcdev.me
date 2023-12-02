// contentlayer.config.ts
import { makeSource } from "@contentlayer/source-files";

// content/definitions/Mastery.ts
import { defineDocumentType as defineDocumentType5 } from "contentlayer/source-files";

// content/definitions/Certificate.ts
import { defineDocumentType } from "@contentlayer/source-files";
var Certificate = defineDocumentType(() => ({
  name: "Certificate",
  fields: {
    credentialCode: { type: "string", required: true },
    credentialURL: { type: "string", required: true },
    imageCertificateURL: { type: "string" }
  }
}));

// content/definitions/Article.ts
import { defineDocumentType as defineDocumentType2 } from "@contentlayer/source-files";
var Article = defineDocumentType2(() => ({
  name: "Article",
  fields: {
    title: { type: "string", required: true },
    description: { type: "markdown", require: true },
    url: { type: "string", required: true },
    imageBanner: { type: "string", required: true },
    publishedAt: { type: "date", required: true }
  }
}));

// content/definitions/Video.ts
import { defineDocumentType as defineDocumentType3 } from "contentlayer/source-files";
var Video = defineDocumentType3(() => ({
  name: "Video",
  fields: {
    youtubeURL: { type: "string", required: true },
    youtubeThumbURL: { type: "string", required: true }
  }
}));

// content/definitions/Project.ts
import { defineDocumentType as defineDocumentType4 } from "contentlayer/source-files";
var Project = defineDocumentType4(() => ({
  name: "Project",
  fields: {
    githubURL: { type: "string", required: true },
    screenshot: { type: "string" }
  }
}));

// content/definitions/Mastery.ts
var sMastery = defineDocumentType5(() => ({
  name: "sMastery",
  fields: {
    certificates: {
      type: "list",
      of: Certificate
    },
    article: {
      type: "nested",
      of: Article
    },
    video: {
      type: "nested",
      of: Video
    },
    project: {
      type: "nested",
      of: Project
    }
  }
}));
var Mastery = defineDocumentType5(() => ({
  name: "Mastery",
  filePathPattern: "mastery/mastery.mdx",
  fields: {
    skills: { type: "list", of: sMastery }
  }
}));

// contentlayer.config.ts
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Mastery],
  disableImportAliasWarning: true
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-NR4VMEUS.mjs.map
