import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';
import { getGaleria } from '@/lib/galerias';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import TeaserConsultoria from '@/components/TeaserConsultoria';

export const metadata: Metadata = {
  title: 'Projetos de Esquadrias — Linha Gold e Linha Suprema em Jundiaí',
  description:
    'Janelas, portas e fachadas em alumínio sob medida. Linhas Gold e Suprema, acessórios premium Udinese. Fabricação em Jundiaí.',
};

const NOME = 'Projetos de Esquadrias';
const MSG_WHATSAPP = mensagemProduto(NOME);

const ACESSORIOS = [
  { src: '/images/acessorios/01-macaneta-horizontal-preta-fosca.jpg', alt: 'Maçaneta horizontal preta fosca' },
  { src: '/images/acessorios/04-puxador-vertical-alongado-pivotante.jpg', alt: 'Puxador vertical alongado pivotante' },
  { src: '/images/acessorios/03-fechadura-ergonomica-com-leitor.jpg', alt: 'Fechadura ergonômica com leitor' },
  { src: '/images/acessorios/06-fechadura-discreta-vista-externa.jpg', alt: 'Fechadura discreta — vista externa' },
];

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Produtos', url: '/#produtos' },
  { name: 'Projetos de Esquadrias', url: '/projetos-de-esquadrias' },
]);

const service = serviceSchema({
  name: 'Esquadrias de Alumínio — Linhas Gold e Suprema',
  description:
    'Janelas, portas e fachadas em alumínio sob medida. Linha Gold (perfil padrão alto desempenho) e Linha Suprema (perfil reforçado pra grandes vãos). Acessórios premium Udinese.',
  url: '/projetos-de-esquadrias',
  serviceType: 'Esquadria de alumínio',
});

export default function ProjetosDeEsquadrias() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <section
        className="relative bg-neutro-900 min-h-[55vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,26,0.55), rgba(42,126,164,0.30)), url(/images/grandes-vaos/07-20240613_170824.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-20 md:py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Produtos / Projetos de Esquadrias |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Projetos de Esquadrias
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Janelas, portas e fachadas em alumínio sob medida. Linhas Gold e Suprema, acessórios premium.
          </p>
          <div className="mt-10">
            <a
              href={linkWhatsApp(MSG_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-7 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm"
            >
              Conversar agora
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Linhas que trabalhamos</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-4">
            Linha Gold e Linha Suprema. Espessura diferente, uso diferente.
          </h2>
          <p className="text-base md:text-lg text-aco font-medium mb-8">
            Suprema com perfil de 25 mm — aceita vidros até 6 mm.<br />
            Gold com perfil de 32 mm — aceita até vidros insulados de 21 mm.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            Originalmente desenvolvidas pela Alcoa, as duas linhas viraram referência de
            mercado quando a patente expirou. A diferença é estrutural, e isso muda o que
            cada uma pode fazer: vão máximo, peso de vidro, isolamento acústico e
            resistência ao vento.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            A <strong>Suprema</strong> resolve a maioria das janelas e portas residenciais
            de tamanho convencional — dormitórios, banheiros, cozinhas, portas de passagem
            padrão. Aceita os vidros mais comuns (até 6 mm), com vedação eficiente e
            ótimo custo.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-8">
            A <strong>Gold</strong> aceita vidros bem mais espessos, incluindo
            <strong> insulados de até 21 mm</strong> — necessária pra grandes vãos,
            fachadas envidraçadas, áreas sociais de pé-direito duplo e regiões com vento
            forte. É a especificação típica de alto padrão.
          </p>
          <div className="p-6 md:p-8 bg-aco-gelo border-l-4 border-aco">
            <p className="text-base md:text-lg text-neutro-900 leading-relaxed mb-3">
              <strong>Como costumam ficar os projetos:</strong>
            </p>
            <ul className="space-y-2 text-base text-neutro-900 leading-relaxed">
              <li>• Obras <strong>menores ou mais simples</strong>: tudo em <strong>Suprema</strong>.</li>
              <li>• Obras <strong>alto padrão</strong> (grandes vãos, fachadas, pé-direito duplo): tudo em <strong>Gold</strong>.</li>
              <li>• Quando o cliente quer otimizar custo-benefício: <strong>mistura por ambiente</strong> — Gold nas áreas sociais e portas grandes, Suprema nos dormitórios. É opção, não regra.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Acessórios — Parceria Udinese</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-4 max-w-2xl">
            O detalhe que muda a sensação de cada abertura.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-8 max-w-3xl">
            Fechaduras, puxadores, maçanetas e roldanas <strong>Udinese</strong> — uma das
            melhores fabricantes de componentes pra esquadria no mundo. Estudos mostram
            que esquadrias estão entre os itens mais usados no dia a dia de uma casa, e o
            acessório é o que o cliente toca — todo dia. Especificamos peça por peça
            antes da fabricação.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {ACESSORIOS.map((a, i) => (
              <div
                key={i}
                className="aspect-square bg-white bg-cover bg-center"
                style={{ backgroundImage: `url(${a.src})` }}
                role="img"
                aria-label={a.alt}
              />
            ))}
          </div>
          <Link
            href="/acessorios"
            className="inline-flex items-center gap-2 text-sm font-medium text-aco hover:text-aco-dark transition-colors"
          >
            Ver linha completa de acessórios
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Como trabalhamos</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Do projeto à instalação, no mesmo padrão de fábrica.
          </h2>
          <ol className="space-y-5">
            {[
              {
                titulo: 'Consultoria técnica antes do orçamento',
                texto: 'Briefing, definição da linha por ambiente (Gold ou Suprema), tipologias, vidros e acessórios. Faz parte do nosso processo — não é serviço à parte.',
              },
              {
                titulo: 'Fabricação na nossa fábrica',
                texto: 'Tudo aqui em Jundiaí. Perfis selecionados, acessórios Udinese, acabamento sob nosso controle.',
              },
              {
                titulo: 'Instalação feita por profissionais experientes',
                texto: 'Alinhamento e vedação conferidos peça por peça. Mesmo padrão da fábrica até a obra.',
              },
              {
                titulo: 'Acompanhamento até a entrega',
                texto: 'Conferência final, ajustes finos e garantia. Pós-venda sem call center.',
              },
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-4 border-l-2 border-aco pl-5">
                <div className="flex-1">
                  <p className="text-base font-medium text-neutro-900 mb-1">{p.titulo}</p>
                  <p className="text-sm text-neutro-500 leading-relaxed">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Obras entregues</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Projetos em Jundiaí e região.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {getGaleria('projetos-de-esquadrias').map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={`Obra de esquadria ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="titulo-secao mb-4">Projeto com escopo maior?</p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-6">
            Se o vão pede Vidro Jumbo, porta articulada, Porta Fluttua, brises ou domus —
            saímos do catálogo padrão e entramos em <strong>Projetos Especiais</strong>.
          </p>
          <Link
            href="/projetos-especiais"
            className="inline-flex items-center gap-2 text-sm font-medium text-aco hover:text-aco-dark transition-colors"
          >
            Ver Projetos Especiais
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <TeaserConsultoria />

      <section className="py-16 bg-neutro-900 text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl mb-6">
            Quer projetar suas esquadrias com a gente?
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
