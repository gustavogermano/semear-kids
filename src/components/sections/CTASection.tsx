import { CalendarHeart } from "lucide-react";
import { Bubbles } from "@/components/common/Bubbles";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { buildWhatsAppLink } from "@/services/whatsapp.service";

export function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="px-4 py-16 sm:px-8 sm:py-24">
      <Container size="wide" className="!px-0">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary-dark via-primary to-secondary px-6 py-16 text-center text-white shadow-lift sm:px-16 sm:py-24">
            <Bubbles count={10} className="opacity-70" />
            <div aria-hidden className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

            <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
              <CalendarHeart className="h-4 w-4" aria-hidden />
              Agenda aberta
            </span>
            <h2
              id="cta-title"
              className="mx-auto max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] !text-white sm:text-6xl"
            >
              Vamos semear alegria no seu próximo evento?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90">
              Conte a data e a quantidade de crianças. Respondemos com um orçamento sob medida pelo WhatsApp.
            </p>
            <LinkButton href={buildWhatsAppLink()} external variant="whatsapp" size="lg" className="mt-9">
              <WhatsAppIcon className="h-6 w-6" />
              Chamar no WhatsApp
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
