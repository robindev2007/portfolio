import Header from "@/components/Header/Header";
import GradentBackbgound from "@/components/ui/gradent-bg";
import React, { ReactNode } from "react";
import MouseFollowDiv from "@/components/ui/mouse-follow";
import Contact from "./components/Contact/Contact";
import TitleBarHandler from "@/components/common/titlebar-handler";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robin Mia | Fullstack developer",
};

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container relative flex min-h-screen flex-col">
      <Header />
      {children}
      <div className="mt-auto">
        <Contact />
      </div>
    </div>
  );
}

export default MainLayout;
