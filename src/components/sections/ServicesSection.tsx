import { Check } from "lucide-react";
import { AppImage } from "@/components/common/AppImage";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { buildServiceWhatsAppLink } from "@/services/whatsapp.service";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="relative bg-gradient-to-b from-surface via-surface-alt/70 to-surface py-20 sm:py-28"
    >
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Nossos serviços"
            title="Diversão, arte e imaginação para o seu evento"
            description="Escolha um serviço ou combine todos. Montamos o pacote ideal para a sua festa."
          />
        </Reveal>

        <ul className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={index * 0.1} className="h-full">
                <Card interactive className="flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[5/6] overflow-hidden bg-primary-soft">
                    <AppImage
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    {service.badge && (
                      <Badge tone="accent" className="absolute left-4 top-4 shadow-soft">
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{service.description}</p>

                    <ul className="mb-8 mt-5 grid flex-1 content-start gap-2 sm:grid-cols-2">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm font-bold text-ink">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <LinkButton
                      href={buildServiceWhatsAppLink(service.title)}
                      external
                      variant="primary"
                      className="w-full"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Orçar {service.title.toLowerCase()}
                    </LinkButton>
                  </div>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
