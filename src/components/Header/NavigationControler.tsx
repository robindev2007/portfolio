import Link from "next/link";
import React from "react";
import GradentText from "../ui/gradent-text";
import { capitalizeFirstLetter } from "@/lib/utils";

const NavigationControler = ({ pathname }: { pathname: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Link href={"/"}>~</Link>
      {pathname !== "/" && pathname.split("/")[1] && (
        <>
          <div className="flex text-muted-foreground">\</div>
          <Link href={"/projects"}>
            <GradentText
              className="font-medium"
              textContent={capitalizeFirstLetter(pathname.split("/")[1])}
            />
          </Link>
        </>
      )}
      {pathname !== "/" && pathname.split("/")[2] && (
        <div>
          <div className="flex text-muted-foreground">\</div>
          <Link href={pathname}>
            <GradentText
              className="font-medium"
              textContent={capitalizeFirstLetter(pathname.split("/")[2])}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavigationControler;
