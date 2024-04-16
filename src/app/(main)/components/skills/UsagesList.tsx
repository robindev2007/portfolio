import CustomLink from "@/components/ui/CustomLink";
import H3 from "@/components/ui/h3";
import Image from "next/image";
import React from "react";

const UsagesList = ({ list, name }: { list: any; name: string }) => {
  return (
    <div className="mt-10">
      <H3>{name}</H3>
      <ul className="grid">
        {list.map((item: any) => (
          <li key={item.title} className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 justify-center rounded border bg-cover object-cover p-1 text-center opacity-80">
              <Image
                src={item.logo}
                height={400}
                width={400}
                alt={item.title}
                className="object-contain"
              />
            </div>
            <span className="flex gap-2 font-medium">
              <CustomLink
                target="_blank"
                className="underline hover:no-underline"
                href={item.link}
              >
                {item.title}
              </CustomLink>{" "}
              - <p className="">{item.type}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsagesList;
