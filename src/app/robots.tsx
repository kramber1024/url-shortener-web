import type { MetadataRoute } from "next";

import { constant } from "@/constant";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      allow: "*",
      disallow: "/api/*",
      userAgent: "*",
    },
    sitemap: `${constant.host.URL}/sitemap.xml`,
  };
};

export default robots;
