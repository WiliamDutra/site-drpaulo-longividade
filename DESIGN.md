# Design System — Instituto Longevitare

Sistema visual em uso hoje na landing page. Fonte de verdade real é `src/styles/app.css` — este arquivo documenta e explica as decisões por trás dela.

## Direção visual

Clínica premium, técnica e confiável — sem apelo "wellness"/coach motivacional. Fundo predominantemente claro, um único bloco escuro de contraste (seção Diferenciais), formas arredondadas em todo o site (cards, botões, inputs), sombras suaves em vez de bordas duras.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `--color-navy-900` | `#081a2e` | tom mais escuro do gradiente da seção Diferenciais |
| `--color-navy-800` | `#0a1f36` | fundo do Footer |
| `--color-navy-700` | `#0d2b47` | cor principal de headline/texto escuro, base do gradiente dos botões |
| `--color-navy-600` | `#123453` | topo do gradiente da seção Diferenciais |
| `--color-navy-500` | `#1e4260` | tom intermediário, pouco usado diretamente |
| `--color-blue` | `#1b6099` | accent primário — eyebrows, links, ícones, texto em destaque |
| `--color-blue-light` | `#2f8fc7` | bullets, variações de hover |
| `--color-blue-lighter` | `#4fa3cf` | accent em fundo escuro (eyebrow/tagline da seção Diferenciais) |
| `--color-blue-pale` | `#3f88bb` | hover de borda em cards |
| `--color-whatsapp` / `-dim` | `#199e5b` / `#158a4f` | **exclusivo** do botão de WhatsApp — não usar em mais nada |
| `--color-ink` | `#22303c` | texto de corpo padrão (`body`) |
| `--color-slate` | `#4b5763` | texto secundário/parágrafos |
| `--color-slate-light` | `#8b97a1` | texto terciário/datas/legendas |
| `--color-border` / `-soft` | `#dde4e9` / `#e2e7ea` | bordas de card e divisores |
| `--color-bg` | `#f2f4f5` | fundo padrão de seção |
| `--color-bg-alt` | `#fbfcfc` | fundo quase-branco (alterna com `--color-bg` pra dar ritmo entre seções) |
| `--color-bg-soft` | `#eef1f3` | fundo de card/box neutro (ex: `MedicalDisclaimer`) |

**Regra de ouro:** o verde do WhatsApp é a única cor fora da paleta navy/azul, e só aparece no CTA de WhatsApp (`Button variant="whatsapp"`). Nunca usar em outro contexto.

## Tipografia

Duas famílias, ambas via `@fontsource` (self-hosted):

- **Outfit** (`--font-display`) — todos os headlines. Aplicada automaticamente a `h1`/`h2`/`h3` via `@layer base` (peso 300 por padrão, `letter-spacing: -0.02em`). Pesos carregados: 300/400/500/600.
- **DM Sans** (`--font-sans`) — corpo de texto, é a fonte padrão do `<body>`. Pesos carregados: 400/500/700.

Convenções observadas no código:
- Título de seção padrão: `font-display font-light text-[30px] leading-[1.12] md:text-[50px]` (é exatamente o que `SectionHeading.astro` usa — ao criar um heading manual em vez do componente, replicar esse mesmo tamanho para manter consistência).
- Ênfase dentro de um título: `<strong class="font-600 text-blue">` (peso 600, cor accent) inline no meio do texto.
- Eyebrow/rótulo em caixa alta: classe utilitária `.label-caps` (12px, `letter-spacing: 0.18em`, uppercase, DM Sans) — sempre precedido por um traço `<span class="w-7 h-px bg-blue">`.
- Título de card: `text-xl font-700`, herda Outfit do `h3` (não forçar `font-sans` nele — ver nota abaixo).

> **Cuidado:** já existiu uma inconsistência real onde um `h3` de card forçava `font-sans` (DM Sans) enquanto os outros usavam Outfit por herança. Corrigido — não reintroduzir. Títulos de card devem sempre herdar Outfit do `h3`, sem override de fonte.

## Formas

Cantos **arredondados** em todo o site (diferente da direção antiga "cantos retos" — abandonada quando o site foi reconstruído sobre a referência com paleta navy/azul):

- Cards: `rounded-2xl` (16px)
- Botões e badges/pills: `rounded-full`
- Inputs de formulário: `rounded-xl`
- Avatares/selos circulares: `rounded-full` (única forma "orgânica" desde a v1, hoje é só a convenção padrão de qualquer círculo)

## Componentes-chave

- **`Button.astro`** — dois variants: `primary` (gradiente navy `#0a2540→#175a8a`, pill, ícone circular branco com seta à direita, sombra em anel) e `whatsapp` (verde sólido). Prop `dark` ajusta o gradiente/sombra pra uso sobre fundo escuro (seção Diferenciais).
- **`.btn-primary` / `.btn-primary-icon`** (utilities em `app.css`) — é a implementação crua por trás do `Button` variant primary; usada diretamente só onde um `<a>` não serve (`<button type="submit">` do formulário, `FloatingCTA.astro`).
- **`SectionHeading.astro`** — eyebrow (traço + `.label-caps` + cor accent) + `h2` no tamanho padrão. Prop `dark` inverte pra uso em fundo escuro. Prop `align="center"` centraliza.
- **`FloatingBadge.astro`** — pill translúcido (`bg-white/85 backdrop-blur-md`) com ícone de verificação + texto curto, usado sobre a foto do Hero. Vira posição estática empilhada no mobile (`static md:absolute`).
- **`FloatingCTA.astro`** — CTA fixo que aparece ao rolar a página (depois de 300px, some perto do footer). No mobile vira um círculo compacto de 48px só com o ícone; no desktop é o pill completo com texto. Import: `astro-icon` não é usado aqui, ícone é `arrow-up-right-icon.astro` próprio.
- **`ReviewCard.astro`** / **`StarRating.astro`** — avatar com inicial (cor de fundo variável por review), estrelas (variant `amber` pra rating real, `navy`/`dark` pra decorativo perto de CTAs).
- **`SectionChevron.astro`** — pequeno "entalhe" decorativo com seta pra baixo no topo de algumas seções, cor de fundo deve bater com a seção onde é colocado (prop `class` recebe a cor).

## Ícones

Dois sistemas coexistindo, por escolha deliberada:

1. **SVGs próprios** em `src/components/icons/*.astro` — usados pra tudo que não é "especialidade médica" (setas, check, telefone, pin, relógio, Instagram, WhatsApp etc). Padrão: `viewBox="0 0 24 24"`, `stroke="currentColor"`, `stroke-width` entre 1.5–2, prop `class` com default tipo `w-4 h-4`.
2. **astro-icon + Lucide** (`<Icon name="lucide:stethoscope" />`) — usado **só** nos 6 cards de Especialidades, por pedido explícito de usar ícones Lucide ali. Não expandir esse padrão pro resto do site sem necessidade — mantém o bundle de ícones enxuto.

## Espaçamento

- `--spacing-section-gap`: 96px desktop / 56px mobile — padding vertical padrão de seção (`py-24 md:py-section-gap` é o padrão observado, ainda que alguns arquivos usem valores próximos manualmente).
- `--spacing-container-max`: 1320px — largura máxima do `Container.astro`.
- Grid de conteúdo: a maioria das seções usa duas colunas (`md:grid-cols-2` ou proporção assimétrica tipo `md:grid-cols-[0.85fr_1.15fr]`) com `gap-10` a `gap-16`.

## O que evitar

- Não reintroduzir dourado (`gold`) ou tons escuros tipo "obsidian navy" (`#0a0e14` etc.) — é a paleta da v1, totalmente substituída.
- Não usar cantos retos (`rounded-none` / ausência de radius) — é a regra antiga, já abandonada.
- Não usar o verde do WhatsApp fora do botão de WhatsApp.
- Não forçar DM Sans em headlines (`h1`/`h2`/`h3`) nem Outfit em corpo de texto — a herança automática do `@layer base` já resolve isso.
