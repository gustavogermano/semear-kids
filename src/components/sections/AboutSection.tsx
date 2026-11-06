import { Heart, ShieldCheck, Palette, type LucideIcon } from "lucide-react";
import { AppImage } from "@/components/common/AppImage";
import { GrowingVine } from "@/components/common/GrowingVine";
import { Reveal } from "@/components/common/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { aboutContent, eventTypes } from "@/data/about";

const valueIcons: LucideIcon[] = [Palette, Heart, ShieldCheck];

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="relative py-20 sm:py-28">
      <Container className="mb-10">
        <GrowingVine />
      </Container>

      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] border border-primary/10 shadow-lift">
            <AppImage
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              width={1199}
              height={1312}
              sizes="(min-width: 1024px) 448px, 90vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Badge className="mb-4">{aboutContent.eyebrow}</Badge>
            <h2
              id="about-title"
              className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
            >
              {aboutContent.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutContent.values.map((value, index) => {
                const Icon = valueIcons[index % valueIcons.length];
                return (
                  <li key={value.title} className="rounded-3xl bg-white p-5 shadow-soft">
                    <span className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary-dark">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-lg font-bold">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{value.text}</p>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-10 text-sm font-bold uppercase tracking-widest text-ink-soft">Atendemos</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {eventTypes.map((eventType) => (
                <li
                  key={eventType}
                  className="rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-bold text-primary-dark"
                >
                  {eventType}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
