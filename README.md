# Semear Kids — Site institucional

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons.
Base padrão Aster Web Studio, exportada como site estático para o GitHub Pages.

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera a pasta /out (export estático)
```

## Publicando no GitHub Pages

1. Crie o repositório (sugestão: `semear-kids`) e envie o código para a branch `main`.
2. Em **Settings → Pages**, escolha **Source: GitHub Actions**.
3. A cada push na `main`, o workflow `.github/workflows/deploy.yml` instala, faz o build e publica.

O nome do repositório é lido automaticamente (`GITHUB_REPOSITORY`) no `next.config.mjs` para definir
`basePath` e `assetPrefix`. A URL pública (canonical, sitemap, Open Graph) é definida no workflow por
`NEXT_PUBLIC_SITE_URL`. Para domínio próprio, defina essa variável com o domínio e use o repositório
`usuario.github.io` ou remova o `basePath`.

## Como criar um novo cliente

Altere apenas:

| O quê | Onde |
| --- | --- |
| Dados da empresa, contatos, WhatsApp, SEO | `src/config/site.config.ts` |
| Cores | `src/config/theme.config.ts` |
| Fontes | `src/lib/fonts.ts` + `src/assets/fonts` |
| Serviços, planos, galeria, depoimentos, FAQ, textos | `src/data/*` |
| Imagens | `public/images` |

## Observações

- Os valores dos planos não são exibidos (`showPrices: false` em `site.config.ts`); o foco é o orçamento via WhatsApp.
- O depoimento em `src/data/testimonials.ts` é ilustrativo. Troque por um real quando houver.
- Defina o endereço completo e os horários em `site.config.ts` quando o cliente informar.
