/**
 * Configuração central da empresa.
 * Para criar um novo cliente, altere este arquivo, theme.config.ts, /data e as imagens.
 */
export const siteConfig = {
  name: "Semear Kids",
  tagline: "Recreação Infantil",
  shortDescription:
    "Recreação infantil e oficinas criativas para festas, restaurantes e eventos em Piracicaba.",
  description:
    "Semear Kids: recreação infantil, oficinas criativas e pinturas artísticas para festas de aniversário, chá de bebê, Dia das Crianças, eventos corporativos e restaurantes em Piracicaba. Peça seu orçamento pelo WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gustavogermano.github.io/semear-kids",
  locale: "pt_BR",
  language: "pt-BR",

  logo: {
    src: "/images/logo.webp",
    alt: "Logotipo Semear Kids — Recreação Infantil",
    width: 900,
    height: 900,
  },
  ogImage: "/images/og.jpg",

  contact: {
    phoneDisplay: "(19) 99910-1576",
    whatsapp: "5519999101576",
    email: "semearkidspiracicaba@gmail.com",
    instagram: "semearkids.oficial",
    facebook: null as string | null,
    address: {
      city: "Piracicaba",
      state: "SP",
      country: "BR",
      label: "Piracicaba - SP",
    },
    hours: "Agenda aberta para eventos. Fale com a gente pelo WhatsApp.",
    googleMapsEmbed: "https://www.google.com/maps?q=Piracicaba,+SP&output=embed",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Piracicaba,+SP",
  },

  whatsappMessages: {
    default: "Olá! Vim pelo site da Semear Kids e gostaria de pedir um orçamento.",
    service: (service: string) =>
      `Olá! Vim pelo site da Semear Kids e gostaria de um orçamento para: ${service}.`,
  },

  /** Quando false, os valores dos planos não aparecem no site (orçamento via WhatsApp). */
  showPrices: false,

  keywords: [
    "recreação infantil",
    "recreação para festas",
    "oficinas infantis",
    "pintura facial",
    "pintura neon",
    "oficina de slime",
    "festa infantil Piracicaba",
    "recreador Piracicaba",
    "animação de festas",
    "Semear Kids",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
