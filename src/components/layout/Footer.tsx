import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import { buildWhatsAppLink } from "@/services/whatsapp.service";

const linkClass = "inline-flex items-center gap-2 transition hover:text-primary";

export function Footer() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-surface-alt/60 pb-28 pt-16 sm:pb-16">
      <Container size="wide" className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={72} className="h-[4.5rem] w-[4.5rem] object-contain" />
            <div>
              <p className="font-display text-2xl font-bold leading-none text-primary-dark">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-soft">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">{siteConfig.shortDescription}</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-display text-lg font-bold">Navegação</h2>
          <ul className="mt-4 grid gap-2.5 font-semibold text-ink-soft">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold">Fale com a gente</h2>
          <ul className="mt-4 grid gap-2.5 font-semibold text-ink-soft">
            <li>
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <WhatsAppIcon className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://www.instagram.com/${contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <Instagram className="h-4 w-4" aria-hidden />@{contact.instagram}
              </a>
            </li>
            {contact.facebook && (
              <li>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <Facebook className="h-4 w-4" aria-hidden />
                  Facebook
                </a>
              </li>
            )}
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden />
              {contact.address.label}
            </li>
          </ul>
        </div>
      </Container>

      <Container size="wide" className="mt-12 border-t border-primary/10 pt-6 text-sm font-semibold text-ink-soft">
        © {year} {siteConfig.name}. Todos os direitos reservados.
      </Container>
    </footer>
  );
}
