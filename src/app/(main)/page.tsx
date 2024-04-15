import GradentBackbgound from "@/components/ui/gradent-bg";
import Projects from "./components/Projects/Projects";
import HeroSection from "./components/Hero/HeroSection";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <div className="relative ">
      {/* <GradentBackbgound /> */}
      <HeroSection />
      <Projects />
      <Skills />
    </div>
  );
}
