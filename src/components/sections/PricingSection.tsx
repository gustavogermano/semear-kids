import { Check, Clock, Info, Users } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site.config";
import { pricingNotes, pricingPlans } from "@/data/pricing";
import { buildServiceWhatsAppLink } from "@/services/whatsapp.service";
import { cn } from "@/utils/cn";

export function PricingSection() {
  return (
    <section id="planos" aria-labelledby="pricing-title" className="relative py-20 sm:py-28">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="pricing-title"
            eyebrow="Planos de recreação"
            title="Escolha o plano que cabe na sua festa"
            description="Do plantio à colheita: quanto mais tempo de diversão, mais atividades para as crianças."
          />
        </Reveal>

        <ul className="mt-16 grid items-stretch gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <li key={plan.id}>
              <Reveal delay={index * 0.1} className="h-full">
                <Card
                  interactive
                  className={cn(
                    "relative flex h-full flex-col p-8",
                    plan.featured && "border-primary/40 bg-gradient-to-b from-primary-soft/60 to-white ring-2 ring-primary/30",
                  )}
                >
                  {plan.featured && (
                    <Badge tone="accent" className="absolute -top-4 left-1/2 -translate-x-1/2 shadow-soft">
                      Mais escolhido
                    </Badge>
                  )}

                  <span aria-hidden className="text-4xl">
                    {plan.emoji}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold">{plan.name}</h3>

                  <p className="mt-4 flex items-center gap-2 font-bold text-primary-dark">
                    <Clock className="h-4 w-4" aria-hidden />
                    {plan.duration}
                  </p>
                  <p className="mt-1.5 flex items-center gap-2 font-bold text-ink-soft">
                    <Users className="h-4 w-4" aria-hidden />
                    {plan.audience}
                  </p>

                  {siteConfig.showPrices && plan.price && (
                    <p className="mt-5 font-display text-3xl font-extrabold text-primary-dark">{plan.price}</p>
                  )}

                  <ul className="mt-6 grid flex-1 content-start gap-2.5 border-t border-primary/10 pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 font-semibold text-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <LinkButton
                    href={buildServiceWhatsAppLink(plan.name)}
                    external
                    variant={plan.featured ? "primary" : "ghost"}
                    className="mt-8 w-full"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Solicitar orçamento
                  </LinkButton>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <aside className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-primary/10 bg-white/80 p-7 shadow-soft">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-primary-dark">
              <Info className="h-5 w-5" aria-hidden />
              Observações
            </h3>
            <ul className="mt-3 grid gap-2 text-ink-soft sm:grid-cols-2">
              {pricingNotes.map((note) => (
                <li key={note} className="flex items-start gap-2 font-semibold">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {note}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
