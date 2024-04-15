import Image from "next/image";
import React from "react";

function GradentBackbgound() {
  return (
    <div className="absolute left-0 right-0 top-0 overflow-hidden">
      <div className="absolute left-8 top-16 -z-10 overflow-visible">
        <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full opacity-75 ">
          <Image
            priority
            className="h-full w-full scale-150 scale-y-125 bg-cover opacity-40  mix-blend-multiply"
            src={"/images/Ellipse 1.png"}
            height={1000}
            width={1000}
            alt="el"
          />
        </div>
      </div>
      <div className="absolute left-10 top-32 -z-10 overflow-visible">
        <div className="circle-2 -z-10 h-[400px] w-[700px] rounded-full opacity-75 ">
          <Image
            priority
            className="h-full w-full scale-150 scale-x-125 bg-cover opacity-40 mix-blend-multiply"
            src={"/images/Ellipse 2.png"}
            height={1000}
            width={1000}
            alt="el"
          />
        </div>
      </div>
      <div className="absolute left-12 top-48 -z-10 overflow-visible">
        <div className="circle-3 -z-10 h-[600px] w-[500px] rounded-full opacity-75 ">
          <Image
            priority
            className="h-full w-full scale-150 scale-x-125  bg-cover opacity-40 mix-blend-multiply"
            src={"/images/Ellipse 3.png"}
            height={1000}
            width={1000}
            alt="el"
          />
        </div>
      </div>
    </div>
  );
}

export default GradentBackbgound;
