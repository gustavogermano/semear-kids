import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" aria-labelledby="testimonials-title" className="py-20 sm:py-28">
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            id="testimonials-title"
            eyebrow="Depoimentos"
            title="Famílias que confiam na Semear Kids"
          />
        </Reveal>

        <ul className="mt-14 grid gap-8">
          {testimonials.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 0.1}>
                <figure className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-white p-8 shadow-lift sm:p-12">
                  <Quote
                    aria-hidden
                    className="absolute right-6 top-6 h-20 w-20 text-primary-soft"
                    strokeWidth={1.5}
                  />
                  <div className="flex gap-1 text-accent" role="img" aria-label="Avaliação 5 de 5 estrelas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="relative mt-5 text-pretty font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      aria-hidden
                      className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-lg font-bold text-white"
                    >
                      {item.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold">{item.name}</span>
                      <span className="block text-sm font-semibold text-ink-soft">{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
