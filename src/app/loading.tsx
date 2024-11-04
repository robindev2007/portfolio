import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <FlipWords words={["Loading", "Please wait"]} />
    </div>
  );
}

export default Loading;
