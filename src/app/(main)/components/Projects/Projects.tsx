import { Button } from "@/components/ui/button";
import H2 from "@/components/ui/h2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiShareCircleLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { allProjects } from "contentlayer/generated";

const Projects = () => {
  const projects = [
    {
      title: "Notiger",
      shortDescription:
        "Get realtime notification on event from your applicaton",
      icon: "/images/GtcX71v0I.avif",
      href: "",
    },
    {
      title: "Notiger 2",
      shortDescription:
        "Get realtime notification on event from your applicaton",
      icon: "/images/GtcX71v0I.avif",
      href: "",
    },
    {
      title: "Notiger 3",
      shortDescription:
        "Get realtime notification on event from your applicaton",
      icon: "/images/GtcX71v0I.avif",
      href: "",
    },
  ];
  return (
    <div className="container space-y-10 py-20">
      <H2>Projects</H2>
      <ul className="flex flex-col space-y-3">
        {allProjects.map((project) => (
          <div
            // href={project.href}
            key={project._id}
            className="group relative flex w-full flex-col items-start gap-3 rounded-xl border bg-card/20 p-3 transition-all duration-300 hover:scale-[1.01] hover:border-primary md:flex-row md:items-center"
          >
            <div className="w-16">
              <Image
                src={project.projectLogo}
                height={500}
                width={500}
                alt={project.name}
              />
            </div>
            <div className="flex-col space-y-2">
              <h3 className="flex flex-row items-center space-x-2 text-lg font-semibold">
                {project.name}
              </h3>
              <p className="text-md text-gray-300">{project.description}</p>
            </div>

            <Link
              href={`${project.slug}`}
              className="group/link group- absolute right-0 top-0 hidden  -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-foreground fill-black p-2 hover:bg-background group-hover:flex"
            >
              <RiShareCircleLine className="fill-black group-hover/link:fill-white" />
            </Link>
          </div>
        ))}
      </ul>
      <Link
        href={"/projects"}
        className="flex items-center gap-3 text-xl font-medium text-muted-foreground transition-all duration-300 ease-out hover:gap-5"
      >
        <span>View All Projects</span>
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default Projects;
