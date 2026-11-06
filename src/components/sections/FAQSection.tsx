import { Reveal } from "@/components/common/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  const entries = faqItems.map(({ id, question, answer }) => ({ id, title: question, content: answer }));

  return (
    <section id="duvidas" aria-labelledby="faq-title" className="bg-surface-alt/50 py-20 sm:py-28">
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            id="faq-title"
            eyebrow="Dúvidas frequentes"
            title="Tudo o que você precisa saber"
            description="Ainda ficou com alguma dúvida? Chame a gente no WhatsApp."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Accordion items={entries} defaultOpenId={entries[0]?.id} />
        </Reveal>
      </Container>
    </section>
  );
}
