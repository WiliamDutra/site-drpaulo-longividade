# Instituto Longevitare — Landing Page

Landing page de agendamento para o **Instituto Longevitare**, clínica de nutrologia/saúde metabólica, emagrecimento e longevidade do **Dr. Paulo Mansur** (CRM/ES 6173), em Vitória/ES.

🔗 **Demo ao vivo:** https://dist-amber-theta-58.vercel.app

---

## Sobre o projeto

Página única (one-page) de captação de leads via WhatsApp, construída do zero a partir de um briefing (público-alvo, oferta, objeções, tom de voz) e de referências visuais fornecidas pelo cliente. O foco é conversão: hero com gancho de dor, prova social recorrente, especialidades, autoridade do médico, processo de atendimento, depoimentos reais, localização da clínica e FAQ — tudo levando ao mesmo CTA de agendamento por WhatsApp.

Todo o conteúdo textual e as imagens ficam centralizados em uma camada de dados (`src/data/*.ts`), separados dos componentes visuais — o que permite reaproveitar toda a estrutura/design para outro cliente/nicho apenas trocando o conteúdo (ver seção "Reaproveitamento" abaixo).

## Stack

| Tecnologia | Uso |
|---|---|
| **[Astro 5](https://astro.build)** | Framework principal — SSG (site 100% estático) |
| **[React 19](https://react.dev)** | Ilha interativa isolada (galeria de fotos com hover-expand + lightbox) |
| **[Tailwind CSS 4](https://tailwindcss.com)** | Estilização, via plugin nativo `@tailwindcss/vite` |
| **[motion](https://motion.dev)** (Framer Motion) | Animações da galeria interativa |
| **[astro-icon](https://www.astroicon.dev/)** + `@iconify-json/lucide` | Ícones dos cards de especialidades |
| **[Fontsource](https://fontsource.org)** (Outfit + DM Sans) | Tipografia self-hosted, sem dependência de CDN externo |
| **[Vercel](https://vercel.com)** | Deploy/hospedagem |

## Arquitetura

```
src/
  pages/index.astro          # monta as 11 seções da página
  layouts/BaseLayout.astro   # <head>, estilos globais, footer
  components/
    sections/                # uma seção por arquivo (Hero, Specialties, FAQSection...)
    ui/                      # componentes reutilizáveis (Button, Container, SectionHeading...)
    icons/                   # ícones SVG próprios
  data/                      # todo o conteúdo textual em .ts — nada de texto hardcoded nos .astro
  styles/app.css             # design tokens (cores, tipografia, espaçamento) via @theme do Tailwind 4
public/img/                  # fotos e assets reais
```

### As 11 seções

`Hero` → `ProblemSection` (com galeria interativa) → `Specialties` → `AboutDoctor` → `Differentiators` → `ProcessSteps` → `SocialProof` (depoimentos reais) → `ClinicEnvironment` (mapa + endereço) → `SchedulingForm` (CTA WhatsApp) → `FAQSection` → `Footer`.

## Destaques técnicos

- **Camada de dados desacoplada** — todo copy/conteúdo vive em `src/data/*.ts`; os componentes `.astro` só recebem e renderizam. Isso tornou possível reestruturar seções inteiras (ex.: inverter o conteúdo do Hero com o da seção de dor) sem tocar em nenhum componente visual.
- **Galeria interativa (`ExpandableGallery.tsx`)** — único componente React do projeto: hover-expand no desktop, carrossel com scroll-snap no mobile, lightbox em tela cheia com navegação por teclado/toque. Hidratada via `client:visible` (Astro islands) para não pesar no carregamento inicial.
- **CTA de WhatsApp centralizado** — `buildWhatsAppLink()` em `src/data/site.ts` monta a URL `wa.me` com mensagem pré-preenchida; usado por todos os botões de CTA da página, sem duplicação.
- **Design tokens via Tailwind 4 `@theme`** — paleta, tipografia e espaçamento inteiramente definidos em `src/styles/app.css`, documentados em `DESIGN.md`. Zero hex solto espalhado pelos componentes.
- **Reaproveitável por design** — a separação conteúdo/estrutura permite portar todo o layout para um cliente novo (mesmo em outro repositório, como uma seção isolada dentro de um site já existente) trocando só a camada de dados. Metodologia documentada em `PORTING.md`.

## Rodando localmente

```bash
npm install       # instala dependências
npm run dev        # dev server em http://localhost:4321
npm run build      # build de produção em dist/
npm run preview    # serve o build de produção localmente
```

## Deploy

Build estático (`npm run build`) publicado manualmente no Vercel via CLI (`npx vercel deploy dist --prod --yes`). Sem backend — o "envio" do formulário de agendamento é 100% client-side, redirecionando para o WhatsApp com a mensagem já preenchida.

## Documentação complementar

- [`CLAUDE.md`](./CLAUDE.md) — convenções de código e estrutura do projeto.
- [`DESIGN.md`](./DESIGN.md) — sistema visual completo (cores, tipografia, componentes, espaçamento).
