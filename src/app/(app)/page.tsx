import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-8">
      <HeroSection />
      <Projects />
      <Technologies />
    </div>
  );
}
