import React from "react";
import Container from "./shared/Container";
import { H2 } from "./ui/typography";
import { SiExpress, SiMongodb, SiNpm, SiShadcnui } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Card, CardContent } from "./ui/card";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiPrisma, SiWebpack } from "react-icons/si";
import {
  FaChrome,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaSass,
} from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

const technologiesArray = [
  {
    title: "Backend",
    techs: [
      {
        title: "Node",
        icon: FaNodeJs,
        containerColor: "#8FC70810",
        iconColor: "#8FC708",
        iconBgColor: "",
      },
      {
        title: "Typescript",
        icon: BiLogoTypescript,
        containerColor: "#007ACC20",
        iconColor: "#007ACC",
        iconBgColor: "",
      },
      {
        title: "Express JS",
        icon: SiExpress,
        containerColor: "#F3E02410",
        iconColor: "#F3E024",
        iconBgColor: "",
      },

      {
        title: "Next.JS",
        icon: RiNextjsFill,
        containerColor: "#FFFFFF10",
        iconColor: "#FFFFFF",
        iconBgColor: "",
      },
      {
        title: "Prisma",
        icon: SiPrisma,
        containerColor: "#143A5140",
        iconColor: "#FFFFFF",
        iconBgColor: "",
      },
      {
        title: "Webpack",
        icon: SiWebpack,
        containerColor: "#143A5140",
        iconColor: "#007ACC",
        iconBgColor: "",
      },
    ],
  },
  {
    title: "Frontend",
    techs: [
      {
        title: "React",
        icon: FaReact,
        containerColor: "#08D9FF10",
        iconColor: "#08D9FF",
        iconBgColor: "",
      },
      {
        title: "Typescript",
        icon: BiLogoTypescript,
        containerColor: "#007ACC20",
        iconColor: "#007ACC",
        iconBgColor: "",
      },
      {
        title: "Javascript",
        icon: FaJsSquare,
        containerColor: "#F7E02510",
        iconColor: "#F7E025",
        iconBgColor: "",
      },
      {
        title: "Tailwind CSS",
        icon: RiTailwindCssFill,
        containerColor: "#13B8D510",
        iconColor: "#13B8D5",
        iconBgColor: "",
      },
      {
        title: "HTML",
        icon: FaHtml5,
        containerColor: "#E5532D10",
        iconColor: "#E5532D",
        iconBgColor: "",
      },
      {
        title: "CSS",
        icon: FaCss3Alt,
        containerColor: "#2D53E510",
        iconColor: "#2D53E5",
        iconBgColor: "",
      },
      {
        title: "SASS",
        icon: FaSass,
        containerColor: "#CF6B9B10",
        iconColor: "#CF6B9B",
        iconBgColor: "",
      },
      {
        title: "SHadcn UI",
        icon: SiShadcnui,
        containerColor: "#FFFFFF10",
        iconColor: "#FFFFFFF",
        iconBgColor: "",
      },
    ],
  },
  {
    title: "Database",
    techs: [
      {
        title: "Supabase",
        icon: RiSupabaseFill,
        containerColor: "#44D09310",
        iconColor: "#44D093",
        iconBgColor: "",
      },
      {
        title: "Prisma (SQL)",
        icon: SiPrisma,
        containerColor: "#143A5140",
        iconColor: "#FFFFFF",
        iconBgColor: "",
      },
      {
        title: "Firebase",
        icon: IoLogoFirebase,
        containerColor: "#FFCD3210",
        iconColor: "#FFCD32",
        iconBgColor: "",
      },
      {
        title: "Mongo DB",
        icon: SiMongodb,
        containerColor: "#18AD5510",
        iconColor: "#18AD55",
        iconBgColor: "",
      },
    ],
  },
  {
    title: "Tools",
    techs: [
      {
        title: "Vs Code",
        icon: VscVscode,
        containerColor: "#2BABF110",
        iconColor: "#2BABF1",
        iconBgColor: "",
      },
      {
        title: "Git Hub",
        icon: FaGithub,
        containerColor: "##19388110",
        iconColor: "#193881",
        iconBgColor: "",
      },
      {
        title: "Npm",
        icon: SiNpm,
        containerColor: "#CD3E3D10",
        iconColor: "#F8771B",
        iconBgColor: "",
      },
      {
        title: "Chrome (Browser)",
        icon: FaChrome,
        containerColor: "#FCBE2410",
        iconColor: "#FCBE24",
        iconBgColor: "",
      },
    ],
  },
];

function Technologies() {
  return (
    <div className="">
      <Container className="">
        <H2>Technologies</H2>
        <div className="flex flex-col gap-6">
          {technologiesArray.map((techs) => (
            <div key={techs.title}>
              <h3>{techs.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                {techs.techs.map((tech) => (
                  <SingleTechCard key={tech.title} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Technologies;

const SingleTechCard = ({
  tech,
}: {
  tech: (typeof technologiesArray)[0]["techs"][0];
}) => {
  return (
    <Card key={tech.title} className="border-border/50 bg-card/50">
      <CardContent className="flex w-fit items-center gap-2 p-2">
        <div
          style={{
            backgroundColor: tech.containerColor,
          }}
          className="rounded-lg border border-border/30 p-2"
        >
          <tech.icon
            className="size-5"
            style={{
              color: tech.iconColor,
              background: tech.iconBgColor ?? "transparent",
            }}
          />
        </div>
        <p>{tech.title}</p>
      </CardContent>
    </Card>
  );
};
