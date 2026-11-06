"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { AppImage } from "@/components/common/AppImage";
import { Modal } from "@/components/ui/Modal";
import type { GalleryItem } from "@/types";

interface GalleryGridProps {
  items: GalleryItem[];
}

/** Grade em colunas (masonry) com visualização ampliada em modal. */
export function GalleryGrid({ items }: GalleryGridProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
        {items.map((item) => (
          <li key={item.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(item)}
              aria-label={`Ampliar imagem: ${item.alt}`}
              className="group relative block w-full overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <AppImage
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden
                className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-primary-dark opacity-0 shadow-soft transition group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <ZoomIn className="h-5 w-5" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Modal open={active !== null} onClose={() => setActive(null)} label="Imagem ampliada da galeria">
        {active && (
          <AppImage
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            sizes="(min-width: 768px) 768px, 95vw"
            className="h-auto max-h-[85vh] w-auto max-w-full rounded-[1.6rem] object-contain"
          />
        )}
      </Modal>
    </>
  );
}
