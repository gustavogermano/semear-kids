import type { PricingPlan } from "@/types";

/**
 * Planos de recreação. Os valores não são exibidos no site (siteConfig.showPrices = false):
 * o objetivo é levar o cliente ao WhatsApp para um orçamento personalizado.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "sementinha",
    name: "Plano Sementinha",
    emoji: "🌱",
    duration: "2 horas de recreação",
    audience: "10 a 15 crianças",
    features: [
      "Recepção e integração",
      "Brincadeiras dirigidas",
      "Gincanas recreativas",
      "Dança e música",
      "Brincadeiras tradicionais",
      "Dinâmicas em grupo",
    ],
  },
  {
    id: "girassol",
    name: "Plano Girassol",
    emoji: "🌻",
    duration: "3 horas de recreação",
    audience: "10 a 15 crianças",
    featured: true,
    features: [
      "Recepção e integração",
      "Brincadeiras dirigidas",
      "Gincanas e desafios",
      "Circuito recreativo",
      "Dança e música",
      "Caça ao tesouro",
      "Brincadeiras em equipe",
      "Atividades personalizadas",
    ],
  },
  {
    id: "trevo",
    name: "Plano Trevo de Quatro Folhas",
    emoji: "🍀",
    duration: "4 horas de recreação",
    audience: "10 a 15 crianças",
    features: [
      "Recepção e integração",
      "Brincadeiras dirigidas",
      "Gincanas e desafios",
      "Circuito recreativo",
      "Dança e música",
      "Caça ao tesouro",
      "Brincadeiras tradicionais",
      "Atividades personalizadas",
    ],
  },
];

export const pricingNotes: string[] = [
  "Crianças adicionais são cobradas separadamente.",
  "O tempo excedente é cobrado à parte.",
  "Quantidade de recreadores: 02.",
  "Recreador adicional sob consulta.",
];
