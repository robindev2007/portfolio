import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

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

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
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
    readTime: {
      type: "number",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (blog) => `/${blog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content-data",
  documentTypes: [Project, Blog],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});
