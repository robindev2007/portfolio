import mdxComponents from "@/components/common/mdx-components";
import H2 from "@/components/ui/h2";
import { formatDate } from "@/utlis/blogDateFormater";
import { Blog, allBlogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React from "react";

const SingleBlogPage = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find(
    (blog) => blog._raw.flattenedPath === "blogs/" + params.slug,
  ) as Blog;

  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div>
      <div className="mx-auto my-4 max-w-[80%] overflow-hidden rounded border">
        <Image
          src={blog.image.src}
          height={blog.image.height}
          width={blog.image.width}
          alt={blog.title}
        />
      </div>
      <div className="mx-auto flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-4xl font-bold">{blog.title}</h1>

        <div className="flex items-center gap-2 text-muted-foreground">
          <p className="text-lg">{formatDate(blog.date)}</p>-
          <p>{blog.readTime} min read</p>
        </div>
      </div>
      <article className="prose prose-invert min-w-full">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
};

export default SingleBlogPage;
