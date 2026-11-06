import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/common/JsonLd";
import { seoConfig } from "@/config/seo.config";
import { siteConfig } from "@/config/site.config";
import { bodyFont, displayFont } from "@/lib/fonts";
import { getThemeVariables } from "@/theme";
import { trimTrailingSlash } from "@/utils/url";
import "@/styles/globals.css";

const baseUrl = trimTrailingSlash(siteConfig.url);
const ogImageUrl = `${baseUrl}${siteConfig.ogImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/`),
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: `${baseUrl}/` },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: `${baseUrl}/`,
    siteName: siteConfig.name,
    title: seoConfig.title.default,
    description: seoConfig.description,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: siteConfig.logo.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title.default,
    description: seoConfig.description,
    images: [ogImageUrl],
    ...(seoConfig.twitterHandle ? { creator: seoConfig.twitterHandle } : {}),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seoConfig.themeColor,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.language} className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body style={getThemeVariables()}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
