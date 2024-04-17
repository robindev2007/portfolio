import { BASE_URL } from "@/constante/constants";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
