import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaTwitter, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const SocialIcons = () => {
  const heroIconsLink = [
    {
      icon: <FaTwitter className="h-5 w-5" />,
      title: "Twiter",
      href: "",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      title: "Github",
      href: "",
    },
    {
      icon: <FaFacebook className="h-5 w-5" />,
      title: "Facebook",
      href: "",
    },
    {
      icon: <FaYoutube className="h-5 w-5" />,
      title: "Youtube",
      href: "",
    },
  ];

  return (
    <div className="flex gap-5">
      {heroIconsLink.map((link) => (
        <TooltipProvider delayDuration={50} key={link.title}>
          <Tooltip>
            <TooltipTrigger className={"rounded-xl border bg-card p-2"}>
              <Link href={link.href}>{link.icon}</Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default SocialIcons;
