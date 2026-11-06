import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center py-20">
      <Container size="narrow" className="text-center">
        <Logo size={180} className="mx-auto h-auto w-44" />
        <h1 className="mt-6 text-5xl font-extrabold">Ops! Página não encontrada</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Parece que essa semente ainda não germinou. Vamos voltar ao início?
        </p>
        <LinkButton href="./" className="mt-8">
          Voltar ao início
        </LinkButton>
      </Container>
    </main>
  );
}
