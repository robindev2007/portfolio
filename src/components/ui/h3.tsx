"use client";
import { cn } from "@/lib/utils";
import React from "react";

const H3 = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h2 className={cn("font-ahref my-4 text-2xl font-semibold", className)}>
      {children}
    </h2>
  );
};

export default H3;
