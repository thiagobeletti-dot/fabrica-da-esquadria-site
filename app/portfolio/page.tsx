import type { Metadata } from 'next';
import Galeria from '@/components/Galeria';
import { linkWhatsApp, mensagemSimples } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Portfólio de obras entregues',
  description:
    'Obras entregues pela Fábrica da Esquadria em Jundiaí e região. Vidro Jumbo, porta articulada e serralheria fina em projetos residenciais e comerciais.',
};

export default function Portfolio() {
  return (
    <>
      <section className="bg-neutro-900 py-24 md:py-32">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Portfólio |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Obras entregues pela Fábrica da Esquadria.
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Projetos em Jundiaí e cidades vizinhas. Cada um, sob medida.
          </p>
        </div>
      </section>

      <Galeria />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-8">Case BMW Jundiaí</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div
              className="lg:col-span-3 aspect-[16/10] bg-aco-gelo bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/portfolio/bmw-jundiai/bmw-aerea-crepusculo.jpg)' }}
              role="img"
              aria-label="Concessionária BMW Jundiaí — vista aérea ao crepúsculo"
            />
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 leading-tight mb-6">
                4 anos de parceria. Participação técnica desde o projeto.
              </h2>
              <p className="text-base text-neutro-500 leading-relaxed mb-4">
                Concessionária BMW em Jundiaí. Parceria de 4 anos, com participação
                técnica desde o projeto arquitetônico — não apenas execução, mas
                codesenho da solução.
              </p>
              <p className="text-base text-neutro-500 leading-relaxed">
                Esquadrias, fachada em Vidro Jumbo e detalhes de serralheria fina
                executados no padrão da marca alemã.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-aco-gelo">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl text-neutro-900 mb-6">
            Quer uma obra com esse padrão?
          </p>
          <a
            href={linkWhatsApp(mensagemSimples())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-12 px-8 bg-aco text-white font-medium hover:bg-aco-dark transition-colors rounded-sm"
          >
            Conversar agora
          </a>
        </div>
      </section>
    </>
  );
}
