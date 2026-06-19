# Fábrica da Esquadria — site institucional

Site oficial em `fabricadaesquadria.com.br`.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind · Vercel.

## Posicionamento

> Vidro Jumbo, porta articulada e serralheria fina.
> Em Jundiaí, há 16 anos.

Cliente final pessoa física alto padrão. Raio de atendimento: **Jundiaí, Cabreúva, Itupeva, Louveira, Vinhedo, Valinhos**.

Canal de conversão único: **WhatsApp (11) 94294-0800** — todos os CTAs enviam direto via `wa.me`. Sem email, sem call center.

## Rodar local

```bash
npm install
cp .env.example .env.local   # opcional: override de Pixel/GA4
npm run dev                  # abre em http://localhost:3000
```

## Deploy

Push para `main` → Vercel publica automaticamente.

Configuração na Vercel:
- Framework Preset: **Next.js** (autodetecta)
- Domínio: `fabricadaesquadria.com.br`
- Variáveis de ambiente: opcional, IDs já estão como fallback no código

## Estrutura

```
app/
├── page.tsx                          → Home
├── layout.tsx                        → Root layout (Inter + metadata + Schema.org + GA4 + Pixel)
├── globals.css                       → Tailwind + tokens da marca
├── robots.ts                         → Dinâmico, com user-agents de IA (GEO 2026)
├── sitemap.ts                        → 19 URLs priorizadas
├── not-found.tsx                     → Página 404 customizada
├── coberturas/
│   ├── page.tsx
│   ├── coberturas-pergolados/
│   └── domus-claraboias/
├── guarda-corpo/
├── projetos-de-esquadrias/
├── projetos-especiais/
├── consultoria/
├── portfolio/
│   ├── page.tsx
│   └── bmw-jundiai/                  → case técnico em depth
├── orcamento/
├── acessorios/
├── jundiai/                          → cidades (SEO local)
├── cabreuva/
├── itupeva/
├── louveira/
├── vinhedo/
├── valinhos/
├── sobre/                            → redirect 301 → home
├── politica-de-privacidade/
└── termos/

components/                           → Header, Footer, HeroHome, CaseBMW, Galeria,
                                        Categorias, Cidades, Diferenciais, PaginaCidade,
                                        TeaserConsultoria, FormOrcamento, WhatsAppFloat
lib/                                  → cidades, galerias, whatsapp
public/                               → estáticos
├── favicon.svg
└── images/                           → fotos curadas por categoria
```

## Integrações

- **Google Analytics 4** — `G-9C5LJGF31J`
- **Meta Pixel** — `322125736825942` (Conversions API ativa)
- **Schema.org** — LocalBusiness com endereço completo, GPS e areaServed das 6 cidades
- **Instagram** — `@fabricadaesquadria`
- **Facebook** — `/fabricadaesquadria`

## Documentação

Decisões cravadas e referências de produto em `Projetos/Site Fabrica/` na vault Obsidian.
