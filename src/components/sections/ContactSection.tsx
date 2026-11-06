import { Clock, Instagram, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site.config";
import { buildWhatsAppLink } from "@/services/whatsapp.service";
import { ContactForm } from "./ContactForm";

const itemClass = "flex items-start gap-4 rounded-3xl p-3 transition hover:bg-primary-soft/50";
const iconClass = "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary-dark";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="contato" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contato"
            title="Peça seu orçamento"
            description="Preencha o formulário e a mensagem segue pronta para o nosso WhatsApp."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="h-full">
            <Card className="h-full p-7 sm:p-10">
              <ContactForm />
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col gap-6">
              <Card className="p-5 sm:p-7">
                <ul className="grid gap-1">
                  <li>
                    <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className={itemClass}>
                      <span className={iconClass}>
                        <WhatsAppIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-ink-soft">WhatsApp</span>
                        <span className="block font-display text-lg font-bold">{contact.phoneDisplay}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${contact.email}`} className={itemClass}>
                      <span className={iconClass}>
                        <Mail className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-ink-soft">E-mail</span>
                        <span className="block break-all font-display text-lg font-bold">{contact.email}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.instagram.com/${contact.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={itemClass}
                    >
                      <span className={iconClass}>
                        <Instagram className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-ink-soft">Instagram</span>
                        <span className="block font-display text-lg font-bold">@{contact.instagram}</span>
                      </span>
                    </a>
                  </li>
                  <li className={itemClass}>
                    <span className={iconClass}>
                      <Clock className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink-soft">Atendimento</span>
                      <span className="block font-semibold leading-snug">{contact.hours}</span>
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="relative min-h-64 flex-1 overflow-hidden">
                <iframe
                  title={`Mapa de ${contact.address.label}`}
                  src={contact.googleMapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
                <a
                  href={contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-primary-dark shadow-soft transition hover:scale-105"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  {contact.address.label}
                </a>
              </Card>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
