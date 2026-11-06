import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { GalleryGrid } from "./GalleryGrid";

export function GallerySection() {
  return (
    <section
      id="galeria"
      aria-labelledby="gallery-title"
      className="bg-gradient-to-b from-surface via-secondary-soft/40 to-surface py-20 sm:py-28"
    >
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="gallery-title"
            eyebrow="Galeria"
            title="Um pouco do que a gente semeia"
            description="Brincadeiras, oficinas e pinturas que transformam qualquer evento em lembrança."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <GalleryGrid items={galleryItems} />
        </Reveal>
      </Container>
    </section>
  );
}
