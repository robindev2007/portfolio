import { MDXComponents } from "mdx/types";
import Link from "next/link";
import CustomLink from "../ui/CustomLink";

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => (
    <CustomLink href={href as string}>{children}</CustomLink>
  ),
  // Add a custom component.
  MyComponent: () => <div>Hello World!</div>,
};

export default mdxComponents;
