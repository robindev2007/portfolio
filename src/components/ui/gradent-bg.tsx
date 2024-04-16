import Image from "next/image";
import React from "react";

function GradentBackbgound() {
  return (
    <div className="opaci pointer-events-none absolute left-0 right-0 top-0 -z-10">
      <div className="absolute left-10 top-32 overflow-visible">
        <div className="circle-2 h-[400px] w-[700px] scale-125 rounded-full ">
          <Image
            priority
            className="h-full w-full scale-150 bg-cover mix-blend-multiply"
            src={"/images/Ellipse 2.png"}
            height={300}
            width={300}
            alt="el"
          />
        </div>
      </div>
      <div className="absolute left-12 top-48 overflow-visible">
        <div className="circle-3 h-[600px] w-[500px] scale-125 rounded-full ">
          <Image
            priority
            className="h-full w-full scale-150  bg-cover mix-blend-multiply"
            src={"/images/Ellipse 3.png"}
            height={300}
            width={300}
            alt="el"
          />
        </div>
      </div>
      <div className="absolute left-8 top-16 overflow-visible">
        <div className="circle-1 h-[400px] w-[700px] scale-125 rounded-full ">
          <Image
            priority
            className="h-full w-full scale-150 bg-cover mix-blend-multiply"
            src={"/images/Ellipse 1.png"}
            height={300}
            width={300}
            alt="el"
          />
        </div>
      </div>
    </div>
  );
}

export default GradentBackbgound;
