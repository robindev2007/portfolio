import mdxComponents from "@/components/shared/mdx-components";
import CustomLink from "@/components/CustomLink";
import { allBlogs, Blogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React from "react";
import Container from "@/components/shared/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

const SingleProjectPage = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find(
    (b) => b._raw.flattenedPath === "blogs/" + params.slug,
  ) as Blogs;

  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <Container className="gap-5 py-5">
      <article className="prose prose-invert min-w-full prose-h1:text-center prose-h1:text-3xl prose-h1:font-semibold prose-img:mx-auto prose-img:max-w-[80%] prose-img:rounded-md prose-img:border prose-img:shadow-xl">
        <MDXContent components={mdxComponents as any} />
      </article>
    </Container>
  );
};

export default SingleProjectPage;
