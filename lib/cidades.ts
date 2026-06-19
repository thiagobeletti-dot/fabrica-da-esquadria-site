export type Cidade = {
  slug: string;
  nome: string;
  hero: string;
  texto: string;
};

export const CIDADES: Cidade[] = [
  {
    slug: 'jundiai',
    nome: 'Jundiaí',
    hero: 'Esquadrias premium em Jundiaí',
    texto:
      'A Fábrica da Esquadria fica em Jundiaí, no bairro Caxambu (Rua da Árvore). Atendemos a cidade desde 2010 — conhecemos seus mercados: alto padrão na Anhanguera, condomínios horizontais nos bairros novos, comércio premium no centro. Mesmo padrão técnico, do projeto à instalação.',
  },
  {
    slug: 'cabreuva',
    nome: 'Cabreúva',
    hero: 'Esquadrias premium em Cabreúva',
    texto:
      'Cabreúva tem perfil de obra alto padrão — casas de campo, condomínios fechados, terrenos amplos. Tipo de projeto onde Vidro Jumbo e porta articulada brilham. Conhecemos a região e fazemos visita técnica em até 48h.',
  },
  {
    slug: 'itupeva',
    nome: 'Itupeva',
    hero: 'Esquadrias premium em Itupeva',
    texto:
      'Itupeva combina condomínios serranos com obras de cidade. Atendemos os dois perfis com a mesma profundidade técnica, do projeto à instalação.',
  },
  {
    slug: 'louveira',
    nome: 'Louveira',
    hero: 'Esquadrias premium em Louveira',
    texto:
      'Louveira tem ritmo próprio — obra de quem mora ali ou veraneia. Cronograma flexível, mas execução sem atraso. Faz parte do nosso raio direto desde 2010.',
  },
  {
    slug: 'vinhedo',
    nome: 'Vinhedo',
    hero: 'Esquadrias premium em Vinhedo',
    texto:
      'Vinhedo é mercado de obra alto padrão — condomínios fechados, casas de campo bem arquitetadas, perfil de cliente que valoriza projeto técnico antes do preço. Atendemos com a mesma agenda enxuta de Jundiaí.',
  },
  {
    slug: 'valinhos',
    nome: 'Valinhos',
    hero: 'Esquadrias premium em Valinhos',
    texto:
      'Valinhos tem proximidade de Campinas e tradição de bairros residenciais consolidados. Atendemos obras novas e reformas premium — com a mesma fábrica e a mesma equipe de instalação.',
  },
];

export function getCidade(slug: string): Cidade | undefined {
  return CIDADES.find((c) => c.slug === slug);
}
