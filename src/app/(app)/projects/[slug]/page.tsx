import mdxComponents from "@/components/shared/mdx-components";
import CustomLink from "@/components/CustomLink";
import { allProjects, Project } from "contentlayer/generated";
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

  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + slug,
  ) as Project;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project.name} | Project Robin Mia Web Developer`,
    description: `${project.description}`,
    openGraph: {
      images: [project.image.src, ...previousImages],
    },
  };
}

const SingleProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug,
  ) as Project;

  const MDXContent = useMDXComponent(project.body.code);

  return (
    <Container className="gap-5 py-5">
      <Card className="flex flex-row gap-0 border-none bg-transparent shadow-none backdrop-blur-0">
        <CardHeader>
          <Image
            src={project.icon}
            height={700}
            width={700}
            alt={project.name}
            className="w-20 rounded-md border border-border/50 object-cover"
          />
        </CardHeader>

        <CardContent className="grid py-2">
          <h1 className="text-lg font-semibold">{project.name}</h1>
          <p className="text-muted-foreground">{project.description}</p>
        </CardContent>
      </Card>

      <div className="flex flex-col space-y-2">
        {project.liveUrl && (
          <CustomLink showIcon href={project.liveUrl.url}>
            {project.liveUrl.title}
          </CustomLink>
        )}
        <div className="flex items-center gap-0.5">
          <FaGithub />

          {project.githubUrl && (
            <CustomLink
              showIcon
              href={project.githubUrl.url}
              className="jsx-8b75a9ccf5c40d44"
            >
              {project.githubUrl.title}
            </CustomLink>
          )}
        </div>
      </div>

      <article className="prose prose-invert min-w-full prose-h1:text-3xl prose-h1:font-semibold prose-img:mx-auto prose-img:max-w-[80%] prose-img:rounded-md prose-img:border prose-img:shadow-xl">
        <MDXContent components={mdxComponents as any} />
      </article>
    </Container>
  );
};

export default SingleProjectPage;
