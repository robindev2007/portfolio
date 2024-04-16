import mdxComponents from "@/components/common/mdx-components";
import CustomLink from "@/components/ui/CustomLink";
import { buttonVariants } from "@/components/ui/button";
import GradentBackbgound from "@/components/ui/gradent-bg";
import H2 from "@/components/ui/h2";
import { cn } from "@/lib/utils";
import { allProjects, Project } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProjectPage = ({ params }: { params: { slug: string } }) => {
  const post = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug,
  ) as Project;

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="pb-10">
      <GradentBackbgound />
      <div className="my-8 flex items-center space-x-5 rounded border bg-background/30 p-2">
        <div className="relative w-16">
          <Image src={post.icon} height={700} width={700} alt={post.name} />
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{post.name}</h1>
          <p className="text-sm text-gray-300">{post.description}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        {post.liveUrl && (
          <CustomLink
            showIcon
            href={post.liveUrl}
            className="jsx-8b75a9ccf5c40d44"
          >
            {post.liveUrl}
          </CustomLink>
        )}
        {post.githubUrl && (
          <CustomLink
            showIcon
            href={post.githubUrl}
            className="jsx-8b75a9ccf5c40d44"
          >
            {post.githubUrl}
          </CustomLink>
        )}
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between py-2">
          <H2 className="py-0">{post.name}</H2>
          {post.liveUrl && (
            <Link
              href={post.liveUrl}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "bg-opacity-45",
              )}
            >
              Explore
            </Link>
          )}
        </div>
        <Image
          src={post.image.src}
          height={post.image.height}
          width={post.image.width}
          alt={post.name}
          className="overflow-hidden rounded-md border"
        />
      </div>

      <article className="prose prose-invert min-w-full">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
};

export default SingleProjectPage;
