export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  badge?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  emoji: string;
  duration: string;
  audience: string;
  features: string[];
  featured?: boolean;
  /** Exibido apenas quando siteConfig.showPrices = true */
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
