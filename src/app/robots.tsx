import type { MetadataRoute } from "next";

import { constants } from "@/constants";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      allow: "*",
      disallow: "/api/*",
      userAgent: "*",
    },
    sitemap: `${constants.host.URL}/sitemap.xml`,
  };
};

export default robots;
