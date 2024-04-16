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
      icon: <FaLinkedin className="h-5 w-5" />,
      title: "Linkedin",
      href: "https://www.linkedin.com/in/robindev2007/",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      title: "Github",
      href: "https://github.com/robindev2007",
    },
    {
      icon: <FaFacebook className="h-5 w-5" />,
      title: "Facebook",
      href: "https://www.facebook.com/robindev2007",
    },
    {
      icon: <FaYoutube className="h-5 w-5" />,
      title: "Youtube",
      href: "https://www.youtube.com/channel/UC1StKX3T0F-VE4O9AfLVWjA",
    },
  ];

  return (
    <div className="flex gap-5">
      {heroIconsLink.map((link) => (
        <TooltipProvider delayDuration={50} key={link.title}>
          <Tooltip>
            <TooltipTrigger className={"rounded-xl border bg-card p-2"}>
              <Link target="_blank" href={link.href}>
                {link.icon}
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
