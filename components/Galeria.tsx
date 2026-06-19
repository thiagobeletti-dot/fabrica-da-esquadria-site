import Link from 'next/link';
import { PORTFOLIO_HOME } from '@/lib/galerias';

export default function Galeria() {
  return (
    <section className="py-20 md:py-28 bg-neutro-50">
      <div className="max-w-site mx-auto px-5 lg:px-10">
        <p className="titulo-secao mb-4">Obras entregues</p>
        <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10 max-w-2xl">
          Projetos em Jundiaí e cidades vizinhas. Cada um, sob medida.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PORTFOLIO_HOME.map((obra, i) => (
            <div
              key={i}
              className={`bg-aco-gelo bg-cover bg-center ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'} ${i >= 4 ? 'hidden md:block' : ''}`}
              style={{ backgroundImage: `url(${obra.src})` }}
              role="img"
              aria-label={obra.alt}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-aco hover:text-aco-dark">
            Ver mais obras no portfólio →
          </Link>
        </div>
      </div>
    </section>
  );
}
