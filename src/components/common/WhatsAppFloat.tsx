import { buildWhatsAppLink } from "@/services/whatsapp.service";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Botão flutuante de WhatsApp, sempre visível. */
export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir orçamento pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp p-3.5 text-[#053b1c]
        shadow-[0_16px_40px_-10px_rgba(37,211,102,0.75)] transition-all duration-300 hover:scale-105 sm:bottom-7 sm:right-7 sm:pr-5"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.8s]" aria-hidden />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden font-display text-base font-bold sm:inline">Orçamento</span>
    </a>
  );
}
