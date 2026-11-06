import { siteConfig } from "@/config/site.config";
import { trimTrailingSlash } from "@/utils/url";

/** Dados estruturados Schema.org (LocalBusiness) para SEO local. */
export function JsonLd() {
  const baseUrl = trimTrailingSlash(siteConfig.url);
  const { contact } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "@id": `${baseUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: `${baseUrl}/`,
    image: `${baseUrl}${siteConfig.ogImage}`,
    logo: `${baseUrl}${siteConfig.logo.src}`,
    telephone: `+${contact.whatsapp}`,
    email: contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      addressCountry: contact.address.country,
    },
    areaServed: contact.address.city,
    sameAs: [
      `https://www.instagram.com/${contact.instagram}`,
      ...(contact.facebook ? [contact.facebook] : []),
    ],
    makesOffer: ["Recreação infantil", "Oficinas criativas", "Pintura artística"].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
