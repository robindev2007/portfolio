import Container from "@/components/shared/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H2, H3 } from "@/components/ui/typography";
import { PROJECTS } from "@/lib/constant";
import { allProjects, Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectPage() {
  return (
    <div>
      <Container>
        <H2>Projects</H2>
        <div className="flex flex-col gap-3">
          {allProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
        <Link
          className="mt-4 flex items-center gap-3 text-lg text-muted-foreground transition-all hover:gap-4"
          href={"https://github.com/robindev2007/portfolio"}
        >
          View more at GitHub <FaArrowRightLong />
        </Link>
      </Container>
    </div>
  );
}

export default ProjectPage;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`${project.slug}`}>
      <Card className="flex flex-col gap-4 bg-card/40 shadow-xl backdrop-blur-md transition-colors hover:border-border md:flex-row">
        <CardHeader>
          <Image
            src={project.image.src}
            height={600}
            width={600}
            alt={project.name}
            className="h-52 w-full overflow-hidden rounded-md border border-border/80 object-scale-down md:h-40"
          />
        </CardHeader>
        <CardContent className="md:p-3">
          <H3>{project.name}</H3>
          <p>{project.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
