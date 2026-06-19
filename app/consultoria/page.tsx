import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Consultoria Técnica em Esquadrias de Alto Padrão',
  description:
    'Consultoria e assessoria técnica em esquadrias para proprietários, arquitetos, construtoras e engenheiros. Embutida nos projetos que executamos. Contratada à parte pra obras fora da nossa região.',
};

const NOME = 'Consultoria Técnica';
const MSG_WHATSAPP = mensagemProduto(NOME);

const CONSULTORIA = [
  'Reunião inicial pra briefing e brainstorm do projeto',
  'Definição das melhores tipologias pra cada ambiente',
  'Apresentação das linhas mais adequadas ao projeto',
  'Elaboração da descrição técnica pra orçamentos',
  'Informações técnicas pra montar o mapa / caderno de esquadrias',
];

const ASSESSORIA = [
  'Visitas técnicas à obra',
  'Realização de até 3 orçamentos com fornecedores diferentes',
  'Visitas técnicas a fornecedores (quando necessário)',
  'Confecção e entrega do mapa de esquadrias com descrição detalhada',
  'Reunião de orientação com a construtora',
  'Acompanhamento técnico da instalação das esquadrias',
];

const PARA_QUEM = [
  'Proprietários exigentes que querem garantir um acabamento impecável',
  'Arquitetos que desejam especificações técnicas corretas e seguras',
  'Construtoras que buscam reduzir retrabalho e garantir qualidade na entrega',
  'Engenheiros que precisam de suporte técnico nas etapas de execução',
];

export default function Consultoria() {
  return (
    <>
      <section
        className="relative bg-neutro-900 min-h-[60vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,26,0.78) 0%, rgba(42,126,164,0.45) 100%), url(/images/portfolio/bmw-jundiai/04-fachada-lateral-esquadrias-gigantes.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-20 md:py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Consultoria Técnica |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Consultoria técnica em esquadrias de alto padrão.
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Embutida nos projetos que executamos. Contratada à parte pra obras fora da nossa região.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={linkWhatsApp(MSG_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-7 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm"
            >
              Conversar agora
            </a>
            <Link
              href="/portfolio/bmw-jundiai"
              className="inline-flex items-center gap-2 min-h-12 px-7 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors rounded-sm"
            >
              Ver case BMW Jundiaí
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Posicionamento</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            Mais de 16 anos no ofício. Certificação nas principais linhas do país.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed">
            O que mais agrega valor numa obra de esquadria não é o catálogo do fornecedor —
            é o conhecimento técnico aplicado antes da fabricação. A Fábrica da Esquadria
            oferece consultoria e assessoria técnica especializada pra clientes, arquitetos,
            engenheiros e construtoras que executam projetos com alto nível de exigência,
            qualidade e acabamento.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mt-4">
            Atuamos em todo o Brasil com suporte técnico completo — do desenvolvimento do
            projeto ao acompanhamento da instalação final.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">O que entregamos</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10 max-w-2xl">
            Dois blocos de entrega — do briefing ao aperto final.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <article className="p-7 md:p-9 bg-white border border-neutro-200">
              <p className="text-xs uppercase tracking-marca text-aco mb-4 font-medium">
                Bloco 1 |
              </p>
              <h3 className="text-xl md:text-2xl font-medium text-neutro-900 mb-6">
                Consultoria
              </h3>
              <ul className="space-y-3">
                {CONSULTORIA.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutro-500 leading-relaxed">
                    <Check size={18} className="text-aco shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="p-7 md:p-9 bg-white border border-neutro-200">
              <p className="text-xs uppercase tracking-marca text-aco mb-4 font-medium">
                Bloco 2 |
              </p>
              <h3 className="text-xl md:text-2xl font-medium text-neutro-900 mb-6">
                Assessoria
              </h3>
              <ul className="space-y-3">
                {ASSESSORIA.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutro-500 leading-relaxed">
                    <Check size={18} className="text-aco shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Para quem é indicado</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Quatro perfis que justificam a Consultoria.
          </h2>
          <ul className="space-y-4">
            {PARA_QUEM.map((item, i) => (
              <li key={i} className="flex items-start gap-4 border-l-2 border-aco pl-5">
                <p className="text-base text-neutro-900 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-aco-dark text-white">
        <div className="max-w-site mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div
            className="lg:col-span-3 aspect-[16/10] bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/portfolio/bmw-jundiai/01-fachada-curva-vidro-jumbo.jpg)' }}
            role="img"
            aria-label="Concessionária BMW Jundiaí — case de Consultoria aplicada"
          />
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4 font-medium">
              Case real |
            </p>
            <h2 className="text-2xl md:text-3xl font-medium leading-tight mb-6">
              A consultoria aplicada na BMW Jundiaí, desde o desenvolvimento.
            </h2>
            <p className="text-base text-white/85 leading-relaxed mb-8">
              4 anos de parceria, codesenho da solução desde a fachada em Vidro Jumbo até
              detalhes de serralheria fina. Hoje seguimos fornecendo manutenção e peças
              novas conforme demanda.
            </p>
            <Link
              href="/portfolio/bmw-jundiai"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-aco-gelo transition-colors"
            >
              Conhecer a história completa
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl text-neutro-900 mb-6">
            Quer começar pelo projeto técnico antes do orçamento?
          </p>
          <a
            href={linkWhatsApp(MSG_WHATSAPP)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-12 px-8 bg-aco-dark text-white font-medium hover:bg-aco transition-colors rounded-sm"
          >
            Conversar agora
          </a>
        </div>
      </section>
    </>
  );
}
