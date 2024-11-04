import mdxComponents from "@/components/shared/mdx-components";
import CustomLink from "@/components/CustomLink";
import { allBlogs, Blogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React from "react";
import Container from "@/components/shared/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;

  const project = allBlogs.find(
    (p) => p._raw.flattenedPath === "blogs/" + slug,
  ) as Blogs;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project.title}`,
    description: `${project.brief}`,
    openGraph: {
      images: [project.heroImage, ...previousImages],
    },
    twitter: {
      images: [project.heroImage],
    },
  };
}

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
