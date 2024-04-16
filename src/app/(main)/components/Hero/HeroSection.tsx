import React from "react";
import SocialIcons from "@/components/social-icons";
import Image from "next/image";
import profilePic from "public/images/robin-developer.jpg";
import { UserDetails } from "@/constante/constants";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="text-5xl font-bold will-change-transform">
          {UserDetails.developer.name}
        </h1>
        <h2 className="text-lg font-medium text-muted-foreground will-change-transform">
          {UserDetails.developer.title}
        </h2>
        <p className="text-md text-lg text-card-foreground will-change-transform">
          {UserDetails.developer.description}
        </p>
        <SocialIcons />
      </div>
      <div>
        <div className="h-32 w-32 overflow-hidden rounded-full border">
          <Image
            src={"/images/robin-developer.jpg"}
            blurDataURL="/images/robin-developer.jpg"
            height={1000}
            width={1000}
            alt="developer robin image"
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
