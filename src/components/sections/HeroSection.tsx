import { Sparkles } from "lucide-react";
import { Bubbles } from "@/components/common/Bubbles";
import { Logo } from "@/components/common/Logo";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { heroContent } from "@/data/about";
import { buildWhatsAppLink } from "@/services/whatsapp.service";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-primary-soft/70 via-secondary-soft/40 to-surface pb-20 pt-12 sm:pb-28 sm:pt-20"
    >
      <Bubbles count={14} />
      <div aria-hidden className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden className="absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <Container size="wide" className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <Badge tone="accent" className="mb-6">
              <Sparkles className="h-4 w-4" aria-hidden />
              {heroContent.badge}
            </Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {heroContent.title}{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                {heroContent.highlight}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
              {heroContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={buildWhatsAppLink()} external variant="whatsapp" size="lg">
                <WhatsAppIcon className="h-6 w-6" />
                Pedir orçamento
              </LinkButton>
              <LinkButton href="#servicos" variant="ghost" size="lg">
                Conhecer serviços
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
              {heroContent.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-primary/10 bg-white/70 p-4 backdrop-blur">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-xl font-bold leading-tight text-primary-dark sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 block text-xs font-bold text-ink-soft sm:text-sm">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={36} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-primary/25 to-secondary/25 blur-2xl" />
          <div className="relative animate-float rounded-[3rem] border border-white/80 bg-white/60 p-6 shadow-lift backdrop-blur-md sm:p-10">
            <Logo size={520} priority className="h-auto w-full" />
          </div>
          <span
            aria-hidden
            className="absolute -right-3 -top-3 grid h-20 w-20 rotate-12 place-items-center rounded-full bg-accent text-center font-display text-sm font-extrabold leading-tight text-ink shadow-soft sm:-right-6 sm:-top-5 sm:h-24 sm:w-24"
          >
            Agenda
            <br />
            aberta!
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
