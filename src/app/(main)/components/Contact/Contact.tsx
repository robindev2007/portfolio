import H2 from "@/components/ui/h2";
import UnderLineGradent from "@/components/ui/underline-gradent";
import React from "react";
import SocialIcons from "@/components/social-icons";
import CusomLink from "@/components/ui/Link";

const Contact = () => {
  return (
    <div className="container pt-20">
      <H2>Contact</H2>
      <p className="">
        You can send me over an e-mail on{" "}
        <CusomLink href={""}>
          <UnderLineGradent showIcon={false}>
            robindev2007@gmail.com
          </UnderLineGradent>
        </CusomLink>
      </p>
      <SocialIcons />
      <div className="flex flex-col items-center pb-10 pt-10">
        <p>
          Made by{" "}
          <CusomLink href={""}>
            <UnderLineGradent showIcon>Robin Mia</UnderLineGradent>
          </CusomLink>
        </p>
        <p>
          This portfolio is open source and the source code can be found on{" "}
          <CusomLink href={""}>
            <UnderLineGradent showIcon>GitHub</UnderLineGradent>
          </CusomLink>
        </p>
      </div>
    </div>
  );
};

export default Contact;
