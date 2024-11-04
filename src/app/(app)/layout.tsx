import Footer from "@/components/Footer";
import Header from "@/components/shared/Header";
import GradentBackbgound from "@/components/ui/gradent-bg";
import { DEVELOPER_DATA } from "@/lib/constant";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Robin Mia - Full Stack Developer | React.js, Next.js, Node.js",
  description:
    "Welcome to the portfolio of Robin Mia, a skilled Full Stack Developer specializing in React.js, Next.js, and Node.js. Explore my projects and expertise in building dynamic web applications.",
  keywords: [
    "Robin web developer Portfolio",
    "Robin Mia web developer Portfolio",
    "Full Stack Developer",
    "React.js developer",
    "Next.js developer",
    "Node.js developer",
    "Web Development",
    "JavaScript",
    "Robin Portfolio",
  ],
  authors: [
    {
      name: "Robin Mia",
      url: "https://robinport.vercel.app",
    },
  ],
  openGraph: {
    title: "Robin Mia - Full Stack Developer",
    description:
      "Explore the portfolio of Robin Mia, an expert in React.js, Next.js, and Node.js.",
    type: "website",
    url: "https://robinport.vercel.app",
    images: DEVELOPER_DATA.heroImage,
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Mia - Full Stack Developer",
    description:
      "Discover my work as a Full Stack Developer proficient in React.js, Next.js, and Node.js.",
    images: [DEVELOPER_DATA.heroImage],
  },
};

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen contain-paint bg-grid-small-white/[0.08] ">
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
