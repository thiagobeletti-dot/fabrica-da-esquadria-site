import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { CIDADES, getCidade } from '@/lib/cidades';
import { linkWhatsApp } from '@/lib/whatsapp';

// Fotos genéricas do acervo (pasta /cidades/ não existe — usar fotos do portfólio).
const HERO_CIDADE = '/images/hero/hero-interior-vista-por-do-sol.jpg';
const GALERIA_CIDADE = [
  '/images/galeria-home/01.jpg',
  '/images/galeria-home/02.jpg',
  '/images/galeria-home/03.jpg',
  '/images/galeria-home/04.jpg',
];

export default function PaginaCidade({ slug }: { slug: string }) {
  const c = getCidade(slug);
  if (!c) return null;
  const outras = CIDADES.filter((x) => x.slug !== c.slug);
  const mensagem = `Olá! Vi o site da Fábrica da Esquadria e quero orçamento em ${c.nome}.`;

  return (
    <>
      <section
        className="relative bg-neutro-900 min-h-[55vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,26,26,0.65), rgba(42,126,164,0.35)), url(${HERO_CIDADE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Cidades / {c.nome} |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            {c.hero}
          </h1>
          <div className="mt-10">
            <a
              href={linkWhatsApp(mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primario"
            >
              Pedir orçamento em {c.nome}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Atendimento em {c.nome}</p>
          <p className="text-base md:text-lg text-neutro-900 leading-relaxed">{c.texto}</p>
        </div>
      </section>

      <section className="py-20 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-8">Obras nessa região</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALERIA_CIDADE.map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={`Obra entregue pela Fábrica da Esquadria ${i + 1}`}
              />
            ))}
          </div>
          <p className="text-sm text-neutro-500 mt-6">
            Obras entregues pela Fábrica em Jundiaí e região — mesmo padrão técnico em {c.nome}.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-8">Outras cidades atendidas</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {outras.map((o) => (
              <Link
                key={o.slug}
                href={`/${o.slug}`}
                className="group flex items-center gap-3 p-4 border border-neutro-200 hover:border-aco hover:bg-aco-gelo/30 transition-colors"
              >
                <MapPin size={18} className="text-aco" strokeWidth={1.5} />
                <span className="text-sm font-medium text-neutro-900 group-hover:text-aco-dark">
                  {o.nome}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aco-gelo">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl text-neutro-900 mb-6">
            Está em {c.nome} e quer um orçamento?
          </p>
          <a href={linkWhatsApp(mensagem)} target="_blank" rel="noopener noreferrer" className="btn-primario">
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
