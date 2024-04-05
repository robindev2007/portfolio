import React from "react";
import SocialIcons from "@/components/social-icons";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container flex flex-col-reverse items-center md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="text-5xl font-bold will-change-transform">Robin Mia</h1>
        <h2 className="text-lg font-medium text-muted-foreground will-change-transform">
          High Schooler • Fullstack Web Developer • Blogger • Tech Enthusiast
        </h2>
        <p className="text-md text-lg text-card-foreground will-change-transform">
          I am a fullstack web developer, currently looking into learning new
          things (Rust, Go, Web3 and backend technologies). Whenever I feel like
          I should share my knowledge with others, I like to do it via blog
          posts and social media.
        </p>
        <SocialIcons />
      </div>
      <div>
        <div className="h-32 w-32 overflow-hidden rounded-full border">
          <Image
            src={"/images/robin-developer.jpg"}
            height={1000}
            width={1000}
            alt="developer robin image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
