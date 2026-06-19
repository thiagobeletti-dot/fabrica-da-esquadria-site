import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { CIDADES } from '@/lib/cidades';

export default function Cidades() {
  return (
    <section id="cidades" className="py-20 md:py-28 bg-white">
      <div className="max-w-site mx-auto px-5 lg:px-10">
        <p className="titulo-secao mb-4">Onde atendemos</p>
        <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6 max-w-2xl">
          Jundiaí e cidades vizinhas. Aqui a obra é perto.
        </h2>
        <p className="text-base text-neutro-500 leading-relaxed mb-12 max-w-2xl">
          Visita técnica, medição e instalação acontecem com agenda enxuta. Logística
          curta = obra sem surpresa de prazo.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CIDADES.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group flex flex-col items-start gap-3 p-5 border border-neutro-200 hover:border-aco hover:bg-aco-gelo/30 transition-colors"
            >
              <MapPin size={20} className="text-aco" strokeWidth={1.5} />
              <span className="text-sm font-medium text-neutro-900 group-hover:text-aco-dark">
                {c.nome}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
