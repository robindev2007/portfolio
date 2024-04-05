// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.md`,
  fields: {
    projectLogo: {
      type: "string",
      description: "Logo of project",
      required: true,
    },
    name: {
      type: "string",
      description: "The name of project",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of project",
      required: true,
    },
    date: {
      type: "string",
      description: "Publish date",
      required: true,
    },
    productImage: {
      type: "string",
      description: "Image of project",
      required: true,
    },
    liveUrl: {
      type: "string",
      description: "Live url of project website",
      required: false,
    },
    githubUrl: {
      type: "string",
      description: "Live url of project website",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content-data",
  documentTypes: [Project],
});
