import type { MetadataRoute } from "next";

import { constants } from "@/constants";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
      url: constants.host.URL,
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${constants.host.URL}/signup`,
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${constants.host.URL}/login`,
    },
  ];
};

export default sitemap;
