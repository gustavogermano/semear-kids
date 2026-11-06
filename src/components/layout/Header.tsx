"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { navigation } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { buildWhatsAppLink } from "@/services/whatsapp.service";

export function Header() {
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-surface/80 backdrop-blur-xl">
      <Container size="wide" className="flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} — início`}>
          <Logo size={52} priority className="h-12 w-12 object-contain" />
          <span className="font-display text-xl font-bold leading-none text-primary-dark">
            {siteConfig.name}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[0.95rem] font-bold text-ink-soft transition hover:bg-primary-soft hover:text-primary-dark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LinkButton
            href={buildWhatsAppLink()}
            external
            variant="whatsapp"
            className="hidden !px-5 !py-2.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Orçamento
          </LinkButton>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary-dark transition hover:bg-primary hover:text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegação mobile"
            className="absolute inset-x-0 top-full border-b border-primary/10 bg-surface/95 shadow-lift backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="py-5">
              <ul className="grid gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 font-display text-lg font-semibold text-ink transition hover:bg-primary-soft"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <LinkButton
                href={buildWhatsAppLink()}
                external
                variant="whatsapp"
                className="mt-4 w-full"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </LinkButton>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
