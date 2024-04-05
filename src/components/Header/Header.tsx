"use client";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import GradentText from "../ui/gradent-text";

const Header = () => {
  const navList = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Achievments",
      href: "/achievements",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="container flex items-center justify-between py-3">
      <div className="flex items-center gap-2">
        <Link href={"/"}>~</Link>
        {pathname !== "/" && (
          <>
            <div className="flex text-muted-foreground">\</div>
            <Link href={pathname}>
              <GradentText
                className="font-medium"
                textContent={capitalizeFirstLetter(pathname.split("/")[1])}
              />
            </Link>
          </>
        )}
      </div>
      <nav className="flex gap-3">
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
    </div>
  );
};

export default Header;
