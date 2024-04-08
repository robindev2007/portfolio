import CustomLink from "@/components/ui/CustomLink";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import Image from "next/image";
import React from "react";
import UsagesList from "./UsagesList";

const Skills = () => {
  const technologiesList = [
    {
      title: "React",
      type: "UI Library",
      link: "https://react.dev",
      logo: "/images/icons/React-iconpng.png",
    },
    {
      title: "Next.js",
      type: "React Framework",
      link: "https://nextjs.org",
      logo: "/images/icons/next-js.svg",
    },
    {
      title: "Sanity",
      type: "Headless CMS",
      link: "https://www.sanity.io",
      logo: "/images/icons/sanity.svg",
    },
    {
      title: "Tailwind CSS",
      type: "Styling Library",
      link: "https://tailwindcss.com",
      logo: "/images/icons/tailwindcss-icon.svg",
    },
    {
      title: "TypeScript",
      type: "Typed Superset of JavaScript Library",
      link: "https://www.typescriptlang.org",
      logo: "/images/icons/typescript.svg",
    },
  ];

  const toolsList = [
    {
      title: "Visual Studio Code",
      type: "Text Editor",
      link: "https://code.visualstudio.com/",
      logo: "/images/icons/vscode.png",
    },
    {
      title: "Google Chrome",
      type: "Web Browser",
      link: "https://www.google.com/chrome",
      logo: "/images/icons/googlechorme.png",
    },
    {
      title: "Figma",
      type: "Design Tool",
      link: "https://www.figma.com/",
      logo: "/images/icons/figma.png",
    },
    {
      title: "Git",
      type: "Version Control",
      link: "https://git-scm.com",
      logo: "/images/icons/git.svg",
    },
  ];

  const platformList = [
    {
      title: "GitHub",
      type: "Version control/hosting service",
      link: "https://github.com",
      logo: "/images/icons/GitHub-Logo.png",
    },
    {
      title: "YouTube",
      type: "Music Streaming",
      link: "https://www.google.com/chrome",
      logo: "/images/icons/YouTube.png",
    },
  ];

  return (
    <div className="pt-10 font-inter">
      <H2 className="mb-1">Usage</H2>
      <span>
        Tools, technologies and gadgets I use on a daily basis but not limited
        to.
      </span>
      <UsagesList list={technologiesList} name="Technologies" />
      <UsagesList list={toolsList} name="Tools" />
      <UsagesList list={platformList} name="Platform" />
    </div>
  );
};

export default Skills;
