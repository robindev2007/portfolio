"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MobileNav = ({
  navList,
  pathname,
  navActive,
  setNavActive,
}: {
  navList: { title: string; href: string }[];
  pathname: string;
  navActive: boolean;
  setNavActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const containerAnime = {
    initial: {
      left: "100vw",
    },
    animate: {
      left: "0",
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      left: "100vw",
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerAnime}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute left-0 top-full z-50 flex h-screen w-full overflow-hidden bg-background md:hidden"
    >
      <motion.nav
        animate={{
          transition: {
            staggerChildren: 0.2,
          },
        }}
        className="flex w-full flex-col"
      >
        {navList.map((nav, i) => (
          <motion.div
            key={nav.title}
            className={cn(
              "border-b px-3 pb-1 pt-8 text-muted-foreground",
              pathname === nav.href && "text-foreground",
            )}
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: 0.06 * i + 0.5,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -100,
              transition: {
                delay: 0.06 * i,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
          >
            <Link
              onClick={() => setNavActive(false)}
              href={nav.href}
              key={nav.title}
            >
              {nav.title}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default MobileNav;
