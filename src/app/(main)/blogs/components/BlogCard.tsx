import H2 from "@/components/ui/h2";
import { formatDate } from "@/utlis/blogDateFormater";
import { Blog } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={blog.slug}
      className="flex flex-col gap-4 rounded border bg-card/40 p-4 shadow-md transition-all duration-200 ease-in-out hover:border-white/30"
    >
      <div className="overflow-hidden rounded-[inherit] border">
        <Image
          src={blog.image.src}
          height={blog.image.height}
          width={blog.image.width}
          alt={blog.title}
        />
      </div>
      <div className="">
        <H2 className="pb-1 text-xl">{blog.title}</H2>
        <p className="line-clamp-5 text-muted-foreground">{blog.description}</p>
      </div>
      <div className="mt-auto flex items-center gap-2 text-muted-foreground">
        <p>{formatDate(blog.date)}</p>/<p>{blog.readTime} min read</p>
      </div>
    </Link>
  );
};

export default BlogCard;
