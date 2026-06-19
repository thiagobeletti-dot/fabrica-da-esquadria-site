import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import TeaserConsultoria from '@/components/TeaserConsultoria';

export const metadata: Metadata = {
  title: 'Domus e Claraboias em Jundiaí — luz natural pra dentro da casa | Fábrica da Esquadria',
  description:
    'Domus e claraboias em vidro laminado conforme NBR 7199. Trazem luz natural pra corredores, escadas e ambientes internos sem janela. Fabricação e instalação em Jundiaí.',
};

const NOME = 'Domus e Claraboias';
const MSG_WHATSAPP = mensagemProduto(NOME);

// 18 fotos da pasta Domus, normalizadas com auto-rotação EXIF.
// domus-destaque = Foto card - Domus (vista de baixo do Domus com céu).
// domus-01..17 = todas as outras aplicações (telhado, instalação, interior).
const FOTOS = [
  '/images/coberturas-curadas/domus-destaque.jpg',
  ...Array.from({ length: 17 }, (_, i) =>
    `/images/coberturas-curadas/domus-${String(i + 1).padStart(2, '0')}.jpg`
  ),
];

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Produtos', url: '/#produtos' },
  { name: 'Coberturas', url: '/coberturas' },
  { name: 'Domus e Claraboias', url: '/coberturas/domus-claraboias' },
]);

const service = serviceSchema({
  name: 'Domus e Claraboias em Vidro',
  description:
    'Aberturas zenitais em vidro laminado conforme NBR 7199 — domus e claraboias que trazem luz natural pra corredores, escadas e ambientes internos sem janela.',
  url: '/coberturas/domus-claraboias',
  serviceType: 'Claraboia em vidro',
  image: '/images/coberturas-curadas/hero-domus.jpg',
});

export default function DomusClaraboias() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <section
        className="relative bg-neutro-900 min-h-[55vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,26,0.55), rgba(42,126,164,0.30)), url(/images/coberturas-curadas/hero-domus.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-20 md:py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">
            Produtos / Coberturas / Domus e Claraboias |
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Domus e Claraboias
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Luz natural pra dentro da casa, sem mexer na fachada.
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
          <p className="titulo-secao mb-4">O que entregamos</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            Luz natural a corredores, escadas e ambientes internos sem janela.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            Domus e claraboias trazem <strong>luz natural pra dentro da casa</strong>
            {' '}— iluminam corredores, escadas, banheiros internos, halls e cozinhas que
            não pegam janela na fachada. Durante o dia, a casa não depende de luz artificial.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            <strong>Sempre vidro laminado</strong> — exigência da norma NBR 7199 e
            política da casa. Se quebrar, os fragmentos ficam aderidos à película
            interna de PVB, não caem em cima de ninguém. Estrutura de alumínio sob
            medida pro vão do telhado, vedação cuidada pra chuva e sujeira. Instalação
            por equipe acostumada com içamento e fixação em altura.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed">
            Aplicação em telhado existente (substituindo telhas), ou em obra nova prevista
            no projeto arquitetônico — em ambos os casos cuidamos do dimensionamento e do
            acabamento.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Domus entregues</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Projetos em Jundiaí e região.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {FOTOS.map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={`Domus ${i + 1}`}
              />
            ))}
          </div>
          <p className="text-sm text-neutro-500 italic mt-6">
            Aplicações de Domus em obras residenciais em Jundiaí e região.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-6">
            Procurando cobrir área externa em vidro? Veja também:
          </p>
          <Link
            href="/coberturas/coberturas-pergolados"
            className="inline-flex items-center gap-2 text-sm font-medium text-aco hover:text-aco-dark transition-colors"
          >
            Coberturas e Pergolados
          </Link>
        </div>
      </section>

      <TeaserConsultoria />

      <section className="py-16 bg-neutro-900 text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl mb-6">Quer trazer luz natural pra dentro da sua casa?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={linkWhatsApp(MSG_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-8 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm"
            >
              Conversar agora
            </a>
            <Link
              href="/coberturas"
              className="inline-flex items-center gap-2 min-h-12 px-7 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors rounded-sm"
            >
              <ArrowLeft size={16} />
              Voltar pra Coberturas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
