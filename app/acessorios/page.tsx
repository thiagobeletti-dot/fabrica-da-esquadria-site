import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Acessórios Udinese — linha completa em Jundiaí',
  description:
    'Linha completa Udinese pra esquadrias de alumínio premium. Blackout, vedação contra água, controle remoto, mosquiteiros, roldanas e tranquetas — selecionados peça por peça pelo projeto.',
};

const NOME = 'Acessórios Udinese';
const MSG_WHATSAPP = mensagemProduto(NOME);

const CATEGORIAS_UDINESE = [
  {
    titulo: 'Blackout e esteiras',
    texto: 'Sistemas de blackout integrados à esquadria. Redução de ruído externo, controle total de luz.',
    img: '/images/udinese/IMG-20210910-WA0041.jpg',
  },
  {
    titulo: 'Vedação total contra água',
    texto: 'Vedação inteligente pra portas e janelas de alumínio. Água não passa, vento também não.',
    img: '/images/udinese/IMG-20210910-WA0059.jpg',
  },
  {
    titulo: 'Controle remoto e automação',
    texto: 'Acionamento via interruptor, controle ou pelo smartphone. Acessórios prontos pra integrar à casa conectada.',
    img: '/images/udinese/IMG-20210910-WA0044.jpg',
  },
  {
    titulo: 'Mosquiteiros integrados',
    texto: 'Proteção contra insetos sem comprometer o desenho da esquadria. Fica embutido no perfil.',
    img: '/images/udinese/IMG-20210910-WA0068.jpg',
  },
  {
    titulo: 'Roldanas e deslize',
    texto: 'Roldanas de alta performance pra portas de correr pesadas. Deslize suave por anos.',
    img: '/images/udinese/IMG-20210910-WA0060.jpg',
  },
  {
    titulo: 'Tranquetas e segurança',
    texto: 'Sistemas de fechamento e segurança que combinam acabamento fino com travamento de verdade.',
    img: '/images/udinese/IMG-20210910-WA0063.jpg',
  },
];

const EM_OBRA = [
  { src: '/images/acessorios/01-macaneta-horizontal-preta-fosca.jpg', alt: 'Maçaneta horizontal preta fosca em obra recente' },
  { src: '/images/acessorios/04-puxador-vertical-alongado-pivotante.jpg', alt: 'Puxador vertical alongado em porta pivotante' },
  { src: '/images/acessorios/03-fechadura-ergonomica-com-leitor.jpg', alt: 'Fechadura ergonômica com leitor biométrico' },
  { src: '/images/acessorios/06-fechadura-discreta-vista-externa.jpg', alt: 'Fechadura discreta — vista externa' },
];

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Produtos', url: '/#produtos' },
  { name: 'Acessórios', url: '/acessorios' },
]);

const service = serviceSchema({
  name: 'Acessórios Udinese pra Esquadrias',
  description:
    'Linha completa Udinese pra esquadrias de alumínio premium: blackout, vedação contra água, controle remoto, mosquiteiros, roldanas e tranquetas. Selecionados peça por peça conforme projeto.',
  url: '/acessorios',
  serviceType: 'Acessório de esquadria',
});

export default function Acessorios() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <section className="bg-neutro-900 py-24 md:py-32">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Acessórios |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Acessórios Udinese.
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Linha completa de componentes pra esquadria de alumínio — selecionados peça
            por peça antes da fabricação.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Por que Udinese</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            Uma das melhores fabricantes de componentes pra esquadria no mundo.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            Esquadria não acaba no perfil de alumínio. Acaba na peça que o cliente toca
            todo dia — fechadura que gira, puxador que pega na mão, roldana que desliza
            sem barulho. Estudos mostram que esquadrias estão entre os itens mais usados
            no dia a dia de uma casa, e o acessório é onde isso aparece.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed">
            A Udinese é referência mundial em componentes pra esquadria de alumínio —
            durabilidade, acabamento e ergonomia no padrão de quem entrega obra alto
            padrão. Trabalhamos a linha completa.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Linha completa</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10 max-w-2xl">
            Seis frentes de acessório que entregamos pelo catálogo Udinese.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIAS_UDINESE.map((c, i) => (
              <article key={i} className="bg-white border border-neutro-200 overflow-hidden">
                <div
                  className="aspect-square bg-aco-gelo bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.img})` }}
                  role="img"
                  aria-label={c.titulo}
                />
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-medium text-neutro-900 mb-2">{c.titulo}</h3>
                  <p className="text-sm text-neutro-500 leading-relaxed">{c.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Em obras recentes</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Acessórios Udinese aplicados em projetos da Fábrica.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {EM_OBRA.map((a, i) => (
              <div
                key={i}
                className="aspect-square bg-neutro-50 bg-cover bg-center border border-neutro-200"
                style={{ backgroundImage: `url(${a.src})` }}
                role="img"
                aria-label={a.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutro-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="titulo-secao mb-4">Acessório vem com a esquadria</p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-6">
            Os acessórios são especificados na Consultoria, junto da linha (Gold ou
            Suprema), dos vidros e das tipologias. Não vendemos avulso.
          </p>
          <Link
            href="/projetos-de-esquadrias"
            className="inline-flex items-center gap-2 text-sm font-medium text-aco hover:text-aco-dark transition-colors"
          >
            Voltar pra Projetos de Esquadrias
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-neutro-900 text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl mb-6">
            Quer especificar acessórios Udinese pro seu projeto?
          </p>
          <a
            href={linkWhatsApp(MSG_WHATSAPP)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-12 px-8 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm"
          >
            Conversar agora
          </a>
        </div>
      </section>
    </>
  );
}
