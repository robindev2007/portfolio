import Footer from "@/components/Footer";
import Header from "@/components/shared/Header";
import GradentBackbgound from "@/components/ui/gradent-bg";
import React, { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-grid-small-white/[0.08] relative min-h-screen contain-paint ">
      <div className="z-10 flex h-full min-h-screen flex-col gap-0 bg-gradient-to-tr from-[#11111174] to-[#001c155b]">
        <Header />

        <GradentBackbgound />
        <div className="z-10 min-h-svh">{children}</div>

        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
