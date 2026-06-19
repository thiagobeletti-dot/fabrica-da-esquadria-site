import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do site da Fábrica da Esquadria.',
};

export default function Termos() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-10">
        <p className="titulo-secao mb-4">Legal |</p>
        <h1 className="text-3xl md:text-4xl font-medium text-neutro-900 mb-10">
          Termos de Uso
        </h1>
        <div className="space-y-5 text-base text-neutro-900 leading-relaxed">
          <p>
            Bem-vindo ao site da <strong>Fábrica da Esquadria</strong>. Ao acessar
            este site, você concorda com os termos descritos a seguir.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Finalidade do site</h2>
          <p>
            Este site é institucional. O objetivo é apresentar nossos produtos
            (Vidro Jumbo, porta articulada e serralheria fina) e receber pedidos
            de orçamento via WhatsApp.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Orçamentos</h2>
          <p>
            Orçamentos enviados pelo site são uma <strong>solicitação inicial</strong>.
            O orçamento formal só é firmado após visita técnica e detalhamento
            do projeto. Valores divulgados em qualquer canal são referência, não
            compromisso.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Imagens e conteúdo</h2>
          <p>
            As fotos de obras pertencem à Fábrica da Esquadria. Logos de marcas
            parceiras (como BMW Jundiaí) são usados sob autorização do parceiro,
            apenas como referência de obra entregue.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Responsabilidade</h2>
          <p>
            A Fábrica da Esquadria não se responsabiliza por interpretações
            comerciais feitas a partir de conteúdo do site sem confirmação por
            WhatsApp ou visita técnica.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Foro</h2>
          <p>
            Eventuais conflitos serão resolvidos no foro da comarca de Jundiaí/SP.
          </p>
          <p className="text-sm text-neutro-500 mt-12">Última atualização: 25 de maio de 2026.</p>
        </div>
      </div>
    </section>
  );
}
