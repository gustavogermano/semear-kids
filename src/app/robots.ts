import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { trimTrailingSlash } from "@/utils/url";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = trimTrailingSlash(siteConfig.url);

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
