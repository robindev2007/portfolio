import H2 from "@/components/ui/h2";
import UnderLineGradent from "@/components/ui/underline-gradent";
import React from "react";
import SocialIcons from "@/components/social-icons";
import CustomLink from "@/components/ui/CustomLink";
import { UserDetails } from "@/constante/constants";

const Contact = () => {
  return (
    <div className="pt-20">
      <H2>Contact</H2>
      <p className="">
        You can send me over an e-mail on{" "}
        <CustomLink href={`mailto: ${UserDetails.gmail.gmail}`}>
          <UnderLineGradent showIcon={false}>
            {UserDetails.gmail.gmail}
          </UnderLineGradent>
        </CustomLink>
      </p>
      <SocialIcons />
      <div className="flex flex-col items-center pb-10 pt-10">
        <p>
          Made by{" "}
          <CustomLink target="_blank" href={UserDetails.developer.url}>
            <UnderLineGradent showIcon>
              {UserDetails.developer.name}
            </UnderLineGradent>
          </CustomLink>
        </p>
        <p>
          This portfolio is open source and the source code can be found on{" "}
          <CustomLink target="_blank" href={UserDetails.github.link}>
            <UnderLineGradent showIcon>GitHub</UnderLineGradent>
          </CustomLink>
        </p>
      </div>
    </div>
  );
};

export default Contact;
