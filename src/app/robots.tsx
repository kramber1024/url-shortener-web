import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      allow: "*",
      disallow: "/api/*",
      userAgent: "*",
    },
  };
};

export default robots;
