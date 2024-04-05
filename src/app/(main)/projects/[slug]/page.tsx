import { allProjects, Project } from "contentlayer/generated";

import React from "react";

const SingleProjectPage = ({ params }: { params: { slug: string } }) => {
  const post = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug,
  ) as Project;

  // const MDXContent = useMDXComponent(post.body.html);

  return (
    <article className="mx-auto max-w-xl py-8">
      {/* <MDXContent /> */}
      Under constraction
    </article>
  );
};

export default SingleProjectPage;
