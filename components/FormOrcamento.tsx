import { linkWhatsApp, mensagemConversar } from '@/lib/whatsapp';

export default function FormOrcamento() {
  return (
    <section id="orcamento" className="py-20 md:py-28 bg-neutro-50">
      <div className="max-w-2xl mx-auto px-5 lg:px-10 text-center">
        <p className="titulo-secao mb-4">Peça seu orçamento</p>
        <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
          Traga seu projeto.
        </h2>
        <p className="text-base text-neutro-500 leading-relaxed mb-10 max-w-xl mx-auto">
          Clique e fale com a gente.
        </p>
        <a
          href={linkWhatsApp(mensagemConversar())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-14 px-10 bg-aco-dark text-white font-medium hover:bg-aco transition-colors rounded-sm text-base md:text-lg"
        >
          Conversar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
