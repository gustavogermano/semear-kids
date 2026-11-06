import { siteConfig } from "@/config/site.config";

/** Monta o link wa.me com mensagem pré-preenchida. */
export function buildWhatsAppLink(message: string = siteConfig.whatsappMessages.default): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildServiceWhatsAppLink(serviceName: string): string {
  return buildWhatsAppLink(siteConfig.whatsappMessages.service(serviceName));
}

export interface QuoteRequest {
  name: string;
  eventType: string;
  children: string;
  message: string;
}

/** Converte o formulário de orçamento em uma mensagem organizada de WhatsApp. */
export function buildQuoteLink({ name, eventType, children, message }: QuoteRequest): string {
  const details = [
    `Nome: ${name}`,
    eventType ? `Tipo de evento: ${eventType}` : "",
    children ? `Quantidade de crianças: ${children}` : "",
    message ? `Detalhes: ${message}` : "",
  ].filter(Boolean);

  return buildWhatsAppLink(
    ["Olá! Gostaria de um orçamento pela Semear Kids.", "", ...details].join("\n"),
  );
}
