import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TeaserConsultoria() {
  return (
    <section className="py-12 md:py-16 bg-aco-dark text-white">
      <div className="max-w-site mx-auto px-5 lg:px-10 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6">
        <div>
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-3 font-medium">
            Antes do orçamento |
          </p>
          <h3 className="text-xl md:text-2xl font-medium leading-tight">
            Todo projeto que aceitamos passa pela nossa Consultoria Técnica.
          </h3>
          <p className="text-sm md:text-base text-white/85 leading-relaxed mt-3 max-w-2xl">
            Briefing, especificação por ambiente, mapa de esquadrias, escolha das linhas e
            acessórios. É o que separa uma obra bem entregue de uma obra cara à toa.
          </p>
        </div>
        <Link
          href="/consultoria"
          className="inline-flex items-center justify-center gap-2 min-h-12 px-6 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm tracking-wide whitespace-nowrap"
        >
          Conhecer a Consultoria
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
