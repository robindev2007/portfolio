import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

type containerProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
};

function Container({ className, ...props }: containerProps) {
  return (
    <div
      className={cn("mx-auto flex w-full max-w-4xl flex-col p-3", className)}
      {...props}
    />
  );
}

export default Container;
