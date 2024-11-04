import React from "react";
import Container from "./shared/Container";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { DEVELOPER_DATA } from "@/lib/constant";
import { FlipWords } from "./ui/flip-words";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function HeroSection() {
  return (
    <Container className="flex h-full min-h-[70vh] flex-col-reverse items-center gap-5 md:flex-row md:items-start md:justify-between md:space-y-0 md:pt-20">
      <div className="flex flex-col justify-center space-y-4 md:max-w-[60%]">
        <TextGenerateEffect
          words={DEVELOPER_DATA.name}
          className="text-5xl font-bold"
          textClassName="text-5xl font-bold"
        />

        <h2 className="flex items-center text-lg font-medium text-muted-foreground">
          <TextGenerateEffect
            words={"Full-stack developer •"}
            className=""
            textClassName="text-muted-foreground"
          />
          <div className="relative">
            <FlipWords
              className="text-muted-foreground"
              words={DEVELOPER_DATA.title}
            />
          </div>
        </h2>

        <TextGenerateEffect
          className="text-md text-lg text-card-foreground"
          words={DEVELOPER_DATA.description}
        />
        {/* <p className="text-md text-lg text-card-foreground">
          
        </p> */}
        <SocialIcons />
      </div>

      <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full">
        <Image
          src={"/images/robin-developer.jpg"}
          blurDataURL="/images/robin-developer.jpg"
          height={1000}
          width={1000}
          alt="Robin Web devloper Image"
          placeholder="blur"
          priority
        />
      </div>
    </Container>
  );
}

export default HeroSection;
