import { siteConfig } from "./site.config";

export const seoConfig = {
  title: {
    default: `${siteConfig.name} | Recreação infantil e oficinas criativas em Piracicaba`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords] as string[],
  canonical: siteConfig.url,
  twitterHandle: undefined as string | undefined,
  themeColor: "#8B3FBF",
} as const;
