import React from "react";
import Container from "./shared/Container";
import SocialIcons from "./SocialIcons";
import CustomLink from "./CustomLink";

function Footer() {
  return (
    <div>
      <Container className="text-s items-center gap-3 text-muted-foreground">
        <SocialIcons />
        <p>
          Made by{" "}
          <CustomLink
            href="https://www.facebook.com/robindev2007"
            className="text-blue-500 "
            showIcon
          >
            Robin Mia
          </CustomLink>
        </p>
        <p>&copy; 2024 Robin Mia</p>
      </Container>
    </div>
  );
}

export default Footer;
