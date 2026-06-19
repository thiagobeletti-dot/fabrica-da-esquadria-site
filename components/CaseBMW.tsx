import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CaseBMW() {
  return (
    <section id="case-bmw" className="py-20 md:py-28 bg-neutro-900 text-white">
      <div className="max-w-site mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <div
          className="lg:col-span-3 aspect-[16/10] bg-neutro-500 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/portfolio/bmw-jundiai/bmw-noturna-showroom.jpg)' }}
          role="img"
          aria-label="Concessionária BMW Jundiaí — showroom em operação à noite, fachada curva iluminada"
        />
        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4 font-medium">
            Case BMW Jundiaí |
          </p>
          <h2 className="text-2xl md:text-3xl font-medium leading-tight mb-6">
            Mais de 4 anos de parceria. Participação técnica desde o projeto.
          </h2>
          <p className="text-base text-white/85 leading-relaxed mb-4">
            Concessionária BMW em Jundiaí. <strong className="text-white font-medium">Parceria há mais de 4 anos</strong>,
            com participação técnica desde o projeto arquitetônico — não apenas execução,
            mas codesenho da solução.
          </p>
          <p className="text-base text-white/85 leading-relaxed mb-8">
            Esquadrias, fachada em Vidro Jumbo e detalhes de serralheria fina executados
            no padrão da marca alemã. Pra obra desse porte, padrão de acabamento não é
            negociável — e a Fábrica da Esquadria entrega.
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
  );
}
