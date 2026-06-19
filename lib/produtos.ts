// CATEGORIAS — 4 botões-filtro de entrada na home (decisão de 27/05/2026)
// Cada categoria leva pra uma página dedicada com galeria + info técnica + CTA WhatsApp

export type Categoria = {
  slug: string;
  nome: string;
  cardCurto: string;
  imagem: string;
};

export const CATEGORIAS: Categoria[] = [
  {
    slug: 'projetos-de-esquadrias',
    nome: 'Projetos de Esquadrias',
    cardCurto: 'Janelas, portas e fachadas sob medida. Linhas Gold e Suprema.',
    imagem: '/images/cards/card-projetos.jpg',
  },
  {
    slug: 'coberturas',
    nome: 'Coberturas',
    cardCurto: 'Áreas externas integradas com vidro de grande formato.',
    imagem: '/images/cards/card-coberturas.jpg',
  },
  {
    slug: 'guarda-corpo',
    nome: 'Guarda-corpo',
    cardCurto: 'Vidro temperado, fixação invisível, acabamento fino.',
    imagem: '/images/cards/card-guarda-corpo.jpg',
  },
  {
    slug: 'projetos-especiais',
    nome: 'Projetos Especiais',
    cardCurto: 'Vidro Jumbo, vãos grandes, Porta Fluttua, brises, domus — quando o projeto pede mais que o catálogo.',
    imagem: '/images/cards/card-portas-especiais.jpg',
  },
];

export function getCategoria(slug: string): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}

// LEGADO — Produtos da estrutura antiga (Vidro Jumbo, Porta Articulada, Serralheria Fina).
// Mantidos pra páginas antigas continuarem funcionando enquanto não decidimos se aproveitamos
// o copy pras categorias novas. Não aparecem mais no menu nem na home.

export type Produto = {
  slug: string;
  nome: string;
  sub: string;
  cardCurto: string;
  descricao: string[];
  vantagens: string[];
  aplicacoes: string;
};

export const PRODUTOS: Produto[] = [
  {
    slug: 'vidro-jumbo',
    nome: 'Vidro Jumbo',
    sub: 'Vidros de grande formato pra projetos que pedem amplitude.',
    cardCurto:
      'Vidros de grande formato, instalados onde quase ninguém arrisca. Coberturas, fachadas e ambientes integrados ganham amplitude, luz natural e desenho limpo. Especialidade da casa há mais de uma década.',
    descricao: [
      'Vidro Jumbo é o vidro de grandes dimensões — chapas que ultrapassam o limite das fábricas convencionais. Numa cobertura, ele entrega vão livre sem caixilho. Numa fachada, vira pano único sem emenda visível. Numa sacada, transforma o ambiente em terraço panorâmico.',
      'O que parece "só um vidro maior" exige cadeia inteira diferente: transporte com equipamento especial, equipe treinada pra instalação em altura, esquadria projetada pra suportar o peso e a dilatação térmica. É por isso que pouca fábrica trabalha — e por isso aqui é especialidade da casa.',
    ],
    vantagens: [
      'Vão livre sem caixilho aparente',
      'Iluminação natural sem comprometer térmica (com vidros laminados ou refletivos)',
      'Visual contínuo, sem emendas',
      'Soluções pra coberturas, fachadas, claraboias e sacadas integradas',
      'Esquadria projetada sob medida pra cada vão e carga',
      'Projetos de engenharia sob medida pra cada vão',
    ],
    aplicacoes:
      'Coberturas residenciais e comerciais · Fachadas comerciais alto padrão · Claraboias · Sacadas integradas · Pergolados envidraçados · Áreas de lazer com pé direito duplo',
  },
  {
    slug: 'porta-articulada',
    nome: 'Porta Articulada',
    sub: 'O que valoriza o vão, o piso e a integração.',
    cardCurto:
      'Mais do que abrir e fechar. A porta articulada substitui o trilho aparente por um sistema que valoriza o vão, o piso e a integração entre ambientes. Projeto sob medida, fabricação própria, instalação no ponto.',
    descricao: [
      'A porta articulada substitui o sistema de correr — aquele com trilho aparente no piso ou no teto — por painéis que se dobram lateralmente. Quando aberta, libera o vão por inteiro e some pra fora do campo visual. Quando fechada, vira um pano único.',
      'Em projetos onde o piso atravessa o vão (sala-varanda, cozinha-área externa, salão-jardim), o trilho atrapalha a continuidade. A articulada resolve sem comprometer a integração nem a vedação.',
    ],
    vantagens: [
      'Sem trilho aparente no piso',
      'Vão livre integral quando aberta',
      'Vedação acústica e térmica equivalente à fixa',
      'Esquadria fabricada sob medida pro vão',
      'Vidros incolor, fumê, verde, refletivo, laminado ou temperado',
      'Acabamentos do branco ao bronze',
    ],
    aplicacoes:
      'Sala-varanda · Cozinha-área externa · Áreas de festa · Comércios premium · Concessionárias e showrooms · Integrações residenciais alto padrão',
  },
  {
    slug: 'serralheria-fina',
    nome: 'Serralheria Fina',
    sub: 'Quando o detalhe muda a obra inteira.',
    cardCurto:
      'Detalhe que muda a obra inteira. Guarda-corpos, escadas, fachadas em vidro e estruturas onde o acabamento é tão importante quanto o cálculo. Trabalho de quem entende de metal e vidro juntos.',
    descricao: [
      'Serralheria fina é o trabalho onde o acabamento conta tanto quanto a estrutura. Guarda-corpos sem perfil aparente, escadas em vidro e metal, fachadas com fixação invisível, box premium sem aço à vista. É o que separa uma obra "bem feita" de uma obra que dá outro patamar quando o cliente entra.',
      'Aqui o serralheiro pensa o detalhe junto com o vidraceiro. Nada chega na obra pra ser ajustado no improviso.',
    ],
    vantagens: [
      'Acabamentos sem perfil aparente',
      'Vidro e metal projetados juntos',
      'Soldas e dobras de precisão',
      'Pintura eletrostática ou acabamento natural',
      'Tratamento anticorrosivo padrão alto padrão',
      'Compatível com qualquer projeto arquitetônico exigente',
    ],
    aplicacoes:
      'Guarda-corpos em vidro e metal · Escadas residenciais · Fachadas com fixação invisível · Box premium · Estruturas para coberturas · Detalhes de fachada comercial',
  },
];

export function getProduto(slug: string): Produto | undefined {
  return PRODUTOS.find((p) => p.slug === slug);
}
