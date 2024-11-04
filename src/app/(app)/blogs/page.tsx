import Container from "@/components/shared/Container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { H2 } from "@/components/ui/typography";
import { allBlogs, Blogs as BlogsT } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Blogs() {
  return (
    <div className="">
      <Container className="">
        <div className="grid h-fit grid-cols-2 gap-3">
          {allBlogs.map((blog) => (
            <SingleBlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Blogs;

const SingleBlogCard = ({ blog }: { blog: BlogsT }) => {
  return (
    <Link href={blog.slug} className="">
      <Card className="h-full transition-all hover:border-primary/20">
        <CardHeader>
          <Image
            src={blog.heroImage}
            blurDataURL={blog.heroImage}
            placeholder="blur"
            height={420}
            width={800}
            alt={blog.title}
            className="overflow-hidden rounded-md border border-border/20"
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <h2 className="font-semibold leading-snug">{blog.title}</h2>
          <p className="line-clamp-3 leading-5 text-muted-foreground">
            {blog.brief}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
