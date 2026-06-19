import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CATEGORIAS } from '@/lib/produtos';

export default function Categorias() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-white">
      <div className="max-w-site mx-auto px-5 lg:px-10">
        <p className="titulo-secao mb-4">O que você procura</p>
        <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-12 max-w-2xl">
          Quatro especialidades pra projetos que pedem mais.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {CATEGORIAS.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group flex flex-col bg-neutro-50 border border-neutro-200 hover:border-aco hover:bg-white transition-all overflow-hidden"
            >
              <div
                className="aspect-square bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${c.imagem})` }}
                role="img"
                aria-label={`Foto representativa de ${c.nome}`}
              />
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-base md:text-lg font-medium text-neutro-900 mb-2 md:mb-3">
                  {c.nome}
                </h3>
                <p className="text-xs md:text-sm text-neutro-500 leading-relaxed mb-4 md:mb-5 flex-1">
                  {c.cardCurto}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-aco group-hover:text-aco-dark transition-colors">
                  Ver mais
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
