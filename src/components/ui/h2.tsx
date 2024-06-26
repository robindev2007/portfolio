"use client";
import { cn } from "@/lib/utils";
import React from "react";

const H2 = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h2 className={cn("pb-8 text-3xl font-bold", className)}>{children}</h2>
  );
};

export default H2;
