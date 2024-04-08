import App from "next/app";
import Image from "next/image";
import HomePage from "../components/HomePage";
import GradentBackbgound from "@/components/ui/gradent-bg";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/Hero/HeroSection";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <div className="relative">
      <GradentBackbgound />
      <HeroSection />
      <Projects />
      <Skills />
    </div>
  );
}
