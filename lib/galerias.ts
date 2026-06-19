// Galerias de fotos por categoria. Seleção temporária (8 por categoria) das 291 fotos
// organizadas pelo Esquadro. Curadoria fina (escolher as melhores) vem depois.
// Nomes reais conferidos em 01/06/2026.

// 9 fotos = 1 destaque 2x2 (4 slots) + 8 small (8 slots) = 12 slots, fecha
// redondo no grid de 4 colunas do desktop sem buraco.
export const PORTFOLIO_HOME: { src: string; alt: string }[] = [
  { src: '/images/galeria-home/01.jpg', alt: 'Casa de campo com sala-jardim integrada por Vidro Jumbo' },
  { src: '/images/galeria-home/02.jpg', alt: 'Fachada residencial moderna em alto padrão' },
  { src: '/images/galeria-home/03.jpg', alt: 'Showroom premium com fachada de vidro' },
  { src: '/images/galeria-home/04.jpg', alt: 'Área coberta com vidro integrando cozinha gourmet' },
  { src: '/images/portfolio/bmw-jundiai/bmw-aerea-crepusculo.jpg', alt: 'BMW Jundiaí — vista aérea ao crepúsculo' },
  { src: '/images/galeria-home/05.jpg', alt: 'Cobertura curva em vidro com pendente de design' },
  { src: '/images/galeria-home/06.jpg', alt: 'Sala com persiana ripada e Vidro Jumbo' },
  { src: '/images/galeria-home/07.jpg', alt: 'Entrada de showroom em Vidro Jumbo' },
  { src: '/images/galeria-home/08.jpg', alt: 'Showroom interior com fachada de vidro' },
];

function range(pasta: string, prefixos: string[]): string[] {
  return prefixos.map((p) => `/images/${pasta}/${p}`);
}

export const GALERIAS: Record<string, string[]> = {
  // Variedade real: mistura residencial alto padrão (portfolio/), showroom (grandes-vaos/)
  // e instalação Vidro Jumbo (vidro-jumbo/) — sem repetir a mesma obra em ângulos diferentes.
  'projetos-de-esquadrias': [
    '/images/portfolio/01-fachada-moderna-por-do-sol.jpg',
    '/images/grandes-vaos/02-20231114_165712.jpg',
    '/images/portfolio/04-cozinha-gourmet-porta-correr.jpg',
    '/images/grandes-vaos/06-20240528_125719.jpg',
    '/images/portfolio/05-varanda-portas-vidro.jpg',
    '/images/grandes-vaos/14-20241021_145606.jpg',
    '/images/grandes-vaos/26-IMG-20211019-WA0042.jpg',
    '/images/portfolio/07-fachada-angulada-ceu-azul.jpg',
  ],
  // 10 fotos de Coberturas + 2 fotos de Domus = 12 (16/06).
  // Mix residencial completo: casa de campo, sobrado moderno, piscina coberta,
  // cobertura curva, drone, entrada premium, e Domus aplicado em telhado.
  coberturas: range('coberturas-curadas', [
    '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg',
    '07.jpg', '08.jpg', '09.jpg', '10.jpg',
    'domus-galeria-01.jpg', 'domus-galeria-02.jpg',
  ]),
  // 8 PROJETOS diferentes de guarda-corpo (cada timestamp = um dia/obra diferente).
  // Hero usa 037-20241017 (escada pé-direito duplo) — não repetir aqui.
  // 3 fotos curadas (053, 088b, 028) substituíram as reprovadas pelo Thiago (16/06).
  'guarda-corpo': range('guarda-corpo', [
    '053-20250821_091432.jpg',     // ago 2025 — escada interna terminada
    '088b-fachada-moderna.jpg',    // set 2025 — fachada moderna casa cinza
    '024-20240516_115448.jpg',     // mai 2024 — casa branca com sacada
    '026-20240603_142557.jpg',     // jun 2024 — sacada acima garagem
    '030-20240716_121520.jpg',     // jul 2024 — escada com mármore
    '028-20240613_171540.jpg',     // jun 2024 — escada mármore + pendente
    '044-20250321_162454.jpg',     // mar 2025 — escada com corrimão
    '049-20250415_114713.jpg',     // abr 2025 — fachada moderna
  ]),
  // Pra Projetos Especiais (Vidro Jumbo + Vãos Grandes + Fluttua + Brises + Domus):
  // mistura içamento/instalação Vidro Jumbo (vidro-jumbo/) com grandes vãos entregues
  // (grandes-vaos/) — diferentes obras pra mostrar repertório.
  'projetos-especiais': [
    '/images/vidro-jumbo/03-20220510_104742.jpg',
    '/images/grandes-vaos/07-20240613_170824.jpg',
    '/images/vidro-jumbo/17-20231212_134115.jpg',
    '/images/grandes-vaos/26-IMG-20211019-WA0042.jpg',
    '/images/vidro-jumbo/25-20250624_135102.jpg',
    '/images/grandes-vaos/14-20241021_145606.jpg',
    '/images/vidro-jumbo/35-20250926_065018.jpg',
    '/images/vidro-jumbo/55-IMG-20250624-WA0051.jpg',
  ],
};

export function getGaleria(slug: string): string[] {
  return GALERIAS[slug] || [];
}
