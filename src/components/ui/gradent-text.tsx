import { cn } from "@/lib/utils";
import React from "react";

function GradentText({
  textContent,
  className,
}: {
  textContent: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-block bg-gradient-to-r from-[#9ebd13] to-[#008552] bg-clip-text text-transparent",
        className,
      )}
    >
      {textContent}
    </div>
  );
}

export default GradentText;
