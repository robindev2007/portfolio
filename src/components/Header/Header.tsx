"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import NavigationControler from "./NavigationControler";
import { Slant as Hamburger } from "hamburger-react";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

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
    // {
    //   title: "Achievments",
    //   href: "/achievements",
    // },
  ];

  const pathname = usePathname();

  return (
    <div className="relative z-50">
      <div className="relative flex items-center justify-between py-3">
        <NavigationControler pathname={pathname} />

        <nav className="hidden gap-3 md:flex">
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
      <div className="mt-5">
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
    </div>
  );
};

export default Header;
