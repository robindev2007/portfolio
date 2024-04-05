import React from "react";

function GradentBackbgound() {
  return (
    <div className="fixed left-0 right-0 top-0 -z-10 flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-10 overflow-visible opacity-20">
        <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-red-700 mix-blend-multiply blur-[128px]"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 overflow-visible opacity-20">
        <div className="circle-2 -z-10 h-[400px] w-[700px] rounded-full bg-green-700 mix-blend-multiply blur-[128px]"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 overflow-visible opacity-20">
        <div className="circle-3 -z-10 h-[600px] w-[500px] rounded-full bg-blue-700 mix-blend-multiply blur-[128px]"></div>
      </div>
    </div>
  );
}

export default GradentBackbgound;
