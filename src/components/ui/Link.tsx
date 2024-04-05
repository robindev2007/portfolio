"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";

const CusomLink = ({
  children,
  showIcon,
  className,
  href,
}: {
  children: ReactNode;
  showIcon?: boolean;
  className?: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "underline-gradent group relative inline-flex w-fit text-blue-400 transition-all duration-200 ease-in-out after:w-0 hover:text-blue-300 hover:after:w-full",
        className,
      )}
    >
      {children}
      {showIcon && (
        <MdArrowOutward className={"absolute -right-5 top-1 h-4 w-4"} />
      )}
    </Link>
  );
};

export default CusomLink;
