import type { MetadataRoute } from "next";

import { constant } from "@/constant";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
      url: constant.host.URL,
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${constant.host.URL}/signup`,
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${constant.host.URL}/login`,
    },
  ];
};

export default sitemap;
