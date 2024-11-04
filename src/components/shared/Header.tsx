"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { cn } from "@/lib/utils";
import { AnimatePresence, useAnimation } from "framer-motion";
import NavigationControler from "./HadernavigactionControler";
import { usePathname } from "next/navigation";
import { Slant as Hamburger } from "hamburger-react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const pathname = usePathname();

  const navList = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];

  return (
    <div
      className={cn(
        "sticky top-0 z-30",
        isVisible &&
          "w-full border-b border-border/30 bg-background/80 backdrop-blur-lg",
        navActive && "bg-background backdrop-blur-none",
      )}
    >
      <Container className="py-0">
        <div className="relative flex items-center justify-between">
          <NavigationControler pathname={pathname} />

          {/* desktop navigaction */}
          <nav className="hidden gap-2 py-2 md:flex">
            {navList.map((link) => (
              <Link
                className={cn(
                  buttonVariants({
                    variant: pathname === link.href ? "secondary" : "ghost",
                  }),
                  "h-8 px-3",
                )}
                key={link.title}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="relative z-30 flex md:hidden">
            <Hamburger toggled={navActive} toggle={setNavActive} size={20} />
          </div>
        </div>
        <div className="">
          <AnimatePresence>
            {navActive && (
              <MobileNav
                navList={navList}
                pathname={pathname}
                setNavActive={setNavActive}
                navActive={navActive}
              />
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}

export default Header;
