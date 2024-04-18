import { Metadata } from "next";
import React from "react";
import { allBlogs } from "contentlayer/generated";
import BlogCard from "./components/BlogCard";
import GradentBackbgound from "@/components/ui/gradent-bg";

export const metadata: Metadata = {
  title: "Blogs | Robin Mia",
  description:
    "Blog posts of Robin mia developer| Live in Bangladesh | Open for work",
};

function BlogPage() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <GradentBackbgound />
      {allBlogs.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </div>
  );
}

export default BlogPage;
