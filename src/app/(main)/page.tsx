import GradentBackbgound from "@/components/ui/gradent-bg";
import Projects from "./components/Projects/Projects";
import HeroSection from "./components/Hero/HeroSection";
import Skills from "./components/skills/Skills";
import CustomMetadata from "@/components/common/CustomMetadata";
import { Metadata } from "next";

export default function Home() {
  return (
    <div className="relative ">
      <GradentBackbgound />
      <HeroSection />
      <Projects />
      <Skills />
    </div>
  );
}
