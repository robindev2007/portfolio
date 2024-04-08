import GradentBackbgound from "@/components/ui/gradent-bg";
import H2 from "@/components/ui/h2";
import UnderLineGradent from "@/components/ui/underline-gradent";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="container relative">
      <GradentBackbgound />
      <H2>Projects</H2>
      <ul className="flex flex-col space-y-3">
        {allProjects.map((project) => (
          <div
            // href={project.href}
            key={project._id}
            className="group relative flex w-full flex-col items-center gap-3 rounded-xl border bg-card/20 p-3 transition-all duration-300 md:flex-row"
          >
            <div className="mx-auto flex h-28 w-full bg-contain md:mx-0 md:w-32">
              <Image
                src={project.icon}
                height={500}
                width={500}
                alt={project.name}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex-col">
                <h3 className="flex flex-row items-center text-lg font-semibold">
                  {project.name}
                </h3>
                <p className="text-md text-sm text-gray-300">
                  {project.description}
                </p>
                <div className="flex gap-8">
                  {project.liveUrl && (
                    <Link href={project.slug}>
                      <UnderLineGradent
                        showIcon
                        className="font-medium text-gray-300 hover:text-gray-300"
                      >
                        {project.liveUrl}
                      </UnderLineGradent>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.slug}>
                      <UnderLineGradent
                        showIcon
                        className="font-medium text-gray-300 hover:text-gray-300"
                      >
                        {project.liveUrl}
                      </UnderLineGradent>
                    </Link>
                  )}
                </div>
              </div>
              <Link href={project.slug} className={"mt-5"}>
                <UnderLineGradent className="font-medium text-gray-300 hover:text-gray-300">
                  Learn more
                </UnderLineGradent>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
