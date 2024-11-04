import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const SocialIcons = () => {
  const heroIconsLink = [
    {
      icon: FaLinkedin,
      title: "Linkedin",
      href: "https://www.linkedin.com/in/robindev2007/",
    },
    {
      icon: FaGithub,
      title: "Github",
      href: "https://github.com/robindev2007",
    },
    {
      icon: FaFacebook,
      title: "Facebook",
      href: "https://www.facebook.com/robindev2007",
    },
  ];

  return (
    <div className="flex gap-5">
      {heroIconsLink.map((link) => (
        <TooltipProvider delayDuration={50} key={link.title}>
          <Tooltip>
            <TooltipTrigger
              className={"rounded-xl border border-border/50 bg-card/50 p-2"}
            >
              <Link target="_blank" href={link.href}>
                <link.icon className="size-5" />
              </Link>
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
