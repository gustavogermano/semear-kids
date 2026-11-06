import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { trimTrailingSlash } from "@/utils/url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = trimTrailingSlash(siteConfig.url);

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
