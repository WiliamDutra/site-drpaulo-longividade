# Instituto Longevitare — Landing Page

Landing page de agendamento para o **Instituto Longevitare**, clínica de nutrologia, emagrecimento e longevidade do **Dr. Paulo Mansur** (CRM/ES 6173) em Vitória/ES.

## Stack

- **Astro 5** (SSG) + **React 19** (ilhas, hoje sem uso ativo de componente React — reservado para necessidades futuras)
- **Tailwind CSS 4** via `@tailwindcss/vite`, tokens definidos em `src/styles/app.css` (`@theme`)
- **astro-icon** + `@iconify-json/lucide` para os ícones dos cards de Especialidades (`lucide:*`)
- **motion** (Framer Motion) instalado, sem uso ativo hoje
- Deploy: **Vercel** (ver seção Deploy)

## Comandos

```bash
npm install       # instala dependências
npm run dev        # dev server em http://localhost:4321
npm run build      # build de produção em dist/
npm run preview    # serve o build de produção localmente
```

## Estrutura

```
src/
  pages/index.astro          # monta as 11 seções via BaseLayout
  layouts/BaseLayout.astro   # <head>, importa app.css, renderiza <Footer/>
  components/
    sections/                # uma seção por arquivo, nomes = função (Hero, ProblemSection...)
    ui/                      # componentes reutilizáveis (Button, Container, SectionHeading...)
    icons/                   # SVGs próprios em .astro (ver "Ícones" abaixo)
  data/                      # conteúdo em .ts, consumido pelos componentes (ver "Camada de dados")
  styles/app.css             # tokens de design (@theme) + utilities (.btn-primary, .label-caps)
public/img/                  # fotos e logo reais
documents/                   # brief original e HTML de referência (não editar via app)
```

### Ordem das seções (`src/pages/index.astro`)

1. `Hero` — headline, foto do Dr. Paulo, badges flutuantes, CTA
2. `ProblemSection` — dor/frustração do público + imagens sobrepostas
3. `Specialties` — grid de 6 especialidades (ícones Lucide)
4. `AboutDoctor` — bio + lista de credenciais
5. `Differentiators` — 3 diferenciais, seção escura (única do site)
6. `ProcessSteps` — procedimentos numerados
7. `SocialProof` — grid de depoimentos (dados de exemplo, ver TODOs)
8. `ClinicEnvironment` — foto da clínica + mapa do Google + endereço/horário
9. `SchedulingForm` — formulário de agendamento + contatos de Instagram
10. `FAQSection` — accordion de perguntas frequentes
11. `Footer` (via `BaseLayout`, fora do fluxo de `index.astro`)

Não há header/nav fixo — a logo aparece dentro do próprio `Hero`.

## Camada de dados (`src/data/`)

Todo conteúdo textual fica centralizado em `.ts`, os componentes só recebem/mapeiam — evita strings soltas espalhadas pelos `.astro`.

| Arquivo | Usado em |
|---|---|
| `site.ts` | `doctor`, `clinic`, `social`, `contact`, `whatsapp` + `buildWhatsAppLink()`, `heroBadges`, `seo` — importado por quase toda seção |
| `specialties.ts` | `Specialties.astro` (título, descrição, nome do ícone Lucide) |
| `painPoints.ts` | `ProblemSection.astro` |
| `differentiators.ts` | `Differentiators.astro` |
| `procedures.ts` | `ProcessSteps.astro` |
| `achievements.ts` | `AboutDoctor.astro` |
| `reviews.ts` | `SocialProof.astro` (dados de exemplo — ver TODOs) |
| `faq.ts` | `FAQSection.astro` |

### WhatsApp

Todo CTA usa `buildWhatsAppLink(mensagem?)` de `site.ts`, que monta `https://wa.me/5527988782956?text=...`. O formulário de agendamento (`SchedulingForm.astro`) tem um script inline (`define:vars`) que monta a mensagem com nome/e-mail preenchidos e redireciona pro WhatsApp no submit — **não há backend**, é só client-side.

## Deploy

- **Repositório**: `git@github.com:WiliamDutra/site-drpaulo-longividade.git`, branch `main`.
- **Preview atual**: Vercel, conta `willdutra15-7732` (login já configurado na máquina) — https://dist-amber-theta-58.vercel.app
- Deploy feito manualmente via `npx vercel deploy dist --prod --yes` (precisa rodar `npm run build` antes). **Não há integração automática GitHub → Vercel configurada ainda** — um `git push` sozinho não republica o preview.
- `wrangler.toml` existe no projeto (Cloudflare Pages) mas não é o caminho de deploy usado hoje — ficou de uma etapa anterior, pode ser removido se não for usar Cloudflare.

## TODOs / placeholders pendentes

- `contact.email` em `site.ts` — ainda `'TODO_EMAIL'`, e-mail institucional não foi informado.
- `SocialProof.astro` / `reviews.ts` — depoimentos são **dados de exemplo fictícios** (por decisão explícita, sem sinalização visual de placeholder). Trocar por avaliações reais quando disponíveis.
- Fotos em `ProblemSection.astro` (`/img/1.webp`, `/img/2.webp`) e `ClinicEnvironment.astro` (`/img/longevitare-001.webp` + mapa) — confirmar se são definitivas ou ainda placeholders de composição.
- `package.json` tem fontes não usadas hoje (`@fontsource/inter`, `jetbrains-mono`, `libre-caslon-text`, `plus-jakarta-sans`) — sobra de iterações anteriores do design, seguras para remover se quiser enxugar o bundle.

## Convenções ao editar

- Nunca hardcode texto de conteúdo dentro de um `.astro` de seção — adicione/edite em `src/data/*.ts`.
- Cores, fontes e espaçamento vêm de tokens em `src/styles/app.css` (`@theme`) — evite hex soltos no meio dos componentes; se precisar de uma cor pontual sem token, prefira `#hex` explícito e comente o porquê.
- Botão de CTA: use o componente `Button.astro` (`variant="primary"` navy/gradiente, `variant="whatsapp"` verde) — não recrie o pill manualmente, exceto no `<button type="submit">` do formulário (não pode ser um `<a>`) e no `FloatingCTA.astro`, que usam a classe utilitária `.btn-primary` diretamente pelo mesmo motivo.
- Ver `DESIGN.md` para o sistema visual completo (cores, tipografia, espaçamento, componentes).
