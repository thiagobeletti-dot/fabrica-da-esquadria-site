import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'BMW Jundiaí — mais de 4 anos de parceria, do projeto à manutenção',
  description:
    'Concessionária BMW em Jundiaí. Desenvolvemos a fachada em Vidro Jumbo, esquadrias e detalhes de serralheria desde a fase de projeto. Hoje seguimos fornecendo peças e manutenção.',
};

const NOME = 'Case BMW Jundiaí';
const MSG_WHATSAPP = mensagemProduto(NOME);

// Sequência cronológica do processo (Abril/2022 → Fevereiro/2023):
// 1-4: estrutura crua → fachada lateral nascendo
// 5-6: cilindro tomando forma → pintado
// 7-10: fachada fechando em Vidro Jumbo
// 11-14: pronto e em uso (carro M dentro, fachada acabada de dia, aérea crepúsculo, noturna em operação)
const FOTOS_PROCESSO = [
  { src: '/images/construcao-bmw/20220419_145534.jpg', alt: 'Estrutura crua de dia — abril/2022' },
  { src: '/images/construcao-bmw/20220526_192840.jpg', alt: 'Estrutura erguida iluminada à noite' },
  { src: '/images/construcao-bmw/20220530_132429.jpg', alt: 'Andaime e escalas estruturais' },
  { src: '/images/construcao-bmw/IMG-20220608-WA0076.jpeg', alt: 'Esqueleto da fachada lateral' },
  { src: '/images/construcao-bmw/20220706_165033.jpg', alt: 'Cilindro tomando forma — pintura aplicada' },
  { src: '/images/construcao-bmw/IMG-20220708-WA0092.jpg', alt: 'Cilindro acabado contra o céu' },
  { src: '/images/construcao-bmw/20220830_172544.jpg', alt: 'Vista geral do pavimento externo' },
  { src: '/images/construcao-bmw/IMG-20220707-WA0118.jpg', alt: 'Fachada lateral fechada em Vidro Jumbo' },
  { src: '/images/construcao-bmw/IMG-20220719-WA0069.jpg', alt: 'Fachada frontal acabada — vista da rua' },
  { src: '/images/construcao-bmw/IMG-20220719-WA0079.jpg', alt: 'Vista lateral da fachada acabada' },
  { src: '/images/construcao-bmw/20220831_142852.jpg', alt: 'BMW M de competição posicionada no cilindro de vidro' },
  { src: '/images/construcao-bmw/Screenshot_20230224_103951_Instagram.jpg', alt: 'Cilindro frontal — concessionária em operação' },
  { src: '/images/portfolio/bmw-jundiai/bmw-aerea-crepusculo.jpg', alt: 'Vista aérea ao crepúsculo' },
  { src: '/images/portfolio/bmw-jundiai/bmw-noturna-showroom.jpg', alt: 'Showroom em operação à noite' },
];

export default function CaseBMWJundiai() {
  return (
    <>
      <section
        className="relative bg-neutro-900 min-h-[65vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,26,0.70) 0%, rgba(26,26,26,0.35) 100%), url(/images/portfolio/bmw-jundiai/bmw-aerea-crepusculo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-20 md:py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">
            Portfólio / Case BMW Jundiaí |
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            BMW Jundiaí — mais de 4 anos de parceria, desde o projeto.
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Desenvolvemos a fachada em Vidro Jumbo, esquadrias e detalhes de serralheria
            desde a fase de projeto. Hoje seguimos fornecendo peças e manutenção.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Como começou</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            Entramos antes da fundação sair do chão.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            A BMW Jundiaí precisava entregar um espaço com o padrão da marca alemã —
            fachada em Vidro Jumbo, esquadrias precisas, detalhes que não podiam falhar.
            A Fábrica entrou no projeto desde a primeira reunião, desenvolvendo a solução
            técnica junto à engenharia e arquitetura.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed">
            Especificação de cada tipologia, escolha de acessórios premium, cálculo
            estrutural pra suportar chapas Jumbo curvas, planejamento logístico do
            transporte e do içamento. Tudo definido antes da fabricação começar.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">A história em fotos</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Da estrutura crua até o showroom funcionando.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {FOTOS_PROCESSO.map((f, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${f.src})` }}
                role="img"
                aria-label={f.alt}
              />
            ))}
          </div>
          <p className="text-sm text-neutro-500 italic mt-6">
            Sequência cronológica do processo, de abril/2022 (estrutura crua) até a
            concessionária em operação.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Onde estamos hoje</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            A parceria não terminou na chave.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            Mais de quatro anos depois da entrega, a parceria continua. A Fábrica fornece
            manutenção preventiva, fabrica peças novas conforme demanda da concessionária,
            e mantém acompanhamento técnico contínuo.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed">
            É o tipo de relação de longo prazo que o cliente exigente precisa — não um
            projeto que termina no dia da entrega.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-aco-dark text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="titulo-secao text-aco-gelo mb-4">Aplicar esse processo</p>
          <h2 className="text-2xl md:text-3xl font-medium leading-tight mb-6">
            Quer um processo desse nível na sua obra?
          </h2>
          <p className="text-base text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
            O caminho começa pela nossa Consultoria Técnica. Desenvolvimento técnico
            desde o briefing até a entrega, com a mesma profundidade que aplicamos
            na BMW.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/consultoria"
              className="inline-flex items-center gap-2 min-h-12 px-7 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm"
            >
              Conhecer nossa Consultoria Técnica
              <ArrowRight size={16} />
            </Link>
            <a
              href={linkWhatsApp(MSG_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-7 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors rounded-sm"
            >
              Conversar agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
