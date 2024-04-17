import { BASE_URL } from "@/constante/constants";
import { allProjects } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = allProjects.map((project) => ({
    url: `${BASE_URL}${project.slug}`,
    lastModified: project.date,
  }));

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/achievements`,
      lastModified: new Date(),
    },
    ...projects,
  ];
}
