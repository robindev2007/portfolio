import rehypePrism from "rehype-prism-plus";

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

export const LiveUrl = defineNestedType(() => ({
  name: "LiveUrl",
  description: "Live url",
  fields: {
    url: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
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
      type: "nested",
      description: "Live url of project website",
      required: false,
      of: LiveUrl,
    },
    // liveUrl: {
    //   type: "string",
    //   description: "Live url of project website",
    //   required: false,
    // },
    githubUrl: {
      type: "nested",
      description: "Live url of project website",
      required: false,
      of: LiveUrl,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blogs",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    brief: { type: "string", required: false },
    heroImage: { type: "string", required: true },
    createdAt: { type: "date", required: true },
    updatedAt: { type: "date", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content-layer",
  documentTypes: [Project, Blog],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});
