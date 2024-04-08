// contentlayer.config.ts

import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from "contentlayer/source-files";

export const Image = defineNestedType(() => ({
  name: "Image",
  description: "Product image",
  fields: {
    src: {
      type: "string",
      required: true,
    },
    height: {
      type: "number",
    },
    width: {
      type: "number",
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    icon: {
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
      type: "date",
      description: "Publish date",
      required: true,
    },
    image: {
      type: "nested",
      description: "Image of project",
      required: true,
      of: Image,
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

export const Blogs = defineDocumentType(() => ({
  name: "Blogs",
  filePathPattern: "blogs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content-data",
  documentTypes: [Project],
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [highlight],
  // },
});
