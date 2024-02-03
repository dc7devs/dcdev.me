// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";

// content/definitions/projects.ts
import { defineDocumentType } from "contentlayer/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "data",
  filePathPattern: "projects/*.yaml",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    status: {
      type: "enum",
      options: ["to_begin", "doing", "progressing", "finishing"],
      required: true
    },
    coreTech: { type: "string", required: true },
    toolsUsed: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    projectType: {
      type: "enum",
      options: [
        "FRONTEND",
        "BACKEND",
        "FULL-STACK",
        "API",
        "E-COMMERCE",
        "CMS",
        "LANDING_PAGE",
        "PWA",
        "CORPORATE_PORTALS",
        "RESERVATION & SHEDULING",
        "AUTOMATIONS & INTEGRATIONS",
        "DASHBOARDS",
        "E-LEARNING",
        "BLOGS & PORTFOLIO"
      ],
      required: true
    },
    imageURL: { type: "string", required: false },
    articleURL: { type: "string", required: false },
    githubSourceCodeURL: { type: "string", required: false },
    deploymentURL: { type: "string", required: false }
  },
  computedFields: {
    startDate: {
      type: "date",
      resolve: () => /* @__PURE__ */ new Date()
    }
  }
}));

// contentlayer.config.ts
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Project],
  disableImportAliasWarning: true
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-UOXA7IDO.mjs.map
