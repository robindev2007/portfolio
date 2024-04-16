import Link from "next/link";
import React from "react";
import GradentText from "../ui/gradent-text";
import { capitalizeFirstLetter } from "@/lib/utils";

const NavigationControler = ({ pathname }: { pathname: string }) => {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <Link href={"/"}>~</Link>
      {pathname !== "/" && pathname.split("/")[1] && (
        <>
          <div className="flex text-muted-foreground">\</div>
          <Link href={"/projects"}>
            {!pathname.split("/")[2] ? (
              <GradentText
                className="font-medium"
                textContent={capitalizeFirstLetter(pathname.split("/")[1])}
              />
            ) : (
              <p>{capitalizeFirstLetter(pathname.split("/")[1])}</p>
            )}
          </Link>
        </>
      )}
      {pathname !== "/" && pathname.split("/")[2] && (
        <div className="flex items-center gap-2">
          <div className="flex items-center text-muted-foreground">\</div>
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
