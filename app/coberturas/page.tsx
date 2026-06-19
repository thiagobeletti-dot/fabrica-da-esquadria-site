import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';
import { getGaleria } from '@/lib/galerias';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import TeaserConsultoria from '@/components/TeaserConsultoria';

export const metadata: Metadata = {
  title: 'Coberturas, Pergolados, Domus e Claraboias em Jundiaí | Fábrica da Esquadria',
  description:
    'Coberturas em vidro que transformam área externa em ambiente útil. Domus e claraboias que trazem luz natural pra dentro da casa. Fabricação e instalação em Jundiaí.',
};

const NOME = 'Coberturas';
const MSG_WHATSAPP = mensagemProduto(NOME);

const CARDS = [
  {
    href: '/coberturas/coberturas-pergolados',
    tag: 'Área externa',
    titulo: 'Coberturas e Pergolados',
    img: '/images/coberturas-curadas/card-coberturas-pergolados.jpg',
    texto:
      'Cobrem varanda, área gourmet, terraço ou quintal — e transformam aquele espaço em ambiente de verdade, usável o ano inteiro. Pergolados controlam luz e ventilação mantendo a sensação de céu aberto.',
  },
  {
    href: '/coberturas/domus-claraboias',
    tag: 'Luz natural',
    titulo: 'Domus e Claraboias',
    img: '/images/coberturas-curadas/card-coberturas-domus.jpg',
    texto:
      'Recurso arquitetônico pra trazer luz natural pra dentro da casa. Iluminam corredores, escadas e ambientes internos sem janela — sem precisar mexer na fachada.',
  },
];

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Produtos', url: '/#produtos' },
  { name: 'Coberturas', url: '/coberturas' },
]);

const service = serviceSchema({
  name: 'Coberturas em Vidro e Pergolados',
  description:
    'Coberturas em vidro laminado e pergolados em alumínio pra varanda, área gourmet, terraço e quintal. Domus e claraboias pra trazer luz natural. Conformidade NBR 7199.',
  url: '/coberturas',
  serviceType: 'Cobertura em vidro',
  image: '/categorias/coberturas.jpg',
});

export default function Coberturas() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <section
        className="relative bg-neutro-900 min-h-[55vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,26,0.55), rgba(42,126,164,0.30)), url(/categorias/coberturas.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-20 md:py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Produtos / Coberturas |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Coberturas
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Sua área externa vira ambiente. Mais uso, mais integração, mais conforto — chuva ou sol.
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
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Duas frentes</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10 max-w-2xl">
            Área externa que vira ambiente — e luz natural pra dentro da casa.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {CARDS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block border overflow-hidden transition-colors bg-neutro-50 border-neutro-200 hover:bg-neutro-100"
              >
                <div
                  className="aspect-square bg-aco-gelo bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.img})` }}
                  role="img"
                  aria-label={c.titulo}
                />
                <div className="p-6 md:p-8">
                  <p className="text-xs uppercase tracking-marca text-aco mb-3 font-medium">
                    {c.tag} |
                  </p>
                  <h3 className="text-xl md:text-2xl font-medium text-neutro-900 mb-3">
                    {c.titulo}
                  </h3>
                  <p className="text-sm md:text-base text-neutro-500 leading-relaxed mb-4">
                    {c.texto}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-aco group-hover:text-aco-dark transition-colors">
                    Ver mais
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Coberturas entregues</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Projetos em Jundiaí e região.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {getGaleria('coberturas').map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={`Cobertura ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <TeaserConsultoria />

      <section className="py-16 bg-neutro-900 text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl mb-6">Quer cobrir sua área externa com a gente?</p>
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
