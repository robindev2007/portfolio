import Header from "@/components/Header/Header";
import GradentBackbgound from "@/components/ui/gradent-bg";
import React, { ReactNode } from "react";
import MouseFollowDiv from "@/components/ui/mouse-follow";
import Contact from "./components/Contact/Contact";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <div className="container">
        <Header />
        {/* <MouseFollowDiv /> */}
        {children}
        <Contact />
      </div>
    </div>
  );
}

export default MainLayout;
