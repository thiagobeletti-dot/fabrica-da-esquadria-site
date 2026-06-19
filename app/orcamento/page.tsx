import type { Metadata } from 'next';
import FormOrcamento from '@/components/FormOrcamento';
import { breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Peça seu orçamento',
  description:
    'Resposta em até 24h úteis no WhatsApp. Atendimento direto da Fábrica da Esquadria em Jundiaí, sem intermediário.',
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Orçamento', url: '/orcamento' },
]);

export default function Orcamento() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="bg-neutro-900 py-20 md:py-28">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Orçamento |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Peça seu orçamento.
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Resposta em até 24h úteis. Sem call center, sem intermediário.
          </p>
        </div>
      </section>
      <FormOrcamento />
    </>
  );
}
