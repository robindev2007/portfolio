import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import React, { Fragment, ReactNode } from "react";

const NavigationControler = ({ pathname }: { pathname: string }) => {
  const pathnameArray = pathname.split("/").filter((a) => a !== "");

  return (
    <div>
      <div className="flex shrink-0 items-center gap-2">
        <Link className="hover:opacity-80" href={"/"}>
          ~
        </Link>

        {pathnameArray.map((path) => (
          <Fragment key={path}>
            <p className="text-muted-foreground">/</p>
            <Link href={`/${path}`}>{path}</Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavigationControler;

const GradentLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="bg-gradient-to-br from-green-500 to-pink-500 bg-clip-text font-semibold text-transparent"
    >
      {children}
    </Link>
  );
};
