"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  showIcon?: boolean;
  className?: string;
  href: string;
};

const CustomLink = ({
  children,
  showIcon,
  className,
  href,
  ...props
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "underline-gradent group relative inline-flex w-fit text-blue-400 no-underline transition-all duration-200 ease-in-out after:w-0 hover:text-blue-300 hover:after:w-full",
        showIcon && "mr-5",
        className,
      )}
      {...props}
    >
      {children}
      {showIcon && (
        <MdArrowOutward className={"absolute -right-5 top-[20%] h-4 w-4"} />
      )}
    </Link>
  );
};

export default CustomLink;
