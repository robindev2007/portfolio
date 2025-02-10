import React from "react";
import Container from "./shared/Container";
import { H2, H3 } from "./ui/typography";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { allProjects, Project } from "contentlayer/generated";

function Projects() {
  return (
    <div>
      <Container className="gap-0">
        <H2>Projects</H2>
        <div className="grid gap-5">
          {allProjects
            .sort((a, b) => (b.rate || 1) - (a.rate || 1))
            .map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
        <Link
          className="mt-3 flex items-center gap-3 text-muted-foreground transition-all hover:gap-4"
          href={"/projects"}
        >
          View all projects <FaArrowRightLong />
        </Link>
      </Container>
    </div>
  );
}

export default Projects;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`${project.slug}`}>
      <Card className="border-border/90 shadow-2xl backdrop-blur-md transition-all ease-out hover:scale-[1.01] hover:border-border md:flex">
        <CardHeader>
          <Image
            src={project.icon}
            height={600}
            width={600}
            alt={project.name}
            className="h-20 w-fit overflow-hidden rounded-md object-contain"
          />
        </CardHeader>
        <CardContent className="md:p-3">
          <H3 className="text-base">{project.name}</H3>
          <p className="text-muted-foreground">{project.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
